import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_deatil";

const API_KEY = "AIzaSyAfQDJNUn4n3KCzG9efyWQifyxgDo_URso";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
         videos: [],
         selectedVideo: null
        };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({ 
          videos:videos,
          selectedVideo:videos[0] });
    });
  }

  render() {
    const {selectedVideo,videos} = this.state;
    return (
      <div>
        <SearchBar />
        <VideoDetail video={selectedVideo}/>
        <VideoList
         onVideoSelect = { selectedVideo => this.setState({selectedVideo})}
         videos={videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
