import React from 'react';
import { Icon } from 'antd';

// 定义某个表的querySchema
// schema的结构和含义参考下面的例子
// 注意: 所有的key不能重复


//公司暂时只暴露  公司名  和 邮箱 连个查询条件
module.exports = [
  {
    key: 'companyName',
    title: '公司名',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'email',
    title: '邮箱',
    dataType: 'varchar',
    showType: 'normal',
  },
  /*
  {
    key: 'alias',
    title: '别名',
    placeholder: '请输入别名',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'companyType',
    title: '公司类型',
    placeholder: '请输入公司类型',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'companyScale',
    title: '公司规模',
    placeholder: '请输入公司规模',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'companyAddress',
    title: '公司地址',
    placeholder: '请输入公司地址',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'phoneNumber',
    title: '电话号码',
    placeholder: '请输入电话号码',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'contactPersonName',
    title: '联系人',
    placeholder: '请输入联系人',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'description',
    title: '描述',
    placeholder: '请输入描述',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'password',
    title: '密码',
    placeholder: '请输入密码',
    dataType: 'varchar',
    showType: 'normal',
  },*/
];