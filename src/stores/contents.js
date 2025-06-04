import ContentAPI from '@/api/ContentAPI'
import { defineStore } from 'pinia'
import { computed, onMounted, reactive, ref } from 'vue'

export const useContentStore = defineStore('contents', () => {

    const url_api = import.meta.env.VITE_API_URL

    const contents = ref([])
    const contentSelected = ref(0)
    const statusContentModal = ref(false)
    const statusDeleteContentModal = ref(false)
    const contentToDelete = ref(null)

    const alert = reactive({
        status: false,
        bgColor: '',
        textColor: '',
        text: ''
    })

    const errorEventMessage = reactive({
        text: '',
        status: false
    })

    const contentsNotFound = reactive({
        status: false,
        text: ''
    })

    const errorTokenExpired = reactive({
        status: false,
        text: ''
    })

    onMounted(async () => {
        try {

            const response = await ContentAPI.getContents()

            if (response.status === 200) {
                contents.value = response.data.data
            }

            if(response.status === 404) {
                contentsNotFound.status = true
                contentsNotFound.text = 'Aún no hay contenido, empieza agregando uno'
            }

            if (response.status === 401) {
                errorTokenExpired.status = true
                errorTokenExpired.text = 'Tu sesión ha expirado, por favor vuelve a iniciar sesión'
            }
            
        } catch (error) {
            console.error(error)
        }
    })

    const newNotice = async (data) => {
        try {

            const response = await ContentAPI.newNotice(data)

            if (response.status === 201) {
                contents.value.unshift(response.data.data)
                statusContentModal.value = false

                alert.status = true,
                alert.bgColor = 'bg-green-500',
                alert.textColor = 'text-white',
                alert.text = response.data.message

                setTimeout(() => {
                    alert.status = false,
                    alert.bgColor = '',
                    alert.textColor = '',
                    alert.text = ''
                }, 3000);
            }
            
        } catch (error) {
            console.error(error)
        }
    }

    const newEvent = async(data) => {
        try {
            const response = await ContentAPI.newEvent(data)

            if (response.status === 201) {
                contents.value.unshift(response.data.data)
                statusContentModal.value = false

                alert.status = true,
                alert.bgColor = 'bg-green-500',
                alert.textColor = 'text-white',
                alert.text = response.data.message

                setTimeout(() => {
                    alert.status = false,
                    alert.bgColor = '',
                    alert.textColor = '',
                    alert.text = ''
                }, 3000);

            }

            if(response.status === 422) {
                
                if (response.data.errors.start_date) {
                    errorEventMessage.status = true
                    errorEventMessage.text = 'La fecha de inicio debe ser un día despues de hoy'
                }

                if (response.data.errors.end_date) {
                    errorEventMessage.status = true
                    errorEventMessage.text = response.data.errors.end_date[0]
                }

                setTimeout(() => {
                    errorEventMessage.status = false
                    errorEventMessage.text = ''
                }, 3000);
            }

        } catch (error) {
            console.error(error)
        }
    }

    /**
     * Form Modal
     */
    const showContentModal = () => {
        statusContentModal.value = true
    }

    const hideContentModal = () => {
        statusContentModal.value = false
    }

    /**
     * Delete Content Modal
     */

    const showDeleteContentModal = (data) => {
        statusDeleteContentModal.value = true
        contentToDelete.value = data
    }

    const deleteContent = async (slug) => {
        try {

            const response = await ContentAPI.deleteContent(slug)

            if (response.status === 200) {
                contents.value = contents.value.filter((content) => content.slug !== slug)
                statusDeleteContentModal.value = false
                contentToDelete.value = null
            }
            
        } catch (error) {
            
        }
    }

    const hideDeleteContentModal = () => {
        statusDeleteContentModal.value = false
        contentToDelete.value = null
    }

    const filteredItems = computed(() => {
        if (contentSelected.value === 0) return contents.value
        if (contentSelected.value === 1) return contents.value.filter(i => i.content_category_id === 1)
        if (contentSelected.value === 2) return contents.value.filter(i => i.content_category_id === 2)
        return []
    })

    return {
        url_api,
        contents,
        statusContentModal,
        newNotice,
        showContentModal,
        hideContentModal,
        statusDeleteContentModal,
        showDeleteContentModal,
        hideDeleteContentModal,
        contentToDelete,
        deleteContent,
        contentSelected,
        filteredItems,
        newEvent,
        errorEventMessage,
        alert,
        errorTokenExpired,
        contentsNotFound
    }
})
