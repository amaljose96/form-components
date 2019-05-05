import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import ThemeProvider from './Store/ThemeProvider';
import StoryBook from './StoryBook';
import fontInjector from './FormComponents/fontInjector';



let ThemedStoryBook=fontInjector(StoryBook);

ReactDOM.render( <ThemeProvider>
    <ThemedStoryBook/>
  </ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
