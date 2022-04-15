import React, { useState, useEffect } from 'react';
import { Link } from 'umi';
import { cookie } from 'project-libs';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {
    const user = cookie.get('user');
  }, []);

  return (
    <div className="header">
      <div className="header_title">民宿</div>
      <div className="header_login">
        {cookie.get('user') ? (
          cookie.get('user').username
        ) : (
          <>
            <Link to="/login">登录</Link> | <Link to="/register">注册</Link>
          </>
        )}
      </div>
    </div>
  );
}
