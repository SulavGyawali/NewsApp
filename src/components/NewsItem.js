import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      mode,
      publishedAt,
      author,
      source,
    } = this.props;
    let myStyle = {
      backgroundColor: mode === "light" ? "white" : "#0d6da9",
      color: mode === "light" ? "black" : "white",
    };
    return (
      <div className="my-3">
        <div className="card" style={myStyle}>
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{
              left: "90%",
              zIndex: "1",
            }}
          >
            {source}
          </span>

          <img
            src={
              imageUrl
                ? imageUrl
                : "https://www.reuters.com/resizer/8H-lNt_stE-Vy9Oi-czTH4O5zFA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LTIF6FILSJLUZORNIINUVZZ4CI.jpg"
            }
            className="card-img-top "
            alt="..."
          />
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <strong>Published At: </strong>
              {new Date(publishedAt).toGMTString()}
            </p>
            <p className="card-text">
              <strong>Author: </strong> {author ? author : "Unknown"}
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className={`btn btn-sm btn-outline-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
