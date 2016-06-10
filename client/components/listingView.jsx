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
      data: {},
    };
  }

  componentWillReceiveProps(nextProps) {
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
    this.state.data[data[0]] = data[1];
    console.log('statedata', this.state.data);
    helpers.getFilteredResults(this.state.data, filters => this.setState({listings: filters}));
  }

  render () {
    return (
      <div>
        <FilterView page={this.state.page} handleClick={this.handleFilterItemClick.bind(this)} />
        <DirectionView location={this.state.locationForMap} />
        {this.state.listings.map((listing, i) =>
          <ListEntryView key={i} show={this.showDirection.bind(this)} listing={listing} />
        )}
      </div>
    );
  }
};

export default ListingView;
