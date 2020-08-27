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
    const dialogsData = [
        {
            name: 'Morozov',
            id: 1
        },
        {
            name: 'Guro',
            id: 2
        },
        {
            name: 'Stas',
            id: 3
        },
        {
            name: 'Shulyak',
            id: 4
        },
    ];
    const messagesData = [
        {
            message: 'Lorem ipsum dolor.'
        },
        {
            message: 'Lorem ipsum dolor sit amet.'
        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetur.'
        },
    ];
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogsData={dialogsData}/>
            </div>

            <div className={s.messages}>
                <MessageItem messagesData={messagesData}/>
            </div>
        </div>
    )
};
export default Dialogs;