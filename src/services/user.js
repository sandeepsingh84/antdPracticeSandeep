import request from '@/utils/request';
export async function query() {
  return request('/api/users');
}
// export async function queryCurrent({ body, pathParams, query }) {
//   return await axios.get(
//     `http://localhost:3001/contacts/${pathParams?.id}?userData=${query?.isMale}`,
//     body,
//   );
// }
export async function queryCurrent() {
  return request('/api/currentUser');
}
export async function queryNotices() {
  return request('/api/notices');
}

export async function storeQuestion({ body }) {
  return body;
}


export const setQuestions = ({ body }) => {
  console.log(`body`, body);
  return body;
};