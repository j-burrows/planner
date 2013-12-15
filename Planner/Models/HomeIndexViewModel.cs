using System.Collections.Generic;
using InfastructureLib;
using InfastructureLib.Data.Entities;
using PlannerLib;
using PlannerLib.Data.Entities;
namespace Planner.Models{
    public class HomeIndexViewModel{
        public IEnumerable<IEnumerable<DPage>> navSection { get; set; }
        public IEnumerable<DEvent> events { get; set; }

        public HomeIndexViewModel() {}

        public static HomeIndexViewModel ForUserPage(string username, int Page_ID){
            IInfastructureService infastructure = new InfastructureService();
            IPlannerService plannerService = new PlannerService();
            
            return new HomeIndexViewModel {
                navSection = infastructure.PageStructure_GetBySelected(Page_ID),
                events = plannerService.Event_GetByUser(username)
            };
        }
    }
}