import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
  return(
    <div>
        <MyInput 
        value={filter.query}
        onChange={ e => setFilter({...filter, query: e.target.value})}
        placeholder="Search..."
        />
        <MySelect
        value={filter.sort}
        onChange={selectedSourt => setFilter({...filter,sort: selectedSourt})}
        defaultValue="сортировка"
        options={[
          {value: 'title', name: 'по названию'},
          {value: 'body', name: 'по описанию'},
        ]}
        />
       </div>

    
  )
}

export default PostFilter;