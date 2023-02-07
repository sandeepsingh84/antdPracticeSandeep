import Item from "antd/lib/list/Item";
import React, { useState, useEffect } from "react";
import { connect } from 'umi';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import AdminSide from "./AdminPortal";
import StudentSide from "./StudentPortal";
// import styles from './index.less';

const Answers = [
  {
    key: "1",
    ans: "Nitrous oxide",
    marks: "100",
  },
  {
    key: "2",
    ans: "Nitrous",
    marks: "50",
  },
  {
    key: "3",
    ans: "oxide",
    marks: "30",
  },
  {
    key: "4",
    ans: "James Watson",
    marks: "100",
  },
  {
    key: "5",
    ans: "Hygrograph",
    marks: "1000",
  },
];

const Questions = [
  {
    key: "1",
    ques: "Which gas is most popular as laughing gas?",
  },
  {
    key: "2",
    ques: "Who achieved the discovery of ‘Vitamin C’?",
  },
  {
    key: "3",
    ques: " To measure the Humidity in air, what instrument used?",
  },
];


const StudentExam = ({ questionList, dispatch }) => {
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/storeQuestionList',
        payload: {
          body: {
            questionList: Questions,
          }
        }
      });
    }
  }, [])
  const [firstAnswer, setFirstAnswer] = useState();
  const [checkAns, setCheckAns] = useState();
  console.log(`FirstAnswer`, firstAnswer);
  console.log(`checkAns`, checkAns);
  console.log(`questionList`, questionList)
  //admin side states
  const [remarks, setRemarks] = useState();
  const [showMarks, setShowMarks] = useState(false);

  console.log(`remarksIndexPAge`, remarks);
  console.log(`showMarksIndex`, showMarks);

  const EvaluatedMarks = () => {
    if (Answers?.find((Item) => Item?.ans === firstAnswer?.InputAnswer)) {
      setCheckAns(
        Answers?.find((findItem) => findItem?.ans === firstAnswer?.InputAnswer)
      );
    } else {
      setCheckAns(0);
    }
  };

  useEffect(() => {
    EvaluatedMarks();
  }, [firstAnswer]);

  return (
    <Router>
      <div className="">
        <h1 className=" ">
          Simba e-Exam Portal
        </h1>
        <nav className="">
          <ul className="">
            <Link to="/" className="text-purple-500">
              Student corner
            </Link>
            <Link to="/AdminSide" className="ml-5 text-purple-500">
              Admin side
            </Link>
          </ul>
        </nav>
      </div>

      <Switch className="">
        <Route path="/" exact>
          <StudentSide
            firstAnswer={firstAnswer}
            setFirstAnswer={setFirstAnswer}
            remarks={remarks}
            setRemarks={setRemarks}
            showMarks={showMarks}
            setShowMarks={setShowMarks}
            checkAns={checkAns}
            setCheckAns={setCheckAns}
            questions={Questions}
          />
        </Route>
        <Route path="/AdminSide" exact>
          <AdminSide
            firstAnswer={firstAnswer}
            setFirstAnswer={setFirstAnswer}
            checkAns={checkAns}
            setCheckAns={setCheckAns}
            remarks={remarks}
            setRemarks={setRemarks}
            showMarks={showMarks}
            setShowMarks={setShowMarks}
          />
        </Route>
      </Switch>
    </Router>
  );
};

// export default AntdCollapseCarousel;
export default connect(({ user }) => ({
  questionList: user.questions,
}))(StudentExam);
