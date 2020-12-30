/*
 * @Descripttion:
 * @version: v0.0.1
 * @Date: 2020-02-11 18:02:26
 * @LastEditors: liuzigen
 * @LastEditTime: 2020-02-11 20:00:19
 */
/*
 * @Descripttion:
 * @version: v0.0.1
 * @Date: 2020-02-11 18:02:26
 * @LastEditors: liuzigen
 * @LastEditTime: 2020-02-11 18:06:53
 */
const routes = [
  {
    id: 25,
    name: '单词管理',
    routePath: '/words',
    icon: 'star',
    breadcrumbParentId: '',
    menuParentId: ''
  },
  {
    id: 26,
    name: '单词书菜单',
    routePath: '/wordbooks/index',
    icon: 'book',
    breadcrumbParentId: '28',
    menuParentId: '28'
  },
  {
    id: 27,
    name: '单词书单词',
    routePath: '/wordbooks/books',
    icon: 'book',
    breadcrumbParentId: '28',
    menuParentId: '28'
  },
  {
    id: 28,
    name: '单词书',
    routePath: '/wordbooks',
    icon: 'book',
    breadcrumbParentId: '',
    menuParentId: ''
  }
]

export default [
  {
    url: '/routes/getUserMenu',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        data: routes
      }
    }
  }
]
