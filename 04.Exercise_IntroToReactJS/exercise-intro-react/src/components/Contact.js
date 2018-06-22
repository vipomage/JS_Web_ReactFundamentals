import React from 'react';
import { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact" data-id={this.props.id}>
        <span className="avatar small">&#9787;</span>
        <span className="title">{this.props.title}</span>
      </div>
    );
  }
}