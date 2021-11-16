import API from '_api';

export const signIn = (params) => API.post('/login', params);

export const signUp = (params) => API.post('/user/signup', params);

export const deleteUser = (params) => API.delete('/users/' + params);

export const logout = (params) => API.delete('logout', params);
