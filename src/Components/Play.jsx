import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Play.css";
import '../Index.css'
import questions from "../Questions.json";
import isEmpty from "../utlis/is.Empty";
import M from "materialize-css"; // For Materialize JS

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions,
            currentQuestion: {},
            nextQuestion: {},
            preQuestion: {},
            answer: "",
            numOfQuestions: 0,
            numOfAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hints: 5,
            fiftyFifty: 2,
            usedFiftyFifty: false,
            time: {},
            showCorrect: false, // New state to manage visibility
            showWrong: false,
        };
    }

    componentDidMount() {
        this.displayQuestions();
        M.AutoInit(); // Initialize Materialize components
    }

    displayQuestions = () => {
        const { questions, currentQuestionIndex } = this.state;
        if (!isEmpty(questions)) {
            const currentQuestion = questions[currentQuestionIndex];
            const nextQuestion = questions[currentQuestionIndex + 1];
            const preQuestion = questions[currentQuestionIndex - 1];
            const answer = currentQuestion?.answer;

            this.setState({
                currentQuestion,
                nextQuestion,
                preQuestion,
                numOfQuestions: questions.length,
                answer,
            });
        }
    };

    handleOptionClick = (e) => {
        const { currentQuestionIndex, numOfQuestions } = this.state;

        if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
            this.correctAnswer();
        } else {
            this.wrongAnswer();
        }

        // Check if the quiz has ended
        if (currentQuestionIndex + 1 === numOfQuestions) {
            this.handleQuizEnd();
        } else {
            this.setState(
                (prevState) => ({
                    currentQuestionIndex: prevState.currentQuestionIndex + 1,
                }),
                this.displayQuestions
            );
        }
    };

    handlePreviousQuestion = () => {
        if (this.state.currentQuestionIndex > 0) {
            this.setState(
                (prevState) => ({
                    currentQuestionIndex: prevState.currentQuestionIndex - 1,
                }),
                this.displayQuestions
            );
        }
    };

    handleNextQuestion = () => {
        const { currentQuestionIndex, numOfQuestions } = this.state;
        if (currentQuestionIndex + 1 < numOfQuestions) {
            this.setState(
                (prevState) => ({
                    currentQuestionIndex: prevState.currentQuestionIndex + 1,
                }),
                this.displayQuestions
            );
        }
    };

    handleQuizEnd = () => {
        const navigate = this.props.navigate;
        navigate("/Result", {
            state: {
                score: this.state.score,
                correctAnswers: this.state.correctAnswers,
                wrongAnswers: this.state.wrongAnswers,
                totalQuestions: this.state.numOfQuestions,
            },
        });
    };

    correctAnswer = () => {
        this.setState(
            (prevState) => ({
                score: prevState.score + 1,
                correctAnswers: prevState.correctAnswers + 1,
                numOfAnsweredQuestions: prevState.numOfAnsweredQuestions + 1,
                showCorrect: true, // Show correct answer
            }),
            () => { 
                setTimeout(() => this.setState({ showCorrect: false }), 1000); // Hide after 1 second
            }
        );
    };

    wrongAnswer = () => {
        this.setState(
            (prevState) => ({
                wrongAnswers: prevState.wrongAnswers + 1,
                numOfAnsweredQuestions: prevState.numOfAnsweredQuestions + 1,
                showWrong: true, // Show wrong answer
            }),
            () => {
                setTimeout(() => this.setState({ showWrong: false }), 1000); // Hide after 1 second
            }
        );
    };

    handleQuit = () => {
        const navigate = this.props.navigate;
        const userConfirmed = window.confirm(
            "Are you sure you want to quit the quiz? Your progress will be saved."
        );
        if (userConfirmed) {
            this.handleQuizEnd();
        }
    };

    render() {
        const { currentQuestionIndex, numOfQuestions, currentQuestion, showCorrect, showWrong, answer } = this.state;

        return (
            <>
                <div className="questions">
                    <div className="lifeline-container d-flex justify-content-between mb-5">
                        <p>
                            <span className="mdi mdi-set-center md-24px lifeline-icon"></span> 2
                        </p>
                        <p>

                            Anwers the following Question                        </p>
                        <p>
                            <span className="mdi mdi-set-lightbulb md-24px lifeline-icon"></span> 5
                        </p>
                    </div>
                    <div className="font-12">
                        <p>
                            <span>
                                {currentQuestionIndex + 1} of {numOfQuestions}
                            </span>
                            <span className="mdi mdi-set-clock md-24px lifeline-icon"></span>
                        </p>
                    </div>
                    <h3>{currentQuestion.question}</h3>
                    <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option btn btn-primary">
                            {currentQuestion.optionA}
                        </p>
                        <p onClick={this.handleOptionClick} className="option btn btn-primary">
                            {currentQuestion.optionB}
                        </p>
                    </div>
                    <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option btn btn-primary">
                            {currentQuestion.optionC}
                        </p>
                        <p onClick={this.handleOptionClick} className="option btn btn-primary">
                            {currentQuestion.optionD}
                        </p>
                    </div>

                    {/* Display Correct Answer */}
                    {showCorrect && (
                        <div className="correct-answer">
                            <p className="correct">Correct Answer:</p>
                        </div>
                    )}

                    {showWrong && (
                        <div className="wrong-answer">
                            <p className="wrong">Wrong Answer!</p>
                        </div>
                    )}

                    <div className="bottom d-flex justify-content-between mt-4">
                        <button
                            className="btn btn-secondary"
                            onClick={this.handlePreviousQuestion}
                            disabled={currentQuestionIndex === 0}
                        >
                            Previous
                        </button>
                        <button id="quit-button" className="btn btn-danger" onClick={this.handleQuit}>
                            Quit
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={this.handleNextQuestion}
                            disabled={currentQuestionIndex + 1 === numOfQuestions}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default function PlayWithRouter() {
    const navigate = useNavigate(); // Hook to access navigation
    return <Play navigate={navigate} />;
}
