import React, { useState, useEffect } from 'react';
import { List, ImagePicker, Toast, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { useStoreHook } from 'think-react-store';

function Edit(props) {
  const { getFieldProps, validateFields } = props.form;
  const {
    user: { editUserAsync, getUserAsync, avatar, phone, sign },
  } = useStoreHook();
  const [files, setFiles] = useState([{url: avatar}]);

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
      Toast.fail('请上传图片');
      return;
    }
    validateFields((err, val) => {
      if (err) {
        Toast.fail('请完整填写信息');
        return;
      } else {
        editUserAsync({
          avatar: files[0].url,
          phone: val.tel,
          sign: val.sign,
        });
      }
    });
  };
  useEffect(() => {
    // console.log('props->', props);
    getUserAsync({});
  }, []);

  return (
    <div className="user-edit">
      <List>
        <ImagePicker
          files={files}
          selectable={files.length < 1}
          onChange={handleChange}
        />
        <InputItem
          placeholder="电话"
          {...getFieldProps('tel', {
            rules: [{ required: true }],
            initialValue: phone,
          })}
        >
          电话：
        </InputItem>
        <InputItem
          placeholder="签名"
          {...getFieldProps('sign', {
            rules: [{ required: true }],
            initialValue: sign,
          })}
        >
          签名：
        </InputItem>
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
