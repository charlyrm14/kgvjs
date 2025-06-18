const url = import.meta.env.VITE_API_URL

export default {

    async sendToken (data) {
        try {

            const response = await fetch(`${url}/api/v1/password/email`, {
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

    async verifyToken(token) {
        try {

            const response = await fetch(`${url}/api/v1/password/validate-token/${token}`)

            const result = await response.json();
            
            return {
                data: result,
                status: response.status
            }

        } catch (error) {
            console.error(error)
        }
    },

    async changePassword(data) {
        try {
            
            const response = await fetch(`${url}/api/v1/password/reset`, {
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