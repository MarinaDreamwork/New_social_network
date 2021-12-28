import axios from 'axios';
import React, { useEffect } from 'react';
import Profile from './Profile';
import { useParams} from 'react-router-dom';


const ProfileAPIComponent = (props) => {
        let params = useParams().userId;

        useEffect(() => {
            
            axios
            .get(`https://jsonplaceholder.typicode.com/users/${params}`)
            .then(response => {
                props.setUserProfile(response.data);
            });
        });

        return (
            <Profile {...props}/>
        )
    }

    export default ProfileAPIComponent;