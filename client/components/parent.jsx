import helpers from '../lib/helpers.js';
import { PageHeader, Grid, Row, Col, ButtonToolbar, ButtonGroup, Button, Jumbotron } from 'react-bootstrap';


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
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
  render() {
    let loginButton;
    let welcomeMsg;
    if(Object.keys(this.state.currentUser).length === 0) {
      loginButton = <Button bsSize="xsmall" href="/auth/github">Login with GitHub</Button>;
    } else {
      loginButton = <Button bsSize="xsmall" href="/api/logout">Logout</Button>;
      welcomeMsg = <span>Welcome {this.state.currentUser.firstName}!</span>;
    }

    return (
      <Grid>
        <PageHeader>
          <span>Hackifieds </span>
          <small>{welcomeMsg}</small>
          <ButtonToolbar className="pull-right">
            {loginButton}
            <Button bsSize="xsmall"><Link to={{ pathname: '/', query: { type: 'rent' } }}>Rent</Link></Button>
            <Button bsSize="xsmall"><Link to={{ pathname: '/', query: { type: 'buy' } }}>Buy</Link></Button>
            <Button bsSize="xsmall"><Link to={{ pathname: '/', query: { type: 'hack' } }}>Hack</Link></Button>
            <Button bsSize="xsmall"><Link to="post">Post</Link></Button>
          </ButtonToolbar>
        </PageHeader>
        <Grid>
        {React.cloneElement(this.props.children, { user: this.state.currentUser })}
        </Grid>
      </Grid>
    );
  }
};


export default Parent;
