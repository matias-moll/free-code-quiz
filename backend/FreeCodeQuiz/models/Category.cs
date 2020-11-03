using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FreeCodeQuiz.Models
{
  public class Category
  {
    [Required]
    public int CategoryId { get; set; }
    [Required]
    public string Description { get; set; }

    public ICollection<Question> Questions {get;set;}
  }
}