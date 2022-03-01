export function randomQuestion() {
    return Questions[Math.trunc(Math.random() * Questions.length)];
}

export function isCorrectAnswer(question, answer) {
    return question.correct_answers[answer + "_correct"] === "true";
}

export const Questions = [
    {
        id: 1,
        question:
            "What is my name?",
        description: null,
        answers: {
            answer_a: 'Camilla',
            answer_b: 'Magnus',
        },
        multiple_correct_answers: "false",
        correct_answers: {
            answer_a_correct: "true",
            answer_b_correct: "false",
        },
    },
    {
        id: 2,
        question:
            'What year is it?',
        description: null,
        answers: {
            answer_a: '2022',
            answer_b: '2019',
        },
        multiple_correct_answers: "false",
        correct_answers: {
            answer_a_correct: "true",
            answer_b_correct: "false",
        },
    },
];