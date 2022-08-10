import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from '../../constants/routes';

import Access from '../../components/access/Access';
import AccessLogin from '../../components/access/AccessLogin';
import AccessSignup from '../../components/access/AccessSignup';
import Workspace from '../../components/workspace/Workspace';

function RootRouter() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Access */}
                <Route path={routes.access} element={<Access />}>
                    <Route index element={<AccessLogin />} />
                    <Route path={routes.accessSignup} element={<AccessSignup />} />
                </Route>

                {/* Workspace */}
                <Route path={routes.workspace} element={<Workspace />}>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RootRouter;