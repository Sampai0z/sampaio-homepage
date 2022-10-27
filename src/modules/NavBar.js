import { Link } from 'react-router-dom';
import "./NavBar.css";


export default function NavBar(){
  return (
  <div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <spam className='nav-bar'>
            <Link to='/' className='nav-bar__image'>Home</Link>
          </spam>
        </div>
        <div className='col-md-6'>
          <nav className='nav-bar'>
            <ul className='nav-bar__list'>
              <li>
                <Link to='/' className='nav-bar__link'>Home</Link>
              </li>
              <li>
                <Link to='/about' className='nav-bar__link'>About</Link>
              </li>
              <li>
                <Link to='/works' className='nav-bar__link'>Portifolio</Link>
              </li>
              <li>
                <Link to='/contact-me' className='nav-bar__link'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  );
};