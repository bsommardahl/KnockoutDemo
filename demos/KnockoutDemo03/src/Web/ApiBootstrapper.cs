using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Nancy.Conventions;

namespace Web
{
    public class ApiBootstrapper : Nancy.Bootstrappers.StructureMap.StructureMapNancyBootstrapper
    {
        protected override void ConfigureConventions(NancyConventions nancyConventions)
        {
            nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("content"));
            nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("scripts"));
            nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("viewModels"));
            base.ConfigureConventions(nancyConventions);
        }
    }
}