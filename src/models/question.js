import { storeQuestions, setQuestions ,conditions,stdTest} from '@/services/questions';

const Model = {
  namespace: 'question',
  state: { formData: null, formByType: null },
  effects: {
    *storeQuestions({ payload }, { call, put }) {
      const res = yield call(storeQuestions, payload);
      console.log(`res`, res);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'conditions',
      });
    },
    *storeArray({ payload }, { call, put }) {
      const res = yield call(conditions, payload);
      console.log(`res`, res);
      yield put({ type: 'setStates', payload: res, key: 'conditions' });
    },
    *practiceSetQuestion({ payload }, { call, put }) {
      console.log(`payloadPractice`, payload);
      const response = yield call(setQuestions, payload);

      console.log(`responsePractice`, response);
      yield put({
        type: 'setPracticeStates',
        payload: response,
        key:"jhsgd"
             });
    },
    *getQuestions(_, { select }) {
      const quesList = yield select((state) => {
        console.log('sdgsg', state.question.questions);
      });
      // console.log(`quesList`, quesList);
      return quesList;
    },
    *studentTest({ payload }, { call, put }) {
      const res = yield call(stdTest, payload);
      console.log(`resStuTest`, res);
      yield put({ type: 'setStdTest', payload: res, key: 'conditions' });
    },
  },
  reducers: {
    // setStates(state, { payload, key }) {
    //   return {
    //     ...state,
    //     [key]: payload,
    //   };
    // },
    setPracticeStates(state, { payload,key}) {
      return { ...state, [key]: payload };
    },
    setStdTest(state,{payload,key}){
      return{...state,[key]:payload}
      
    }
  },
};
export default Model;
