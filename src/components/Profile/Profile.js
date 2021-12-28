import React from 'react';
import Preloader from '../Users/Preloader';
import classes from './Profile.module.css';


const Profile = (props) => {
  if(!props.userProfile) {
      return <Preloader />
  }

  return (
    <div className={classes.profile}>
            <div className={classes.chapter}>
                <div className={classes.heading}>
                About Me <i class="fas fa-chevron-right"></i>
                </div>
                <div className={classes.subheading}>
                    Full Name : {props.userProfile.name}
                </div>
                <div className={classes.subheading}>
                    Company name : {props.userProfile.company.name}
                </div>
                <div className={classes.subheading}>
                    Date of Birth : 2000/03/21
                </div>
             </div>
            <div className={classes.chapter}>
                <div className={classes.heading}>
                Contact <i class="fas fa-chevron-right"></i>
                </div>
                <div className={classes.subheading}>
                    <p>Phone: <span>{props.userProfile.phone }</span></p> 
                </div>
                <div className={classes.subheading}>
                    <p>E-mail: <span>{props.userProfile.email}</span></p> 
                </div>
                <div className={classes.subheading}>
                    <p>Address: <span>{props.userProfile.address.city}, {props.userProfile.address.street}, {props.userProfile.address.suite}</span></p> 
                </div>
             </div>
        </div>
  )
  
      
}

export default Profile;