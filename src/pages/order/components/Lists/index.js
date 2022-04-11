import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'antd-mobile';
import { isEmpty } from 'lodash';
import OrderItem from '../Item';
import { ShowLoading } from '@/components';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div>
      {isEmpty(props?.orders) ? (
        <ActivityIndicator toast></ActivityIndicator>
      ) : (
        <div className="tab-lists">
          {props.orders.map((item) => (
            <OrderItem key={item.id} type={props.type} {...item}></OrderItem>
          ))}
          <ShowLoading showLoading={props.showLoading}></ShowLoading>
        </div>
      )}
    </div>
  );
}
