import React, { useState, useContext } from 'react';
import { AdminContext } from '../../../context/AdminContext';

const AdminPanel = () => {
    const { quizzes, addQuiz, updateQuiz, deleteQuiz } = useContext(AdminContext);
    const [newQuiz, setNewQuiz] = useState({ question: '', options: ['', '', '', ''], answer: 0, category: '' });
    const [editingQuiz, setEditingQuiz] = useState(null);

    const handleAddQuiz = async (e) => {
        e.preventDefault();
        await addQuiz(newQuiz);
        setNewQuiz({ question: '', options: ['', '', '', ''], answer: 0, category: '' });
    };

    const handleUpdateQuiz = async (e) => {
        e.preventDefault();
        await updateQuiz(editingQuiz._id, editingQuiz);
        setEditingQuiz(null);
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <form onSubmit={editingQuiz ? handleUpdateQuiz : handleAddQuiz}>
                <input
                    type="text"
                    value={editingQuiz ? editingQuiz.question : newQuiz.question}
                    onChange={(e) => editingQuiz ? setEditingQuiz({ ...editingQuiz, question: e.target.value }) : setNewQuiz({ ...newQuiz, question: e.target.value })}
                    placeholder="Question"
                />
                {newQuiz.options.map((option, index) => (
                    <input
                        key={index}
                        type="text"
                        value={editingQuiz ? editingQuiz.options[index] : newQuiz.options[index]}
                        onChange={(e) => {
                            const options = editingQuiz ? [...editingQuiz.options] : [...newQuiz.options];
                            options[index] = e.target.value;
                            editingQuiz ? setEditingQuiz({ ...editingQuiz, options }) : setNewQuiz({ ...newQuiz, options });
                        }}
                        placeholder={`Option ${index + 1}`}
                    />
                ))}
                <input
                    type="number"
                    value={editingQuiz ? editingQuiz.answer : newQuiz.answer}
                    onChange={(e) => editingQuiz ? setEditingQuiz({ ...editingQuiz, answer: e.target.value }) : setNewQuiz({ ...newQuiz, answer: e.target.value })}
                    placeholder="Answer"
                />
                <input
                    type="text"
                    value={editingQuiz ? editingQuiz.category : newQuiz.category}
                    onChange={(e) => editingQuiz ? setEditingQuiz({ ...editingQuiz, category: e.target.value }) : setNewQuiz({ ...newQuiz, category: e.target.value })}
                    placeholder="Category"
                />
                <button type="submit">{editingQuiz ? 'Update Quiz' : 'Add Quiz'}</button>
            </form>
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz._id}>
                        <h3>{quiz.question}</h3>
                        <p>Category: {quiz.category}</p>
                        <button onClick={() => setEditingQuiz(quiz)}>Edit</button>
                        <button onClick={() => deleteQuiz(quiz._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
