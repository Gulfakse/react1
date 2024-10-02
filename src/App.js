import React, {useState} from 'react';
import Counter from "./component/counter";
import ClassCounter from './component/class.Counter';
import './styles/App.css';
import PostItem from './component/Postitem';

function App() {

  const [posts, setPosts] = useState(  [
    {id: 1, title: 'JavaScript', body:'Description'},
    {id: 2, title: 'JavaScript 2', body:'Description'},
    {id: 3, title: 'JavaScript 3', body:'Description'},
  ])
posts.map((post) => {
  console.log(post)
  console.log(typeof post)
 } )


 
  return (
    <div className="App">
      <h1 style = {{textAlign: 'center'}}>
      LIST
      </h1>
    {posts.map(post =>
    <PostItem post ={post} a={0} key={post.id}/>

    )}
    </div>
  );
}

export default App;
