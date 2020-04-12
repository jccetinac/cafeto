import React, { Component } from 'react';
import Header from '../components/Header';
import Usercomments from '../components/usercomments';
import Userdata from '../components/userdata';
import '../components/Main.css'
class Entry extends Component {

  constructor() {
    super();
    this.state = {
      movieEntry:{}
    };
  };

  

    componentDidMount() {
     const { match } = this.props;
      this.fetchMovie(match.params.id);   

    }
    
    fetchMovie(id){
      fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=2cb5c79afe31b71210e8c5a7e26a297e&language=en-US')
      .then(res => res.json())
      .then(movie => {   
          movie =  { 
            id: movie.id,
            picture: movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path: 'https://image.tmdb.org/t/p/w500/dhRIeHMjI8PwCcOW51bTCtQ78rZ.jpg',
            title: movie.title,
            description: movie.overview? movie.overview: 'is not available',
            release: movie.release_date,
          }
          this.setState({movieEntry: movie});
          console.log(this.state.movieEntry);
          });
    }
    
    render(){
      return (
        
        <main>
          <Header/>
          <div className='container'>
          <div className='row'>
            <Userdata
                key={this.state.movieEntry.id}
                id={this.state.movieEntry.id}
                title={this.state.movieEntry.title}
                picture = {this.state.movieEntry.picture}
                description= {this.state.movieEntry.description}  
                place = {'entry'}
            />
            <Usercomments  idmovie={this.state.movieEntry.id} />
            </div>
            </div>
        </main> 

      )     
    }

  }
  
  
  export default Entry;