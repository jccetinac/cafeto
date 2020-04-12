import React from 'react';
import 'bulma/css/bulma.css';
import { useAuth0 } from '../contexts/auth0-context';
import Header from '../components/Header';
import Home from '../pages/Home';
import '../components/Main.css'

function Login() {
  const { isLoading, user, loginWithRedirect } = useAuth0();

  return (
    <>
      
      
          
            {!isLoading && !user && (
              <div className="login">
                <h1 className='display-1 text-dark text-center m-4' >
                  <span>Movie</span>
                  <span>App</span>
                  <span>Test</span>
                </h1>
                <button onClick={loginWithRedirect} className="btn btn-outline-dark btn-block">
                  Login
                </button>
              </div>       
            )}
           
       <main>     
         {!isLoading && user && (<><Header /><Home/></>)}
      </main>
    </>
  );
}

export default Login;