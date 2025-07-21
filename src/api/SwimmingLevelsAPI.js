const url = import.meta.env.VITE_API_URL

export default {

    async getSwimmingLevels() {
        try {
            
            const response = await fetch(`${url}/api/v1/swimming-levels`)

            const result = await response.json();

            return {
                data: result,
                status: response.status
            }

        } catch (error) {
            console.error(error)
        }
    },

    async getLevelsPerUser() {
        try {

            const token = localStorage.getItem('auth_token')

            if(!token) return

            const response = await fetch(`${url}/api/v1/swimming-levels/user`, {
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

    async updateSwimmingLevelInfo(levelId, data) {
        try {

            const response = await fetch(`${url}/api/v1/swimming-levels/${levelId}`, {
                method: 'PUT',
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

    async assignLevelToUser(data) {
        try {

            const response = await fetch(`${url}/api/v1/swimming-levels/assign-to-user`, {
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
    }
}