import type { Preview } from "@storybook/react-vite";
import { themes } from 'storybook/theming';

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: 'black' },
      light: { ...themes.normal, appBg: 'white' }
    },
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#0b1016" }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
