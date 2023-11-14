using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using f1_api.Models;

namespace f1_api.Controllers;

[ApiController]
[Route("[controller]")]
public class FormulaOneController : ControllerBase
{
    private readonly FormulaOneContext context;
    public FormulaOneController(FormulaOneContext _context) {
        context = _context;
    }

    // CRUD OPERATIONS
    //GET
    //Drivers
    [HttpGet("drivers")]
    public async Task<List<Driver>> GetDrivers() {
        List<Driver> drivers = await context.Driver.ToListAsync();
        return drivers;
    }
    [HttpGet("drivers/{id}")]
    public async Task<ActionResult<Driver>> GetDriverById(int id){
        Driver? driver = await context.Driver.FindAsync(id);
        if(driver!=null) {
            return Ok(driver);
        } else {
            return NotFound();
        }
    }
    //doesnt work, need to figure out how to getByName
    [HttpGet("drivers/{name}")]
    public async Task<ActionResult<Driver>> GetDriverByName(string name){
        Driver? driver = await context.Driver.FindAsync(name);
        if(driver!=null){
            return Ok(driver);
        } else {
            return NotFound();
        }
    }

    //Races
    [HttpGet("races")]
    public async Task<List<Race>> GetRaces() {
        List<Race> races = await context.Race.ToListAsync();
        return races;
    }
    [HttpGet("races/{id}")]
    public async Task<ActionResult<Race>> GetRaceById(int id){
        Race? race = await context.Race.FindAsync(id);
        if(race!=null) {
            return Ok(race);
        } else {
            return NotFound();
        }
    }

    //Teams
    [HttpGet("teams")]
    public async Task<List<Team>> GetTeams() {
        List<Team> teams = await context.Team.ToListAsync();
        return teams;
    }
    [HttpGet("teams/{id}")]
    public async Task<ActionResult<Team>> GetTeamById(int id){
        Team? team = await context.Team.FindAsync(id);
        if(team!=null) {
            return Ok(team);
        } else {
            return NotFound();
        }
    }

    //POST 
    //REMEMBER TO ADD PICTURE UPLOAD !!!!!!!!!
    //Drivers
    [HttpPost("drivers")]
    public async Task<ActionResult<Driver>> Post(Driver newDriver) {
        context.Driver.Add(newDriver);
        await context.SaveChangesAsync();
        return CreatedAtAction("Get", new {id = newDriver.Id}, newDriver);
    }
    //Races
    [HttpPost("races")]
    public async Task<ActionResult<Race>> Post(Race newRace) {
        context.Race.Add(newRace);
        await context.SaveChangesAsync();
        return CreatedAtAction("Get", new {id = newRace.Id}, newRace);
    }
    //Teams
    [HttpPost("teams")]
    public async Task<ActionResult<Team>> Post(Team newTeam) {
        context.Team.Add(newTeam);
        await context.SaveChangesAsync();
        return CreatedAtAction("Get", new {id = newTeam.Id}, newTeam);
    }

    //PUT
    //Drivers
    [HttpPut("drivers/{id}")]
    public async Task<ActionResult<Driver>> Put(int id, Driver updatedDriver) {
        Driver? driverToUpdate = await context.Driver.FindAsync(id);
        if(driverToUpdate == null){
            return NotFound();
        }
        context.Entry(driverToUpdate).CurrentValues.SetValues(updatedDriver);
        context.Entry(driverToUpdate).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }
    //Races
    [HttpPut("races/{id}")]
        public async Task<ActionResult<Race>> Put(int id, Race updatedRace) {
        Race? RaceToUpdate = await context.Race.FindAsync(id);
        if(RaceToUpdate == null){
            return NotFound();
        }
        context.Entry(RaceToUpdate).CurrentValues.SetValues(updatedRace);
        context.Entry(RaceToUpdate).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }
    //Teams
    [HttpPut("teams/{id}")]
        public async Task<ActionResult<Team>> Put(int id, Team updatedTeam) {
        Team? teamToUpdate = await context.Team.FindAsync(id);
        if(teamToUpdate == null){
            return NotFound();
        }
        context.Entry(teamToUpdate).CurrentValues.SetValues(updatedTeam);
        context.Entry(teamToUpdate).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }

    //DELETE
    //Drivers
    [HttpDelete("drivers/{id}")]
    public async Task<ActionResult<Driver>> DeleteDriver(int id) {
        Driver? driver = await context.Driver.FindAsync(id);
        if(driver != null) {
            context.Driver.Remove(driver);
            await context.SaveChangesAsync();
        }
        return NoContent();
    }
    //Race
    [HttpDelete("races/{id}")]
    public async Task<ActionResult<Race>> DeleteRace(int id) {
        Race? race = await context.Race.FindAsync(id);
        if(race != null) {
            context.Race.Remove(race);
            await context.SaveChangesAsync();
        }
        return NoContent();
    }
    //Team
    [HttpDelete("teams/{id}")]
    public async Task<ActionResult<Team>> DeleteTeam(int id) {
        Team? team = await context.Team.FindAsync(id);
        if(team != null) {
            context.Team.Remove(team);
            await context.SaveChangesAsync();
        }
        return NoContent();
    }
}
