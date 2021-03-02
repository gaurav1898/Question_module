import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
// import Quill from 'quill'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.core.css'
// import 'react-quill/dist/quill.snow.css'
// var isBase64 = require('is-base64');
// const base64Regex = require('base64-regex');
// var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

// const toolbarContainer = [
//     [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
//     [{ 'font': [] }],
//     [{ 'header': 1 }, { 'header': 2 }],               // custom button values
//     ['bold', 'italic', 'underline'],        // toggled buttons
//     [{ 'align': [] }],
//     [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
//     [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
//     [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//     [{ 'color': [] }, { 'background': [] }],
//     ['image'],
//     ['clean']
// ]
class AddData extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            // text: '',
            // text2: '',
            // image: '',
            // texts: [],
            standard: '',
            subject: '',
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            answer: ''
        }; // You can also pass a Quill Delta here

    };
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    };

    // textChange = (content, delta, source, editor) => {
    //     console.log(editor.getHTML()); // rich text
    //     console.log(editor.getText()); // plain text
    //     console.log(editor.getLength()); // number of characters
    // }


    onSubmit(e) {
        e.preventDefault();
        const question = {
            standard: this.state.standard,
            subject: this.state.subject,
            question: this.state.question,
            option1: this.state.option1,
            option2: this.state.option2,
            option3: this.state.option3,
            option4: this.state.option4,
            answer: this.state.answer,
        }
        console.log(question);
        axios.post('http://localhost:5000/api/question/addQuestion', question)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        // window.location = '/';
    }
    // onSubmit(e) {
    //     e.preventDefault();
    //     // let getData = '';
    //     // let getImage = this.state.text2;
    //     // console.log("Text2", getImage);
    //     // getData = getImage.split(',')[1];
    //     // console.log("Image", getData);
    //     // let finalData = getData.replace(/(<([^>]+)>)/gi, '');
    //     // let submitImage = finalData.replace('">', '');
    //     // console.log("Test");
    //     // console.log("Final-->>>", submitImage);
    //     // this.setState({ text2: submitImage })
    //     // if (isBase64(submitImage) == true) {
    //     //     console.log("IMage contained");
    //     //     let textData = {
    //     //         data: this.state.text,
    //     //         image: submitImage,
    //     //     }
    //     //     // text = quill.getText(0, 10);
    //     //     console.log("Getting Data-->>", textData);
    //     //     // console.log(isBase64(textData));
    //     //     axios.post('http://localhost:5000/api/text/addText', textData)
    //     //         .then(res => {
    //     //             console.log("data--->>>", res.data)
    //     //             // getData = res.data.result.split(',')
    //     //             // this.setState({ text2: submitImage })
    //     //         })
    //     //         .catch(err => console.log(err));
    //     // }

    //     // else {
    //     console.log("Image not added");
    //     let textData = {
    //         data: this.state.text,
    //         image: this.state.text2,
    //     }
    //     // text = quill.getText(0, 10);
    //     // console.log(textData);
    //     // console.log(isBase64(textData));
    //     axios.post('http://localhost:5000/api/text/addText', textData)
    //         .then(res => {
    //             console.log("IMAGE--->>>", res.data)
    //             // getData = res.data.result.split(',')
    //             // this.setState({ image: submitImage })
    //         })
    //         .catch(err => console.log(err));
    //     // }
    //     window.location = '/data';

    // }

    render() {
        return (
            <>
                {/* <div className="editor">
                    <h1 style={{ textAlign: "center", color: "blue" }}>Add New Questions</h1>
                    <ReactQuill
                        theme="snow"
                        modules={{
                            toolbar: {
                                container: toolbarContainer,
                            },
                        }}
                        value={this.state.text}
                        onChange={this.handleChange.bind(this)} />
                    <br></br> */}
                {/* <div className="form-group">
                        <input type="submit" value="Save Data" className="btn btn-primary" onClick={e => this.onSubmit(e)} style={{ textAlign: 'center' }} />
                    </div> */}
                <div className="container">
                    <div className="form-group">
                        Select Class: <select name="standard" id="standard" value={this.state.standard}
                            onChange={e => this.handleChange(e)}>
                            <option value="sixth">Class VI</option>
                            <option value="seventh">Class VII</option>
                            <option value="eighth">Class VIII</option>
                            <option value="nineth">Class IX</option>
                        </select>
                    </div>
                    <div className="form-group">
                        Select Subject: <select name="subject" id="subject" value={this.state.subject}
                            onChange={e => this.handleChange(e)} >
                            <option value="hindi">Hindi</option>
                            <option value="social">Social Science</option>
                            <option value="english">English</option>
                            <option value="maths">Maths</option>
                        </select>
                    </div>
                    <div className="form-group">
                        Enter Question:<textarea placeholder="Enter Question Here" name="question" id="question" value={this.state.question}
                            onChange={e => this.handleChange(e)}></textarea>
                        <br></br>
                                Option 1. <input type="text" name="option1" id="option1" value={this.state.option1} onChange={e => this.handleChange(e)} /><br /><br />
                                Option 2. <input type="text" name="option2" id="option2" value={this.state.option2} onChange={e => this.handleChange(e)} /><br /><br />
                                Option 3. <input type="text" name="option3" id="option3" value={this.state.option3} onChange={e => this.handleChange(e)} /><br /><br />
                                Option 4. <input type="text" name="option4" id="option4" value={this.state.option4} onChange={e => this.handleChange(e)} /><br /><br />
                                Answer: <input type="text" name="answer" id="answer" value={this.state.answer} onChange={e => this.handleChange(e)} /><br /><br />
                    </div>
                    <div className="form-group">
                        <input type="submit" id="submit" value="Save Question" className="btn btn-primary" onClick={e => this.onSubmit(e)} />
                    </div>

                </div>

                {/* </div> */}
            </>
        );
    }
}

export default AddData;