import React, { useState, useEffect } from 'react';
import { getAllQuizzes, createQuiz, updateQuiz, deleteQuiz } from '../../services/quiz/quiz.service';

const Quiz = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            const response = await getAllQuizzes();
            setQuizzes(response.data);
        };

        fetchQuizzes();
    }, []);

    return (
        <div>
            <h1>SMIT Admission Quizzes</h1>
            {quizzes.map((quiz) => (
                <div key={quiz._id}>
                    <h2>{quiz.title}</h2>
                    <button onClick={() => deleteQuiz(quiz._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Quiz;
