const url = import.meta.env.VITE_API_URL

export default {

    async login(data) {

        try {

            const response = await fetch(`${url}/api/v1/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(data)
            })

            const result = await response.json();
            return result;

        } catch (error) {
            console.error(error);
        }
    },

    async auth() { 

        try {

            const token = localStorage.getItem('auth_token')

            if(!token) return

            const response = await fetch(`${url}/api/v1/auth/user`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }, 
            })

            const result = await response.json();
            return result;
            
        } catch (error) {
            console.error(error);
            
        }
        
    }
}