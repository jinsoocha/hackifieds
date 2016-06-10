import helpers from '../lib/helpers.js';
import { Col, Row, Button, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';

const Post = () => {
  let newListing = {};
  let images = [];

  const setListingField = (field, value) => {
    newListing[field] = value;
  };

  const sendListing = (newListing, images) => {
    const formData = new FormData();
    _.each(newListing, (value, key) => formData.append(key, value) );
    helpers.postListing(formData, (data) => console.log("postListing SUCCESS", data) );
  }
  
  const submitHandler = () => {
    sendListing(newListing, images);
  }
  
  return (
    <FormGroup>
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          name="title"
          placeholder="Enter the title of your listing here"
          onChange={ e => setListingField('title', e.target.value) }
          required />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Location</ControlLabel>
        <FormControl
          type="text"
          name="location"
          placeholder="Enter your location"
          onChange={ e => setListingField('location', e.target.value) }
          required />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Price</ControlLabel>
        <FormControl
          type="number"
          name="price"
          placeholder="Enter the price"
          onChange={ e => setListingField('price', e.target.value) }
          required />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Room Type</ControlLabel>
          <Radio
            name="radio"
            onChange={ e => setListingField('privateRoom', e.target.value) }>
            Private room</Radio>
          <Radio
            name="radio"
            onChange={ e => setListingField('sharedRoom', e.target.value) }>
            Shared room</Radio>
          <Radio
            name="radio" 
            onChange={ e => setListingField('entirePlace', e.target.value) }>
            Entire home/apt</Radio>
      </FormGroup>

      <FormGroup>
        <ControlLabel>Contact #</ControlLabel>
        <FormControl
          type="number"
          name="contactNum"
          placeholder="Enter your contact number"
          onChange={ e => setListingField('contactNum', e.target.value) }
          required />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Email</ControlLabel>
        <FormControl
          type="email"
          name="email"
          placeholder="Enter your email address"
          onChange={ e => setListingField('email', e.target.value) }
          required />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Start Date</ControlLabel>
        <FormControl
          type="date"
          name="startDate"
          onChange={ e => setListingField('startDate', e.target.value) }
          required />
      </FormGroup>

      <FormGroup>
        <ControlLabel>End Date</ControlLabel>
        <FormControl
          type="date"
          name="endDate"
          onChange={ e => setListingField('endDate', e.target.value) }
          required />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Description</ControlLabel>
        <FormControl
          type="textarea"
          name="description"
          placeholder="Enter the details of your listing"
          onChange={ e => setListingField('description', e.target.value) }
          required />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Images</ControlLabel>
        <FormControl
          type="file"
          name="images"
          placeholder="Enter the details of your listing"
          onChange={ e => setUploadImage(e.target.files) }
          multiple />
      </FormGroup>
      <Button type="submit" onClick={ () => submitHandler() }>Submit</Button>
    </FormGroup>
  );
     
};

// 1. Date, 
// 2. House picture,
// 4. Price,
// 5. Location, 
// 7. Description, 
// 8. Room type (Private room or Shared or Entire home/apt)

export default Post;
