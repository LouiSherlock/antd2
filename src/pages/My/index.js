import React from 'react';
import { connect } from 'dva';


const MyPage = ({ dispatch, products }) => {

  return (
    <div>
      <h2>List of MyPage new</h2>
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(MyPage);
