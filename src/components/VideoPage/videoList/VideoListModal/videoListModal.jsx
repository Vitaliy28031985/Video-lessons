import { useEffect} from 'react';
import s from './VideoListModal.module.css';

export const VideoListModal = ({onModal, evLink}) => {

   const link = evLink.map(link => link.link);
   const title = evLink.map(link => link.title);

   useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
    window.removeEventListener('keydown', handleKeyDown);
    } 
    });

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onModal();
            }
         };
          

    return (
        <div className={s.Overlay} >
        <div className={s.Modal}>
            <button className={s.button} onClick={onModal} type="button">Згорнути</button>
            <iframe
            className={s.video}
            src={link}
            title={title} frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
            </iframe> 
        </div>
        </div>
        
    )
};

//