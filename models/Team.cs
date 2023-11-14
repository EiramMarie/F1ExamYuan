using System.ComponentModel.DataAnnotations;
namespace f1_api.Models;

public class Team {
    [Key]
    public int Id {get; set;}
    public string Manufacturer {get; set;} = "";
    public string Driver1 {get; set;} = "";
    public string Driver2 {get; set;} = "";
    public string CarImage{get; set;} = "";
}