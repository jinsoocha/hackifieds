import helpers from '../lib/helpers.js';
import Post from './post.jsx';
import { Grid, Row, Col, Nav, ButtonGroup, Button } from 'react-bootstrap';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      filterType: 'rent'
    };

  }
  componentWillMount () {
    helpers.userAuth((user) => {
      user = user || {};
      this.setState({
        currentUser: user,
      });
    });
  }
  
  changeFilterType(filterType) {
    this.setState({ filterType });
  }

  render() {
    const loginButton = (Object.keys(this.state.currentUser).length === 0) ? 
      <Button href="/auth/github">Login with GitHub</Button> : 
      <Button href="/api/logout">Logout</Button>;

    return (
      <Grid>           
        {loginButton}
        <ButtonGroup>
          <Button>
            <Link to={{ 
              pathname: '/', 
              query: { 
                type: 'rent' 
              } }}>Rent</Link>
          </Button>

          <Button>
            <Link to={{ 
              pathname: '/', 
              query: { 
                type: 'buy' 
              } }}>Buy</Link>
          </Button>

          <Button>
            <Link to={{ 
              pathname: '/', 
              query: { 
                type: 'hack' 
              } 
            }}>Hack</Link>
          </Button>

          <Button>
            <Link to={{ 
              pathname: '/post',
            }}>Post</Link>
          </Button>
        </ButtonGroup>
      
        <Grid>
          {React.cloneElement(this.props.children, { 
            user: this.state.currentUser, 
            formType: this.state.filterType, 
            changeFilter: this.changeFilterType.bind(this)
          })}
        </Grid>
      </Grid>
    );
  }
};
  

export default Parent;
