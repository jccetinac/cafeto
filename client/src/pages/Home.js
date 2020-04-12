import React, { Component } from 'react';
import Userdata from '../components/userdata';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      movies:[]
    };
  };

    componentDidMount() {
      this.fetchMovies(); 
    }
  
    fetchMovies() {
      fetch('https://api.themoviedb.org/3/discover/movie?api_key=2cb5c79afe31b71210e8c5a7e26a297e&language=en-US&sort_by=release_date.desc&include_adult=false&page=1&primary_release_date.gte=2010')
        .then(res => res.json())
        .then(data => {   
          const newMovies = data.results
            .map(function(movie) {
              movie =  { 
                id: movie.id,
                picture: movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path: 'https://image.tmdb.org/t/p/w500/dhRIeHMjI8PwCcOW51bTCtQ78rZ.jpg',
                title: movie.title,
                description: movie.overview? movie.overview: 'is not available',
                release: movie.release_date,
              }
              return movie;
            });
  
          this.setState({movies: newMovies});
          console.log(this.state.movies);
      });
    }
  
    render() {
      return (
        <div>
          <div className='container-fluid'>
              <div className="row" >
                  { this.state.movies.map(movie => {
                      return (    
                        <Userdata
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        picture = {movie.picture}
                        description= {movie.description.leght< 200 ?movie.description: movie.description.substr(0, 200)} 
                        place = {'home'}  
                       />
                      )
                    })
                  }
              </div>
          </div>  
        </div>
      )
    }
  }

  export default Home;