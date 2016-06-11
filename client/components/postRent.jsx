import helpers from '../lib/helpers.js';
import { Grid, Col, Row, Button, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';

const PostRent = (props) => {
  const { user } = props;
  let imageUpload = [];
  let newListing = { 
    categoryId: 1, 
    userId: user 
  };

  const setListingField = (field, value) => {
    newListing[field] = value;
  };
  
  const setUploadImage = (images) => {
    imageUpload = images;
  };

  const sendListing = (newListing, images) => {
    const formData = new FormData();
    _.each(images, (file) => formData.append('images', file));
    _.each(newListing, (value, key) => formData.append(key, value));
    helpers.postListing(formData, (data) => {
      console.log("postListing SUCCESS", data);
      window.location = '/';
    });
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    sendListing(newListing, imageUpload);
  };

  return (
    <Grid>
      <form>
        <h1 className="text-center">Rent</h1>
        <FormGroup>
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            name="title"
            placeholder="The title of your listing"
            onChange={ e => setListingField('title', e.target.value) }
            required="required" />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Location</ControlLabel>
          <FormControl
            type="text"
            name="location"
            placeholder="Your location"
            onChange={ e => setListingField('location', e.target.value) }
            required="required" />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Price</ControlLabel>
          <FormControl
            type="number"
            name="price"
            placeholder="Your price"
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
          <ControlLabel>Phone Number</ControlLabel>
          <FormControl
            type="number"
            name="contactNum"
            placeholder="Your phone number"
            onChange={ e => setListingField('contactNum', e.target.value) }
            required="required" />
        </FormGroup>

        {/*<FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="email"
            name="email"
            placeholder="Your email address"
            onChange={ e => setListingField('email', e.target.value) }
            required="required" />
        </FormGroup>*/}

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
            placeholder="The details of your listing"
            onChange={ e => setListingField('description', e.target.value) } />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Upload Image</ControlLabel>
          <FormControl
            type="file"
            name="images"
            onChange={ e => setUploadImage(e.target.files) } />
        </FormGroup>
        <Button type="submit" onClick={ submitHandler }>Submit</Button>
        <br />
      </form>
    </Grid>
  );
};

export default PostRent;