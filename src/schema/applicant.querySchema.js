import React from 'react';
import { Icon } from 'antd';

// 定义某个表的querySchema
// schema的结构和含义参考下面的例子
// 注意: 所有的key不能重复


// 入职人员暂时  只暴露  姓名 作为查询条件
module.exports = [
  {
    key: 'name',
    title: '姓名',
    dataType: 'varchar',
    showType: 'normal',
  },
  /*
  {
    key: 'wechatOpenId',
    title: '微信ID',
    showInTable: false,
    disabled: true,
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'gender',
    title: '性别',
    placeholder: '请输入性别',
    options: [{key: '1', value: '男'}, {key: '2', value: '女'}],
    defaultValue: '1',
    showType: 'normal',
  },
  {
    key: 'folk',
    title: '民族',
    placeholder: '请输入民族',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'birthDate',
    title: '出生日期',
    placeholder: '请输入出生日期',
    dataType: 'datetime',
    showType: 'normal',
  },
  {
    key: 'healthState',
    title: '健康状况',
    placeholder: '请输入健康状况',
    dataType: 'varchar',
    showType: 'select',
    options: [{key: '0', value: '优秀'}, {key: '1', value: '良好'}, {key: '2', value: '其他'}],
  },
  {
    key: 'marriageState',
    title: '婚姻状况',
    placeholder: '请输入婚姻状况',
    dataType: 'varchar',
    showType: 'select',
    options: [{key: '0', value: '已婚'}, {key: '1', value: '未婚'}],
  },
  {
    key: 'idCardNumber',
    title: '身份证号码',
    placeholder: '身份证号码',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'nativePlace',
    title: '籍贯',
    placeholder: '请输入籍贯',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'homeAddress',
    title: '家庭住址',
    placeholder: '请输入家庭住址',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'currentAddress',
    title: '现住址',
    placeholder: '请输入现住址',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'mobile',
    title: '手机',
    placeholder: '请输入手机',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'emergencyContactName',
    title: '紧急联系人姓名',
    placeholder: '请输入紧急联系人姓名',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'emergencyContactPhoneNumber',
    title: '紧急联系人电话号码',
    placeholder: '请输入紧急联系人电话号码',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'emergencyContactAddress',
    title: '紧急联系人地址',
    placeholder: '请输入紧急联系人地址',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'emergencycontactrelation',
    title: '紧急联系人关系',
    placeholder: '请输入紧急联系人关系',
    dataType: 'varchar',
    showType: 'normal',
  },*/
];