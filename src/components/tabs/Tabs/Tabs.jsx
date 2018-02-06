import TabsTitles from 'components/tabs/TabsTitles/TabsTitles.jsx';
import TabsContent from 'components/tabs/TabsContent/TabsContent.jsx';
import style from './style.scss'


class Tabs extends React.Component {
    constructor(args){
        super(args);
        this.state= {index: 3};
    }

    handleClick(index) {
        this.setState({
            index: index
        });
    }

    render() {
        let data = [
            {
                title: 'About us',
                content: "This is content of title About us"
            },

            {
                title: 'Services',
                content: "This is content of title Services"
            },

            {
                title: 'News',
                content: "This is content of title News"
            },

            {
                title: 'Contact',
                content: "This is content of title Contact"
            },

        ];
        let dataForTabsTitles = [];
        let index = this.state.index;
        for (let i = 0; i < data.length; i++) {
            dataForTabsTitles.push(data[i].title);
        }

        return (
            <div className={style.tabs}>
                <TabsTitles data={dataForTabsTitles} handleClick={this.handleClick.bind(this)}/>
                <TabsContent data={data[index].content}/>
            </div>
        )
    }
}

export default Tabs;