/*
 * @Descripttion:
 * @version: v0.0.1
 * @Date: 2020-01-08 10:35:19
 * @LastEditors: liuzigen
 * @LastEditTime: 2020-01-15 15:43:49
 */
const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  permission_routes: state => state.permission.routes
}
export default getters
