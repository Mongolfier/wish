import { themes } from 'storybook/theming';
import '../src/assets/fonts/Montserrat.css';

export default {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}
