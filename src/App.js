import React, {useState, useMemo} from 'react';
import './styles/App.css';
import PostForm from './component/PostForm';
import PostList from './component/PostLists';
import PostFilter from './component/PostFilter';
import MyModal from './component/UI/MyModal/MyModal';
import MyButton from './component/UI/button/MyButton';

function App() {

  const [posts, setPosts] = useState(  [
    {id: 1, title: 'JavaScript', body:'Description'},
    {id: 2, title: 'JavaScript 2', body:'Description'},
    {id: 3, title: 'JavaScript 3', body:'Description'},
  ])
 
const [filter, setFilter] = useState ({sort: '', query: ''})

const [modal, setModal] = useState(false);

 const sortedPosts = useMemo(() => {
  
  if (filter.sort){
    return [...posts].sort( (a, b) => a[filter.sort].localeCompare(b[filter.sort]) )
    }
    return posts;
 }, [filter.sort, posts])

 const sortedAndSearchedPosts = useMemo(() => {
return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
 }, [filter.query, sortedPosts])
 
  const createPost = (newPost) => {
    setPosts([...posts,newPost])
    setModal(false)
  }

const removePost = (post) => {
setPosts(posts.filter(p => p.id !== post.id))
}

  return (
    <div className="App">
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
