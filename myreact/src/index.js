import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

import _ from 'lodash';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAKQPCkLX19eUZze5twl7UC9_FTJueMnf0';

class App extends Component {
    constructor(props) {
        super(props);

        this.state={ 
            videos:[],
            selectedVideo: null
        };

        this.videoSearch('Docker')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVide: videos[0]
            });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300)
        return (
            <div>
                <div className="header">
                    <SearchBar onSearchTermChange={videoSearch}/>
                </div>
                <div className="container">
                    <div className="container left">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="container right">
                        <VideoList
                            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                            videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.querySelector('.center'));