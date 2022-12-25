import React from "react";

const NewsItem = (props) => {
  let myStyle = {
    backgroundColor: props.mode === "light" ? "white" : "#0d6da9",
    color: props.mode === "light" ? "black" : "white",
  };
  return (
    <div className="my-3">
      <div className="card" style={myStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{props.source}</span>
        </div>

        <img
          src={
            props.imageUrl
              ? props.imageUrl
              : "https://www.reuters.com/resizer/8H-lNt_stE-Vy9Oi-czTH4O5zFA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LTIF6FILSJLUZORNIINUVZZ4CI.jpg"
          }
          className="card-img-top "
          alt="..."
        />
        <div className="card-body ">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <strong>Published At: </strong>
            {new Date(props.publishedAt).toGMTString()}
          </p>
          <p className="card-text">
            <strong>Author: </strong> {props.author ? props.author : "Unknown"}
          </p>
          <a
            href={props.newsUrl}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-sm btn-outline-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
