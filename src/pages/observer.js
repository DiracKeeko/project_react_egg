import React, { useState, useEffect } from 'react';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      console.log(e);
    });
    const element = document.querySelector("#loading");
    observer.observe(element);
  }, []);

  return (
    <div>
      observer
      <div
        id="loading"
        style={{ width: '100px', height: '100px', background: '#fea', marginTop: '1000px'}}
      >
        loading
      </div>
    </div>
  );
}
