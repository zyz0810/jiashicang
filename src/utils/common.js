// 公共级联方法

export function getCascaderOptions(arr, ids) {
  arr.forEach(({
    name,
    id,
    childrens
  }) => {
    const data = {
      label: name,
      value: id
    }
    if (childrens.length) {
      getCascaderOptions(childrens, data.children = [])
    }
    ids.push(data)
  })
  return ids
}
const latlog = {
  centerLatitude:'30.178653',//中心纬度
  centerLongitude:'120.19519',//中心经度
  zoom:14
}
export default {
  latlog
}
