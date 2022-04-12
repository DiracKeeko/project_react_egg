import React, { useState, useEffect } from 'react';
import { List, ImagePicker, Toast, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

function Edit(props) {
  const [files, setFiles] = useState([]);
  const { getFieldProps, validateFields } = props.form;
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

  const handleSubmit = () => {
    if (!files.length) {
      Toast.fail("请上传图片");
      return;
    }
    validateFields((err, val) => {
      if (err) {
        Toast.fail("请完整填写信息");
        return;
      } else {

      }
    })
  };
  useEffect(() => {
    // console.log('props->', props);
  }, []);

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
          <InputItem
            placeholder="电话"
            {...getFieldProps('tel', {
              rules: [{ required: true }],
              initialValue: '0571-000',
            })}
          >
            电话：
          </InputItem>
        </List.Item>
        <List.Item>
          <InputItem
            placeholder="签名"
            {...getFieldProps('sign', {
              rules: [{ required: true }],
              initialValue: 'sign',
            })}
          >
            签名：
          </InputItem>
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

// createForm(options)(React component)
// createForm方法会给React component组件的props绑定一些属性
// options不传参，就添加默认配置项
export default createForm()(Edit);
