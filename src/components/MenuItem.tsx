import React, {useState} from 'react'

import {Link, useRouteMatch } from 'react-router-dom';

import { MenuItemProps } from './models';

import './styles.scss';

const MenuItem = ({data}: MenuItemProps) => {
    const [active, setActive] = useState(false);
    let { url } = useRouteMatch();
    

    const toggle = () => {
      setActive(!active);
    };
  
    const generateChildren = () => {
      if (!data.children) return;
      return data.children.map((child) => (
        <li key={child.id}>
          <Link to={`${url}/`}>
        <MenuItem data={child} />
        </Link>
        </li>
      ));
    };
    
    return (
        <li className="menu-item">

            <Link to={data.url} onClick={toggle}>
                {data.name}
            </Link>

            <ul className="menu-item child">
                {active && generateChildren()}
            </ul>
        </li>


    )
}

export default MenuItem;
