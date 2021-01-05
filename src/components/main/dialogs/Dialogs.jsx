import React from "react";
import s from '../../../style/pages/Dialogs.module.css'
import {NavLink} from "react-router-dom";

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

const Dialogs = ({dialogsPage, updateNewMessageBody, sendMessage}) => {
  let onUpdateNewMessageBodyCreator = (e) => {
    let body = e.target.value;
    updateNewMessageBody(body)
  }

  let onSendMessageCreator = () => {
    sendMessage()
  }

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
                              onUpdateNewMessageBodyCreator(e)
                            }}
                            placeholder="Enter your message"/>
          </div>
          <div>
            <button onClick={onSendMessageCreator}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Dialogs;
