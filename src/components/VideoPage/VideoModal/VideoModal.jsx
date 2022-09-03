import { useEffect, useState } from 'react';

import s from './VideoModal.module.css';

export const VideoModal = ({onClose}) => {

  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');

  

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
      <button  type="submit">Додати відео</button>
                </form>  
            </div>
          
          </div>   
        
        );
         
};