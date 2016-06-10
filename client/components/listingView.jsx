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
    helpers.getFilteredResults(data, filters => this.setState({listings: filters}));
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
