import {connect} from "react-redux";
import {addPostActionCreator} from "../../../../redux/reducer/profile";

// Components
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {dispatch(addPostActionCreator(newPostText))},
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
