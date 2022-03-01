import * as User from '../user.json'

class AuthService {

  login(user) {
    if (user.username === User.username && user.password === User.password) {


      const rand = () => {
        return Math.random().toString(36).substr(2);
      };

      const token = () => {
        return rand() + rand();
      };

      localStorage.setItem('token', token());
      
      return {
        'status': 'success',
        user: {
          'name': User.name,
          'username': User.username,
          'email': User.email,
          'token': token()
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
