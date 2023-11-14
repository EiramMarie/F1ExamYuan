#nullable disable
using Microsoft.EntityFrameworkCore;

public class FormulaOneContext : DbContext {
    public FormulaOneContext(DbContextOptions<FormulaOneContext> options): base(options){}

    public DbSet<f1_api.Models.Driver> Driver {get; set;}
    public DbSet<f1_api.Models.Race> Race {get; set;}
    public DbSet<f1_api.Models.Team> Team {get; set;}
}