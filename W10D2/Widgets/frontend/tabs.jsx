import React from 'react';
import Header from './header'

class Tabs extends React.Component {
    constructor(props) {  // [{title: 'one', content: 'I have one'}, {title: 'two', content: 'I have two'}, {title: 'three', content: 'I have three'}]
        super(props);
        this.state = {tabIndex: 0}
        this.updateTab = this.updateTab.bind(this);
    }

    updateTab(idx) {
        this.setState({tabIndex: idx})
    }

    render() {
        let mappedTabs = this.props.tabInfo.map((tab, idx) => {
            return <Header key={idx} tab={tab} updateTab={this.updateTab} idx={idx}/>
        })
        return (
            <div className="tab">
                <h1>Tabs</h1>
                <div className="tab2">
                    <div className="select-tab">
                        <ul className="header">
                            {mappedTabs}
                        </ul>
                    </div>
                    <div>
                        <section className="content">{this.props.tabInfo[this.state.tabIndex].content}</section>
                    </div>
                </div>
            </div>
        )
    }
}


export default Tabs;