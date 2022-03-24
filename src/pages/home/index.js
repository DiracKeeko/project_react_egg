import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Search from './components/search';
import Hot from './components/hot';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="home">
      {/**header登录 */}
      <Header />
      {/**搜索 */}
      <Search />
      {/**热门民宿 */}
      <Hot />
    </div>
  );
}
