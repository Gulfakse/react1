import React, {useState, useEffect} from 'react';
import './styles/App.css';
import PostForm from './component/PostForm';
import PostList from './component/PostLists';
import PostFilter from './component/PostFilter';
import MyModal from './component/UI/MyModal/MyModal';
import MyButton from './component/UI/button/MyButton';
import {usePosts} from './hooks/usePosts';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState(  [])
const [filter, setFilter] = useState ({sort: '', query: ''})
const [modal, setModal] = useState(false);
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

useEffect(()=> {
fetchPosts()
}, [])

 
  const createPost = (newPost) => {
    setPosts([...posts,newPost])
    setModal(false)
  }
  
    async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
   }

const removePost = (post) => {
setPosts(posts.filter(p => p.id !== post.id))
}

  return (
    <div className="App">
    <button onClick={fetchPosts} >GET POSTS</button>
      <MyButton style={{ marginTop: 30}} onClick = {() => setModal(true)} >
        create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost} />
      </MyModal>
     
      <hr style={{margin: '15px'}}/>
      <PostFilter 
      filter = {filter} 
      setFilter = {setFilter}
      />

      
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title = "List 1"/>
    
    
    </div>
  );
}

export default App;
