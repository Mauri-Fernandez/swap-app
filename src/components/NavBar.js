import React , {useState} from 'react';
import { SidebarData }    from './Sidebar';
import { Link }           from 'react-router-dom';
import '../App.css';
import '../components/NavBar.css';
/* Start [MRF 2021-08-10] icon imports from react icons */
import * as FaIcons       from 'react-icons/fa';
import * as AiIcons       from 'react-icons/ai';
import { IconContext }    from 'react-icons';
/* End   [MRF 2021-08-10] icon imports from react icons */

const NavBar = () => {
  const [sidebar,setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value = { {color:'rgb(122, 110, 170)'} }>
        <div className = "navBar">
          <Link to = "#" className = 'menu-bars'>
            <FaIcons.FaBars onClick = { showSidebar }/>
          </Link>
        </div>
        <nav className = { sidebar ? 'nav-menu active' : 'nav-menu' }>
          <ul className = 'nav-menu-items' >
              <li className = 'navbar-toggle'>
                  <Link to = "#" className = 'menu-bars'>
                    <AiIcons.AiOutlineClose onClick = { showSidebar } />
                  </Link>
              </li>
              {
                  SidebarData.map((item,index) =>
                  {
                      return(
                          <li key = { index } className = { item.cName }>
                              <Link to = { item.path }>
                                  {item.icon}
                                  <span>{item.title}</span>
                              </Link>
                          </li>
                      )
                  })
              }
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default NavBar;