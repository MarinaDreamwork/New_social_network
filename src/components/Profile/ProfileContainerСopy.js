import axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios
        .get(`https://jsonplaceholder.typicode.com/users/` + userId)
        .get(`https://jsonplaceholder.typicode.com/users/` + userId)
        .then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile
    };   
};

let WithRouterComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile
}) (WithRouterComponent);