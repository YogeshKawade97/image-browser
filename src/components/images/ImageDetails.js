import React, { Component } from 'react';
import pexels from '../../api/pexel';

class ImageDetails extends Component {
  state = {
    imageUrl: null
  };
  async componentDidMount() {
    const imageId = this.props.match.params.id;
    const response = await pexels.get(`/photos/${imageId}`);
    console.log(response);
    this.setState({
      imageUrl: response.data.src.original
    });
  }
  render() {
    return this.state.imageUrl ? (
      <img width="800" src={this.state.imageUrl} alt="something" />
    ) : (
      <div>Loading....</div>
    );
  }
}

export default ImageDetails;
