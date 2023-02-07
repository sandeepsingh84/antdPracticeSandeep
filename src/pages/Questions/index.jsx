import React, { useEffect } from 'react';
import { connect } from 'umi';

const Demo = ({ dispatch, questionList }) => {
  console.log(`questionList from resuable reducer`, questionList);
  const Questions = [
    {
      key: '1',
      ques: 'Which gas is most popular as laughing gas?',
    },
    {
      key: '2',
      ques: 'Who achieved the discovery of ‘Vitamin C’?',
    },
    {
      key: '3',
      ques: ' To measure the Humidity in air, what instrument used?',
    },
  ];
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'global/setQuestions',
        payload: {
          body: Questions,
        },
      });
    }
    // for component unmount
    return () => {
      console.log(`1`, 1)
      
    }
  }, []);

  return <div>hello</div>;
};

export default connect(({ global }) => ({
  questionList: global.questionList,
}))(Demo);