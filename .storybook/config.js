
import { configure, addDecorator } from '@storybook/react';
import {theme} from './../src/ui/theme';
import { withKnobs } from '@storybook/addon-knobs/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';
import { setDefaults } from "@storybook/addon-info";
import '../public/index.css';

addDecorator(withThemesProvider([theme]));
addDecorator(withKnobs);

// addon-info
setDefaults({
    header: true, // Toggles display of header with component name and description
    inline: true, // Displays info inline vs click button to view
    source: true // Displays the source of story Component
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/js/components/stories/', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);