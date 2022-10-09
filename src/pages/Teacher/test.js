import {Component} from 'react';

export class TestC extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    addKanjiQuestion = () => {
        const kanjiQuestion = document.getElementById('kanjiQuestion');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Question');
        input.setAttribute('className', 'form-control');
        input.setAttribute('id', 'input-kanjiQuestion');
        kanjiQuestion.appendChild(input);
    }
    saveQuestion = () =>{
        const kanjiQuestion = document.getAllElementById('input-kanjiQuestion');
        console.log(kanjiQuestion);
        // kanjiQuestion.childNodes.forEach((item) => {
        //     console.log(item);
        // })
    }
    render() {
        return (
            <div>
                <div id="kanjiQuestion">

                </div>
                <button type="button" className="btn btn-primary" onClick={this.addKanjiQuestion}>Add Question</button>
                <button type="button" className="btn btn-primary" onClick={this.saveQuestion}>Save</button>
            </div>
        );
    }
}