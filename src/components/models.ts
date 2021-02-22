interface GeneralProps {
    id: number;
    name: string;
}


export interface GenresProps extends GeneralProps{
bands: number[];
}

export interface BandsProps extends GeneralProps {
musicians: number[];
}

export interface MusiciansProps extends GeneralProps {}

export interface MenuItem {
    id: number;
    name: string;
    url: string;
    children?: MenuItem[];
}

export interface MenuItemProps {
    data: MenuItem;
}