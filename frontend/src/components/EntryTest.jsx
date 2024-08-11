import { useState } from 'react'
import { quiz } from './data/Quiz.jsx'
import './quiz.css'
import Navbar2 from './Navbar2.jsx'

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        status: 'enrolled', // Initial status as 'enrolled'
    })

    const { questions } = quiz
    const { question, choices, correctAnswer } = questions[activeQuestion]

    const calculateStatus = (correctAnswers) => {
        const percentage = (correctAnswers / questions.length) * 100
        return percentage >= 70 ? 'pass' : 'fail'
    }

    const onClickNext = () => {
        setSelectedAnswerIndex(null)
        setResult((prev) => {
            const isCorrect = selectedAnswer ? true : false
            const newScore = isCorrect ? prev.score + 5 : prev.score
            const newCorrectAnswers = isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers
            const newWrongAnswers = isCorrect ? prev.wrongAnswers : prev.wrongAnswers + 1
            const newStatus = calculateStatus(newCorrectAnswers)
            return {
                score: newScore,
                correctAnswers: newCorrectAnswers,
                wrongAnswers: newWrongAnswers,
                status: newStatus,
            }
        })
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            setShowResult(true)
        }
    }

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        setSelectedAnswer(answer === correctAnswer)
    }

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

    return (
        <>

            <Navbar2 />
            <div className="quiz-container">
                {!showResult ? (
                    <div>
                        <div>
                            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
                            <span className="total-question">/{addLeadingZero(questions.length)}</span>
                        </div>
                        <h2>{question}</h2>
                        <ul>
                            {choices.map((answer, index) => (
                                <li
                                    onClick={() => onAnswerSelected(answer, index)}
                                    key={answer}
                                    className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                                    {answer}
                                </li>
                            ))}
                        </ul>
                        <div className="flex-right">
                            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="result">
                        <h3>Result</h3>
                        <p>
                            Total Question: <span>{questions.length}</span>
                        </p>
                        <p>
                            Total Score:<span> {result.score}</span>
                        </p>
                        <p>
                            Correct Answers:<span> {result.correctAnswers}</span>
                        </p>
                        <p>
                            Wrong Answers:<span> {result.wrongAnswers}</span>
                        </p>
                        <p>
                            Status: <span>{result.status}</span>
                        </p>
                    </div>
                )}
            </div>

        </>
    )
}

export default Quiz
