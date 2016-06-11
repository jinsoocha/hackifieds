import { Row, Col, Jumbotron, Panel, Button } from 'react-bootstrap';
import helper from '../lib/helpers';

const ListEntryView = (props) => {
  const { Images, description, price, location, roomtype, distance, createdAt } = props.listing;
  const profileImg = <img src="../assets/tempProfile.png" alt="Profile Pic" width="80px"/>;
  const houseImg = <img src="../assets/tempHouse.png" alt="housePic" width="300px"/>;

  const handleClick = (e) => {
    e.preventDefault();
    props.show(location);
  }

  return (
    <div>
      <Panel>
        <Row>
          <Col md={4}>
          {Images.map(image =>
            <div>
              <img src={image.path}/>
            </div>)}
          </Col>
          <Col md={6}>
          {location}
          <br/>
          ${price}
          <br/>
          {distance}
          <br/>
          {roomtype}
          <br/>
          {description}
          </Col>
          <Col md={2}>{profileImg}</Col>
        </Row>
        <Row>
          <Col md={1}>{helper.dateFormatter(createdAt)}</Col>
          <Button bsSize="small" onClick={handleClick}>Show direction to Hack Reactor</Button>
        </Row>
      </Panel>
    </div>
  );
};

export default ListEntryView;