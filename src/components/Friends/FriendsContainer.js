import { connect } from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state) => {
  return {
    store: state.friendsPage
  };
};
const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;