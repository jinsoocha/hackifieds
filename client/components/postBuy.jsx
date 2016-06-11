import helpers from '../lib/helpers.js';
import { Grid, Col, Row, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const PostBuy = (props) => {
  const { user } = props;
  let imageUpload = [];
  let newListing = { 
    categoryId: 2, 
    userId: user, 
    location: 'San Francisco', 
    roomtype: '', 
    startDate: '2000/01/01', 
    endDate: '2000/01/01' 
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
        <h1 className="text-center">Sell</h1>
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
          <ControlLabel>Price</ControlLabel>
          <FormControl
            type="number"
            name="price"
            placeholder="Your price"
            onChange={ e => setListingField('price', e.target.value) }
            required="required" />
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
      </form>
    </Grid>
  );
};

export default PostBuy;