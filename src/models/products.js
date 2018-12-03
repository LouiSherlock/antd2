//一下两个导入效果是一样的，第一个为相对路径，第二个为绝对路径，
//@符号会直接找到该项目的src目录，这是本身配置好的

// import { getUser } from './services/api';
import { getUser } from '@/services/api';

export default {
  namespace: 'products',
  state: [],

  effects: {
    * getUser({ payload }, { call, put }) {

      //  请求接口
      const res = yield call(getUser, payload.id);

      yield put({
        type: 'save',
        payload: res,
      });

      console.log(payload);
      console.log('getUser', res);
    },

  },

  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },

    'save'(state, { payload }) {
      return {
        ...state,
        list: payload,
      };
    },

  },
};
