import React from "react";

function Tab({ handleClick, closeTab, title }) {
    return (<div className="tab">
        <div onClick={handleClick} className="tab-title">{title}</div>
        <i onClick={() => closeTab(title)} class="fa-solid fa-x"></i>
    </div>);
}

export default Tab;