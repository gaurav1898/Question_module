import React, { Component } from 'react';
import { useAlert } from 'react-alert'

import axios from 'axios';
var _ = require('lodash');



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
        {/* //     <div className="form-group" style={{ fontWeight: 'bold' }}>
    //         <center> Class: {props.question.standard}</center>
    //     </div>
    //     <div className="form-group" style={{ fontWeight: 'bold' }}>
    //         <center> Subject: {props.question.subject}</center>
    //     </div>
    //     <br />

    //     <div className="form-group">
    //         Question:- {props.question.question}
    //     </div>
    //     <div className="form-group">
    //         <input type="radio" name="answer" value={props.question.option1} */}
        {/* //         // checked={props.question.option1 == props.question.answer}
    //         />      A: {props.question.option1}
    //     </div> */}
        {/* //     {console.log(props.question.answer)} */}
        {/* //     <div className="form-group">
    //         <input type="radio" name="answer" value={props.question.option2} */}
        {/* //         // checked={props.question.option2 == props.question.answer}
    //         /> B: {props.question.option2} */}
        {/* //     </div>s */}
        {/* //     <div className="form-group">
    //         <input type="radio" name="answer" value={props.question.option3} */}
        {/* //         // checked={props.question.option3 == props.question.answer}
    //         /> C: {props.question.option3}
    //     </div> */}
        {/* //     <div className="form-group">
    //         <input type="radio" name="answer" value={props.question.option4} */}
        {/* //         // checked={props.question.option4 == props.question.answer}
    //         /> D: {props.question.option4}
    //     </div> */}
        {/* //     <div className="form-group">
    //         <input type="button" name="submit" value="submit" id="submit"
    //         // onClick={checkAnswer()} 
    //         />
    //     </div> */}
    </div>
)

export default class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            answer: '',
            score: 0,
            responses: []
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            responses: e.target.value,
            // option2: e.target.value,
            // option3: e.target.value,
            // option4: e.target.value
        });
        console.log(e.target.value);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/question/allQuestions')
            .then(response => {
                this.setState({
                    questions: response.data,
                })
                console.log("OP1-----",this.state.option1);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    dataList() {
        let response = '';
        return this.state.questions.map((currentQuestion, i) => {
            {
                console.log("QUES", currentQuestion)
            }

            // var element = {
            //     i: currentQuestion.answer,
            // }, data = [];

            // data.push({ element: element })
            // console.log("Modified", data);
            // const result = _.map(currentQuestion, (option, i) => ({ i, option }));
            // console.log("Array", result);
            { console.log(i); }
            { console.log(response) }
            return <> <Question question={currentQuestion} key={i} />
                <div>
                    <div className="form-group" style={{ fontWeight: 'bold' }}>
                        <center> Class: {currentQuestion.standard}</center>
                    </div>
                    <div className="form-group" style={{ fontWeight: 'bold' }}>
                        <center> Subject: {currentQuestion.subject}</center>
                    </div>
                    <br />

                    <div className="form-group">
                        Question:- {currentQuestion.question}
                    </div>

                    <div className="form-group">
                        <input type="radio" name="answer" value={currentQuestion.option1}
                            id="answer" onChange={e => this.handleChange(e)}
                        // checked={true}
                        />
                         A: {currentQuestion.option1}
                    </div>
                    <div className="form-group">
                        <input type="radio" name="answer" value={currentQuestion.option2}
                            id="answer" onChange={e => this.handleChange(e)}
                        // checked={currentQuestion.option2}
                        /> B: {currentQuestion.option2}
                    </div>
                    <div className="form-group">
                        <input type="radio" name="answer" value={currentQuestion.option3}
                            id="answer" onChange={e => this.handleChange(e)}
                        // checked={currentQuestion.option3}
                        /> C: {currentQuestion.option3}
                    </div>
                    <div className="form-group">
                        <input type="radio" name="answer" value={currentQuestion.option4}
                            id="answer" onChange={e => this.handleChange(e)}
                        // checked={currentQuestion.option4 === "Mumbai"}
                        /> D: {currentQuestion.option4}
                    </div>
                    {console.log("TEst------<>>>>>.", this.state)}
                </div>
            </>
        })
    }

    checkAnswer() {
        return this.state.questions.map(currentQuestion => {
            console.log("Answer", this.state.responses);
            // console.log("Answer", currentQuestion.answer);
            if (currentQuestion.answer === this.state.responses) {
                this.setState({ score: this.state.score + 1 })
                console.log("----------------------");
                console.log("Score:", this.state.score);
            }
            else {
                this.setState({ score: 0 })
                console.log("Score:", this.state.score);
            }
            return this.state.score;
        })
    }

    onSubmit(e) {
        e.preventDefault();

        axios.get('http://localhost:5000/api/question/allQuestions')
            .then(response => {
                this.setState({
                    answer: response.data,
                    // score: this.state.score + 1
                })

                this.checkAnswer();
                // console.log(this.state.score);
                // const result = _.map(this.state.answer, (option, i) => ({ i, option }));
                // console.log("Array", result);
                console.log("test", response.data);
                console.log(this.state.answer);
            })
            .catch((error) => {
                console.log(error);
            })

        // const getData = document.getElementById("answer").value;
        // console.log("Data", getData);
    }

    render() {

        return (
            <div className="container">
                <form
                // onSubmit={e => this.onSubmit(e)}
                >
                    <h1 style={{ color: 'green' }}> Your all Added Questions</h1>
                    <br />
                    {this.dataList()}
                    {/* {this.checkAnswer()} */}
                    <div className="form-group">
                        <input type="submit"
                            id="submit"
                            value="Submit Test"
                            className="btn btn-primary"
                            onClick={e => this.onSubmit(e)}
                        />
                    </div>
                </form>
            </div>

        )
    }
}