import { useState } from 'react';
import {VideoList} from './videoList/videoList';
import {VideoFilter} from './videoFilter/VideoFilter';
import {VideoModal} from './VideoModal/VideoModal';

import s from '../../style/Style.module.css';
import svp from './VideoPage.module.css';

export default function VideoPage () {
const [togle, setTogle] = useState(false);

const handleTogle = () => {
    setTogle(togle => !togle);
};

return (
<div className={s.container}>
 {togle && (<VideoModal onClose={handleTogle} />)}

<div className={svp.videoPage}>
<VideoFilter/>
<button className={svp.button} type="button" onClick={handleTogle}>+</button>
<VideoList/>
</div>
</div>
);

};