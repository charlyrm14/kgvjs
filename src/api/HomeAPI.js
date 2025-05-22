const url = import.meta.env.VITE_API_URL

export default {

    async getInfo(userId) {

        try {

            const response = await fetch(`${url}/api/v1/info/${userId}`)

            const result = await response.json();
            return result
            
        } catch (error) {
            console.error(error);
        }
    },
}