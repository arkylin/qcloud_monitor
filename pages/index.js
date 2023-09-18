import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const HomePage = () => {
    return (
      <div className="container">
        <h1 className="mt-5">腾讯云使用情况查询</h1>
        <p>这是一个使用Next.js编写的腾讯云使用情况查询系统。</p>
        <a className="btn btn-primary" href="getTrafficPackages">共享流量包</a>
      </div>
    );
  };

export default HomePage;