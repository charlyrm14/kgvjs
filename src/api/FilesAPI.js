const url = import.meta.env.VITE_API_URL

export default {

    async uploadFile( formData ) {
        try {
            
            const response = await fetch(`${url}/api/v1/file/upload`, {
                method: 'POST',
                body: formData
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

    async deleteFile (filePath) {

        try {
            
            const response = await fetch(`${url}/api/v1/file/delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    file_path: filePath
                })
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