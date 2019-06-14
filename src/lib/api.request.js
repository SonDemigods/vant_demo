import HttpRequest from '@/lib/axios'
import config from '@/config'

const axios = new HttpRequest(config.baseUrl)
export default axios