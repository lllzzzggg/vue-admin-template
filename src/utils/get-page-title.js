/*
 * @Descripttion:
 * @version: v0.0.1
 * @Date: 2020-01-08 10:35:19
 * @LastEditors: lzg
 * @LastEditTime: 2020-05-26 11:11:10
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || '后台模版'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
