import React  from 'react'; 

/* Start [MRF 2021-08-10] icon imports from react icons */
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';
/* End   [MRF 2021-08-10] icon imports from react icons */

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:'Exchange',
        path:'/exchange',
        icon:<FaIcons.FaExchangeAlt/>,
        cName: 'nav-text'
    },
    {
        title:'Pools',
        path:'/pools',
        icon:<GiIcons.GiHeartBottle/>,
        cName: 'nav-text'
    },
    {
        title:'Collectibles',
        path:'/collectibles',
        icon:<FaIcons.FaCubes/>,
        cName: 'nav-text'
    },
    {
        title:'More',
        path:'/more',
        icon:<BiIcons.BiDotsHorizontalRounded/>,
        cName: 'nav-text'
    },

]