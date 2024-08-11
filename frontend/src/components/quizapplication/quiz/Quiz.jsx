import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';

const Quiz = () => {
    const { user } = useContext(AuthContext);
    const [quizzes, setQuizzes] = useState([]);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30); // Set timer for 30 seconds

    useEffect(() => {
        axios.get('http://localhost:4500/api/quizzes')
            .then(response => setQuizzes(response.data))
            .catch(err => console.error(err));
    }, [user]);

    useEffect(() => {
        if (timeLeft === 0) {
            updateStats(false);
            setCurrentQuiz(currentQuiz + 1);
            setTimeLeft(30);
        }

        const timer = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, currentQuiz]);

    const updateStats = async (correct) => {
        const statsUpdate = {
            totalQuestions: 1,
            correctAnswers: correct ? 1 : 0,
        };
        await axios.put(`http://localhost:4500/api/users/${user._id}/stats`, statsUpdate);
    };

    const handleAnswer = async (index) => {
        const correct = index === quizzes[currentQuiz].answer;
        if (correct) {
            setScore(score + 1);
        }
        await updateStats(correct);
        setCurrentQuiz(currentQuiz + 1);
        setTimeLeft(30);
    };

    if (currentQuiz >= quizzes.length) {
        return <h1>Your score: {score}</h1>;
    }

    return (
        <div>
            <h1>{quizzes[currentQuiz]?.question}</h1>
            <p>Time left: {timeLeft}s</p>
            {quizzes[currentQuiz]?.options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(index)}>{option}</button>
            ))}
        </div>
    );
};

export default Quiz;
