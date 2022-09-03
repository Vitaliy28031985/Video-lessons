
import { useSelector } from 'react-redux';
import s from './VideoList.module.css';
import {useDeleteVideoMutation, useGetVideosQuery} from '../../../redux/videoSlice';
import {getFilterList} from '../../../redux/selectors';

export const VideoList = () => {


const {data: videos} = useGetVideosQuery();
const [deleteVideo] = useDeleteVideoMutation();
const filter = useSelector(getFilterList);
const onDeleteVideo = id => deleteVideo(id);


const normalizeFilter = filter.toLowerCase();
const filteredVideos =  videos.filter(video =>
    video.title.toLowerCase().includes(normalizeFilter));

    return (
        <>
        <div className={s.conteiner}>
    <ul className={s.listConteiner}>
     {videos && filteredVideos.map(({id, link, title}) => 
     (<li 
     key={id} 
     id={id}
     className={s.listEl}>
    <div className={s.cartConteiner}>
    <iframe 
    className={s.cartVideo}
    src={link}
    frameborder="1"></iframe>
    <div className={s.cartConteinerTitle}>
    <p className={s.cartTitle}>{title}</p>
    <button className={s.cartButton} 
    onClick={() => onDeleteVideo(id)}
    type="button">
    X</button>
    </div>
    </div>
    </li>))}
            </ul>
        </div>
        <div className={s.affte}></div>
        </>
    );
};

