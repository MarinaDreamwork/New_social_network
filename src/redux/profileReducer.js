const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
      userProfile: null
    };

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case SET_USER_PROFILE:
        return {
          ...state,
          userProfile: action.userProfile
        };
    
    default:
      return state;
  }
};

export const setUserProfile = (userProfile) => {
  return {
    type: SET_USER_PROFILE, userProfile
  };  
};



export default profileReducer;