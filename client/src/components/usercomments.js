import React from 'react';
import { useAuth0 } from '../contexts/auth0-context';
import Comments from './Comments'

export default function Usercomments(props)  {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();


  return (       
    <div className='col-md-6' >
      <Comments user={user} useremail={user.email} idmovie={props.idmovie} />
    </div>
  );
}