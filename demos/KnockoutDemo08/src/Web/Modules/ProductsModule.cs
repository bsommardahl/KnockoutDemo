using Nancy;
using Web.Model;

namespace Web.Modules
{
    public class ProductsModule : NancyModule
    {
        public ProductsModule()
        {
            SetupRoutes();
        }

        void SetupRoutes()
        {
            Get["/api/products"] = _ => ProductRepository.GetAll();
        }
    }
}