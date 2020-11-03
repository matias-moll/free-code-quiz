using System.Collections.Generic;
using FreeCodeQuiz.Models;

namespace FreeCodeQuiz.Data
{
  public interface IFreeCodeQuizRepo
  {
    IEnumerable<Question> GetAllQuestions();
    IEnumerable<Question> GetQuestionsByCategory(int categoryId);
    void AddQuestion(Question questionToAdd);
  }
}