const url = import.meta.env.VITE_API_URL

export default {

    async getSwimmingCategories() {

        try {

            const response = await fetch(`${url}/api/v1/swimming-categories`)

            const result = await response.json();
            return result
            
        } catch (error) {
            console.error(error);
        }
    },

    async getUserSwimmingCategories(userId) {

        try {

            const response = await fetch(`${url}/api/v1/swimming-categories/by-user/${userId}`)

            const result = await response.json();
            return result
            
        } catch (error) {
            console.error(error);
        }
    }
}