import { PageHeader, Grid, Row, Col, ButtonToolbar, ButtonGroup, Button, Jumbotron } from 'react-bootstrap';


class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    };
  }
  showForm() {
    this.setState({showForm: !this.state.showForm});
  }
  // console.log('commentid', commentId);
  // console.log('comments:', comments);
  render () {
    let commentsToDisplay = []
      for (var i = 0; i < this.props.comments.length; i++) {
        var parentId = this.props.comments[i].parentId;
        if (parentId === null && this.props.commentId === 'top') {
          commentsToDisplay.push(this.props.comments[i]);
        } else if (parentId === this.props.commentId) {
          commentsToDisplay.push(this.props.comments[i]);
        } else {
          //console.log('parentId:', parentId, ' !== ', commentId);
        }
      };
      //console.log('tdisplay', commentsToDisplay);
    var itemClick = this.props.addCommentHandler.bind(this, { id:this.props.id, commentId: this.props.commentId });
    let form;

    if (this.state.showForm) {
      form = (
        <Row className="show-grid">
          <Col xs={12} md={12}>

            <form name="addcomment" onSubmit={itemClick}>
              <input name="commentText" type ="text" /><Button bsSize="xsmall" type="submit">Comment</Button>
            </form>
          </Col>
        </Row>
        );
    } else {
      form = (<div></div>);
    }

    //Return the filter component
    return (
      <Grid>
          <div onClick={this.showForm.bind(this)}>(reply)</div>
          {form}
          {commentsToDisplay.map(listing =>
    
            <Row className="show-grid">
              <Col xs={8}>
                {listing.text} 
              </Col>
              <Row className="show-grid indent">
                <Col xs={8}>
                  <Comments comments={this.props.comments} commentId={listing.commentId} id={this.props.id} addCommentHandler={this.props.addCommentHandler}/>
                </Col>
              </Row>
            </Row>
          )}
      </Grid>
    );
  }
};

export default Comments;