import request from '@/utils/request'
import Qs from 'qs'
/* 首页菜单
 * limit
 * page
 *
 */
export function navList(data) {
  return request({
    url: `admin/homemenu/index`,
    method: 'post',
    data: Qs.stringify(data)
  })
}
