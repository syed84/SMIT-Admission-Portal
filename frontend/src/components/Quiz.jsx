import React, { useEffect, useState } from 'react';
import { getQuizzes } from '../services/quiz.service';

const Quiz = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(null);

    useEffect(() => {
        fetchQuizzes();
    }, []);

    const fetchQuizzes = async () => {
        const response = await getQuizzes();
        setQuizzes(response.data);
    };

    const handleOptionChange = (e, index) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentIndex] = index;
        setUserAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentIndex < quizzes.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            calculateScore();
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const calculateScore = () => {
        let correctCount = 0;
        quizzes.forEach((quiz, index) => {
            if (quiz.options[userAnswers[index]] === quiz.answer) {
                correctCount += 1;
            }
        });
        setScore(correctCount);
    };

    return (
        <div>
            {score === null ? (
                <>
                    {quizzes.length > 0 && (
                        <div>
                            <h2>{quizzes[currentIndex].question}</h2>
                            <ul>
                                {quizzes[currentIndex].options.map((option, index) => (
                                    <li key={index}>
                                        <input
                                            type="checkbox"
                                            checked={userAnswers[currentIndex] === index}
                                            onChange={(e) => handleOptionChange(e, index)}
                                        />
                                        {option}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={handlePrevious} disabled={currentIndex === 0}>
                                Previous
                            </button>
                            <button onClick={handleNext}>
                                {currentIndex < quizzes.length - 1 ? 'Next' : 'Submit'}
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div>
                    <h2>Your Score: {score}/{quizzes.length}</h2>
                    <h3>{score >= 2 ? 'Pass' : 'Fail'}</h3>
                </div>
            )}
        </div>
    );
};

export default Quiz;
