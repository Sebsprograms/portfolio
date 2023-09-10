import React from "react";

function Tab({ focusTab, handleClick, closeTab, title }) {
    return (<div onClick={handleClick} className="tab light-border-right">
        <div onClick={() => focusTab(title)} className="tab-title">{title}</div>
        <i onClick={() => closeTab(title)} className="fa-solid fa-x"></i>
    </div>);
}

export default Tab;