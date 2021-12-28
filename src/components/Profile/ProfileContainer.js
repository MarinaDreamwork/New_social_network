import { setUserProfile } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import ProfileAPIComponent from './ProfileAPIComponent';


let mapStateToProps = (state) => {
    
    return {
        userProfile: state.profilePage.userProfile
    };   
};

const ProfileContainer = connect(mapStateToProps, {
    setUserProfile
}) (ProfileAPIComponent);

export default ProfileContainer;