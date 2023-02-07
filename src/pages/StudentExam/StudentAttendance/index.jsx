import React from 'react'
import {connect} from 'umi'
const StudentAttendance = () => {
    return (
        <div>
            okfejfje
        </div>
    )
}

export default connect(({ question }) => ({
    AnswersConnect: question.conditions,
  }))(StudentAttendance);
