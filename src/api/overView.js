import request from '@/utils/request'
import Qs from 'qs'
/* 综合预览
 */
export function generalIndex(data) {
  return request({
    url: `/api/general/index`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
