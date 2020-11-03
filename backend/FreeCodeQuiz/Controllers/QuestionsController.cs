using System.Collections.Generic;
using FreeCodeQuiz.Models;
using Microsoft.AspNetCore.Mvc;

namespace FreeCodeQuiz.Controllers
{
  public class QuestionsController : ControllerBase
  {
    [HttpGet]
    public ActionResult<IEnumerable<Question>> GetAllQuestions()
    {
      
      return Ok();
    } 
  } 
}