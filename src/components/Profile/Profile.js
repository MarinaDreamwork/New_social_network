import React from 'react';
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
        <div className={classes.profile}>
            <div className={classes.chapter}>
                <div className={classes.heading}>
                About Me <i class="fas fa-chevron-right"></i>
                </div>
                <div className={classes.subheading}>
                    Full Name : 
                </div>
                <div className={classes.subheading}>
                    Skill :
                </div>
                <div className={classes.subheading}>
                    Date of Birth :
                </div>
             </div>
            <div className={classes.chapter}>
                <div className={classes.heading}>
                Biography <i class="fas fa-chevron-right"></i>
                </div>
                <div className={classes.text}>
                    <p>Hello ! I’m Eileen K. Ruiz. Senior web developer of themelooks.com from last 5 years many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing</p> 
                </div>
             </div>
            <div className={classes.chapter}>
                <div className={classes.heading}>
                Work Experience <i class="fas fa-chevron-right"></i>
                </div>
                <div className={classes.subheading}>
                    Job Title 1 
                    <p className={classes.text}>
                         Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                </div>
                <div className={classes.subheading}>
                    Job Title 2
                    <p className={classes.text}>
                        Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                </div>
                <div className={classes.subheading}>
                    Job Title 3
                    <p className={classes.text}>
                        Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                </div>
             </div>
            <div className={classes.chapter}>
                <div className={classes.heading}>
                Contact <i class="fas fa-chevron-right"></i>
                </div>
                <div className={classes.subheading}>
                    <p>Phone: <span>+1610-559-8246</span></p> 
                </div>
                <div className={classes.subheading}>
                    <p>E-mail: <span>demo@example.com</span></p> 
                </div>
                <div className={classes.subheading}>
                    <p>Address: <span>123 Lorem St., California, United States</span></p> 
                </div>
             </div>
        </div>  
  )
}

export default Profile;