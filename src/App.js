import React, {useState} from 'react';
import Counter from "./component/counter";
import ClassCounter from './component/class.Counter';
import './styles/App.css';

import PostList from './component/PostLists';
import MyButton from './component/UI/button/MyButton';
import MyInput from './component/UI/input/MyInput';

function App() {

  const [posts, setPosts] = useState(  [
    {id: 1, title: 'JavaScript', body:'Description'},
    {id: 2, title: 'JavaScript 2', body:'Description'},
    {id: 3, title: 'JavaScript 3', body:'Description'},
  ])

  const [title, setTitle] = useState()
const addNewPost = (e) =>{
e.preventDefault()
}
{/*как получать данные из управляемого импутп*/}
 
  return (
    <div className="App">
      <form>
        <MyInput 
        value = {title} 
        onChange = { e => setTitle(e.target.value)}
        type="text" 
        placeholder='название поста'/>
        <MyInput type="text" placeholder='описание поста'/>
        <MyButton onClick={addNewPost}>создать пост</MyButton>

      </form>
     <PostList posts={posts} title = "List 1"/>
    
    </div>
  );
}

export default App;
