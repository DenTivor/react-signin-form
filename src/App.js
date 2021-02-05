import React, {useReducer} from 'react'
import './App.css';
import './styles/styles.styl';
import {LoginForm} from './components/';
import {Context} from './context'
import reducer from './reducer'

function App() {
  const [{token, id}, dispatch] = useReducer(reducer, {})
  return (
    <Context.Provider value={{
      dispatch
    }}>
      <div className="content">
          <div className="content-inner">
              {!token
              ? <LoginForm />
              : <h2>User logged in</h2>
              }
          </div>
      </div>
    </Context.Provider>
  );
}

export default App;
