export const Questions = [
  {
    id: 1,
    category: "pets",
    question: "Which pet is superior?",
    answers: {
      answer_a: "Cat",
      answer_b: "Dog",
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
  },
];

export function randomQuestion() {
  return Questions[Math.trunc(Math.random() * Questions.length)];
}
