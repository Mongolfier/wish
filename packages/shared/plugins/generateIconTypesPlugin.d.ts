import { PluginOption } from "vite";

type GenerateIconTypesPluginOptions = {
  iconDir?: string;
  outputDir?: string; // project root
};

export function generateIconTypesPlugin(
  args?: GenerateIconTypesPluginOptions
): PluginOption;
