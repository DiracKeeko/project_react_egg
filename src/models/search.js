export default {
  namespace: "search", // 命名空间，非必选项，默认命名空间与文件同名
  state: {
    text: "dva",
    lists: []
  },
  reducers: {
    getLists(state, action) {
      return {
        ...state,
        lists: Array(10).fill(action.payload)
      }
    }
  }
}