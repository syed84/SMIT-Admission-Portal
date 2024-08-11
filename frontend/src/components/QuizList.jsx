import React, { useEffect, useState } from 'react';
import { getQuizzes, deleteQuiz, updateQuiz } from '../services/quiz.service';

const QuizList = ({ setQuizToEdit }) => {
    const [quizzes, setQuizzes] = useState([]);
    const [editingQuiz, setEditingQuiz] = useState(null);
    const [editQuestion, setEditQuestion] = useState('');
    const [editOptions, setEditOptions] = useState([]);
    const [editAnswer, setEditAnswer] = useState('');

    useEffect(() => {
        fetchQuizzes();
    }, []);

    const fetchQuizzes = async () => {
        const response = await getQuizzes();
        setQuizzes(response.data);
    };

    const handleDelete = async (id) => {
        await deleteQuiz(id);
        fetchQuizzes();
    };

    const handleEdit = (quiz) => {
        setEditingQuiz(quiz._id);
        setEditQuestion(quiz.question);
        setEditOptions(quiz.options);
        setEditAnswer(quiz.answer);
    };

    const handleUpdate = async () => {
        const updatedQuiz = {
            question: editQuestion,
            options: editOptions,
            answer: editAnswer,
        };
        await updateQuiz(editingQuiz, updatedQuiz);
        setEditingQuiz(null);
        fetchQuizzes();
    };

    return (
        <div>
            <h2>Quiz List</h2>
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz._id}>
                        {editingQuiz === quiz._id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editQuestion}
                                    onChange={(e) => setEditQuestion(e.target.value)}
                                />
                                <ul>
                                    {editOptions.map((option, index) => (
                                        <li key={index}>
                                            <input
                                                type="radio"
                                                name="editAnswer"
                                                checked={editAnswer === option}
                                                onChange={() => setEditAnswer(option)}
                                            />
                                            <input
                                                type="text"
                                                value={option}
                                                onChange={(e) => {
                                                    const newOptions = [...editOptions];
                                                    newOptions[index] = e.target.value;
                                                    setEditOptions(newOptions);
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={handleUpdate}>Save</button>
                                <button onClick={() => setEditingQuiz(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <strong>{quiz.question}</strong>
                                <ul>
                                    {quiz.options.map((option, index) => (
                                        <li key={index}>
                                            <input
                                                type="checkbox"
                                                checked={quiz.answer === option}
                                                readOnly
                                            />
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => handleEdit(quiz)}>Edit</button>
                                <button onClick={() => handleDelete(quiz._id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuizList;
