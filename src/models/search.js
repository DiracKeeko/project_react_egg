import {getLists} from "@/services/search";
export default {
  namespace: "search", // 命名空间，非必选项，默认命名空间与文件同名
  state: {
    text: "dva",
    lists: []
  },
  // ↓ 同步操作
  reducers: {
    getLists(state, action) {
      return {
        ...state,
        lists: Array(10).fill(action.payload)
      }
    }
  },
  // ↓ 异步操作
  effects: {
    *getListsAsync({payload}, {call, put}) {
      // ↑ call, put都是函数
      // call主要用来调用异步函数，put用来做事件开发

      const res = yield call(getLists, payload);

      yield put({
        type: "getLists", // reducers里面的方法名
        payload: res.lists
      })
    }
  }
}