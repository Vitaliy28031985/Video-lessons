import { useState } from 'react';
import {VideoList} from './videoList/videoList';
// import {VideoFilter} from './videoFilter/VideoFilter';
import {VideoModal} from './VideoModal/VideoModal';
import {LoaderComponent} from '../Loader/Loader';
import {useGetVideosQuery} from '../../redux/videoSlice';

import s from '../../style/Style.module.css';
import svp from './VideoPage.module.css';

export default function VideoPage () {
const [togle, setTogle] = useState(false);

const {isLoading} = useGetVideosQuery();

const handleTogle = () => {
    setTogle(togle => !togle);
};


return (
<div className={s.container}>
 {togle && (<VideoModal onClose={handleTogle} />)}
 <button className={svp.button} type="button" onClick={handleTogle}>
Добавити відео</button>
<div className={svp.videoPage}>
{/* <VideoFilter/> */}

{isLoading ? (<LoaderComponent/>) : (<VideoList/>)}

</div>
</div>
);

};