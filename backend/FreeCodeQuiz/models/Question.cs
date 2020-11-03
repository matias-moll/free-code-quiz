using System.ComponentModel.DataAnnotations;

namespace FreeCodeQuiz.Models
{
  public class Question
  {
    [Required]
    public int QuestionId { get; set; }

    [Required]
    public int CategoryId {get;set;}
    public Category Category {get;set;}

    [Required]
    [MaxLength(100)]
    public string question { get; set; }

    [Required]
    public int correctAnswer { get; set; }

    [Required]
    [MaxLength(120)]
    public string hint { get; set; }

    [Required]
    [MaxLength(200)]
    public string answerExplanation { get; set; }

    [Required]
    public bool approved {get;set;}

  }
}