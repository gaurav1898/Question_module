import React, { Component } from 'react';
import axios from 'axios';

// function checkAnswer() {
//     if (props.question.answer == "New Delhi") {
//         console.log("righht");
//     }
//     else {
//         console.log("wrong");
//     }
// }

let Question = props => (
    <div className="container">
        <div className="form-group" style={{ fontWeight: 'bold' }}>
            <center> Class: {props.question.standard}</center>
        </div>
        <div className="form-group" style={{ fontWeight: 'bold' }}>
            <center> Subject: {props.question.subject}</center>
        </div>
        <br />

        <div className="form-group">
            Question:- {props.question.question}
        </div>
        <div className="form-group">
            <input type="radio" name="answer" value={props.question.option1}
            // checked={props.question.option1 == props.question.answer}
            />      A: {props.question.option1}
        </div>
        {console.log(props.question.option1)}
        <div className="form-group">
            <input type="radio" name="answer" value={props.question.option2}
            // checked={props.question.option2 == props.question.answer}
            /> B: {props.question.option2}
        </div>
        <div className="form-group">
            <input type="radio" name="answer" value={props.question.option3}
            // checked={props.question.option3 == props.question.answer}
            /> C: {props.question.option3}
        </div>
        <div className="form-group">
            <input type="radio" name="answer" value={props.question.option4}
            // checked={props.question.option4 == props.question.answer}
            /> D: {props.question.option4}
        </div>
        <div className="form-group">
            <input type="button" name="submit" value="submit" id="submit"
            // onClick={checkAnswer()} 
            />
        </div>
    </div>
)

export default class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            answer: '',
            score: 0,
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/question/allQuestions')
            .then(response => {
                this.setState({ questions: response.data })
                console.log(this.state.questions);
            })
            .catch((error) => {
                console.log(error);
            })
        { console.log(this.props) }
        // axios.get('http://localhost:5000/api/question/correctAnswer/' + this.props.match.params.answer)
        //     .then(response => {
        //         console.log(response.data)
        //         this.setState({ answer: response.data.answer })
        //     })
        //     .catch(err => console.log(err));
    }

    dataList() {
        return this.state.questions.map((currentQuestion, i) => {
            { console.log(currentQuestion) }
            return <Question question={currentQuestion} key={currentQuestion.i} />;
        })
    }

    // checkAnswer() {
    //     return this.state.questions.map(currentQuestion => {
    //         if (currentQuestion.answer == currentQuestion.option1) {
    //             // this.setState({ score: this.statescore + 1 })
    //             // console.log("----------------------");
    //             console.log(this.state.score);
    //             console.log("A selected");
    //         }
    //     })
    // }
    onSubmit(e) {

        // if (this.state.questions.answer == this.state.questions.option2) {
        //     console.log("Correct Answer");
        // }
    }

    render() {
        return (
            <div>
                <h1 style={{ color: 'green' }}> Your all Added Questions</h1>
                <br />
                {this.dataList()}
                {/* {this.checkAnswer()} */}
                <div className="form-group">
                    {/* <input type="submit" id="submit" value="Submit Test" className="btn btn-primary" onClick={console.log(this.props.question)} /> */}
                </div>
            </div>
        )
    }
}