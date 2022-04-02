import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './index.less';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div>
      {props.showLoading ? (
        <div id="loading" className="loading-info">
          loading
        </div>
      ) : (
        <div className="loading-info">没有数据了</div>
      )}
    </div>
  );
}

ShowLoading.defaultProps = {
  showLoading: true
}

ShowLoading.propTypes = {
  showLoading: PropTypes.bool
}