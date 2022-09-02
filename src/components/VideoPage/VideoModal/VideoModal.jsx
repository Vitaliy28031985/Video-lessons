import { useEffect } from 'react';

import s from './VideoModal.module.css';

export const VideoModal = ({onClose}) => {

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


const handleBackdropSubmit = e => {
    e.preventDefault();


    onClose();
}

    return (

         <div onClick={handleBackdropClick}  className={s.Overlay} >
          <div className={s.Modalon} >
           
              <form onSubmit={handleBackdropSubmit} className={s.form} action="">
              <label 
      className={s.lable}>Посилання
      <input
        className={s.input}
        type="text"
        name="link"
        />
      </label>
      <label 
      className={s.lable}>Заголовок
      <input
        className={s.input}
        type="text"
        name="title"
        />
      </label>
      <button  type="submit">Додати відео</button>
                </form>  
            </div>
          
          </div>   
        
        );
         
};