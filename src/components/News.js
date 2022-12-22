import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 18,
    category: 'general'
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    await this.loadPage();
  }

  loadPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a26096cd635a4567b3194c835d33e4d1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    await this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  handleNext = async () => {
    await this.setState({ page: this.state.page + 1 });
    await this.loadPage();
  };
  handlePrev = async () => {
    await this.setState({ page: this.state.page - 1 });
    await this.loadPage();
  };

  render() {
    let { mode } = this.props;

    return (
      <div className="container my-3 ">
        <h1
          style={{
            color: mode === "light" ? "black" : "white",
          }}
          className="text-center mb-3"
        >
          Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={
                      element.title ? element.title.slice(0, 45) + "..." : " "
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 88) + "..."
                        : " "
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    mode={mode}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            className={`btn btn-outline-${mode === "light" ? "dark" : "light"}`}
            type="button"
            onClick={this.handlePrev}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            className={`btn btn-outline-${mode === "light" ? "dark" : "light"}`}
            type="button"
            onClick={this.handleNext}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
