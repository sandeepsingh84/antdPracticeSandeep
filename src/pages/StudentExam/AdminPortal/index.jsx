import React,{useEffect} from 'react'
import {Form,Input,Button} from "antd"
import Item from 'antd/lib/list/Item';
import styles from './index.less';


const AdminSide = ({firstAnswer,setFirstAnswer,checkAns, setCheckAns,remarks,setRemarks,showMarks,setShowMarks}) => {
    const [form] = Form.useForm();
    console.log(`form`, form)
    // console.log(`checkAns`, checkAns)
    console.log(`adminAnswer`, firstAnswer)

const onFinish = (remarkValues) => {
    console.log(`remarkValues`, remarkValues);
   setRemarks(remarkValues)
   
   setShowMarks(true)
  };
  console.log(`remarks`, remarks)
  console.log(`showMarks`, showMarks)

    return (
        <Form
        hideRequiredMark
        autoComplete="off"
    name="adminRemarksForm"
    form={form}
    onFinish={onFinish}>
        <div className="m-3">
        <p className="font-bold text-lg">Student's answer </p>
        <p className="font-semibold text-blue-600">{firstAnswer?.InputAnswer}</p>
        {checkAns?.marks ? (<p className="font-semibold text-green-600"> Evaluated Marks {checkAns?.marks}/100</p>) : (<p className="font-semibold text-green-600">Marks {checkAns}/100</p>)}
        


        </div>
        <Form.Item 
        name="remarksInputField"
        rules={
            [
                {
                    required:true,
                    message:"please give remarks first"
                }
            ]
        }
        className="m-3"
        style={{marginInline:12}}
        >
            <Input.TextArea size="small"  placeholder="Type remarks here"  className="m-3"/>
            

        </Form.Item>
        <Form.Item name="remarksButton" style={{marginInline:12}}>
        <Button onClick={()=> form?.submit()} type="primary">submit</Button>
        </Form.Item>
        </Form>
    )
}

export default AdminSide
