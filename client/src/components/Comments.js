import React, { Component } from 'react';


class Comments extends Component {

  constructor() {
    super();
    this.state = {
      description: '',
      _id: '',
      comments: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.fetchComments = this.fetchComments.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addComment(e) {
    e.preventDefault();
    const IDMOVIE = this.props.idmovie;
    const EMAIL = this.props.useremail;
    console.log(EMAIL);
    console.log(this.props.idmovie);
    if(this.state._id) {
      fetch(`/api/comments/${this.state._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: this.state.title,
          description: this.state.description,
          idmovie: this.props.idmovie,
          email: EMAIL
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          this.setState({_id: '', title: '', description: ''});
          this.fetchComments();
        });
    } else {
      fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(
            {
              id:this.state._id,
              title:this.state.title,
              description:this.state.description,
              idmovie: IDMOVIE,
              email: EMAIL
            }    
          ),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({title: '', description: ''});
          this.fetchComments();
        })
        .catch(err => console.error(err));
    }

  }

  componentDidMount() {
    this.fetchComments();
    console.log(this.props.user);
  }

  fetchComments() {
    fetch('/api/comments')
      .then(res => res.json())
      .then(data => {
        this.setState({comments: data});
      });
  }
 

    render(){ 
      return (
           <div className='col-md-12'>
              <div className='card p-4'>
                      <h3 className='mb-3'><b>Add Comments</b></h3>
                        <form onSubmit={this.addComment}>
                          <textarea  className="form-control mb-2" name="description" onChange={this.handleChange} value={this.state.description} cols="30" rows="10" placeholder="write Comment"></textarea>
                          <button type="submit" className="btn btn-block btn-info">Send</button>
                        </form>
                        <div>
                        <h3 className='mt-4'><b>Others Comments</b></h3><hr/>
                        { 
                           
                           this.state.comments.map(comment => {
                              
                            return comment.idmovie===this.props.idmovie ? (
                                <span key={comment._id}>        
                                  <p>{comment.description}</p><br/><hr/><br/>
                                </span>
                              ) : null;

                            })
                        }
                        </div>
                </div>  
            </div> 
      
      ) 
     
    }
  }
  
  
  export default Comments;