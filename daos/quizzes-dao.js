const quizzesModel = require('../models/quizzes/quizzes-model')
const findAllQuizzes = () => quizzesModel.find()
const findQuizById = (quizId) => quizzesModel.findById(quizId).populate("questions").exec()
module.exports = { findAllQuizzes, findQuizById }