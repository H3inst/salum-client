import { Link } from 'react-router-dom';

import routes from '../../constants/routes';
import Dropdown from '../elements/Dropdown';

function AccessSignup() {

    const handleGenderChange = (value) => {
        console.log(value.toLowerCase());
    }

    const handleRoleChange = (value) => {
        console.log(value.toLowerCase());
    }

    const render = () => {
        return (
            <div className="access-card">
                <h1 className="typography typography__header mb-20">
                    Create an account easily
                </h1>
                <input
                    type="email"
                    className="textfield textfield__filled w-100 mb-10"
                    placeholder="Type here your name"
                    name="user_name"
                />
                <input
                    type="email"
                    className="textfield textfield__filled w-100 mb-10"
                    placeholder="Type here your email"
                    name="user_email"
                />
                <div className="flex w-100">
                    <Dropdown
                        width="100%"
                        placeholder="Select the gender"
                        options={['Male', 'Female', 'Other']}
                        onChange={handleGenderChange}
                    />
                    <div className="ml-10"></div>
                    <Dropdown
                        width="100%"
                        placeholder="Select your role"
                        options={['Student', 'Professor']}
                        onChange={handleRoleChange}
                    />
                </div>
                <div className="flex mb-10 mt-10">
                    <input
                        type="email"
                        className="textfield textfield__filled w-100 mr-10"
                        placeholder="Secure password"
                        name="user_password"
                    />
                    <input
                        type="email"
                        className="textfield textfield__filled w-100"
                        placeholder="Repeat that password"
                        name="user_confirm_password"
                    />
                </div>
                <button className="button button__primary button__large w-100">
                    Sign up
                </button>
                <Link to={routes.access} className="typography typography__link mt-20">
                    Have an account? Sign in here
                </Link>
            </div>
        );
    };

    return render();
}

export default AccessSignup;