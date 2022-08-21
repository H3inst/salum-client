import { Link } from 'react-router-dom';

import routes from '../../constants/routes';
import LoginSvg from '../../assets/access/login.svg';

function AccessLogin() {

  const render = () => {
    return (
      <div className="access-card">
        <img
          src={LoginSvg}
          className="image__responsive mb-10"
          alt="login"
          width={300}
        />
        <h1 className="typography typography__header mb-20">
          With Salum your classrooms will be different now
        </h1>
        <input
          type="email"
          className="textfield textfield__filled w-100 mb-10"
          placeholder="Type here your awesome email"
          name="user_email"
        />
        <button className="button button__primary button__large w-100">
          Next
        </button>
        <Link to={routes.accessSignup} className="typography typography__link mt-20">
          Have no account? Create here
        </Link>
      </div>
    );
  };

  return render();
}

export default AccessLogin;