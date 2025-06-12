const url = import.meta.env.VITE_API_URL

export default {

    async getUsers() {

        try {

            const response = await fetch(`${url}/api/v1/users`)

            const result = await response.json();
            return result;

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

    async deleteUser( userId ) {

        try {

            const response = await fetch(`${url}/api/v1/users/${userId}`, {
                method: 'DELETE',
                headers: {
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
    }
}