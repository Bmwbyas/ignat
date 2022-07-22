import React from 'react'
import s from './Message.module.css'
type MessageDataPropsType={
    avatar:string,
    name:string,
    message:string,
    time:string

}
function Message(props:MessageDataPropsType) {
    return (
        <div className={s.message}>
            <div className={s.messageImg}>
                 <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={s.messageDiv}>
                <div className={s.messageName}>{props.name}</div>
                <div className={s.messageText}>{props.message}</div>
                <div className={s.messageTime}>{props.time}</div>

            </div>

        </div>
    )
}

export default Message
