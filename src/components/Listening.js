import { useEffect, useState } from 'react'
import { TestLayout } from './TestLayout'

const grammars = [
    {
        question: 'What do you want to do with this route?',
        answerOptions: ['a', 'b', 'c', 'd'],
        answer: 'a',
    },
    {
        question: 'What do you want to do with this route?',
        answerOptions: ['e', 'bs', 'cqw', 'dqr'],
        answer: 'a',
    },
    {
        question: 'What do you want to do with this route?',
        answerOptions: ['awewq', 'b2e', 'c3', 'd23'],
        answer: 'a',
    },
    {
        question: 'What do you want to do with this route?',
        answerOptions: ['what', 'do', 'you', 'want'],
        answer: 'a',
    },
]


export function Listening() {
    return (
        <>
            <TestLayout />
            <div className="mx-auto mt-4 wrap w-75">
                <h1 className="text-center title ">Nghe hiểu</h1>
                {grammars.map((grammar, i) => {
                    return (
                        <div key={i}>
                            <h2>{grammar.question}</h2>
                            {grammar.answerOptions.map((answer, index, arr) => {
                                return (
                                    <div key={index}>
                                        <input key={index} type="radio" name={arr[0]} id={answer} value={answer} />
                                        <label htmlFor={answer}>{answer}</label>
                                        <br />
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            <button type="button" className="btn btn-outline-primary">
                Primary
            </button>
            </div>
        </>
    )
}
