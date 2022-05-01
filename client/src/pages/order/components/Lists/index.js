import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'antd-mobile';
import { isEmpty } from 'lodash';
import OrderItem from '../Item';
import { ShowLoading } from '@/components';
import { OrderSkeletons } from '@/skeletons';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {
    setTimeout(() => {
      if (isEmpty(props?.orders)) {
        setState(true);
      }
    }, 1500);
  }, []);

  return (
    <div>
      {isEmpty(props?.orders) ? (
        <>
          {state ? (
            <ShowLoading showLoading={false}></ShowLoading>
          ) : (
            <OrderSkeletons></OrderSkeletons>
          )}
        </>
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
