import * as User from '../user.json'

class AuthService {

  login(user) {
    if (user.username === User.username && user.password === User.password) {

      return {
        'status': 'success',
        user: {
          'name': User.name,
          'username': User.username,
          'email': User.email
        }
      }

    } else {
      return {
        'status': 'error'
      }
    }
  }
}

export default new AuthService();
