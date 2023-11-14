using Microsoft.AspNetCore.Mvc;
namespace f1_api.Controllers;

[ApiController]
[Route("[controller]")]
public class ImageUploadController : ControllerBase {
    private readonly IWebHostEnvironment hosting;
    public ImageUploadController(IWebHostEnvironment _hosting) {
        hosting = _hosting;
    }

    [HttpPost]
    public IActionResult SaveImage(IFormFile file) {
        string wwwrootPath = hosting.WebRootPath;
        string absolutePath = Path.Combine($"{wwwrootPath}/images/{file.FileName}");
        using(var fileStream = new FileStream(absolutePath, FileMode.Create)) {
            file.CopyTo(fileStream);
        }
        return Ok();
    }
}