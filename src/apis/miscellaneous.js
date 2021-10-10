import { apiHelper } from './../utils/helpers'
const lang = 'zh-tw'
export default {
  getCategories({ type }) {
    const searchParams = new URLSearchParams({ type })
    return apiHelper.get(`/${lang}/Miscellaneous/Categories?${searchParams.toString()}`)
  }
}