import { apiHelper } from './../utils/helpers'
const lang = 'zh-tw'
export default {
  getAttractions({ page, categoryIds }) {
    const searchParams = new URLSearchParams({ page, categoryIds })
    return apiHelper.get(`/${lang}/Attractions/All?${searchParams.toString()}`)
  }
}