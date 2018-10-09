import React from "react";

class MovieBrowser extends React.Component {
  render() {
    const currentPlayingTitle = 'Harry Potter & The Goblet Of Fire';
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isPlaying: child.props.title === currentPlayingTitle
      });
    });
    console.log(childrenWithExtraProp);
    const isPlayingChild = childrenWithExtraProp.filter(child => child.props.isPlaying === true);
    console.log(isPlayingChild);
    return (
      <div>
        {isPlayingChild}
      </div>      
    );
  }
}

export default MovieBrowser;

