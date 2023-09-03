function FileItem({ title, icon, colorClass = 'menu-icon', addActiveTab = (_) => { }, }) {
    return (
        <div onClick={() => addActiveTab(title)} className="file-item">
            <i className={`${colorClass} fa-solid ${icon}`}></i>
            <p>{title}</p>
        </div>
    );
}

export default FileItem;