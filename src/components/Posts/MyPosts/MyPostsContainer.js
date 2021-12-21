import { connect } from 'react-redux';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    postsData: state.postsPage.postsData
  };
};

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;