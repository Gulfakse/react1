import React, {useState} from 'react';
import './styles/App.css';
import PostForm from './component/PostForm';
import PostList from './component/PostLists';
import MyButton from './component/UI/button/MyButton';
import MyInput from './component/UI/input/MyInput';

function App() {

  const [posts, setPosts] = useState(  [
    {id: 1, title: 'JavaScript', body:'Description'},
    {id: 2, title: 'JavaScript 2', body:'Description'},
    {id: 3, title: 'JavaScript 3', body:'Description'},
  ])
 
  const createPost = (newPost) => {
    setPosts([...posts,newPost])
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
     <PostList posts={posts} title = "List 1"/>
    
    </div>
  );
}

export default App;
