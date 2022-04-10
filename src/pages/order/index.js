import React, { useState, useEffect } from 'react';
import { Tabs } from "antd-mobile";
import Lists from "./components/Lists";
import { useHttpHook } from "@/hooks";
import { CommonEnum } from "@/enums";

import "./index.less";

export default function(props){
  const [page, setPage] = useState(CommonEnum.PAGE);
  const [orders] = useHttpHook({
    url: '/order/lists',
    body: {
      ...page
    }
  })

  const tabs = [
    {
      title: '未支付'
    },
    {
      title: '已支付'
    }
  ]

  useEffect(() => {

  }, [])

  return (
    <div className="order-page">
      <Tabs
        tabs={tabs}
      >
        <div className="tab">
          <Lists orders={orders} type={0}></Lists>
        </div>
        <div className="tab">
          <Lists orders={orders} type={1}></Lists>
        </div>
      </Tabs>
    </div>
  )
}