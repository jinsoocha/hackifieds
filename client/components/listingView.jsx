import FilterView from './filterView.jsx';
import ListEntryView from './listEntryView.jsx';
import DirectionView from './directionView.jsx';
import helpers from '../lib/helpers.js';
import { Row, Col, Jumbotron, Panel, Button } from 'react-bootstrap';

class ListingView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 'rent',
      listings: [],
      locationForMap: '',
    };
  }
  
  componentWillMount() {
    console.log(this.props.location.query.type)
    let type;
    type = this.props.location.query.type || 'rent';
    this.setState({
      page: type,
      locationForMap: '',
    });
    helpers.getListings(type, data => this.setState({listings: data}) )
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.location.query)
    let type;
    type = nextProps.location.query.type || 'rent';
    this.setState({
      page: type,
      locationForMap: '',
    });
    helpers.getListings(type, data => this.setState({listings: data}) )
  }

  showDirection(location) {
    this.setState({
      locationForMap: location
    });
  }

  // ****** FILTERING ****** \\
  handleFilterItemClick(data) {
    helpers.getFilteredResults(data, filters => this.setState({listings: filters}));
  }

  render () {
    return (
      <Row>
        <Col md={3}>
          <FilterView page={this.state.page} handleClick={this.handleFilterItemClick.bind(this)} />
        </Col>
        <Col md={9}>
        <DirectionView location={this.state.locationForMap} />
        {this.state.listings.map((listing, i) =>
          <ListEntryView key={i} currentUser={this.props.user} show={this.showDirection.bind(this)} listing={listing} />
        )}
        </Col>
      </Row>
    );
  }
};

export default ListingView;
