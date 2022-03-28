import React, { useState, useEffect } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import { useHttpHook, useObserverHook, useImgHook } from '@/hooks';

import './index.less';

export default function (props) {
  const [houseName, setHouseName] = useState('');

  const [houses, loading] = useHttpHook({
    url: '/house/search',
    body: {
      pageNum: 1
    }
  });

  const handleChange = (value) => {
    // console.log(value)
    setHouseName(value);
  };

  const handleCancle = () => {
    _handleSubmit('');
  };

  const handleSubmit = (value) => {
    // console.log(value)
    _handleSubmit(value);
  };

  const _handleSubmit = (value) => {
    // setHouseName(value);
    // setHouseSubmitName(value);
    // setPage(CommonEnum.PAGE);
    // setHouseLists([]);
  };

  useEffect(() => {}, []);

  return (
    <div className="search-page">
      {/**顶部搜索栏 */}
      <SearchBar
        placeholder="搜索民宿"
        value={houseName}
        onChange={handleChange}
        onCancel={handleCancle}
        onSubmit={handleSubmit}
      />
      {/**搜索结果 */}
      {loading ? (
        <ActivityIndicator toast />
      ) : (
        <div className="result">
          {houses.map((item) => (
            <div className="item" key={item.id}>
              <img
                alt="img"
                src={item.img}
              />
              <div className="item-right">
                <div className="title">{item.title}</div>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
