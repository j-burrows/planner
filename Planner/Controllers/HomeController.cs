using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Planner.Models;
using PlannerLib;
using PlannerLib.Business;
using PlannerLib.Data.Entities;

namespace Planner.Controllers{
    [Authorize]
    public class HomeController : Controller{
        private IPlannerService service;

        public HomeController() { 
            service = new PlannerService();
        }

        public ActionResult Index(string request = "Url2"){
            return View(HomeIndexViewModel.ForUserPage(User.Identity.Name, 32));
        }

        [HttpPost]
        public ActionResult Event_Create(DEvent creating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Event_Update(DEvent updating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Event_Delete(DEvent deleting) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Event_Type_Create(DEvent_Type creating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Event_Type_Update(DEvent_Type updating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Event_Type_Delete(DEvent_Type deleting) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Place_Create(DPlace creating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Place_Update(DPlace updating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Place_Delete(DPlace deleting) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Urgency_Create(DUrgency creating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Urgency_Update(DUrgency updating) {
            return View("Index");
        }

        [HttpPost]
        public ActionResult Urgency_Delete(DUrgency deleting) {
            return View("Index");
        }
    }
}
