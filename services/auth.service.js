import * as User from '../user.json'


class AuthService {

  login(user) {
    if (user.username === User.username && user.password === User.password) {

      const token = "tokenyengectoken123456789"

      localStorage.setItem('token', token);

      return {
        'status': 'success',
        user: {
          'name': User.name,
          'username': User.username,
          'email': User.email,
          'token': token
        }
      }

    } else {
      return {
        'status': 'error'
      }
    }
  }
  fetchUser(token) {
    if (token === "tokenyengectoken123456789") {
      return {
        'status': 'success',
        user: {
          'name': User.name,
          'username': User.username,
          'email': User.email,
          'token': token
        }
      }
    } else {
      return {
        'status': 'error'
      }
    }
  }
  logout() {
    localStorage.removeItem('token');
  }
}

export default new AuthService();
