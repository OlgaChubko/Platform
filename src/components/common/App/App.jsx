import Tabs from 'components/tabs/Tabs/Tabs.jsx';
import style from './style.scss'

class App extends React.Component {
    render() {
        return (
            <div className = {style.app}>
                {/*<p>This is component App</p>*/}
                <Tabs/>
            </div>
        )
    }
}

export default App;