import React from 'react'
import {resolveSrv} from "dns";
import s from './Message.module.css'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar}/>
            <div className={s.text}>
                <p className={s.name}><b>{props.name}</b></p>
                <p className={s.content}>{props.message}</p>
                <p className={s.time}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
