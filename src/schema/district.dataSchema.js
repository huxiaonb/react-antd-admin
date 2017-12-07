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
    key: 'label',  // 传递给后端的key
    title: '名称',  // 前端显示的名字
    dataType: 'varchar',  // 数据类型, 目前可用的: int/float/varchar/datetime
    showType: 'normal',  // 默认是normal, 就是最普通的输入框
  },
  {
    key: 'locationType',
    title: '类型',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'parentId',
    title: '上一级ID',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'chineseCharacter',
    title: '拼音',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'acronym',
    title: '拼音首字母',
    dataType: 'varchar',
    showType: 'normal',
  },
]