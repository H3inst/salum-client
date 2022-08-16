import classNames from 'classnames';
import { generatePath, NavLink } from 'react-router-dom';
import routes from '../../../constants/routes';

function Sidebar() {

    const testData = [
        {
            subject_id: 'o92F92gVs2',
            subject_name: 'Matematicas'
        },
        {
            subject_id: '2foVis35kL',
            subject_name: 'Sociales'
        },
        {
            subject_id: 'g3lfaAf3kf',
            subject_name: 'Naturales'
        },
        {
            subject_id: 'oP3kSmv94f2',
            subject_name: 'Filosofia'
        },
        {
            subject_id: 'mA2kf032jaW',
            subject_name: 'Ingles'
        },
    ];

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
                    {testData.map((subject) => (
                        <NavLink
                            key={subject.subject_id}
                            to={generatePath(routes.workspaceSubjectId, {
                                subjectId: subject.subject_id
                            })}
                            className={({ isActive }) => classNames(
                                "workspace-sidebar__list-item",
                                isActive && "list-item__active"
                            )}
                        >
                            <div className="circle mr-10" style={{ backgroundColor: '#aaa' }}></div>
                            {subject.subject_name}
                        </NavLink>
                    ))}
                </div>
            </div>
        );
    };

    return render();
}

export default Sidebar;