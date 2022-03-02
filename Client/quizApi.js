import { fetchJSON, submitJSON } from "./http";

// Implementation of the APIs we need
export class QuizApi {
  async getQuestion() {
    return await fetchJSON("/api/question");
  }

  async checkAnswer(id, answer) {
    return await submitJSON("api/question", "post", { id, answer });
  }
}
