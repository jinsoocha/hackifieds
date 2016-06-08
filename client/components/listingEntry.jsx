import ListingInfo from './listingInfo.jsx';
import { Grid, Row, Col } from 'react-bootstrap';
import helper from '../lib/helpers';

const ListingEntry = props => (
  <div>
    <Grid>
      <Row id={props.listing.listingId} onClick={props.handleListingEntryClick}>
        <Col md={3}>{helper.dateFormatter(props.listing.createdAt)}</Col>
        <Col md={3}>${props.listing.price}</Col>
        <Col md={3}>{props.listing.location}</Col>
        <Col md={3}>{props.listing.title}</Col>
      </Row>
    </Grid>
  </div>
);

export default ListingEntry;

