import s from './VideoList.module.css';
import {useDeleteVideoMutation, useGetVideosQuery} from '../../../redux/videoSlice';

export const VideoList = () => {


const {data: videos} = useGetVideosQuery();
const [deleteVideo] = useDeleteVideoMutation();

const onDeleteVideo = id => deleteVideo(id);

console.log(videos);



    return (
        <div>
    <ul className={s.listConteiner}>
     {videos.map(({link, title}) => (<li className={s.listEl}>
    <div className={s.cartConteiner}>
    <iframe 
    className={s.cartVideo}
    width="260"
    src={link}
    title="YouTube video player"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
    <div className={s.cartConteinerTitle}>
    <p className={s.cartTitle}>{title}</p>
    <button className={s.cartButton} 
    onClick={onDeleteVideo}
    type="button">
    X</button>
    </div>
    </div>
    </li>))}
            </ul>
        </div>
    );
};

