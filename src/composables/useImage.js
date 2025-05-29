import FilesAPI from "@/api/FilesAPI"
import { ref } from "vue";

export default function useImage() {

    const statusFile = ref(false)
    const isUploading = ref(false);
    const pathFile = ref(null)
    const statusDeleteFile = ref(false)

    const uploadFile = async (file) => {

        isUploading.value = true
        
        try {

            const formData = new FormData()
            formData.append('file', file)

            const response = await FilesAPI.uploadFile(formData)
            statusFile.value = true
            pathFile.value = response.data.data.path

        } catch (error) {

            console.error(error)

        } finally {

            isUploading.value = false
        }
    }

    const deleteFile = async (pathFile) => {

        try {
            
            const response = await FilesAPI.deleteFile(pathFile)

            if(response.status === 200) {
                statusDeleteFile.value = true
                statusFile.value = false
            }

        } catch (error) {

            console.error(error)
        }
    }

    return {
        uploadFile,
        statusFile,
        isUploading,
        pathFile,
        deleteFile,
        statusDeleteFile
    }
}