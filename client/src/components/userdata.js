import React from 'react';
import { useAuth0 } from '../contexts/auth0-context';
import Movie from './movie'

export default function Userdata(props)  {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();


  return (       
    <div className='col-md-6' >
    <Movie  
    id={props.id}
    title={props.title}
    picture = {props.picture}
    description= {props.description}  
    place = {props.place}
    useremail= {user.email}
    />
    </div>
  );
}