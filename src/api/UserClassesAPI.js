const url = import.meta.env.VITE_API_URL

export default {

    async getUserClasses() {

        try {

            const response = await fetch(`${url}/api/v1/classes/1`)

            const result = await response.json();
            return result
            
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
    }
}