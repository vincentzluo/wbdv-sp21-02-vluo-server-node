
const quizzes = require("./quizzes.json")

const createQuiz = () => {}
const findAllQuizzes = () => {
    return quizzes
}
const findQuizById = (qid) => {
    return quizzes.find((quiz) => {
        return (quiz._id === qid)
    })
}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes, findQuizById,
    updateQuiz, deleteQuiz
}