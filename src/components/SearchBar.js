import React, {Component} from 'react';

class SearchBar extends Component {
    state = { term: '' };


    onInputChange(term){
        this.setState({term});
        // trigger a search whenever the user writes in the searchbar
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <h1>"YouTube"</h1>
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                    placeholder="Search for a video!"
                />
            </div>
        );
    }
}

export default SearchBar;
