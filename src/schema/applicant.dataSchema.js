import React from 'react';
import { Icon } from 'antd';

// 定义某个表的querySchema
// schema的结构和含义参考下面的例子
// 注意: 所有的key不能重复

module.exports = [
    {
    key: '_id',  // 传递给后端的key
    title: 'ID',  // 前端显示的名字

    // 其实dataType对前端的意义不大, 更重要的是生成后端接口时要用到, 所以要和DB中的类型一致
    // 对java而言, int/float/varchar/datetime会映射为Long/Double/String/Date
    dataType: 'varchar',  // 数据类型, 目前可用的: int/float/varchar/datetime

    // 这一列是否是主键?
    // 如果不指定主键, 不能update/delete, 但可以insert
    // 如果指定了主键, insert/update时不能填写主键的值;
    // 只有int/varchar可以作为主键, 但是实际上主键一般都是自增id
    primary: true,

    // 可用的showType: normal/radio/select/checkbox/multiSelect/textarea/image/file/cascader
    showType: 'normal',  // 默认是normal, 就是最普通的输入框

    showInTable: false,  // 这一列是否要在table中展示, 默认true
    disabled: true, // 表单中这一列是否禁止编辑, 默认false

  },
  {
    key: 'wechatOpenId',
    title: '微信ID',
    showInTable: false,
    disabled: true,
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'name',
    title: '姓名',
    placeholder: '请输入姓名',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'gender',
    title: '性别',
    placeholder: '请输入性别',
    options: [{key: '0', value: '男'}, {key: '1', value: '女'}],
    defaultValue: '0',
    showType: 'select',
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
    defaultValue: '0',
    options: [{key: '0', value: '优秀'}, {key: '1', value: '良好'}, {key: '2', value: '其他'}],
  },
  {
    key: 'marriageState',
    title: '婚姻状况',
    placeholder: '请输入婚姻状况',
    dataType: 'varchar',
    showType: 'select',
    defaultValue: '0',
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
    title: '紧联人姓名',
    placeholder: '请输入紧急联系人姓名',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'emergencyContactPhoneNumber',
    title: '紧联人电话',
    placeholder: '请输入紧急联系人电话号码',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'emergencyContactAddress',
    title: '紧联人地址',
    placeholder: '请输入紧急联系人地址',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'emergencycontactrelation',
    title: '紧联人关系',
    placeholder: '请输入紧急联系人关系',
    dataType: 'varchar',
    showType: 'normal',
  },
];