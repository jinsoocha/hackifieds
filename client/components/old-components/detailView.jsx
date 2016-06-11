import helpers from '../lib/helpers.js';
import { Modal, Button } from 'react-bootstrap';
import Comments from './comments.jsx';


class ShowListing extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      listingId: props.location.query.listId,
      listing:{}
    };
  }
  componentWillMount () {
    console.log('mounting');
    //console.log('loading data', listing);
    helpers.getDetailedListing(this.state.listingId, (listing) => this.setState({listing: listing}));
  }
  addComment(commentInfo, event) {
    event.preventDefault();

    console.log('commentInfo', commentInfo);
    console.log('Event', event.target.commentText.value);
    commentInfo.text = event.target.commentText.value
    
    helpers.postComment(commentInfo, function() {
      // reload?
    });
  }
  render() {
    if (Object.keys(this.state.listing).length === 0) {
      return (<div>no such entry</div>);
    } else { 

    return (
      <div className="">
        <h1>{this.state.listing.title}</h1>
          <div>
            <span className="listing-info-date"> List Date: </span>
            <span> {helpers.dateFormatter(this.state.listing.createdAt)} </span>
          </div>
          <div>
            <span className="listing-info-location"> Location: </span>
            <span> {this.state.listing.location} </span>
          </div>
          <div>
            <span className="listing-info-price"> Price: </span>
            <span> ${this.state.listing.price} </span>
          </div>
          <div>
            <span className="listing-info-start-date"> Start Date: </span>
            <span> {helpers.dateFormatter(this.state.listing.startDate)} </span>
          </div>
          <div>
            <span className="listing-info-end-date"> End Date: </span>
            <span> {helpers.dateFormatter(this.state.listing.endDate)} </span>
          </div>
          <div>
            <span className="listing-info-description"> Description: </span>
            <span> {this.state.listing.description} </span>
          </div>
          <div>{this.state.listing.Images.map(image =>
            <div className="listing-image">
              <img src={image.path}/>
            </div>)}
          </div>
          <div>
          <Comments comments={this.state.listing.Comments} commentId='top' id={this.state.listing.listingId} addCommentHandler={this.addComment}/>
          </div>

      </div>
    );
    }
  }
};


export default ShowListing;