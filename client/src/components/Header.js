import React from 'react';
import { useAuth0 } from '../contexts/auth0-context';
import {Link} from 'react-router-dom';

export default function Header() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <header>
      <nav className="bg-dark">
        <div className="container">
              <Link to='/' className='btn text-white m-3' ><i className='fa fa-home' ></i> MovieApp Test</Link>

              {!isLoading && !user && (
                <button onClick={loginWithRedirect} className="navbar-item">
                  Login
                </button>
              )}

              {!isLoading && user && (
                <>
                  
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="btn btn-outline-light m-3 text-white"
                  >
                  <i className="fa fa-power-off" ></i>
                  </button>
                  <p className="text-white m-4" >Hola, {user.name}</p>
                </>
              )}
        </div>
      </nav>
    </header>
  );
}