import _ from 'lodash';
import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

//API key for the YouTube Data API v3  from google
const API_KEY = 'AIzaSyB05ZWexxGhijQF2N2T1KH-t6OwZ8KkIaY';


class App extends Component {
    //Create an initial state for App
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('Vue')


    videoSearch(term){
        //fetch using the youtube-api-search
        YTSearch({key: API_KEY, term}, (videos) => {
            this.setState({
                 videos: videos,
                 selectedVideo: videos[0]
             });
        });
    }

    render(){
        // using _.debounce to prevent the search from happening with every keypress for better UX
        const videoSearch = _.debounce((term)=> { this.videoSearch(term)}, 500);

        return (
            <div className="App">
                {/* pass props to react children */}
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    //updates the state when video is selected
                     onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
                     videos={this.state.videos}
                  />
            </div>
        );
    }
}

export default App;
