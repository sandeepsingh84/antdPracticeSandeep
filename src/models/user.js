import { queryCurrent, storeQuestion,setQuestions, query as queryUsers } from '@/services/user';
const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
    // questionList: null,
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },

    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
    *storeQuestionList({ payload }, { call, put }) {
      const response = yield call(storeQuestion, payload);
      console.log(`response`, response);
      yield put({
        type: 'setStates',
        payload: response,
        key: 'questions',
      });
    },
    *practiceSetQuestion({payload},{call,put}){
      const response = yield call(setQuestions, payload);
      console.log(`payloadPractice`, payload)
      console.log(`responsePractice`, response)
      yield put({
        type: 'setPracticeStates',
        payload: response,
        key: 'questions',
      });
    }
  },
  reducer: {
    saveCurrentUser(state, action) {
      return { ...state, currentUser: action.payload || {} };
    },
    saveQuestions(state, action) {
      return { ...state, questionList: action.payload };
    },
    setPracticeStates(state, { payload, key }) {
      return { ...state, [key]:payload, };
    },
    setStates(state, { payload, key }) {
      return {
        ...state,
        [key]: payload,
      };
    },
    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
export default UserModel;
