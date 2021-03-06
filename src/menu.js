/**
 * 定义sidebar和header中的菜单项
 *
 * 一些约定:
 * 1.菜单最多3层;
 * 2.只有"叶子"节点才能跳转;
 * 3.所有的key都不能重复;
 */

// 其实理论上可以嵌套更多层菜单的, 但是我觉得超过3层就不好看了
// 可用的图标见这里: https://ant.design/components/icon-cn/

// 定义siderbar菜单
const sidebarMenu = [
  {
    key: 'company',  // route时url中的值
    name: '用户公司',  // 在菜单中显示的名称
    icon: 'smile',  // 图标是可选的
  },
  {
    key: 'applicant',
    name: '入职人员',
    icon: 'clock-circle',
  },
  {
    key: 'position',
    name: '已发布职位',
    icon: 'appstore',
  },
  /*
  {
    key: 'district',
    name: '城市信息',
    icon: 'eye',
  },*/
];

export default sidebarMenu;

// 定义header菜单, 格式和sidebar是一样的
// 特殊的地方在于, 我规定header的最右侧必须是用户相关操作的菜单, 所以定义了一个特殊的key
// 另外注意这个菜单定义的顺序是从右向左的, 因为样式是float:right
export const headerMenu = [
  {
    // 一个特殊的key, 定义用户菜单, 在这个submenu下面设置icon/name不会生效
    key: 'userMenu',
  },
];
