import React, { useState, useEffect } from 'react';
import { createQuiz, updateQuiz } from '../services/quiz.service';

const QuizForm = ({ quizToEdit, setQuizToEdit }) => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        if (quizToEdit) {
            setQuestion(quizToEdit.question);
            setOptions(quizToEdit.options);
            setAnswer(quizToEdit.answer);
        }
    }, [quizToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const quiz = { question, options, answer };

        if (quizToEdit) {
            await updateQuiz(quizToEdit._id, quiz);
        } else {
            await createQuiz(quiz);
        }

        setQuestion('');
        setOptions(['', '', '', '']);
        setAnswer('');
        setQuizToEdit(null);
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    return (
        <div>
            <h2>{quizToEdit ? 'Edit Quiz' : 'Create Quiz'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Question:</label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </div>
                <div>
                    <label>Options:</label>
                    {options.map((option, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
                <div>
                    <label>Answer:</label>
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                </div>
                <button type="submit">{quizToEdit ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default QuizForm;
