using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    public class StreamController : ControllerBase
    {
        [HttpGet("/token")]
        public IActionResult GetToken()
        {
            return Ok("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYmxhY2stc3Rhci05IiwiZXhwIjoxNzAwNzQ5MTMwfQ.jYdmpiqIE7XHfsYINUexNMY8O7bhS1QEfb4FklrZle4");
        }
    }
}


