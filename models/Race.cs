using System.ComponentModel.DataAnnotations;
namespace f1_api.Models;

public class Race {
    [Key]
    public int Id {get; set;}
    public string WinnerName {get; set;} = "";
    public string WinnerTime {get; set;} = "";
    public string Country {get; set;} = "";
    public int NumberOfLaps {get; set;}
}