import helpers from '../lib/helpers.js';
import { PageHeader, Grid, Row, Col, ButtonToolbar, ButtonGroup, Button, Jumbotron } from 'react-bootstrap';
import Post from './post.jsx';

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
    let loginButton;
    let welcomeMsg;
    if(Object.keys(this.state.currentUser).length === 0) {
      loginButton = <Button href="/auth/github">Login with GitHub</Button>;
    } else {
      loginButton = <Button href="/api/logout">Logout</Button>;
      welcomeMsg = <span>Welcome {this.state.currentUser.firstName}!</span>;
    }

    return (
      <Grid>
        <PageHeader>
          <span>Hackifieds </span>
          <small>{welcomeMsg}</small>
          <ButtonGroup className="pull-right">
            {loginButton}
            <Button><Link to={{ pathname: '/', query: { type: 'rent' } }}>Rent</Link></Button>
            <Button><Link to={{ pathname: '/', query: { type: 'buy' } }}>Buy</Link></Button>
            <Button><Link to={{ pathname: '/', query: { type: 'hack' } }}>Hack</Link></Button>
            <Button><Link to="post">Post</Link></Button>
          </ButtonGroup>
        </PageHeader>
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
