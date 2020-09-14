import React from "react";
import s from '../../../style/pages/Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    return props.dialogsData.map((item, index) => <div key={`dialog-${index}`} className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + item.id}>
                {item.name}
            </NavLink>
        </div>
    )
};

const MessageItem = props => {
    return props.messagesData.map((item, index) => <div key={`message-${index}`} className={s.message}>{item.message}</div>
    )
};

const Dialogs = props => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogsData={props.dialogsPage.dialogsData}/>
            </div>

            <div className={s.messages}>
                <MessageItem messagesData={props.dialogsPage.messagesData}/>
            </div>
        </div>
    )
};
export default Dialogs;