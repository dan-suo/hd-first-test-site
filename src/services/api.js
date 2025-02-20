import axios from "axios";

const API_URL = "http://localhost:3001";

export const fetchPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchPost = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createPost = async (post) => {
  const response = await axios.post(API_URL, postData);
  return response.data;
};

export const updatePost = async (id, postData) => {
  const response = await axios.put(`${API_URL}/${id}`, postData);
  return response.data;
};

export const deletePost = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};
