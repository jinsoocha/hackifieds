import helpers from '../lib/helpers.js';
import { Col, Row, Button, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';

const Post = () => {
  let newListing = {};
  let imageUpload = [];

  const setListingField = (field, value) => {
    newListing[field] = value;
    console.log(newListing);
  };
  
  const setUploadImage = (images) => {
    imageUpload = images;
    console.dir(images);
  }

  const sendListing = (newListing, images) => {
    const formData = new FormData();
    _.each(images, (file) => formData.append('images', file));
    _.each(newListing, (value, key) => formData.append(key, value));
    helpers.postListing(formData, (data) => {
      console.log("postListing SUCCESS", data);
    });
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    sendListing(newListing, imageUpload);
  }
  
  return (
    <form>
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          name="title"
          placeholder="Enter the title of your listing here"
          onChange={ e => setListingField('title', e.target.value) }
          required="required" />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Location</ControlLabel>
        <FormControl
          type="text"
          name="location"
          placeholder="Enter your location"
          onChange={ e => setListingField('location', e.target.value) }
          required="required" />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Price</ControlLabel>
        <FormControl
          type="number"
          name="price"
          placeholder="Enter the price"
          onChange={ e => setListingField('price', e.target.value) }
          required="required" />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Room Type</ControlLabel>
          <Radio
            name="radio"
            onChange={ e => setListingField('roomtype', 'Private room') }>
            Private room</Radio>
          <Radio
            name="radio"
            onChange={ e => setListingField('roomtype', 'Shared room') }>
            Shared room</Radio>
          <Radio
            name="radio" 
            onChange={ e => setListingField('roomtype', 'Entire home/apt') }>
            Entire home/apt</Radio>
      </FormGroup>

      <FormGroup>
        <ControlLabel>Contact #</ControlLabel>
        <FormControl
          type="number"
          name="contactNum"
          placeholder="Enter your contact number"
          onChange={ e => setListingField('contactNum', e.target.value) }
          required="required" />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Email</ControlLabel>
        <FormControl
          type="email"
          name="email"
          placeholder="Enter your email address"
          onChange={ e => setListingField('email', e.target.value) }
          required="required" />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Start Date</ControlLabel>
        <FormControl
          type="date"
          name="startDate"
          onChange={ e => setListingField('startDate', e.target.value) }
          required="required" />
      </FormGroup>

      <FormGroup>
        <ControlLabel>End Date</ControlLabel>
        <FormControl
          type="date"
          name="endDate"
          onChange={ e => setListingField('endDate', e.target.value) }
          required="required" />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Description</ControlLabel>
        <FormControl
          type="textarea"
          name="description"
          placeholder="Enter the details of your listing"
          onChange={ e => setListingField('description', e.target.value) } />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Images</ControlLabel>
        <FormControl
          type="file"
          name="images"
          placeholder="Enter the details of your listing"
          onChange={ e => setUploadImage(e.target.files) } />
      </FormGroup>
      <Button type="submit" onClick={ submitHandler }>Submit</Button>
    </form>
  );
     
};

export default Post;