using System;

namespace OptimaJet.DWKit.StarterApplication.Utility
{
    public static class EnvironmentHelpers
    {
        public static string GetVarOrDefault(string name, string defaultValue)
        {
            var variable = Environment.GetEnvironmentVariable(name);

            return string.IsNullOrEmpty(variable) ? defaultValue : variable;
        }

        public static string GetVarOrThrow(string name)
        {
            var variable = Environment.GetEnvironmentVariable(name);

            if (string.IsNullOrEmpty(variable)) {
                throw new System.Exception("Env var: " + name + " is not defined");
            }

            return variable;
        }
    }
}
