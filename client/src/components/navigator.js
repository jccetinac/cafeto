
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Navigation extends Component {

    componentDidMount() {
      console.log('navigation loaded');
    }
  
    render() {
      return (
        <nav className="container-fluid bg-dark mb-3">
            <div className="container">
                <div className="nav">
                <Link className='btn btn-dark text-white display-1 p-3' to='/' >
                <h1>Home
                <i className='fa fa-home m-2' ></i>
                </h1> 
                </Link>    
                </div>
            </div>
        </nav>
      )
    }
  }

  export default Navigation;




   