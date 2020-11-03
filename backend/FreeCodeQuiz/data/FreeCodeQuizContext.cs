using FreeCodeQuiz.Models;
using Microsoft.EntityFrameworkCore;

namespace FreeCodeQuiz.Data
{
  public class FreeCodeQuizContext : DbContext
  {
    public FreeCodeQuizContext(DbContextOptions<FreeCodeQuizContext> options) : base(options)
    {
        
    }

    public DbSet<Question> Questions { get; set; }
    public DbSet<Category> Categories { get; set; }
  }
}