
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
    to='/'>Домашня</NavLink>
    <NavLink
     className={({ isActive }) =>
     `${s.list}` + (isActive ? ` ${s.carrentColor}` : '')}
    to='/video'>Відео уроки</NavLink>
    </nav>
    <VideoFilter/>
</div>);
};