import React, { useState, useEffect } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import { useHttpHook, useObserverHook, useImgHook } from '@/hooks';

import './index.less';

export default function (props) {
  const [houseName, setHouseName] = useState('');
  const [page, setPage] = useState({
    pageSize: 8, // 单页展示元素数量
    pageNum: 1, // 页码数
  });
  const [houseLists, setHouseLists] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [houses, loading] = useHttpHook({
    url: '/house/search',
    body: {
      ...page,
    },
    watch: [page.pageNum],
  });

  /**
   * 1、监听loading是否展示出来
   * 2、修改分页数据
   * 3、监听分页数据的修改，发送请求，获取下一页的数据
   * 4、监听loading的变化，拼装数据
   */
  useObserverHook(
    '#loading',
    (entries) => {
      // console.log(entries);
      if (!loading && entries[0].isIntersecting) {
        setPage({
          ...page,
          pageNum: page.pageNum + 1,
        });
      }
    },
    null,
  );

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

  useEffect(() => {
    if (!loading && houses) {
      if (houses.length) {
        setHouseLists([...houseLists, ...houses]);
        // ↓ 最后一个请求，后面就不要发了
        if (houses.length < page.pageSize) {
          setShowLoading(false);
        }
      } else {
        setShowLoading(false);
      }
    }
  }, [loading]);

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
      {!houseLists.length ? (
        <ActivityIndicator toast />
      ) : (
        <div className="result">
          {houseLists.map((item) => (
            <div className="item" key={item.id}>
              <img alt="img" src={item.img} />
              <div className="item-right">
                <div className="title">{item.title}</div>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
          {showLoading ? (
            <div id="loading">loading</div>
          ) : (
            <div>没有数据了</div>
          )}
        </div>
      )}
    </div>
  );
}
