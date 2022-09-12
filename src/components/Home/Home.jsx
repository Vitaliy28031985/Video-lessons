import video from '../../images/video.PNG';
import s from '../../style/Style.module.css';
import sh from './Home.module.css'

export default function Home () {
return (
    <div className={s.container}>
    <h1 className={sh.title}>Рaді вітати Вас на нашому роесурсі!</h1>
    <p className={sh.text}>З допомогою нашого ресурсу Ви зможеш отримати доступ до великої кількості 
    навчальних відеокурсів з на тему програмування. Також в тебе буде можливість 
    завантажити свої відеоресурси на сервіс.</p>
    <p className={sh.text}>Бажаємо приємного користування нашим ресурсом!</p>
    <img className={sh.img} src={video} alt="" />
  </div>
);
};