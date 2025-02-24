import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPost = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (postData) => {
  try {
    const response = await axios.post(API_URL, postData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (id, postData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, postData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
};
