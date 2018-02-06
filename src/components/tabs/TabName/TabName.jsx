import style from './style.scss'

class TabName extends React.Component {
    render() {
        let data = this.props.data;
        let index = this.props.index;
        let handleClick = this.props.handleClick.bind(null, index);

        return (
            <div>
                <div  onClick={handleClick} className = {style.tabName}>{data}</div>
            </div>
            )
    }
}

export default TabName;