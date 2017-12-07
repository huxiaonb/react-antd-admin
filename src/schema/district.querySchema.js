import React from 'react';
import { Icon } from 'antd';




// 职位暂时  只暴露  姓名 作为查询条件
module.exports = [
  {
    key: 'label',
    title: '名称',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'parentId',
    title: '上一级ID',
    dataType: 'varchar',
    showType: 'normal',
  },
]