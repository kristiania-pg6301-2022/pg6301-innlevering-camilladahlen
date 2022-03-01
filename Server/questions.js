export const Questions = [
  {
    id: 1,
    category: "pets",
    question: "Which pet is superior?",
    answers: {
      answer_a: "Cat",
      answer_b: "Dog",
    },
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "true",
    },
  },
  {
    id: 2,
    category: "pets",
    question: "Does your pet love you?",
    answers: {
      answer_a: "Yes",
      answer_b: "No",
    },
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
    },
  },
];

export function randomQuestion() {
  return Questions[Math.trunc(Math.random() * Questions.length)];
}

/// Checks whether the answer passed in is the correct one for a given question id.
/// The format of 'answer' should be 'answer_x', where x is a,b,c,d etc...
export function isCorrectAnswer(id, answer) {
  const question = Questions.find((q) => q.id === id);
  return question.correct_answers[answer + "_correct"] === "true";
}
