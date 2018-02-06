import App from 'components/common/App/App.jsx';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';


const render = () => {
    ReactDOM.render(
        <AppContainer>
            <App/>
        </AppContainer>,
        document.getElementById('root')
    );
};

render();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('components/common/App/App.jsx', render);
}