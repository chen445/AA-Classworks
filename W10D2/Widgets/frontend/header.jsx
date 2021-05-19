import React from 'react';

class Header extends React.Component {
    constructor(props) { // props = [tab: {tab}, updateTab: {fn}, idx: {num}]
        super(props);
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab() {
        this.props.updateTab(this.props.idx);
    }

    render() {
        return (
            <li>
                <h1 onClick={this.selectTab}>{this.props.tab.title}</h1>
            </li>
        )
    }
}

export default Header;