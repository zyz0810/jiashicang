const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  admin_mobile: state => state.user.admin_mobile,
  // avatar: state => state.user.avatar,
  name: state => state.user.name,
  id: state => state.user.id,
  // introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  backgroundColor:state=>state.cms.canvasStyleData.backgroundColor,
  backgroundImg:state=>state.cms.canvasStyleData.backgroundImg,
}
export default getters
