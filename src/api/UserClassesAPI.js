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
    }
}