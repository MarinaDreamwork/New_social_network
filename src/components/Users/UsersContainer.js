import { connect } from "react-redux";
import { followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, toggleIsLoadingActionCreator, unfollowActionCreator } from "../../redux/usersReducer";
import UsersAPIComponent from "./UsersAPIComponent";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {dispatch(followActionCreator(userId))},
    unfollow: (userId) => {dispatch(unfollowActionCreator(userId))},
    setUsers: (users) => {dispatch(setUsersActionCreator(users))},
    setCurrentPage: (pageNumber) => {dispatch(setCurrentPageActionCreator(pageNumber))},
    toggleIsLoading: (isLoading) => {dispatch(toggleIsLoadingActionCreator(isLoading))}
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;