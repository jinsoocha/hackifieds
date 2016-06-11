import { Row, Col, Jumbotron, Panel } from 'react-bootstrap';
import helper from '../lib/helpers';

const ListEntryView = (props) => {
  const { Images, description, price, location, roomtype, distance, createdAt } = props.listing;
  const dollarPrice = price ? '$' + price : '';
  console.log(Images)

  const handleClick = (e) => {
    e.preventDefault();
    props.show(location);
  }
  return (
    <div>
      <Jumbotron>
        <Panel>          
          <Row>
            <Col md={6}>
              {Images.map((image, i) =>
                <div key={i}>
                  <img src={image.path} width="300px"/>
                </div>)} 
            </Col>
            <Col md={2}>{helper.dateFormatter(createdAt)}</Col>
            <Col md={2}>{dollarPrice}</Col>
            <Col md={2}>{distance}</Col>
            <Col md={2}>{location}</Col>
            <Col md={2}>{roomtype}</Col>
            <Col md={6}>{description}</Col>
          </Row>
        </Panel>
      </Jumbotron>
      <button onClick={handleClick}>Show direction</button>
    </div>

  );
};

export default ListEntryView;