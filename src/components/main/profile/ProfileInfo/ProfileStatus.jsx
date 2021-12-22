import React, {useEffect, useState} from "react";
import s from '../../../../style/component/Profile/ProfileInfo.module.css'


const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(props.status);

  useEffect(() => {
    setInputValue(props.status)
  }, [props.status])


  let onChangeInput = (e) => {
    setInputValue(e.target.value);
  }

  let activatedEditMode = () => {
    setEditMode(true)
  }

  let deactivatedEditMode = () => {
    setEditMode(false)
    props.updateStatus(inputValue)
  }

    return (
      <>
        {
          editMode ?
            <div>
              <input onBlur={() => deactivatedEditMode()}
                     autoFocus
                     type="text"
                     value={inputValue || 'no status'}
                     onChange={(e) => onChangeInput(e)}/>
            </div>
            : <div className={s.descriptionBlock}
                   onDoubleClick={activatedEditMode}>
              {props.status || 'no status'}
            </div>
        }


      </>
    )
}

export default ProfileStatus;
