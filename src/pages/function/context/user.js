import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "./userContext";

export default function(props){
  const { state } = useContext(UserContext);

  useEffect(() => {

  }, [])

  return (
    <div>
      <h1>user page</h1>
      <h1>user-id: {state.user.id}</h1>
      <h1>user-name: {state.user.name}</h1>
    </div>
  )
}