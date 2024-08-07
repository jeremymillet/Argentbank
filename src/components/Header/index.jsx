import { useDispatch, useSelector } from 'react-redux';
import './Header.css'
import { setFirstName, setLastName, setToken } from '../../store';
import { useNavigate } from 'react-router-dom';


function Header({ logo }) {
  const login = useSelector((state) => state.login);
  const firstName = useSelector((state) => state.firstName);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function signOut() {
    dispatch(setFirstName(""));
    dispatch(setLastName(""));
    dispatch(setToken(""));
    navigate("/login")
  }
    return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
        </a>
        {login ?
          <div>
          <a className="main-nav-item" href="#">
          
          <i className="fa fa-user-circle"></i>
          {firstName}
            </a>
            <div onClick={signOut}>
            <i className="fa-solid fa-arrow-right-from-bracket main-nav-item"></i>
            Sign out
            </div>
        </div> :
          <div>
          <a className="main-nav-item" href="/login">
          
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>}
    </nav>
    )
}

export default Header