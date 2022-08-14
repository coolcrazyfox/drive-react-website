import { React, useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../images/logodrive.png';
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';
import {Link} from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <img src={Logo} alt='Logo' />
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]} >
          <li>
            <Link to={'/'} >Learn More
              {/*<a href='/le'>Learn More</a>*/}
            </Link>
          </li>
          <li>
            <Link to={'/login'} > Log in
              {/*<a href='/#'>Log in</a>*/}
            </Link>
          </li>
          <li>
            <Link to={'/signup'} >Sign up
              {/*<a href='/#'>Sign up</a>*/}
            </Link>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: '6px' }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: '6px' }} />
          </li>
        </ul>
      </nav>
      <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}

      </div>
    </header>
  );
};

export default Navbar;
