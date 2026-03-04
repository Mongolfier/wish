import { themes } from 'storybook/theming';

import '../src/assets/fonts/Montserrat.css';

export default {
	tags: ['autodocs'],
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
};
