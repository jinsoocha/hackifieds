import { Row, Col, Jumbotron, Panel } from 'react-bootstrap';
import helper from '../lib/helpers';


const ListEntryView = (props) => {
  const { description, price, location, roomtype, distance, createdAt } = props.listing;
  const profileImg = <img src="../assets/tempProfile.png" alt="Profile Pic" width="80px"/>;
  const houseImg = <img src="../assets/tempHouse.png" alt="housePic" width="300px"/>;


  return (
    <div>
      <Jumbotron>
        <Panel>
          <Row>
            <Col md={2}>{helper.dateFormatter(createdAt)}</Col>
            <Col md={2}>${price}</Col>
            <Col md={2}>{distance} miles</Col>
            <Col md={2}>{location}</Col>
            <Col md={2}>{roomtype}</Col>
            <Col md={2}>{profileImg}</Col>
            <Col md={6}>{houseImg}</Col>
            <Col md={6} className="text-left">{description}</Col>
          </Row>
        </Panel>
    </Jumbotron>
    </div>
    
  );
};






export default ListEntryView;