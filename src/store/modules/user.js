const userInfo = {
    state: {
        userName: '',
        userId: '',
    },
    mutations: {
        updateUserInfo: (state, payload) => {
            Object.assign(state, payload)
        },
    },
    getters: {
        getUserId: state => () => state.userId,
        getUserName: state => () => state.userName,
    },
}

export default userInfo
