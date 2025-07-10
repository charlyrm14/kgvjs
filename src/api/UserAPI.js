const url = import.meta.env.VITE_API_URL

export default {

    async infoHome() {
        try {
            
            const token = localStorage.getItem('auth_token')

            if(!token) return

            const response = await fetch(`${url}/api/v1/info`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }, 
            })

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }

        } catch (error) {
            console.error(error)
        }
    },

    async getUsers() {

        try {

            const response = await fetch(`${url}/api/v1/users`)

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }

        } catch (error) {
            console.error(error);
        }
    },

    async addUser( data ) {

        try {

            const response = await fetch(`${url}/api/v1/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(data)
            })

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }

        } catch (error) {
            console.error(error);
        }
    },

    async getUserByEmail(email) {

        try {

            const response = await fetch(`${url}/api/v1/users/search/${email}`)

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }

        } catch (error) {
            console.error(error);
        }
    },

    async updateUser(data) {

        try {

            const token = localStorage.getItem('auth_token')

            if(!token) return

            const response = await fetch(`${url}/api/v1/users`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(data)
            })

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }

        } catch (error) {
            console.error(error);
        }
    },

    async updateProfileImage(data) {

        try {

            const token = localStorage.getItem('auth_token')

            if(!token) return

            const response = await fetch(`${url}/api/v1/users/upload-image-profile`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(data)
            })

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }

        } catch (error) {
            console.error(error);
        }
    },

    async deleteUser( userId ) {

        try {

            const token = localStorage.getItem('auth_token')

            if(!token) return

            const response = await fetch(`${url}/api/v1/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }

        } catch (error) {
            console.error(error)
        }
    },

    async getUserById(userId) {

        try {

            const response = await fetch(`${url}/api/v1/users/${userId}`)

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }

        } catch (error) {
            console.error(error)
        }
    },

    async getTodayBirthdayUsers () {
        try {

            const token = localStorage.getItem('auth_token')

            if(!token) return

            const response = await fetch(`${url}/api/v1/users/birthday/today`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }, 
            })

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }
            
        } catch (error) {
            console.error(error)
        }
    },

    async getUsersByRole (role) {
        try {

            const token = localStorage.getItem('auth_token')

            if(!token) return

            const response = await fetch(`${url}/api/v1/users/by-role/${role}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }, 
            })

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }
            
        } catch (error) {
            console.error(error)
        }
    },

    async assignUserProfileInfo(data) {
        try {

            const response = await fetch(`${url}/api/v1/users-profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }

        } catch (error) {
            console.error(error)
        }
    },

    async getUserProfileInfo(userId) {
        try {

            const response = await fetch(`${url}/api/v1/users-profile/${userId}`)

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }

        } catch (error) {
            console.error(error)
        }
    }
}