import axios from 'axios' // $ yarn add axios

const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api' });

export default api;