using System.ComponentModel.DataAnnotations;
namespace f1_api.Models;

public class Driver {
    [Key]
    public int Id {get; set;}
    public string Name {get; set;} = "";
    public int Age {get; set;}
    public string Nationality {get; set;} = "";
    public string DriverImage {get; set;} = "";
}