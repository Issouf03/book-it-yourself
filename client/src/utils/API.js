import axios from "axios";

export default {
  getUsers() {
    return axios.get(`/api/users`);
  },
  getUsersWithPosts() {
    return axios.get(`/api/usersposts`);
  },
  getUser(id) {
    return axios.get(`/api/user/${id}`);
  },
  searchUser(searchString) {
    return axios.get(`/api/users/user`, searchString);
  },
  deleteUser(id) {
    return axios.delete(`/api/user/${id}`);
  },
  // removed this route because being routed to via passport
  // saveUser(userData) {
  //   return axios.post(`/api/users`, userData);
  // },
  updateUser(id, userData) {
    return axios.put(`/api/user/${id}`, userData);
  },
  updateUserNewPost(id, postId) {
    return axios.put(`/api/user/post/${id}`, postId);
  },
  updateRemoveUserPost(id, postId) {
    return axios.put(`/api/user/pull/${id}`, postId);
  },
  addPost(postData) {
    return axios.post(`/api/classifieds`, postData);
  },
  deletePost(id) {
    return axios.delete(`/api/classifieds/${id}`);
  },
};
