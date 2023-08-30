import React from 'react';
import { Spin } from 'antd';
import "./Index.scss";
const Loader = () => (
  <div className="loader">
   <h4> loading... please wait ..</h4><Spin size='large' />
  </div>
);

export default  Loader;