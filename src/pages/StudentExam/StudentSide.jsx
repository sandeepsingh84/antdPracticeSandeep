import React,{useState,useRef,useEffect} from 'react'
import {Form,Input,Button,Collapse,Carousel} from "antd"
import Item from 'antd/lib/list/Item';


// const Questions = [
//   {
//     key: "1",
//     ques: "Which gas is most popular as laughing gas?",
//   },
//   {
//     key: "2",
//     ques: "Who achieved the discovery of ‘Vitamin C’?",
//   },
//   {
//     key: "3",
//     ques: " To measure the Humidity in air, what instrument used?",
//   },
// ];
const StudentSide = ({firstAnswer,setFirstAnswer,remarks,setRemarks,showMarks,setShowMarks,checkAns, setCheckAns,questions}) => {
    const [form] = Form.useForm();
    const {Panel} = Collapse;
const slider= useRef(null)
console.log(`slider`, slider)
const [quesArray, setQuesArray] = useState()

console.log(`remarksStudentSide`, remarks)
   console.log(`Questions`, questions)
   console.log(`quesArray`, quesArray)

    const onFinish = (values) => {
        console.log(`values`, values);
        setFirstAnswer(values)
        // setLoginFinish(values);
        // setButtonOnOff(false);
      };

      const onChange=(values)=> {
        console.log(`values`, values)

        if (values === 0) {
          setQuesArray(questions?.filter((filItem)=>filItem?.key==="1"))
          
        }
        if (values === 1) {
          setQuesArray(questions?.filter((filItem)=>filItem?.key==="2"))
        }
        if (values === 2) {
          setQuesArray(questions?.filter((filItem)=>filItem?.key==="3"))
        }

      }
      
      useEffect(() => {
        setQuesArray(questions?.filter((filItem)=>filItem?.key==="1"))
      }, [slider])
    return (
        <Form
        hideRequiredMark
            autoComplete="off"
        name="studentForm"
        form={form}
        onFinish={onFinish}
        >
          {showMarks ? (<div className="">
  <Form.Item name="collapseItems" >
    <p className="font-bold">Checkout your correct answers</p>
    <Collapse accordion>
    <Panel header="Which gas is most popular as laughing gas?" key="1">
<p className="">Correct Answer is - Nitrous oxide</p>
<p className="">Examiner remarks
</p>
<p className="">{remarks?.remarksInputField}</p>
{checkAns?.marks ? (<p className=""> Evaluated Marks {checkAns?.marks}/100</p>) : (<p className="">Marks {checkAns}/100</p>)}
    </Panel>
    </Collapse>
    
  </Form.Item>
</div>):( <>
  <Button onClick={()=> {slider.current.next()
 
  }}>next</Button>
<Carousel ref={slider} afterChange={onChange} >
<div className="m-3 mt-5 border shadow-lg">
  {quesArray?.map((Item)=>(
            <p className="font-semibold">{Item?.ques}</p>
  ))} 
<Form.Item
 name="InputAnswer"
 rules={[
   {
     required: true,
     message: "please Answer the question first!",
   },
 ]}
>
    <Input placeholder="Enter your answer"/>
</Form.Item>
<Form.Item 
name="submitButton">
  <Button onClick={()=> form?.submit() } type="primary">Submit</Button>
</Form.Item>
</div>
<div className="m-3 mt-5 border shadow-lg">{quesArray?.map((Item)=>(
            <p className="font-semibold">{Item?.ques}</p>
  ))} 
<Form.Item
 name="InputAnswer"
 rules={[
   {
     required: true,
     message: "please Answer the question first!",
   },
 ]}
>
    <Input placeholder="Enter your answer"/>
</Form.Item>
<Form.Item 
name="submitButton">
  <Button onClick={()=> form?.submit() } type="primary">Submit</Button>
</Form.Item>
</div> 
        <div className="m-3 mt-5 border shadow-lg">{quesArray?.map((Item)=>(
            <p className="font-semibold">{Item?.ques}</p>
  ))} 
        <Form.Item
 name="InputAnswer"
 rules={[
   {
     required: true,
     message: "please Answer the question first!",
   },
 ]}
>
    <Input placeholder="Enter your answer"/>
</Form.Item>
<Form.Item 
name="submitButton">
  <Button onClick={()=> form?.submit() } type="primary">Submit</Button>
</Form.Item>
        </div>
</Carousel>
<Button onClick={()=> slider.current.prev()}>Previous</Button>
</>
)}     
        </Form>
    )
}

export default StudentSide
