using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JavaScriptpro.Controllers
{
    public class OrderController : Controller
    {
        public IActionResult Order()
        {
            return View();
        }
        public IActionResult SampleForm()
        {
            return View();
        }
    }
}
