import { createContext, useState, useContext } from 'react';
import './App.css';

// Magic:
// direct child of context provider being wrapped in memo()
// prevents it from being rerendered unnecessarily


const MyContext = createContext();

const MyContextProvider = ({ children }) => {

  console.log('MyContextProvider');

  const [ theme, setTheme ] = useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const toggleTheme = () => {
    setTheme(nextTheme);
  };

  return (
    <MyContext.Provider value={{ theme, nextTheme, toggleTheme }}>
      { children }
    </MyContext.Provider>
  );
}

const App = () => {

  console.log('App');

  return (
    <MyContextProvider>
      <DirectChild />
    </MyContextProvider>
  );
}

const DirectChild = () => {

  console.log('Directchild');

  const logBreak = () => {
    console.log('---Break---');
  };

  return (
    <nav>
      <DeeperChild />

      <button onClick={logBreak}>Log a Break</button>
      
    </nav>
  )
};


const DeeperChild = () => {

  console.log('DeeperChild');

  const { nextTheme, toggleTheme } = useContext(MyContext);

  return (
    <p>
      <button onClick={toggleTheme}>{nextTheme}</button>
    </p>
  )
};

export default App;
