import React from 'react'

import {bands, genres, musicians} from "./utils"

import MenuItem from "./MenuItem";

import "./styles.scss";

const Menu = () => {

    const menuList = () => {

        return genres.map((genre) => {
            return {
                id: genre.id,
                name: genre.name,
                url: `/${genre.name}/`,
                children: bands
            .filter((band) => genre.bands.includes(band.id))
            .map((band) => {
                return {
                    id: band.id,
                    name: band.name,
                    url: `/${genre.name}/${band.name}`.replaceAll(' ', '-'),
                    children: musicians
                    .filter((musician) => band.musicians.includes(musician.id))
                    .map((musician) => {
                        return {
                            id: musician.id,
                            name: musician.name,
                            url: `/${genre.name}/${band.name}/${musician.name}`.replaceAll(' ', '-')
                        }
                    })
                }
            })
            }
        })
    }

    const returnMenu = () => {
        const data = menuList();

       return data.map((item) => {
           return <MenuItem data={item} key={item.id} />
       })
    }

    console.log(menuList());
    return (
        <div className="menu-container" >
           <ul className="menu-list">{returnMenu()}</ul>
        </div>
    )
}

export default Menu;
