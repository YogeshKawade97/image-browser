import React, { Component } from 'react';
import SearchBar from './SearchBar';
import pexelsApi from '../../api/pexel';
import ImageList from './ImageList';

class ImageSearch extends Component {
  state = {
    images: []
  };

  searchSubmitted = async searchTerm => {
    const response = await pexelsApi.get('/search', {
      params: {
        query: searchTerm
      }
    });
    this.setState({
      images: response.data.photos
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmitted={this.searchSubmitted} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default ImageSearch;
