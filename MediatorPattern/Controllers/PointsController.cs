using System.Web.Mvc;

namespace MediatorPattern.Controllers
{
    public class PointsController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}