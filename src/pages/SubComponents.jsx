import React, { useState } from 'react';
import { Button, Image, Space, Dropdown, Menu } from 'antd';


export default () => {
    const menu = () => {
        return( <Menu>
        <Menu.Item>
           <a >Item 1</a>
        </Menu.Item>
        <Menu.Item>
        <a >Item 2</a>
        </Menu.Item>
        <Menu.Item>
        <a >Item 3</a>
        </Menu.Item>
    </Menu>)
       

    }
    return (
        <Space direction="vertical">
            <Space wrap>
            <Dropdown overlay={menu} placement="bottomRight">
                <Button>DropDown</Button>
            </Dropdown>
            </Space>

        </Space>
    );
};
