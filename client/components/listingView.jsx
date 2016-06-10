import FilterView from './filterView.jsx';
import ListEntryView from './listEntryView.jsx';
import DirectionView from './directionView.jsx';

import helpers from '../lib/helpers.js';

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
    helpers.getListings(this.props.route.type, data => this.setState({listings: data}) )
  }

  componentWillReceiveProps(nextProps) {
    console.log('receiving props',nextProps.location.query.type);
    this.setState({
      page: nextProps.location.query.type
    });
    helpers.getListings(nextProps.location.query.type, data => this.setState({listings: data}) )
  }

  showDirection(location) {
    this.setState({
      locationForMap: location
    });
  }

  render () {
    return (
      <div>
        <FilterView page={this.state.page} />
        <DirectionView location={this.state.locationForMap} />
        {this.state.listings.map((listing, i) => 
          <ListEntryView key={i} show={this.showDirection.bind(this)} listing={listing} />
        )}
      </div>
    );
  }
};

export default ListingView;
