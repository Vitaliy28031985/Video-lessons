import { useEffect, useState } from 'react';
import {useGetVideosQuery, useAddVideoMutation} from '../../../redux/videoSlice';

import s from './VideoModal.module.css';

export const VideoModal = ({onClose}) => {

  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');

  const [addVideo] = useAddVideoMutation();
  const {data: videos} = useGetVideosQuery();
  

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        } 
        });

        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
             }
             };
            
          const handleBackdropClick = e => {
            if (e.currentTarget === e.target) {
                onClose();
             }
             };


   const handleChange = e => {
 const {name, value,} = e.currentTarget;
 switch (name) {
  case 'link':
    setLink(value);
  break;
  case 'title':
    setTitle(value);
  break;
  default:
  return;  
}
   };

const handleBackdropSubmit = e => {
    e.preventDefault();

   
    if (videos.find(video => video.link === link)) {
      alert(`Посилання на відео: ${link} вже існує.`);
      setLink('');
      setTitle('');
         return;
       }
       if (videos.find(video => video.title === title)) {
        alert(`Заголовок для відео: ${title} вже існує.`);
        setLink('');
        setTitle('');
           return;
         }
  
         addVideo({link, title});
         setLink('');
         setTitle('');

    onClose();
};

console.log(title);
console.log(link);

    return (

         <div onClick={handleBackdropClick}  className={s.Overlay} >
          <div className={s.Modalon} >
           
              <form onSubmit={handleBackdropSubmit} className={s.form} action="">
              <label 
      className={s.lable}>Посилання
      <input
        className={s.input}
        type="url"
        name="link"
        onChange={handleChange}
        value={link}
        />
      </label>
      <label 
      className={s.lable}>Заголовок
      <input
        className={s.input}
        type="text"
        name="title"
        onChange={handleChange}
        value={title}
        />
      </label>
      <button className={s.button}  type="submit">Додати відео</button>
                </form>  
            </div>
          
          </div>   
        
        );
         
};