import PostRent from './postRent.jsx';
import PostBuy from './postBuy.jsx';
import PostHack from './postHack.jsx';

const PostEntry = (props) => {
  const { formType, user } = props;
  if (formType === 'rent') {
    return ( <PostRent user={user} /> );
  } else if (formType === 'buy') {
    return ( <PostBuy user={user} /> );
  } else if (formType === 'hack') {
    return ( <PostHack user={user} /> );
  }  
};

export default PostEntry;