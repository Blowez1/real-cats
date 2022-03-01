import AuthService from '../services/auth.service';

export default ({ app }, inject) => {
    
    inject('AuthService', AuthService)
    
}