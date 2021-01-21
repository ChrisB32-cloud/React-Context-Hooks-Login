import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class PageComponents extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? 'grey' : 'lightslategrey',
      height: '100vh',
      width: '100vw'
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageComponents;
