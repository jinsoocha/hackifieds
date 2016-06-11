import { Grid, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import PostEntry from './postEntry.jsx';

const Post = (props) => {
  const { formType, changeFilter, user } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    changeFilter(e.target.value);
  }  
  return (
    <Grid>
      <Row className="text-center">      
        <ButtonGroup>
          <Button onClick={handleSubmit} value="rent">Rent</Button>
          <Button onClick={handleSubmit} value="buy">Buy</Button>
          <Button onClick={handleSubmit} value="hack">Hack</Button>
        </ButtonGroup>
      </Row>
      <PostEntry user={user.userId} formType={formType} />
    </Grid>
  );
}

export default Post;
