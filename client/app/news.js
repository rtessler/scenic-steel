import React from 'react';
import ReactDOM from 'react-dom';

export default class News extends React.Component {

  render() {

      return (
        <div className="news" >{this.props.data}</div>
      );
  }
}

