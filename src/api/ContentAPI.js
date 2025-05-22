const url = import.meta.env.VITE_API_URL

export default {

    async getContentBySlug(contentSlug) {

        try {

            const response = await fetch(`${url}/api/v1/content/${contentSlug}/detail`)

            const result = response.json();
            return result
            
        } catch (error) {
            console.error(error);
        }
    }
}