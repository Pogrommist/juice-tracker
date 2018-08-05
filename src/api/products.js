import axios from 'axios';

export function fetchProducts () {
  return axios.get('http://localhost:3001/products').then(res => res);
}

export function deleteProduct (id) {
  return axios({
    method: 'delete',
    url: `http://localhost:3001/products/${id}`
  });
}

export function createProduct (data) {
  return axios({
    method: 'post',
    url: 'http://localhost:3001/products',
    data
  });
}
