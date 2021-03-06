﻿using JsonApiDotNetCore.Models;

namespace Optimajet.DWKit.StarterApplication.Models
{
    public class ProductDefinition : Identifiable
    {
        [Attr("name")]
        public string Name { get; set; }

        [HasOne("type")]
        public virtual ApplicationType Type { get; set; }
        public string TypeId { get; set; }

        [Attr("description")]
        public string Description { get; set; }

        [HasOne("workflow")]
        public virtual WorkflowDefinition Workflow { get; set; }
        public int WorkflowId { get; set; }
    }
}
