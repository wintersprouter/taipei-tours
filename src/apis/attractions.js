import { apiHelper } from './../utils/helpers'
const lang = 'zh-tw'
export default {
  getAttractions() {
    return apiHelper.get(`/${lang}/Attractions/All`)
  }
}