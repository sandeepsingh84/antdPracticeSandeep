import React, { useState } from 'react';
import { Button, Image, Space } from 'antd';
// import styles from './Welcome.less';
import classNames from 'classnames';


export default () => {
  const [random, setRandom] = useState();
  return (
    <Space size={12}>
      <Image
        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
        width={200}
        placeholder={<Image
          preview={false}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
          width={200}
        />}
      />
      <Button onClick={() => setRandom(Date.now())} type="primary">
        Reload
      </Button>


    </Space>
  );
};
