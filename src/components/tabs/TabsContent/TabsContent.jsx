import TabsContainer from 'components/tabs/TabsContainer/TabsContainer.jsx';
import style from './style.scss'

class TabsContent extends React.Component {
    render() {
        return (
            <div className={style.tabsContent}>
                {/*<p>This is component TabsContent</p>*/}
                <TabsContainer data={this.props.data}/>
            </div>
        );
    }
}

export default TabsContent;