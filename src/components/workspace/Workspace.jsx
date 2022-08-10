// import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';

function Workspace() {

    const render = () => {
        return (
            <section className="workspace-layout">
                <Topbar />
                <div className="workspace-body">
                    <Sidebar />
                    <main className="main-content">
                        <Outlet />
                    </main>
                </div>
            </section>
        );
    };

    return render();
}

export default Workspace;