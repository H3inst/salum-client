import { Outlet } from 'react-router-dom';

function Access() {

    const render = () => {
        return (
            <section className="access-layout">
                <h1 className="typography display-1 text-primary fw-bolder mt-20 mb-30">
                    Salum
                </h1>
                <Outlet />
            </section>
        );
    };

    return render();
}

export default Access;