import React from "react";
import s from '../../../../style/component/Profile/ProfileInfo.module.css'

const initialState = {
  editMode: false,
  inputValue: ''
}

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.activatedEditMode = this.activatedEditMode.bind(this);
    this.deactivatedEditMode = this.deactivatedEditMode.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentDidMount() {
    this.setState({
      inputValue: this.props.profile.aboutMe
    })
  }

  activatedEditMode() {
    this.setState({
      editMode: true
    })
  }

  deactivatedEditMode() {
    this.setState({
      editMode: false
    })
  }

  onChangeInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <>
        {
          this.state.editMode ?
            <div>
              <input onBlur={() => this.deactivatedEditMode()}
                     autoFocus
                     type="text"
                     value={this.state.inputValue}
                     onChange={(e) => this.onChangeInput(e)}/>
            </div>
            : <div className={s.descriptionBlock}
                   onDoubleClick={this.activatedEditMode}>
              {this.state.inputValue}
            </div>
        }


      </>
    )
  }
}

export default ProfileStatus;
