import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'umi';

const AdminExamine = ({ Answers,loadData }) => {
  const [remarks, setRemarks] = useState();
  const [showMarks, setShowMarks] = useState(false);
  const [checkAns, setCheckAns] = useState();
  const [form] = Form.useForm();

  //connect states
  const [answers, setAnswers] = useState(Answers?.body.answerList);
  const [stuAnsw, setStuAnsw] = useState(Answers?.body.firstAnswer);

  console.log(`AdminAnswers`, Answers);
  console.log(`AnswersState`, answers);
  console.log(`stuAnsw`, stuAnsw);
  console.log(`checkAns`, checkAns);
  const onFinish = (remarkValues) => {
    console.log(`remarkValues`, remarkValues);
    setRemarks(remarkValues);

    setShowMarks(true);
  };
  const EvaluatedMarks = () => {
    if (answers.find((Item) => Item?.ans === stuAnsw?.InputItem)) {
      setCheckAns(answers?.find((findItem) => findItem?.ans === stuAnsw?.InputItem));
    } else {
      setCheckAns(0);
    }
  };

  useEffect(() => {
      if (stuAnsw) {
        EvaluatedMarks();
      }
             
  }, [stuAnsw]);

  return (
    <Form
      hideRequiredMark
      autoComplete="off"
      name="adminRemarksForm"
      form={form}
      onFinish={onFinish}
      loading={loadData}
    >
      <div className="m-3">
        <p className="font-bold text-lg">Student's answer </p>
        <p className="font-semibold text-blue-600">{stuAnsw?.InputItem}</p>
        {checkAns?.marks ? (<p className="font-semibold text-green-600"> Evaluated Marks {checkAns?.marks}/100</p>) : (<p className="font-semibold text-green-600">Exam was not Attempted!</p>)}
      </div>
      <Form.Item
        name="remarksInputField"
        rules={[
          {
            required: true,
            message: 'please give remarks first',
          },
        ]}
        className="m-3"
        style={{ marginInline: 12 }}
      >
        <Input.TextArea size="small" placeholder="Type remarks here" className="m-3" />
      </Form.Item>
      <Form.Item name="remarksButton" style={{ marginInline: 12 }}>
        <Button onClick={() => form?.submit()} type="primary">
          submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(({ question,loading }) => ({
  Answers: question.conditions,
  loadData: loading.effects['question/studentTest'],
}))(AdminExamine);
