import React, { useEffect } from 'react';
import { connect } from 'umi';

const Demo = ({ dispatch, conditions }) => {
  const conditionList = [
    {
      value: '1',
      heading:
        'Fits, blackouts, epilepsy, fainting attacks, severe head injuries, frequent or severe migraine headaches.',

      noText: ['preEmployment', 'condition', 'headInjuries', 'value'],
    },
  ];

  useEffect(() => {
    dispatch({ type: 'global/setQuestions', payload: { body: conditionList } });
  }, [conditions]);
  // useEffect(() => {
  //   dispatch({
  //     type: 'question/storeQuestions',
  //     payload: {
  //       body: conditionList,
  //     },
  //   });
  // }, []);
  // useEffect(() => {
  //   dispatch({
  //     type: 'question/getQuestions',
  //   });
  // }, []);
  console.log(`conditions fon demo stage`, conditions);
  return <div>hfgj</div>;
};

export default connect((global) => ({
  conditions: global.questionList,
}))(Demo);
