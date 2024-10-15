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

  const [post, setPost] = useState({title:'', body: ''});
 
  

const addNewPost = (e) =>{
  e.preventDefault();


setPosts([...posts, {...posts, id: Date.now()}]);
setPost({title:'', body: ''});
}

{/*как получать данные из управляемого импутп*/}
 
  return (
    <div className="App">
      <form>
        <MyInput 
        value = {posts.title} 
        onChange = { e => setPosts({...posts, title:e.target.value})}
        type="text" 
        placeholder='название поста'
        />
       {/*как получить данные из неуправляем импута*/}
        <MyInput
      value = {posts.body} 
      onChange = { e => setBody({...posts, body:e.target.value})} //функція яка змінює стан
         type="text"
          placeholder='описание поста'
          />
        <MyButton onClick={addNewPost}>создать пост</MyButton>

      </form>
     <PostList posts={posts} title = "List 1"/>
    
    </div>
  );
}

export default App;
