﻿using System;
using JsonApiDotNetCore.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Optimajet.DWKit.StarterApplication.Models;
using OptimaJet.DWKit.StarterApplication.Services;

namespace Optimajet.DWKit.StarterApplication.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ProductDefinitionsController : BaseController<ProductDefinition>
    {
        public ProductDefinitionsController(
            IJsonApiContext jsonApiContext,
            IResourceService<ProductDefinition> resourceService,
            ICurrentUserContext currentUserContext,
            OrganizationService organizationService,
            UserService userService)
            : base(jsonApiContext, resourceService, currentUserContext, organizationService, userService)
        {
        }
    }
}
