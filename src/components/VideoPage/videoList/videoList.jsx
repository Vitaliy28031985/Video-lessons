
import { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './VideoList.module.css';
import {useDeleteVideoMutation, useGetVideosQuery} from '../../../redux/videoSlice';
import {getFilterList} from '../../../redux/selectors';
import {VideoListModal } from './VideoListModal/videoListModal';


export const VideoList = () => {
const [togle, setTogle] = useState(false);
const [evLink, setEvLink] = useState('');

const {data: videos} = useGetVideosQuery();
const [deleteVideo] = useDeleteVideoMutation();
const filter = useSelector(getFilterList);
const onDeleteVideo = id => deleteVideo(id);

const handleTogle = () => {
    setTogle(togle => !togle);
}

const normalizeFilter = filter.toLowerCase();
const filteredVideos =  videos.filter(video =>
    video.title.toLowerCase().includes(normalizeFilter));

    const hendleEvLink = (id) => {
        setEvLink('');
      const videoId = videos.filter(filteredVideo => filteredVideo.id === id);
      setEvLink(videoId);
      handleTogle();
    } 

  console.log(evLink);
  console.log(togle);

    return   (
        <>
        <div className={s.conteiner}>
    {togle && (<VideoListModal
    onModal={handleTogle}
    evLink={evLink}
    />)}
    <ul className={s.listConteiner}>
     {videos && filteredVideos.map(({id, link, title}) => 
     (<li 
     key={id} 
     id={id}
     className={s.listEl}>
    <div onClick={() => hendleEvLink(id)} className={s.cartConteiner}>
    <iframe 
    className={s.cartVideo}
    src={`${link}?fs=1`} title={title}>{title}</iframe>
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
            <p className={s.lenghtVideo}>{`Кількість відео: ${filteredVideos.length}`}</p>
        </div>
        
        <div className={s.affte}></div>
        </>
    );
};

