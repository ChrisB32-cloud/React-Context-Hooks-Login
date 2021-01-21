import NavBar from './components/NavBar';
import Form from './components/Form';
import PageComponents from './components/PageComponents';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';


// -- useContext --
//  - const value = useContext(MyContext) -
// - Acceptsa context object (the calue returned from createContext) and returns the
// current context value for that context. The current context calue is determind by 
// the value prop of the nearest <MyContext.Provider> above the calling 
// component in the tree

// - When the nearest <MyContext.Provider> above the component updates, this Hook 
// will trigger a rerender with the latest context value passed to that MyContext
// provider. Even if an ancestor use React.memo or shouldComponentUpdate, a 
// rerender will still happen starting at the component itself using useContext.

// Don't forget that the arugment to useContext must be the context object itself

// - Correct: useContext(MyContext)
// - Incorrect: useContext(MyContext.Consumer)
// - Incorrect: useContext(MyContext.Provider)

// - We have to pass in the entire context (useContext(MyContext)) not just
// useContext(MyContext.Consumer) or just useContext(MyContext.Provider) the whole thing

// - A component calling useContext will always re-render when the context value
// changes. If re-rendering the component is expensive, you can 
// optimize it by using memoization

// - Tip -
// - if You're familiar with the context API before Hooks, useContext(MyContext)
// is eqivalent to (static contextType = MyContext) in a class, or to <MyContext.Consumer>

// - useContext(MyContext) only lets you read the context and subscribe to its changes. You
// still need a <MyContext.Provider> above in the tree to provide the value for this context


function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageComponents>
          <NavBar />
          <Form />
        </PageComponents>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
