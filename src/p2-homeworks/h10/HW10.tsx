import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import s from './HW10.module.css'

function HW10() {
    let isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    let dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        // setTimeout

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1500)
    }

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div className={s.loading}>крутилка...</div>
                ) : (
                    <div className={s.button}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
