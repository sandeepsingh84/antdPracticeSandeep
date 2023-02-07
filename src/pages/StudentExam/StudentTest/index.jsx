import React, { useRef, useState, useEffect } from 'react';
import { Carousel, Form, Input, Button } from 'antd';
import { connect } from 'umi';
import { RightOutlined } from '@ant-design/icons';
import { LeftOutlined } from '@ant-design/icons';
import { values } from '@umijs/deps/compiled/lodash';
import Item from 'antd/lib/list/Item';

const Answers = [
  {
    key: '1',
    ans: 'Nitrous oxide',
    marks: '100',
  },
  {
    key: '2',
    ans: 'Nitrous',
    marks: '50',
  },
  {
    key: '3',
    ans: 'oxide',
    marks: '30',
  },
  {
    key: '4',
    ans: 'James Watson',
    marks: '100',
  },
  {
    key: '5',
    ans: 'Hygrograph',
    marks: '1000',
  },
];

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

const StudentTest = ({ dispatch, AnswersConnect }) => {
  const [quesArray, setQuesArray] = useState();
  const [firstAnswer, setFirstAnswer] = useState();
  const [formOnOff, setFormOnOff] = useState(false);

  console.log(`quesArray`, quesArray);
  const [form] = Form.useForm();

  const slider = useRef(null);

  const onFinish = (values) => {
    console.log(`Form-values`, values);
    setFirstAnswer(values);
  };

  console.log(`AnswersConnect`, AnswersConnect);
  console.log(`firstAnswer`, firstAnswer);
  //Carousel Function
  const onChange = (values) => {
    console.log(`Carousel-values`, values);
    switch (values) {
      case 0:
        setQuesArray(Questions?.filter((filItem) => filItem?.key === '1'));
        break;
      case 1:
        setQuesArray(Questions?.filter((filItem) => filItem?.key === '2'));
        break;
      case 2:
        setQuesArray(Questions?.filter((filItem) => filItem?.key === '3'));
        break;

      default:
        setQuesArray(Questions?.filter((filItem) => filItem?.key === '1'));
        break;
    }
  };

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'question/studentTest',
        payload: {
          body: {
            answerList: Answers,
            firstAnswer: firstAnswer,
          },
        },
      });
    }
  }, [firstAnswer]);

  useEffect(() => {
    setQuesArray(Questions?.filter((filItem) => filItem?.key === '1'));
  }, []);

  return (
    <>
      {formOnOff ? (
        <Form
          hideRequiredMark
          autoComplete="off"
          name="studentForm"
          form={form}
          onFinish={onFinish}
        >
          <Carousel afterChange={onChange} ref={slider}>
            <div className="">
              {quesArray?.map((Item) => (
                <p className="">{Item?.ques}</p>
              ))}
              <Form.Item
                name="InputItem"
                rules={[
                  {
                    required: true,
                    message: 'Please Answer the Question First !',
                  },
                ]}
              >
                <Input placeholder="Enter Your Answer!" />
              </Form.Item>
              <Form.Item name="submitButton">
                <Button onClick={() => form?.submit()} type="primary">
                  Submit
                </Button>
              </Form.Item>
            </div>
            <div className="">
              {quesArray?.map((Item) => (
                <p className="">{Item?.ques}</p>
              ))}
              <Form.Item
                name="InputItem"
                rules={[
                  {
                    required: true,
                    message: 'Please Answer the Question First !',
                  },
                ]}
              >
                <Input placeholder="Enter Your Answer!" />
              </Form.Item>
              <Form.Item name="submitButton">
                <Button onClick={() => form?.submit()} type="primary">
                  Submit
                </Button>
              </Form.Item>
            </div>
            <div className="">
              {quesArray?.map((Item) => (
                <p className="">{Item?.ques}</p>
              ))}
              <Form.Item
                name="InputItem"
                rules={[
                  {
                    required: true,
                    message: 'Please Answer the Question First !',
                  },
                ]}
              >
                <Input placeholder="Enter Your Answer!" />
              </Form.Item>
              <Form.Item name="submitButton">
                <Button onClick={() => form?.submit()} type="primary">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Carousel>
          <div className="flex justify-between">
            <Button
              onClick={() => {
                slider.current.prev();
              }}
            >
              <LeftOutlined />
              Previous
            </Button>
            <Button
              onClick={() => {
                slider.current.next();
              }}
            >
              Next <RightOutlined />
            </Button>
          </div>
        </Form>
      ) : (
        <Form
          hideRequiredMark
          autoComplete="off"
          name="studentAttendance"
          form={form}
          onFinish={onFinish}
        >
          <div className="">
            <h1 className="font-bold text-center text-lg text-blue-600 bg-gray-300 rounded-full mb-10 py-1 shadow-md">
              Student Details
            </h1>
            <Form.Item
              name="StudName"
              rules={[
                {
                  required: true,
                  message: 'Please enter your name first',
                },
              ]}
            >
              <p className="">Student Name</p>
              <Input placeholder="Enter your name!" />
            </Form.Item>

            <Form.Item
              name="StudRollNo."
              rules={[
                {
                  required: true,
                  message: 'Please enter your Roll no.',
                },
              ]}
            >
              <p className="">Roll no.</p>
              <Input placeholder="Enter your roll no. !" type="number" />
            </Form.Item>
            {/* <Form.Item
              name="StudClass"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Class',
                },
              ]}
            >
              <p className="">Class</p>
              <Input placeholder="Enter your Class!" />
            </Form.Item> */}
            <Form.Item name="studDetailsBtn">
              <Button
                onClick={() => {
                  form?.submit();
                  setFormOnOff(true);
                }}
                type="primary"
              >
                Start Test
              </Button>
            </Form.Item>
          </div>
        </Form>
      )}
    </>
  );
};

export default connect(({ question }) => ({
  AnswersConnect: question.conditions,
}))(StudentTest);
