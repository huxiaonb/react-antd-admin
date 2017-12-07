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
    key: 'name',
    title: '姓名',
    placeholder: '请输入姓名',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'jobRequire',
    title: '工作要求',
    placeholder: '请输入工作要求',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'positionDesc',
    title: '职位描述',
    placeholder: '请输入职位描述',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'welfares',
    title: '福利',
    placeholder: '请选择福利',
    dataType: 'varchar',
    showType: 'select',
    options: [{key: '0', value: '五险一金'}, {key: '1', value: '带薪年假'}, {key: '2', value: '年度旅游'}],
  },
  {
    key: 'salaryStart',
    title: '薪资',
    placeholder: '请输入起始薪资',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'salaryEnd',
    title: '薪资',
    placeholder: '请输入最高薪资',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'ageStart',
    title: '起始年龄',
    placeholder: '请输入起始年龄',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'ageEnd',
    title: '年龄',
    placeholder: '请输入最大年龄',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'totalRecruiters',
    title: '招聘人数',
    placeholder: '请输入招聘人数',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'contactPerson',
    title: '联系人',
    placeholder: '联系人',
    dataType: 'varchar',
    showType: 'normal',
  },
  {
    key: 'phoneNumber',
    title: '电话号码',
    placeholder: '电话号码',
    dataType: 'varchar',
    showType: 'normal',
  },
];