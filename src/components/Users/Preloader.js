import React from "react";
import s from './Users.module.css';
import userAvatar from '../../../src/images/userAvatar.png';
import preloader from '../../images/Hourglass.gif';



const Preloader = (props) => {
  
      return(
        props.isLoading ? 
         <img src={preloader} style={{ backgroundColor: "black" }} alt='preloader'/> : null
   )
  }  

export default Preloader;