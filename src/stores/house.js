import { Http } from '@/utils';
import { CommonEnum } from '@/enums';

export default {
  state: {
    detail: {},
    comments: [],
    page: CommonEnum.PAGE,
    showLoading: true,
    reloadCommentsNum: 0
  },
  reducers: {
    getDetail(state, payload) {
      return {
        ...state,
        detail: payload
      }
    },
  },
  effects: {
    async getDetailAsync(dispatch, rootState, payload) {
      const detail = await Http({
        url: '/house/detail',
        body: payload
      });
      dispatch({
        type: 'getDetail',
        payload: detail
      });
    },
  }
};