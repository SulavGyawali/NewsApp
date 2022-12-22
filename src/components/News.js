import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "news24",
        name: "News24",
      },
      author: "Lynn Butler",
      title:
        "Zondo advocates for strong Proteas defences, application for 2nd Test: 'We've got to find a way'",
      description:
        "Proteas batter Khaya Zondo says that the batters will be looking to keep their defences up ahead of the second Test against Australia at the Melbourne Cricket Ground.",
      url: "https://www.news24.com/sport/cricket/proteas/zondo-advocates-for-strong-defences-application-for-2nd-test-weve-got-to-find-a-way-20221222",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/7982/c62a73b52b6c4a8c91d8e4d8fe6bb93a.jpg",
      publishedAt: "2022-12-22T07:04:54+00:00",
      content:
        "<ul><li>Proteas batter Khaya Zondo says that the batters will be looking to keep their defences up ahead of the second Test against Australia at the Melbourne Cricket Ground.</li><li>South Africa was… [+3301 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
    async componentDidMount() {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a26096cd635a4567b3194c835d33e4d1&page=${this.state.page}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles });
    }
  render() {
    let { mode } = this.props;

    return (
      <div className="container my-3 ">
        <h2 style={{
            color: (mode === 'light'? 'black': 'white')
        }}>Top Headlines</h2>
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
          <button className={`btn btn-outline-${mode === 'light'?'dark':'light'}`} type="button">
            Previous
          </button>
          <button className={`btn btn-outline-${mode === 'light'?'dark':'light'}`}  type="button">
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
