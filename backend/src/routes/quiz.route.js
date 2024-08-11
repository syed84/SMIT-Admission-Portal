const express = require('express');
const { createQuiz, getAllQuiz, updateQuiz, deleteQuiz } = require('../controllers/quiz.controller');
const router = express.Router();
router.post('/quizzes', createQuiz);
router.get('/quizzes', getAllQuiz);
router.put('/quizzes/:id', updateQuiz);
router.delete('/quizzes/:id', deleteQuiz);

module.exports = router;

