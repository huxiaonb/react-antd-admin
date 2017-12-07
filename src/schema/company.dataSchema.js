import React from 'react';
import { Icon } from 'antd';

// 定义某个表的dataSchema, 结构跟querySchema很相似, 见下面的例子
// 注意: 所有的key不能重复

// 这个配置不只决定了table的schema, 也包括用于新增/删除的表单的schema

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
    key: 'companyName',  // 传递给后端的key
    title: '公司名',  // 前端显示的名字
    placeholder: '请输入公司名',

    // 其实dataType对前端的意义不大, 更重要的是生成后端接口时要用到, 所以要和DB中的类型一致
    // 对java而言, int/float/varchar/datetime会映射为Long/Double/String/Date
    dataType: 'varchar',  // 数据类型, 目前可用的: int/float/varchar/datetime

    // 这一列是否是主键?
    // 如果不指定主键, 不能update/delete, 但可以insert
    // 如果指定了主键, insert/update时不能填写主键的值;
    // 只有int/varchar可以作为主键, 但是实际上主键一般都是自增id

    // 可用的showType: normal/radio/select/checkbox/multiSelect/textarea/image/file/cascader
    showType: 'normal',  // 默认是normal, 就是最普通的输入框

    showInTable: true,  // 这一列是否要在table中展示, 默认true
    disabled: false, // 表单中这一列是否禁止编辑, 默认false
  },
  {
    key: 'alias',
    title: '别名',
    placeholder: '请输入别名',
    dataType: 'varchar',
    showType: 'normal',
    showInTable: true,
    disabled: false,
  },
  {
    key: 'companyType',
    title: '公司类型',
    placeholder: '请选择公司类型',
    dataType: 'varchar',
    showType: 'select',
    defaultValue: '0',
    options: [{key: '0', value: '国营'}, {key: '1', value: '私营'}, {key: '2', value: '合资'}, {key: '3', value: '外资'}],
  },
  {
    key: 'companyScale',
    title: '公司规模',
    placeholder: '请选择公司规模',
    dataType: 'varchar',
    showType: 'select',
    defaultValue: '0',
    options: [{key: '0', value: '1000人以下'}, {key: '1', value: '1000~3000'}, {key: '2', value: '3000~5000'}, {key: '3', value: '5000以上'}],
  },
  {
    key: 'companyAddress',
    title: '公司地址',
    placeholder: '请按照格式输入(xx省,xx市,xx区,xxxx)',
    defaultValue: '广东省,深圳市,罗湖区,二十八道口',
    dataType: 'varchar',
    showType: 'normal',
    showInTable: true,
    disabled: false,
  },
  {
    key: 'email',
    title: '邮箱',
    placeholder: '请输入公司邮箱',
    dataType: 'varchar',
    showType: 'normal',
    showInTable: true,
    disabled: false,
  },
  {
    key: 'phoneNumber',
    title: '电话号码',
    placeholder: '请输入电话号码',
    dataType: 'varchar',
    showType: 'normal',
    showInTable: true,
    disabled: false,
  },
  {
    key: 'contactPersonName',
    title: '联系人',
    placeholder: '请输入联系人',
    dataType: 'varchar',
    showType: 'normal',
    showInTable: true,
    disabled: false,
  },
  {
    key: 'description',
    title: '描述',
    placeholder: '请输入描述',
    dataType: 'varchar',
    width: 300,
    showType: 'normal',
    showInTable: true,
    disabled: false,
  },
  {
    key: 'password',
    title: '密码',
    placeholder: '请输入密码',
    dataType: 'varchar',
    showType: 'normal',
    showInTable: true,
    disabled: false,
  },
]