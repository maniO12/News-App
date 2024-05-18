import React, { Component } from "react";
import NewsText from "./NewsText";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: "10",
  };

  static propTypes = {
    country: propTypes.string,
    category: propTypes.string,
    pageSize: propTypes.number,
  };

  articles = [
  ];
  constructor(props) {
    super(props);
    console.log("hello");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };

    document.title = `${this.props.category}-News India`;
  }
  
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a0ddd3a3e3e4c35853a0be55e1ea059&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false,
    });
  }

  /*handleNextClick = async () => {
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a0ddd3a3e3e4c35853a0be55e1ea059&page=1&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };*/

  /*handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a0ddd3a3e3e4c35853a0be55e1ea059&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };*/

fetchMoreData=async()=>{ 
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a0ddd3a3e3e4c35853a0be55e1ea059&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
    page:this.state.page + 1,
    articles:this.state.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults,
  });
}

  render() {
    return (
      <> <h1 className="top">
      {this.state.loading && <Spinner />} 
              <span className="color">Welcome</span> <span className="color1">to</span>
              <span className="color2">India News-BY MK</span>{" "}
            </h1>
    

        <InfiniteScroll
  dataLength={this.state.articles.length} 
  next={this.fetchMoreData}
  hasMore={this.state.articles.length !== this.state.totalResults}
  loader={<Spinner/>}
  >
        <div className="container">
          <div className="articles">
         
            {this.state.articles.map((element) => {
              return (
                <div classNameName="main" key={element.url}>
                  <NewsText title={element.title ? element.title : ""}  descripition={element.descripition ? element.description : ""}imageurl={element.urlToImage}
                    Url={element.url} author={element.author ? element.author : ""}
                    source={element.source ? element.source : ""} />
                </div>
              );
            })}
          </div>
          </div>
          </InfiniteScroll>
        </>
    )
  }
}
