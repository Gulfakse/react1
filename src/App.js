import React, {useState, useEffect} from 'react';
import './styles/App.css';
import PostForm from './component/PostForm';
import PostList from './component/PostLists';
import PostFilter from './component/PostFilter';
import MyModal from './component/UI/MyModal/MyModal';
import MyButton from './component/UI/button/MyButton';
import {usePosts} from './hooks/usePosts';
import Loader from './component/UI/Loader/Loader';
import PostService from './API/PostService';
import { useFetching } from './hooks/userFetching';
import { getPageCount, getPagesArray } from './utils/pages';

function App() {

  const [posts, setPosts] = useState([]);
const [filter, setFilter] = useState ({sort: '', query: ''})
const [modal, setModal] = useState(false);
const [totalPages, setTotalPages] = useState(0);
const [limit, setLimit] = useState(10);
const [page, setPage] = useState(1);
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
let pagesArray = getPagesArray(totalPages);



const [fetchPosts, isPostsLoading, postError] = useFetching( async() => {
  const response = await PostService.getAll(limit, page);
  setPosts(response.data)
 
  const totalCount = response.headers['x-total-count']
  setTotalPages(getPageCount(totalCount, limit));
})



useEffect(()=> {
fetchPosts()
}, [])

  const createPost = (newPost) => {
    setPosts([...posts,newPost])
    setModal(false)
  }

const removePost = (post) => {
setPosts(posts.filter(p => p.id !== post.id))
}

const changePage = (page) => {
  setPage(page)
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
       {!!postError &&
         <h1>ERROR {postError}</h1>
       }

      {isPostsLoading
       ? <div style={{display:'flex', justifyContent: 'center', marginTop: 50}} ><Loader/></div>
       : <PostList remove={removePost} posts={sortedAndSearchedPosts} title = "List 1"/>

       }
       <div className= "page__wrapper">
       {pagesArray.map(p =>
      <span 
      onClick={() => changePage(p)}
      key={p} 
      className={page === p ? 'page page__current' : 'page'}>
        {p}
        </span>
    )}
    
       </div>
    
    </div>
  );
}

export default App;
