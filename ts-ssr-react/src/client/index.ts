
import * as React from 'react';

import * as ReactDOM from 'react-dom';

import App from './component/app/App';

function renderApp() {
    (ReactDOM as any).hydrate(
        <App />,
    document.getElementById('app'),
    );
}

window.onload = () => {
    renderApp();
};
