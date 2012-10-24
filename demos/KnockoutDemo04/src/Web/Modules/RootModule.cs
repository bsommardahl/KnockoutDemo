using Nancy;

namespace Web.Modules
{
    public class RootModule : NancyModule
    {
        public RootModule()
        {
            SetupRoutes();
        }

        void SetupRoutes()
        {
            Get["/"] = _ => View["main"];
        }
    }
}