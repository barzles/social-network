let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    message: 'Hello friend!',
                    id: 1,
                    likesCount: 7
                },
                {
                    message: 'How are you ?',
                    id: 2,
                    likesCount: 5
                },
                {
                    message: 'How old are you ?',
                    id: 3,
                    likesCount: 12
                },
                {
                    message: 'What is your name?',
                    id: 4,
                    likesCount: 13
                },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogsData: [
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
            ],
            messagesData: [
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
            ]
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        let newPost = {
            message: this._state.profilePage.newPostText,
            id: 5,
            likesCount: 6
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewChangeText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
};
export default store;
window.store = store;
