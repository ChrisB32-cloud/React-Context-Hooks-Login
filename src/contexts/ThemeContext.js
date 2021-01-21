import React, { Component, createContext } from 'react';

// -- Context api --
// - const MyContext = createContext(defaultValue);
//  - Creates a Context object. When React renders a component
// that subscribes to this Context object it will read the
// current context value from the closet matching Provider above
// it in the tree

//  - The (defaultValue) argument is only used when a component does
// not have a matching Provider above it in the tree. This can be
// helpful fir testing components in isolation without
// wrapping them. Note: passing undefined as a Provider value does not
// cause consuming components to use defaultValue

// - <MyContext.Provider value={/* some value */}>
//  - Every Context object comes with a Provider React component that
// allows consuming components to subsrcibe to context changes
//  - The Provider component accepts a value props to be passed to
// consuming components that are descendents of this Provider. One Provider
// can be connected to many consumers. Providers can be nested to
// override values deeper within the tree
//  - All consumers that are descendents of a Provider will re-render
// whenever the Provider's value prop changes. The propagation from Provider
// to its descendent consumers (including .contextType and useContext) is
// not subject to the shouldComponentUpdate method, so the
// consumer is updated even when an ancestor component skips an update
//  - Changes are determinder by comparing the new and old values
// using the same algorithm as Object.is
//  - NOTE: The way changes are determined can cause some
// some issues when passing objects as value

// - There's really two pieces to Context, there is the Provider side of things
// where we put the data, the method or the piece of state that we want to
// be in that context, thats where it lives in the Provider, then
// components that need access to the context, can consume it using
// a context consumer, which there are a few ways of doing

// - contextType
//  - The contextType property on a class can be assigned a Context object created
// by createContext(). This lets you consume the nearest current value
// of that Context type using this.context. You can reference this in any
// of the lifecycle methods including the render function.
//  - NOTE: You can only subscribe to a single context using API.

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDarkMode: true
    };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleDarkMode: this.toggleDarkMode }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

// export default ThemeProvider;
