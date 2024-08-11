const Quiz = require('../models/quiz.model.js');

const createQuiz = async (req, res) => {
    try {
        const quiz = new Quiz(req.body);
        await quiz.save();
        res.status(201).send(quiz);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getAllQuiz = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).send(quizzes);
    } catch (error) {
        res.status(400).send(error);
    }
}

const updateQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!quiz) {
            return res.status(404).send();
        }
        res.send(quiz);
    } catch (error) {
        res.status(400).send(error);
    }
}

const deleteQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndDelete(req.params.id);
        if (!quiz) {
            return res.status(404).send();
        }
        res.send(quiz);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    createQuiz,
    getAllQuiz,
    updateQuiz,
    deleteQuiz,
}

