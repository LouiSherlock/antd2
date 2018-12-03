//模拟网络延迟时间的插件
import { delay } from 'roadhog-api-doc';
//一个mock插件，可快速生成mock数据 详情查看：http://mockjs.com/
import Mock from 'mockjs';

//模拟的json数据
import json from './matchingQuestion';

const proxy = {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // GET POST 可省略
  // '/api/users/1': { id: 1 },
  '/api/users/1': Mock.mock({
    'list|30': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1, 'id|+1':0 }]
  }),

  // '/api/users/1': (req, res) => {
  //   res.send({ status: 'ok' });
  // },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    res.end('OK');
  },
};

// 调用 delay 函数，统一处理 延迟  。若不需要延迟，改成 export default proxy
export default delay(proxy, 500);

