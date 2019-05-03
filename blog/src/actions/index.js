import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(id => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({type: 'FETCH_USER', payload: response.data});
};


// cannot cache
// moi lan goi fetchUser tao ra 1 memoize object moi
// export const fetchUser = id => {
//   return _.memoize(async dispatch => {

//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER' , payload: response.data});
//   });
// };




// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({type: 'FETCH_USER', payload: response.data});
// })

// // moi lan goi fetchUser deu goi den 1 object memoize da tao ra
// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// }
