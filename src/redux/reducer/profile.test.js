import profile, {addPostActionCreator, deletePostActionCreator} from "./profile";

let initialState = {
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
};

it('length posts should be incremented', () => {
    // test data
    let action = addPostActionCreator('alex added post');
    // test action
    let newState = profile(initialState, action);
    // test expect
    expect(newState.postsData.length).toBe(5)
});

it('message of posts should be correct', () => {
    // test data
    let action = addPostActionCreator('alex added post');
    // test action
    let newState = profile(initialState, action);
    // test expect
    expect(newState.postsData[4].message).toBe('alex added post')
});

it('likes count of posts should be zero', () => {
    // test data
    let action = addPostActionCreator('alex added post');
    // test action
    let newState = profile(initialState, action);
    // test expect
    expect(newState.postsData[4].likesCount).toBe(0)
});

it('after delete post length count of posts should be decrement', () => {
    // test data
    let action = deletePostActionCreator(1);
    // test action
    let newState = profile(initialState, action);
    // test expect
    expect(newState.postsData.length).toBe(3)
});

it(`if send incorrect id for delete post, post data shouldn't be change`, () => {
    // test data
    let action = deletePostActionCreator(1000);
    // test action
    let newState = profile(initialState, action);
    // test expect
    expect(newState.postsData.length).toBe(4)
});