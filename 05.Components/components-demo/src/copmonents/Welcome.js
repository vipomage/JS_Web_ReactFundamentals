import React, { Component } from 'react';
import Logo from '../copmonents/Logo'

export default class Welcome extends Component {
  render() {
    let title = this.props.title || 'Title';
    let subTitle = this.props.subTitle || 'Subtitle';

    return (
      <div className='container'>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
    );
  }
}
