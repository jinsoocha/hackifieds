import ListingInfo from './listingInfo.jsx';
import { Grid, Row, Col } from 'react-bootstrap';
import helper from '../lib/helpers';

const ListingEntry = (props) => (
  <Row id={props.listing.listingId} onClick={props.handleListingEntryClick}>
    <Col xs={3} sm={3} md={3}>{helper.dateFormatter(props.listing.createdAt)}</Col>
    <Col xs={3} sm={3} md={3}>${props.listing.price}</Col>
    <Col xs={3} sm={3} md={3}>{props.listing.location}</Col>
    <Col xs={3} sm={3} md={3}>{props.listing.title}</Col>
  </Row>
);

export default ListingEntry;

