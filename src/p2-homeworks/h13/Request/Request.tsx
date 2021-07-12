import {requestAPI} from './api';
import {useDispatch, useSelector} from 'react-redux';
import {ChangeEvent, useState} from 'react';
import {Loader} from '../common/Loader';
import {loadingAC} from '../../h10/bll/loadingReducer';
import {AppStoreType} from '../../h10/bll/store';

export function Request() {
    let dispatch = useDispatch()
    let loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const [value, setValue] = useState(false);
    const [correctAnswer, setAnswer] = useState<string>('')
    const [errorAnswer, setErrorAnswer] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onClickHandler = () => {
        dispatch(loadingAC(true))
        requestAPI.testRequest(value)
            .then(response => {
                setAnswer(response.data.errorText)
                setError(false)
            })
            .catch(err => {
                setErrorAnswer(err.response.data.errorText)
                setError(true)
            })
            .finally(() => {
                dispatch(loadingAC(false))
            })
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.checked)

    return(
        <div className='request-box'>
            {loading && <Loader /> }

            <div className='request-inner'>
                <button className='request-btn' onClick={onClickHandler}>Click</button>
                <input type='checkbox' className='request-checkbox' checked={value} onChange={onChangeHandler}/>
            </div>

            <div className='errorAnswer'>{error && errorAnswer}</div>
            <div className='correctAnswer'>{!error && correctAnswer}</div>
        </div>
    )
}