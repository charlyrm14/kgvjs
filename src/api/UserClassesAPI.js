const url = import.meta.env.VITE_API_URL

export default {

    async getUserClasses() {

        try {

            const token = localStorage.getItem('auth_token')

            if(!token) return

            const response = await fetch(`${url}/api/v1/classes`, {
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
            console.error(error);
        }
    },

    async getHistoryClassesByUser() {

        try {
            const token = localStorage.getItem('auth_token')

            if(!token) return

            const response = await fetch(`${url}/api/v1/assistances/user`, {
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

    async userAssistance(data) {
        try {

            const response = await fetch(`${url}/api/v1/assistances/user`, {
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