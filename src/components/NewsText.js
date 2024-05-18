import React, { Component } from 'react'

export default class NewsText extends Component {
  render() {
    let {title,descripition,imageurl,Url,author} = this.props;
    return (
    
   <div>
    <div className="card" style={{width: "18rem",}}>
  <img src={imageurl}  className="card-img-top" alt=" Not found"></img>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{descripition}</p>
    <p className="card-text"><small className="txt">By {!author?"unknown":author}</small> </p>
    <a href={Url} className="btn btn-primary">More..</a>
  </div>

  
</div>
        
      </div>
    )
  }
}
