import AuthAPI from "@/api/AuthAPI"
import { useRouter } from "vue-router"
import { defineStore } from "pinia"
import { onMounted, reactive, ref } from "vue"
import { useChatIAStore } from "./chat"
import UserAPI from "@/api/UserAPI"

export const useUserStore = defineStore('user', () => {

    const router = useRouter()

    const chat = useChatIAStore()

    const user = ref({})
    const users = ref([])
    const userToDelete = ref(null)
    const statusAddUserModal = ref(false) 
    const statusDeleteUserModal = ref(false)
    
    const alert = reactive({
        status: false,
        bgColor: '',
        textColor: '',
        text: ''
    })

    const errorMessage = reactive({
        text: '',
        status: false
    })

    onMounted( async () => {

        try {

            const response = await UserAPI.getUsers()
            users.value = response.data

        } catch (error) {
            
        }
    })

    /**
     * The function `loadUser` asynchronously loads user data from an authentication API and assigns it
     * to a variable `user.value`, handling errors if they occur.
     */
    const loadUser = async () => {

        try {
            const data = await AuthAPI.auth()
            user.value = data.data

        } catch (error) {
            console.error('Error cargando usuario:', error)
        }
    }

    /**
     * The `logOut` function clears the authentication token, resets the user value and chat
     * conversation, and navigates to the login page.
     */
    const logOut = () => {
        localStorage.removeItem('auth_token')
        user.value = {}
        chat.conversation = [];
        router.push({ name: 'login' })
    }


    /**
     * Add user
     */
    const showAddUserModal = () => {
        statusAddUserModal.value = true
    }

    
    /**
     * The function `createUser` is an asynchronous function that adds a new user using data from a
     * form, displays success or error messages, and handles errors gracefully.
     * @param data - The `data` parameter in the `createUser` function likely contains information
     * about the user being created. This data could include details such as the user's name, email,
     * role ID, and any other relevant information needed to create a new user. This data is passed to
     * the `UserAPI.add
     */
    const createUser = async (data) => {
        
        try {

            const response = await UserAPI.addUser(data)

            if (response.data) {

                users.value.unshift(response.data)

                alert.status = true,
                alert.bgColor = 'bg-green-500',
                alert.textColor = 'text-white',
                alert.text = response.message

                statusAddUserModal.value = false
                
                setTimeout(() => {
                    alert.status = false,
                    alert.bgColor = '',
                    alert.textColor = '',
                    alert.text = ''
                }, 3000);

            }   

            if (response.errors) {
                if (response.errors.email) {
                    errorMessage.text = response.errors.email[0]
                    errorMessage.status = true
                }
                if (response.errors.role_id) {
                    errorMessage.text = response.errors.role_id[0]
                    errorMessage.status = true
                }
            }    

        } catch (error) {

            console.log(error)
        } 
    }

    const hideAddUserModal = () => {
        statusAddUserModal.value = false
        errorMessage.text = ''
        errorMessage.status = false
    }
    
    /**
     * Delete user
     */
    const showDeletetUserModal = (dataUser) => {
        statusDeleteUserModal.value = true
        userToDelete.value = dataUser
    }

    const deleteUser = async (userId) => {
        
        try {

            const response = await UserAPI.deleteUser(userId)

            if (response) {

                statusDeleteUserModal.value = false

                alert.status = true,
                alert.bgColor = 'bg-green-500',
                alert.textColor = 'text-white',
                alert.text = 'Usuario eliminado con éxito'

                setTimeout(() => {
                    alert.status = false,
                    alert.bgColor = '',
                    alert.textColor = '',
                    alert.text = ''
                }, 3000);

                users.value = users.value.filter((usr) => usr.id !== userId)

            } else {
                
                    statusDeleteUserModal.value = false

                    alert.status = true,
                    alert.bgColor = 'bg-red-500',
                    alert.textColor = 'text-white',
                    alert.text = 'Usuario no encontrado'

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

    const hideDeleteUserModal = () => {
        statusDeleteUserModal.value = false
    }

return {
        users,
        user,
        loadUser,
        logOut,
        statusAddUserModal,
        showAddUserModal,
        hideAddUserModal,
        createUser,
        statusDeleteUserModal,
        showDeletetUserModal,
        hideDeleteUserModal,
        userToDelete,
        deleteUser,
        alert,
        errorMessage,
    }
})