import helpers from '../lib/helpers.js';

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
    if(Object.keys(this.state.currentUser).length === 0) {
      loginButton = <a className="btn top-btn" href="/auth/github">Login with GitHub</a>;
    } else {
      loginButton = <a className="btn top-btn" href="/api/logout">Logout</a>;
    }

    return (
      <div>
        {loginButton}
        <div>
          <div><Link to={{ pathname: '/', query: { type: 'rent' } }}>Rent</Link></div>
          <div><Link to={{ pathname: '/', query: { type: 'buy' } }}>Buy</Link></div>
          <div><Link to={{ pathname: '/', query: { type: 'hack' } }}>Hack</Link></div>
          <div><Link to="post">Post</Link></div>
        </div>
        {React.cloneElement(this.props.children, { user: this.state.currentUser })}
      </div>
    );
  }
};
  

export default Parent;
