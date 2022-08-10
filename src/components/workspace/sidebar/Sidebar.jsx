function Sidebar() {

    const render = () => {
        return (
            <div className="workspace-sidebar">
                <div className="workspace-sidebar__header">
                    <img src="https://miro.medium.com/max/785/0*8or0oFmHDRKnlETg" alt="" className="workspace-sidebar__header-avatar" />
                    <p className="workspace-sidebar__header-name">Yesid Manjarres</p>
                    <p className="typography typography__subtitle mt-5">Professor</p>
                </div>
                <div className="divider"></div>
                <div className="workspace-sidebar__list">
                    <div className="workspace-sidebar__list-item">
                        <div className="circle mr-10" style={{ backgroundColor: '#aaa' }}></div>
                        Matemáticas
                    </div>
                    <div className="workspace-sidebar__list-item">
                        <div className="circle mr-10" style={{ backgroundColor: '#aaa' }}></div>
                        Ciencias sociales
                    </div>
                    <div className="workspace-sidebar__list-item">
                        <div className="circle mr-10" style={{ backgroundColor: '#aaa' }}></div>
                        Filosofía
                    </div>
                    <div className="workspace-sidebar__list-item">
                        <div className="circle mr-10" style={{ backgroundColor: '#aaa' }}></div>
                        Ciencias naturales
                    </div>
                    <div className="workspace-sidebar__list-item">
                        <div className="circle mr-10" style={{ backgroundColor: '#aaa' }}></div>
                        Inglés
                    </div>
                </div>
            </div>
        );
    };

    return render();
}

export default Sidebar;