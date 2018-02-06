import TabName from 'components/tabs/TabName/TabName.jsx';
import style from './style.scss';


class TabsTitles extends React.Component {
    render() {
        let data = this.props.data;
        let handleClick = this.props.handleClick;
        let tabNames = [];
        for (let i = 0; i < data.length; i++) {
            tabNames.push(<TabName data={data[i]} key={i} handleClick={handleClick} index ={i}/>);
        }

        return (
            <div className={style.tabsTitles}>
                {/*<div>This is component TabsTitles</div>*/}
                {tabNames}
            </div>
        )
    }

}

export default TabsTitles;