import {Component} from 'react';

export class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    addKanjiQuestion = () => {
        const kanjiQuestion = document.getElementById('kanjiQuestion');
        let date = new Date().getTime().toString();
        const div = document.createElement('div');
        div.setAttribute('id', "question")
        div.setAttribute('className', `${date}`);

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Question');
        input.setAttribute('className', 'form-control');
        input.setAttribute('id', 'input-question');
        div.appendChild(input);

        const optionDiv = document.createElement('div');
        optionDiv.setAttribute('id', 'optionDiv');
        div.appendChild(optionDiv);

        const addOption = () => {

            const inputCheck = document.createElement('input');
            inputCheck.setAttribute('type', 'checkbox');
            inputCheck.setAttribute('className', 'form-check-input');
            inputCheck.setAttribute('id', 'exampleCheck1');
            optionDiv.appendChild(inputCheck);

            const labelCheck = document.createElement('input');
            labelCheck.setAttribute('type', 'text');
            labelCheck.setAttribute('placeholder', 'Option');
            labelCheck.setAttribute('className', 'form-control');
            labelCheck.setAttribute('id', 'optionKanji');
            optionDiv.appendChild(labelCheck);
        }


        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('className', 'btn btn-primary');
        button.addEventListener('click', addOption);
        button.innerHTML = 'Add option';
        div.appendChild(button);

        kanjiQuestion.appendChild(div);

    }
    saveKanjiQuestion = () => {
        const kanjiQuestion = document.querySelectorAll('#input-question');
        console.log(kanjiQuestion);
    }
    render() {
        return (
            <div>
                <h1>Add Form</h1>
                <div>
                    <h1>kanji question</h1>
                    <button type="button" className="btn btn-primary" onClick={this.addKanjiQuestion}>Add kanji question</button>
                    <div id="kanjiQuestion">
                        </div>
                    <button type="button" className="btn btn-primary" onClick={this.saveKanjiQuestion}>Save kanji question</button>
                </div>
            </div>
        );
    }
}