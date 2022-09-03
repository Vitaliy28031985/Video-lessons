import { useSelector, useDispatch } from 'react-redux';


import s from './VideoFilter.module.css';
import {filterVideo} from '../../../redux/actions';
import {getFilter} from '../../../redux/selectors';

export const VideoFilter = () => {

    const filterValue = useSelector(getFilter);
    const dispatch = useDispatch();

    const filterChange = e => dispatch(filterVideo(e.target.value));

    return (
<label className={s.lable}>Пошук
<input className={s.input} type='text'
value={filterValue} onChange={filterChange}
></input>
</label>
    );
};