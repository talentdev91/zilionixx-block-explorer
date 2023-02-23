import Axios, { AxiosInstance } from 'axios'

const authInstance: AxiosInstance = Axios.create()

authInstance.defaults.headers.common = { Authorization: localStorage.getItem('jwtToken') }

export default authInstance
