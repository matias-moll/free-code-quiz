using System.Collections.Generic;
using FreeCodeQuiz.Data;
using FreeCodeQuiz.Models;
using Microsoft.AspNetCore.Mvc;

namespace FreeCodeQuiz.Controllers
{
  [Route("api/questions")]
  [ApiController]
  public class QuestionsController : ControllerBase
  {
    private IFreeCodeQuizRepo _repository;

    public QuestionsController(IFreeCodeQuizRepo repository)
    {
      _repository = repository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Question>> GetAllQuestions()
    {
      IEnumerable<Question> questions = _repository.GetAllQuestions();
      return Ok(questions);
    } 
  } 
}