import React, { useState, useEffect } from 'react';
import { List, ImagePicker, Toast, InputItem, Button } from 'antd-mobile';

export default function (props) {
  const [files, setFiles] = useState([]);

  const handleChange = (files) => {
    // files是一个数组，数组内容是选中的file信息
    // [{...}, {...}]
    // console.log("files->", files);
    if (files[0]?.file?.size / 1024 / 1024 > 0.2) {
      Toast.fail('请选择小于200K的图片');
      return;
    }
    setFiles(files);
  };

  const handleSubmit = () => {};
  useEffect(() => {}, []);

  return (
    <div className="user-edit">
      <List>
        <List.Item>
          <ImagePicker
            files={files}
            selectable={files.length < 1}
            onChange={handleChange}
          />
        </List.Item>
        <List.Item>
          <InputItem placeholder="电话">电话：</InputItem>
        </List.Item>
        <List.Item>
          <InputItem placeholder="签名">签名：</InputItem>
        </List.Item>
      </List>
      <Button
        type="warning"
        style={{ marginTop: '20px' }}
        onClick={handleSubmit}
      >
        修改
      </Button>
    </div>
  );
}
