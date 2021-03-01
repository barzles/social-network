import React from "react";
import s from '../../../style/pages/Dialogs.module.css'
import {NavLink} from "react-router-dom";
import { Form, Field } from 'react-final-form'

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

const Dialogs = ({dialogsPage, sendMessage}) => {

  let onSendMessage = (values) => {
    sendMessage(values.newMessageBody)
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
            <Form onSubmit={onSendMessage} render={(props) => {
              return (
                <form>
                  <div>
                    <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
                  </div>
                  <div>
                    <button onClick={props.handleSubmit}>
                      Send
                    </button>
                  </div>
                </form>
              )
            }}/>
          </div>

        </div>
      </div>
    </div>
  )
};
export default Dialogs;
