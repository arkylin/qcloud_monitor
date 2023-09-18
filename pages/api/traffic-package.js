const tencentcloud = require('tencentcloud-sdk-nodejs');
// const dotenv = require('dotenv');

const VpcClient = tencentcloud.vpc.v20170312.Client;

const clientConfig = {
  credential: {
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  region: process.env.region,
  profile: {
    httpProfile: {
      endpoint: 'vpc.tencentcloudapi.com',
    },
  },
};

export default async function handler(req, res) {
  try {
    const client = new VpcClient(clientConfig);
    const params = {};
    const data = await client.DescribeTrafficPackages(params);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
}
