import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';



class Movie extends Component {
  constructor() {
    super();
    this.fetchRating = this.fetchRating.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.addRatingMovie = this.addRatingMovie.bind(this);
    this.state = {
      _id: '', 
      rating: 1,
      idmovie: ''
    }
  };

  componentDidMount() {
    this.fetchRating();
  }

  fetchRating(){
    const IDMOVIE= this.props.id;
    const EMAIL= this.props.useremail;
    fetch('/api/movie/')
    .then(res => res.json())
    .then(data => {
      const myRate = data.filter(
        function (element) {
          return parseInt(element.idmovie, 10) === IDMOVIE && element.email === EMAIL; 
        }
      );       
      const newRate= myRate[0];
      console.log(myRate === undefined || myRate.length == 0); 
      if(!myRate === undefined || !myRate.length == 0){
        this.setState({
          _id: newRate._id ,
          rating: newRate.rating,
          idmovie: newRate.idmovie
        });
      }
      else{
        this.setState({
          _id: '' ,
          rating: 0,
          idmovie: this.props.idmovie
        });  
      }
      console.log(this.state._id);
    });

  }

  changeRating( newRating ) {
    console.log(newRating);
    this.setState({
      rating: newRating,
      idmovie: this.props.id
    });
    console.log(this.state._id);
    this.addRatingMovie(newRating);
  }

  addRatingMovie(rat) {
    console.log(rat);
    console.log(this.state._id);
    const IDMOVIE = this.props.id;
    const EMAIL = this.props.useremail;
    if(this.state._id === '' || this.state._id === undefined ){
      fetch('/api/movie', {
        method: 'POST',
        body: JSON.stringify({
          id: this.state._id,
          rating:rat,
          idmovie:IDMOVIE,
          email: EMAIL
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.fetchRating();
        });
    }
    
    else  {
      fetch(`/api/movie/${this.state._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: this.state._id,
          rating:rat,
          idmovie:this.state.idmovie,
          email: EMAIL
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.fetchRating();
        });
    }

  }


  

  render(){
      return(
          <div key={this.props.id}  className='col-md-12'>         
          <div className="card p-3">
              <div className="row">
                <div className="col-md-4">
                  <img className="card-img-top mb-2" src={this.props.picture}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>                            
                    <StarRatings 
                    rating={this.state.rating}
                    starRatedColor="gold"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                  />                      
                    <p className="card-text mt-3 text-justify">{this.props.description}</p>
                    {(this.props.place === 'home')? <Link className="btn btn-block btn-outline-info" to={`movie/${this.props.id}`} >ver más</Link>
                    :<br/>
                  }
                    </div>
                </div>
            </div>
          </div> 
        </div> 
      )
  }
}
export default Movie;





 