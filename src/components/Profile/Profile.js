import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
  return (
        <div class={classes.coverHeader}>
            <div class={classes.container}>
                <div class={classes.coverAvatar}>
                    <img src="https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg?size=626&ext=jpg" alt="avatar" />
                </div>

                <div class={classes.coverUserName}>
                    <h2 class={classes.name}>Eileen K. Ruiz</h2>
                </div>

                <div class={classes.coverUserActivity}>
                    <p><i class="fas fa-clock"></i> Active 1 year 9 monts ago</p>
                </div>

                <div class={classes.coverUserDesc}> 
                    <p>Hello everyone ! There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                </div>
            </div>
             <MyPosts />
        </div>  
  )
}

export default Profile;