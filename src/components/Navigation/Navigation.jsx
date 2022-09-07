
import { NavLink } from 'react-router-dom';
import {VideoFilter} from '../VideoPage/videoFilter/VideoFilter'
import s from './Navigation.module.css';

export default function Navigation() {
    return (
<div className={s.conteiner}>
    <nav className={s.linkComteiner}>
    <NavLink
     className={({ isActive }) =>
     `${s.list}` + (isActive ? ` ${s.carrentColor}` : '')}
    to='/'>Home</NavLink>
    <NavLink
     className={({ isActive }) =>
     `${s.list}` + (isActive ? ` ${s.carrentColor}` : '')}
    to='/video'>Video lessons</NavLink>
    </nav>
    <VideoFilter/>
</div>);
};