import React from 'react';
import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeAC} from './bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.color); // useSelector

    let dispatch = useDispatch()
    // useDispatch, onChangeCallback
    const onChangeCallback = (theme: string) => dispatch(changeThemeAC(theme))

    return (
        <div className={s[theme]}>
            <hr/>
            <div className={`${s[theme]} ${s.wrapper}`}>
                <span className={`${s[theme]} + ${s.text}`}>homeworks 12</span>
            </div>
            {/*should work (должно работать)*/}
            <div className={s.selector}>
                <SuperSelect
                    options={themes}
                    onChangeOption={onChangeCallback}
                    value={theme}
                />
            </div>

            <hr/>
        </div>
    );
}

export default HW12;
