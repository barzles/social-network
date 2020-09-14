import {rerenderEntireTree} from "../render";

let state = {
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
};
export let addPost = () => {
    let newPost = {
        message: state.profilePage.newPostText,
        id: 5,
        likesCount: 6
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewChangeText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;
