import decode from 'jwt-decode';
// import {
//     domain,
//     appPath
// } from '../config'

class AuthService {

    login = (applicant) => {
        // Get a token
        return this.fetch(`/log-in`, {
            method: 'POST',
            body: JSON.stringify(applicant),
        }).then(res => {
            this.setToken(res.token);
            return Promise.resolve(res);
        });
    };

    // Checks if user is admin
    isAdmin = () => {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken();
        return !!token && !this.isAdminTrue(token); // handwaiving here
    };

    isAdminTrue = token => {
        try {
            const decoded = decode(token);
            if (!decoded.admin) {
                return true;
            } else return false;
        } catch (err) {
            return true;
        }
    };

    loggedIn = () => {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken();
        // return true
        //
        return !!token && !this.isTokenExpired(token); // handwaiving here
    };

    isTokenExpired = token => {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                this.logout();
                return true;
            } else return false;
        } catch (err) {
            return true;
        }
    };

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
        localStorage.setItem('city', decode(idToken).city);
    }

    getToken = () => {
        // Retrieves the user token from localStorage
        const token = localStorage.getItem('id_token');
        if (token) {
            return token
        } else return null
    };

    logout = () => {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('city');
    };

    getProfile = () => {
        return decode(this.getToken());
    };

    fetch = (url, options) => {
        // performs api calls sending the required authentication headers
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };

        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken();
        }

        return fetch(url, {
            headers,
            ...options,
        })
            .then(this._checkStatus)
            .then(response => response.json());
    };

    _checkStatus = response => {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            return response.json().then(error => {
                throw error;
            });
        }
    };
}
const auth = new AuthService();
export default auth;