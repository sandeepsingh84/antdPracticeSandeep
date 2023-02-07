import React, { useEffect } from 'react';
import { connect } from 'umi';

const Practice = ({ dispatch, conditions,loadData }) => {
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
    console.log(`conditions`, conditions)
    // useEffect(() => {
    //     if (dispatch) {
    //         dispatch({
    //             type: 'question/practiceSetQuestion',
    //             payload: {
    //                 body: Questions,
    //             },
    //         });
    //     }
    // }, []);
    return <div loading={loadData}>progressing</div>;
};

export default connect(({ question,loading }) => ({
    conditions: question.jhsgd,
    loadData: loading.effects['question/practiceSetQuestion'],
}))(Practice);
