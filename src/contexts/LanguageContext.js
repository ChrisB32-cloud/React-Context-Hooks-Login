import React, { createContext, Component } from 'react';

// - Context.Consumer

// <MyContext.Consumer>
//  {value => /* render something based on the context value */}
// </MyContext.Consumer>

//  - A React component that subcribes to context changes. This lets you subrcribe to a
// context within a function component.

//  - Requires a function as a child. The function receives the current context
// value and returns a React node. The value arugment passed to the function will
// be equal to the value props of the closest Provider for this context
// above, the value argument will be equal to the defaultValue that was
// passed to createContext()

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);

    this.state = { language: 'english' };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(e) {
    this.setState({ language: e.target.value });
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {value => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
);

// export default LanguageContext;
