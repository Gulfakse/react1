import React from 'react';
// {id: 1, title: 'JavaScript', body:'Description'},
//<PostItem post ={post} a={0} key={post.id}/>
const props = {
  a:0, 
  post:  {id: 1, title: 'JavaScript', body:'Description'},
}
const PostItem = (props) => {
  
  return(
    <div className ="post">
      <div className="post__content">
        <strong> {props.post.id} {props.post.title}</strong>
        <div>
        {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <button>delete</button>
      </div>
    </div>
  );
};

export default PostItem;