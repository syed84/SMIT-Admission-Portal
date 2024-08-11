import axios from 'axios';

const API_URL = 'http://localhost:5000/api/quizzes';

export const getQuizzes = () => axios.get(API_URL);
export const createQuiz = (quiz) => axios.post(API_URL, quiz);
export const updateQuiz = (id, quiz) => axios.put(`${API_URL}/${id}`, quiz);
export const deleteQuiz = (id) => axios.delete(`${API_URL}/${id}`);
