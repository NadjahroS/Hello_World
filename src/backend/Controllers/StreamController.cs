using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    public class StreamController : ControllerBase
    {
        [HttpGet("/token")]
        public IActionResult GetToken()
        {
            var path = "key.json";
            var key = System.IO.File.ReadAllText(path);
            Response.Headers.Append("Access-Control-Allow-Origin", "http://localhost:4200");
            Response.Headers.Append("Access-Control-Allow-Credentials", "true");

            return Ok(key);
        }
    }
}


