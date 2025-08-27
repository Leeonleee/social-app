import React from 'react';
import { theme } from '../../constants/theme';
import ArrowLeft from './ArrowLeft';
import Call from './Call';
import Camera from './Camera';
import Comment from './Comment';
import Delete from './Delete';
import Edit from './Edit';
import Heart from './Heart';
import Home from './Home';
import Image from './Image';
import Location from './Location';
import Lock from './Lock';
import Logout from './logout';
import Mail from './Mail';
import Plus from './Plus';
import Search from './Search';
import Send from './Send';
import Share from './Share';
import ThreeDotsCircle from './ThreeDotsCircle';
import ThreeDotsHorizontal from './ThreeDotsHorizontal';
import User from './User';
import Video from './Video';

type IconName = 
    | 'home'
    | 'mail'
    | 'lock'
    | 'user'
    | 'heart'
    | 'plus'
    | 'search'
    | 'location'
    | 'call'
    | 'camera'
    | 'edit'
    | 'arrowLeft'
    | 'threeDotsCircle'
    | 'threeDotsHorizontal'
    | 'comment'
    | 'share'
    | 'send'
    | 'delete'
    | 'logout'
    | 'image'
    | 'video';

type IconComponent = React.ComponentType<any>;

const icons: Record<IconName, IconComponent> = {
    home: Home,
    mail: Mail,
    lock: Lock,
    user: User,
    heart: Heart,
    plus: Plus,
    search: Search,
    location: Location,
    call: Call,
    camera: Camera,
    edit: Edit,
    arrowLeft: ArrowLeft,
    threeDotsCircle: ThreeDotsCircle,
    threeDotsHorizontal: ThreeDotsHorizontal,
    comment: Comment,
    share: Share,
    send: Send,
    delete: Delete,
    logout: Logout,
    image: Image,
    video: Video,
} as const;

type IconProps = {
    name: IconName;
    size?: number;
    strokeWidth?: number;
    color?: string;
    [key: string]: any;
};

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
    const IconComponent = icons[name];
    return (
        <IconComponent
            height={props.size || 24}
            width={props.size || 24}
            strokeWidth={props.strokeWidth || 1.9}
            color={theme.colors.textLight}
            {...props}
        />
    );
};

export default Icon;
