import React, {useState} from 'react';
import './styles/App.css';
import PostForm from './component/PostForm';
import PostList from './component/PostLists';
import MyButton from './component/UI/button/MyButton';
import MyInput from './component/UI/input/MyInput';
import MySelect from './component/UI/select/MySelect';

function App() {

  const [posts, setPosts] = useState(  [
    {id: 1, title: 'JavaScript', body:'Description'},
    {id: 2, title: 'JavaScript 2', body:'Description'},
    {id: 3, title: 'JavaScript 3', body:'Description'},
  ])
 const[selectedSort, setSelectedSort] = useState('')
 const [searchQuery, setSearchQuery] = useState('')

 function getSortedPosts(){
  console.log('щось спрацювало')
   if (selectedSort){
   return [...posts].sort( (a, b) => a [selectedSort].localeCompare(b[selectedSort]) )
   }
   return posts;
 }

 const sortedPosts = getSortedPosts()
 
  const createPost = (newPost) => {
    setPosts([...posts,newPost])
  }

const removePost = (post) => {
setPosts(posts.filter(p => p.id !== post.id))
}

const sortPosts = (sort) => {
  setSelectedSort(sort);
  
}
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15 px 8'}}/>
       <div>
        <MyInput 
        value={searchQuery}
        onChange={ e => setSearchQuery(e.target.value)}
        placeholder="Search..."
        />
        <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="сортировка"
        options={[
          {value: 'title', name: 'по названию'},
          {value: 'body', name: 'по описанию'},
        ]}
        />
       </div>

      {posts.length !== 0
      ? 
      <PostList remove={removePost} posts={sortedPosts} title = "List 1"/>
    : 
    <h1 style={{textAlign: 'center'}} > 
    Posts are not found
    </h1>
    }
    
    
    </div>
  );
}

export default App;
