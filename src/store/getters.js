const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.login.token,
  avatar: state => state.login.avatar,
  name: state => state.login.name,
  introduction: state => state.login.introduction,
  roles: state => state.login.roles,
  menus: state => state.login.menus,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs
}
export default getters
