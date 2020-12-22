import React from "react";
import s from '../../../style/pages/Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/reducer/dialogs";

const DialogItem = ({dialogsData}) => {

    return dialogsData.map((item, index) => <div key={`dialog-${index}`} className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + item.id}>
                {item.name}
            </NavLink>
        </div>
    )
};

const MessageItem = ({messagesData}) => {
    return messagesData.map((item, index) => <div key={`message-${index}`} className={s.message}>{item.message}</div>
    )
};

const Dialogs = ({dispatch, dialogsPage}) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogsData={dialogsPage.dialogsData}/>
            </div>

            <div className={s.messages}>
                <div><MessageItem messagesData={dialogsPage.messagesData}/></div>
              <div>
                <div>
                  <textarea value={dialogsPage.newMessageBody}
                            onChange={(e) => {
                              let body = e.target.value;
                              dispatch(updateNewMessageBodyCreator(body))
                            }}
                            placeholder="Enter your message"/>
                </div>
                <div>
                  <button onClick={() => {
                    dispatch(sendMessageCreator())
                  }}>
                    Send
                  </button>
                </div>
              </div>
            </div>
        </div>
    )
};
export default Dialogs;