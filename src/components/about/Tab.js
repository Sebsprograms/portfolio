import React from "react";

function Tab({ handleClick, closeTab, title }) {
    return (<div onClick={handleClick} className="tab light-border-right">
        <div className="tab-title">{title}</div>
        <i onClick={() => closeTab(title)} class="fa-solid fa-x"></i>
    </div>);
}

export default Tab;