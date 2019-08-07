import React from 'react';
import { withRouter } from 'react-router-dom';

class ImageList extends React.Component {
  showImage = id => {
    this.props.history.push(`/images/${id}`);
  };
  render() {
    return this.props.images.map(image => {
      return (
        <div key={image.id} className="ui card">
          <div className="image">
            <img src={image.src.small} alt="something" />
          </div>
          <div className="extra content">
            <div className="ui buttons">
              <div
                onClick={() => this.showImage(image.id)}
                className="ui basic green button"
              >
                Show
              </div>
            </div>
          </div>
        </div>
      );
      // return <img key={image.id} src={image.src.small} alt="something" />;
    });
  }
}

export default withRouter(ImageList);
