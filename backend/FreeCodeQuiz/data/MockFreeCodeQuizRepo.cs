using System.Collections.Generic;
using FreeCodeQuiz.Models;

namespace FreeCodeQuiz.Data
{
  public class MockFreeCodeQuizRepo : IFreeCodeQuizRepo
  {
    public void AddQuestion(Question questionToAdd)
    {
      throw new System.NotImplementedException();
    }

    public IEnumerable<Question> GetAllQuestions()
    {
      Category javascript = new Category{CategoryId=1, Description="Javascript"};
      return new List<Question>()
      {
        new Question{QuestionId=1, CategoryId=1, question="is this a testing question?", hint="yes", 
                    answerExplanation="it simply is", approved=true, correctAnswer=1,  Category=javascript},
        new Question{QuestionId=2, CategoryId=1, question="is this another testing question?", hint="no", 
                    answerExplanation="it isnt", approved=true, correctAnswer=2,  Category=javascript}
      };
    }

    public IEnumerable<Question> GetQuestionsByCategory(int categoryId)
    {
      throw new System.NotImplementedException();
    }
  }
}