import React from 'react';
import Counter from "./component/counter";
import ClassCounter from './component/class.Counter';
import './styles/App.css';
import PostItem from './component/Postitem';

function App() {
  return (
    <div className="App">
    <PostItem post={{id: 1, title: 'JavaScript', body:'Description'}}/>
    </div>
  );
}

export default App;
