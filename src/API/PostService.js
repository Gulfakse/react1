import axios from 'axios';

export default class PostService{//об'єкт
  static async getAll( limit = 10, page =1){//метод
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
        params: {
          _limit: limit,
          _page: page
        }
      })
      return response;
   
  }


static async getById(id){//метод
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  return response;

}
}