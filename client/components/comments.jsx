import { PageHeader, Grid, Row, Col, ButtonToolbar, ButtonGroup, Button, Jumbotron } from 'react-bootstrap';

let Comments = ({comments, commentId, id, addCommentHandler}) => {
  console.log('commentid', commentId);
  console.log('comments:', comments);

  let commentsToDisplay = []
    for (var i = 0; i < comments.length; i++) {
      var parentId = comments[i].parentId;
      if (parentId === null && commentId === 'top') {
        commentsToDisplay.push(comments[i]);
      } else if (parentId === commentId) {
        commentsToDisplay.push(comments[i]);
      } else {
        console.log('parentId:', parentId, ' !== ', commentId);
      }
    };
    console.log('tdisplay', commentsToDisplay);
  var itemClick = addCommentHandler.bind(this, { id:id, commentId: commentId });
  //Return the filter component
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <form name="addcomment" onSubmit={itemClick}>
            <input name="commentText" type ="text" /><button />
          </form>
        </Col>
      </Row>
        {commentsToDisplay.map(listing =>
  
          <Row className="show-grid">
            <Col xs={12} md={12}>
              {listing.text}
            </Col>
            <Row className="show-grid">
              <Col xs={12} md={8} xsOffset={1}>
                <Comments comments={comments} commentId={listing.commentId} id={id} addCommentHandler={addCommentHandler}/>
              </Col>
            </Row>
          </Row>
        )}
    </Grid>
  );
};

export default Comments;