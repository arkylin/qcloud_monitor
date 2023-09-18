import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const IndexPage = () => {
  const [trafficPackage, setTrafficPackage] = useState(null);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (authenticated) {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/traffic-package');
          const data = await response.json();
          setTrafficPackage(data.TrafficPackageSet[0]);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      fetchData();
    }
  }, [authenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/auth?password=${password}`);
      const data = await response.json();

      if (response.ok) {
        setAuthenticated(true);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!trafficPackage && authenticated) {
    return <div>加载中...</div>;
  }

  if (!authenticated) {
    return (
      <div className="container">
        <h1 className="mt-5">腾讯云共享流量包</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="请输入口令"
          />
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }

  const { TotalAmount, UsedAmount, RemainingAmount, Deadline } = trafficPackage;

  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>腾讯云共享流量包</title>
      </head>
      <body>
        <div className="container">
          <h1 className="mt-5">腾讯云共享流量包</h1>
          <div className="mt-3">
            <p>总计: {TotalAmount} GB</p>
            <p>已使用: {UsedAmount} GB</p>
            <p>剩余: {RemainingAmount} GB</p>
            <p>截止日期: {Deadline}</p>
          </div>
        </div>
      </body>
    </html>
  );
};

export default IndexPage;
