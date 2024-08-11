import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4500/api/quizzes')
            .then(response => setQuizzes(response.data))
            .catch(err => console.error(err));
    }, []);

    const addQuiz = async (quiz) => {
        const response = await axios.post('http://localhost:4500/api/quizzes', quiz);
        setQuizzes([...quizzes, response.data]);
    };

    const updateQuiz = async (id, updatedQuiz) => {
        const response = await axios.put(`http://localhost:4500/api/quizzes/${id}`, updatedQuiz);
        setQuizzes(quizzes.map(quiz => (quiz._id === id ? response.data : quiz)));
    };

    const deleteQuiz = async (id) => {
        await axios.delete(`http://localhost:4500/api/quizzes/${id}`);
        setQuizzes(quizzes.filter(quiz => quiz._id !== id));
    };

    return (
        <AdminContext.Provider value={{ quizzes, addQuiz, updateQuiz, deleteQuiz }}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminProvider;
