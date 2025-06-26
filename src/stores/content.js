import ContentAPI from "@/api/ContentAPI"
import { typeAlertIcon } from "@/helpers"
import { defineStore } from "pinia"
import { computed, reactive, ref } from "vue"
import { useRouter } from "vue-router"

export const useContentStore = defineStore('content', () => {

    const urlAPI = import.meta.env.VITE_API_URL
    const router = useRouter()
    const contentDetail = ref(null)
    const contents = ref([])
    const selectedContentType = ref(0)
    const messageError = reactive({
        text: '',
        status: false
    })
    const alert = reactive({
        title: '',   
        subtitle: '',
        color: '',
        icon: '',
        status: false,
    })

    const fetchGetContents = async() => {
        try {
            
            const response = await ContentAPI.getContents()

            if (response.status === 200) {
                contents.value = response.data.data
            }

            if(response.status === 404){
                contents.value = []
            }

        } catch (error) {
            console.error(error)
        }
    }

    const createNoticeContent = async(data) => {
        try {
                const response = await ContentAPI.newNotice(data)

                if (response.status === 201) {
                    handleAlert(
                        'Éxito',
                        response.data.message,
                        'success'
                    )
                    contents.value.unshift(response.data.data)
                    resetAlert()
                    return true
                }

        } catch (error) {
            console.error(error)
            handleAlert(
                'Operacion fallida',
                'Hubo un error al crear el contenido',
                'error'
            )
            resetAlert()
            return true
        }
    }

    const createEventContent = async(data) => {
        try {
                const response = await ContentAPI.newEvent(data)

                if (response.status === 201) {
                    handleAlert(
                        'Éxito',
                        response.data.message,
                        'success'
                    )
                    contents.value.unshift(response.data.data)
                    resetAlert()
                    return true
                }
                
                if(response.status === 422) {
                    if (response.data?.errors?.start_date) {
                        messageError.text = response.data?.errors?.start_date[0]
                        messageError.status = true
                    }

                    if (response.data?.errors?.end_date ) {
                        messageError.text = response.data?.errors?.end_date[0]
                        messageError.status = true
                    }
                    resetMessage()
                }

        } catch (error) {
            console.error(error)
            handleAlert(
                'Operacion fallida',
                'Hubo un error al crear el contenido',
                'error'
            )
            resetAlert()
            return true
        }
    }

    const fetchGetContentBySlug = async(slug) => {
        try {
            const response = await ContentAPI.getContentBySlug(slug)

            if (response.status === 200) {
                contentDetail.value = response.data.data
            }

        } catch (error) {
            console.error(error)
        }
    }

    const deleteContent = async(content) => {
        try {

            const { id, slug } = content
            const response = await ContentAPI.deleteContent(slug)

            if(response.status === 200) {
                contents.value = contents.value.filter(c => c.id !== id)
                router.push({ name: 'admin-content' })
                handleAlert(
                    'Éxito',
                    'Contenido eliminado con éxito',
                    'success'
                )
                resetAlert()
            }

            if (response.status === 404) {
                router.push({ name: 'admin-content' })
                handleAlert(
                    'Operacion fallida',
                    'El contenido que estas tratando de eliminar ya no existe',
                    'error'
                )
                resetAlert()
            }

        } catch (error) {
            console.error(error)
            router.push({ name: 'admin-content' })
            handleAlert(
                'Operacion fallida',
                'Hubo un error al eliminar el contenido seleccionado',
                'error'
            )
            resetAlert()
        }
    }

    const handleAlert = (title, subtitle, type = 'success') => {
        alert.title = title,   
        alert.subtitle = subtitle,
        alert.color = type === 'success' ? 'green' : 'red',
        alert.icon = typeAlertIcon(type),
        alert.status = true
    }

    const resetAlert = () => {
        setTimeout(() => {
            alert.title = '',   
            alert.subtitle = '',
            alert.color = '',
            alert.icon = '',
            alert.status = false 
        }, 4000);
    }

    const resetMessage = () => {
        setTimeout(() => {
            messageError.text = ''
            messageError.status = false
        }, 6000);
    }

    const filterContent = computed(() => {
        if(selectedContentType.value === 0) return contents.value
        if(selectedContentType.value === 1) return contents.value.filter(c => c.content_type_id === 1)
        if(selectedContentType.value === 2) return contents.value.filter(c => c.content_type_id === 2)
        return []
    })

    return {
        urlAPI,
        contentDetail,
        contents,
        selectedContentType,
        messageError,
        alert,
        fetchGetContents,
        createNoticeContent,
        createEventContent,
        fetchGetContentBySlug,
        deleteContent,
        filterContent
    }
})
