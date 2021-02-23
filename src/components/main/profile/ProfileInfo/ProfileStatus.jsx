import React from "react";
import s from '../../../../style/component/Profile/ProfileInfo.module.css'


class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      inputValue: this.props.status
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.activatedEditMode = this.activatedEditMode.bind(this);
    this.deactivatedEditMode = this.deactivatedEditMode.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        inputValue: this.props.status
      })
    }
  }

  onChangeInput(e) {
    this.setState({
      inputValue: e.target.value
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
    this.props.updateStatus(this.state.inputValue)
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
                     value={this.state.inputValue || 'no status'}
                     onChange={(e) => this.onChangeInput(e)}/>
            </div>
            : <div className={s.descriptionBlock}
                   onDoubleClick={this.activatedEditMode}>
              {this.props.status || 'no status'}
            </div>
        }


      </>
    )
  }
}

export default ProfileStatus;
