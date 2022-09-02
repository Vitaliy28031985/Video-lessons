import s from './VideoList.module.css';

export const VideoList = () => {


    return (
        <div>
            <ul className={s.listConteiner}>
                <li className={s.listEl}>
                <div className={s.cartConteiner}>
                <iframe className={s.cartVideo}
                width="260"
                src="https://www.youtube.com/embed/92qcfeWxtnY"
                title="YouTube video player"
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe> 
                 <div className={s.cartConteinerTitle}>
                 <p className={s.cartTitle}>React TypeScript ПОЛНЫЙ КУРС 2021. Props, Events, Router, Hooks, Requests.</p>
                 <button className={s.cartButton}  type="button">X</button>
                 </div>
                 </div>
                </li>
                <li className={s.listEl}>
                <div className={s.cartConteiner}>
                <iframe 
                className={s.cartVideo}
                width="260"
                src="https://www.youtube-nocookie.com/embed/ETWABFYv0GM"
                title="YouTube video player"
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe>
                 <div className={s.cartConteinerTitle}>
                 <p className={s.cartTitle}>React & Redux & TypeScript ПОЛНЫЙ КУРС 2021</p>
                 <button className={s.cartButton} type="button">X</button>
                 </div>
                 </div>
                </li>
                <li className={s.listEl}>
                <div className={s.cartConteiner}>
                <iframe 
                className={s.cartVideo}
                width="260"
                src="https://www.youtube-nocookie.com/embed/yCIti018Srw"
                title="YouTube video player"
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe>
                 <div className={s.cartConteinerTitle}>
                 <p className={s.cartTitle}>Angular 14 - Быстрый Курс [2022]</p>
                 <button className={s.cartButton}  type="button">X</button>
                 </div>
                 </div>
                </li>
                <li className={s.listEl}>
                <div className={s.cartConteiner}>
                <iframe 
                className={s.cartVideo}
                width="260"
                src="https://www.youtube.com/embed/OvLWWvjoi8s"
                title="YouTube video player"
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe>
                 <div className={s.cartConteinerTitle}>
                 <p className={s.cartTitle}>React JS + TypeScript. Введение в Типизацию (+ React Router DOM)</p>
                 <button className={s.cartButton}  type="button">X</button>
                 </div>
                 </div>
                </li>
                <li className={s.listEl}>
                <div className={s.cartConteiner}>
                <iframe 
                className={s.cartVideo}
                width="260"
                src="https://www.youtube-nocookie.com/embed/y2emL1fMRyY"
                title="YouTube video player"
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe>
                 <div className={s.cartConteinerTitle}>
                 <p className={s.cartTitle}>Тестирование JavaScript от А до Я (Jest, React Testing Library, e2e, screenshot)</p>
                 <button className={s.cartButton}  type="button">X</button>
                 </div>
                 </div>
                </li>
                <li className={s.listEl}>
                <div className={s.cartConteiner}>
                <iframe 
                className={s.cartVideo}
                width="260"
                src="https://www.youtube-nocookie.com/embed/9g4tsfIJz50"
                title="YouTube video player"
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe>
                 <div className={s.cartConteinerTitle}>
                 <p className={s.cartTitle}>Jest & Enzyme. Полный курс</p>
                 <button className={s.cartButton}  type="button">X</button>
                 </div>
                 </div>
                </li>
                <li className={s.listEl}>
                <div className={s.cartConteiner}>
                <iframe 
                className={s.cartVideo}
                width="260"
                src="https://www.youtube-nocookie.com/embed/eKZNKA-jAYY"
                title="YouTube video player"
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe>
                 <div className={s.cartConteinerTitle}>
                 <p className={s.cartTitle}>Как правильно учиться в IT - сфере. ТОП ошибок при обучении. Конкретный план обучения.</p>
                 <button className={s.cartButton}  type="button">X</button>
                 </div>
                 </div>
                </li>
                <li className={s.listEl}>
                <div className={s.cartConteiner}>
                <iframe 
                className={s.cartVideo}
                width="260"
                src="https://www.youtube-nocookie.com/embed/yJcCKuxfb2o"
                title="YouTube video player"
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe>
                 <div className={s.cartConteinerTitle}>
                 <p className={s.cartTitle}>ПЛАН РАЗВИТИЯ ФРОНТЕНД РАЗРАБОТЧИКА. ЭФФЕКТИВНОЕ ОБУЧЕНИЕ HTML CSS JAVASCRIPT</p>
                 <button className={s.cartButton}  type="button">X</button>
                 </div>
                 </div>
                </li>
                <li className={s.listEl}>
                <div className={s.cartConteiner}>
                <iframe 
                className={s.cartVideo}
                width="260"
                src="https://www.youtube-nocookie.com/embed/UGapN-hrek"
                title="YouTube video player"
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe>
                 <div className={s.cartConteinerTitle}>
                 <p className={s.cartTitle}>Урок 2. JavaScript. Что такое контекст this. Как работает call, bind, apply</p>
                 <button className={s.cartButton}  type="button">X</button>
                 </div>
                 </div>
                </li>
            </ul>
        </div>
    );
};