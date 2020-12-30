/*
 * @Descripttion:
 * @version: v0.0.1
 * @Date: 2020-01-08 10:35:19
 * @LastEditors: lzg
 * @LastEditTime: 2020-05-26 14:37:01
 */
import { constantRoutes, asyncRoutes } from '@/router'
import Api from '../../api'
import Layout from '@/layout'
import { menuId } from '@/setting.json'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes (routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}
/**
 * 处理多级路由
 * @param list asyncLists
 */

export function formatRoutesMults (list) {
  let res = []

  list.forEach(item => {
    const tmp = {
      path: item.url,
      name: item.name,
      component: Layout,
      meta: { title: item.name, icon: item.icon || null, noCache: true }
    }
    if (item.children) {
      tmp.children = formatChildRoutes(item.children, item.url)
    }
    res.push(tmp)
  })
  return res
}

/**
 * 处理多级路由
 * @param child asyncList's children
 * @param fpath father route path
 */

export function formatChildRoutes (child, fpath) {
  let res = []

  child.forEach(item => {
    const tmp = {
      path: item.url,
      name: item.name,
      component: () => import('@/views' + fpath + item.url),
      meta: { title: item.name || null, noCache: true }
    }
    if (item.children) {
      tmp.children = formatChildRoutes(item.children)
    }
    res.push(tmp)
  })
  return res
}

/**
 * @param list asyncLists
 */

export function formatRoutes (list) {
  return list.map(r => {
    let path = r.routePath
    return {
      path,
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views' + path + '/index'),
          name: r.name,
          meta: { title: r.name, icon: r.icon, noCache: true }
        }
      ]
    }
  })
}

const state = {
  routes: constantRoutes,
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes ({ commit }) {
    return new Promise(resolve => {
      Api.getUserMenu({
        menuId: +menuId
      })
        .then(res => {
          // console.log(formatRoutesMults(res))
          let accessedRoutes = formatRoutesMults(res).concat(asyncRoutes) || []
          commit('SET_ROUTES', accessedRoutes)
          resolve(accessedRoutes)
        })
        .catch(err => {
          console.log(err)
          commit('SET_ROUTES', [])
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
