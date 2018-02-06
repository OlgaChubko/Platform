import style from './style.scss'

class TabsContainer extends React.Component {
    render() {
        return (
            <div>
                {/*<p className={style.tabsContainer}>This is component TabsContainer</p>*/}
                <p>{this.props.data}</p>
            </div>
        )
    }
}

export default TabsContainer;