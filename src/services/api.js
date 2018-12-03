import request from '../utils/request'

//端口，本地可用可不用。如有线上的就切换到线上的
const host = "http://localhost:8000";

export async function getUser(param) {
  console.log('param',param);
  return request(`/api/users/${param}`);
}
