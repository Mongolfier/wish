import { themes } from 'storybook/theming';

import '../src/assets/themes/default.css';
import '../src/assets/fonts/Montserrat.css';
import './preview.css';

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
		options: {
			storySort: {
				order: ['Introduction', 'Tokens', 'Assets', 'Core', 'Elements', 'Molecules', 'Organisms', '*'],
				includeNames: true,
			},
		},
	},
};
