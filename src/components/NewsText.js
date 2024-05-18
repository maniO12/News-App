import React, { Component } from 'react'

export default class NewsText extends Component {
  render() {
    let {title,descripition,imageurl,Url,author} = this.props;
    return (
    
   <div>
    <div class="card" style={{width: "18rem",}}>
  <img src={imageurl}  class="card-img-top" alt=" Not found"></img>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{descripition}</p>
    <p class="card-text"><small class="txt">By {!author?"unknown":author}</small> </p>
    <a href={Url} class="btn btn-primary">More..</a>
  </div>

  
</div>
        
      </div>
    )
  }
}
