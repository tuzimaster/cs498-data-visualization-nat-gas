using Microsoft.AspNetCore.Mvc;

namespace nat_gas_d3.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
