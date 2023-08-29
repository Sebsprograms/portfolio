import React from "react";

function Tab(props) {
    const handleClick = props.handleClick;
    const closeTab = props.closeTab;
    const title = props.title;
    return (<div className="tab">
        <div className="tab-title">{props.title}</div>
    </div>);
}