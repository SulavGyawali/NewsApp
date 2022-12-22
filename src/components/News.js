import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      pageSize: 18
    };
  }
  async componentDidMount() {
    await this.loadPage();
  }

  loadPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a26096cd635a4567b3194c835d33e4d1&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  };

  handleNext = async () => {
    if ((this.state.page + 1 )> (Math.ceil(this.state.totalResults / this.state.pageSize))) {
    } else {
      await this.setState({ page: this.state.page + 1 });
      await this.loadPage();
    }
  };
  handlePrev = async () => {
    await this.setState({ page: this.state.page - 1 });
    await this.loadPage();
  };

  render() {
    let { mode } = this.props;

    return (
      <div className="container my-3 ">
        <h2
          style={{
            color: mode === "light" ? "black" : "white",
          }}
        >
          Top Headlines
        </h2>
        <div className="row">
          {this.state.articles.map((element) => {
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
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
