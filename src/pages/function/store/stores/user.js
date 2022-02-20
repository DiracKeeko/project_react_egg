export default {
  state: {
    id: undefined,
    username: undefined,
  },
  reducers: {
    getUser(state, payload) {
      // console.log("reducers");
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {
    async getUserAsync(dispatch, rootState, payload) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      })
      dispatch({
        type: "getUser",
        payload
      })
    }
  }
}