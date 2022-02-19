import React, { useState, useEffect } from 'react';
import { UserContextProvider } from './userContext';
import App from './app';

export default function(props){

  useEffect(() => {

  }, [])

  return (
    <div>
      <UserContextProvider>
        <App {...props}></App>
      </UserContextProvider>
    </div>
  )
}