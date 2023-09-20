<script setup lang="ts">
import { h, reactive } from 'vue'
import type { TableProps } from 'udesign-vue'

const config: TableProps = reactive({
  columns: [
    {
      label: '企业名称',
      prop: 'CompanyName',
    },
    {
      label: '车牌号码',
      prop: 'PlateNumber',
    },
    {
      label: '是否安装GPS',
      formatter: row => (row.HaveGps === '1' ? '有' : '没有'),
    },
  ],
  searchForms: [
    {
      label: '违规日期',
      id: 'a',
      component: 'el-date-picker',
      el: {
        type: 'daterange',
      },
      span: 8,
    },
    {
      label: () =>
        h(
          'span',
          {
            style: {
              color: 'red',
            },
          },
          '车牌号码',
        ),
      id: 'b',
      component: 'el-input',
      default: '苏州',
      el: {
        placeholder: '车牌号',
      },
      span: 8,
    },
    {
      id: 'c',
      label: '车辆类型',
      component: 'el-select',
      options: [
        {
          label: 'A',
          value: 'A',
        },
      ],
      span: 8,
    },
    {
      id: 'e',
      label: '清单类型',
      component: 'el-input-number',
      span: 8,
    },
    {
      id: 'f',
      label: '处理状态',
      component: 'el-select',
    },
  ],
  forms: [
    {
      id: 'PlateNumber',
      label: '车牌号码：',
      component: 'el-input',
      rules: {
        required: true,
        message: '请输入车牌号码！',
        trigger: 'change',
      },
    },
    {
      id: 'HaveGps',
      label: '是否安装GPS：',
      component: 'el-input',
    },
  ],
  getList() {
    return {
      list: [
        {
          CompanyName: '1',
        },
        {
          CompanyName: '2',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
        {
          CompanyName: '3',
        },
      ],
      total: 300,
    }
  },
})
</script>

<template>
  <ul-table v-bind="config" />
</template>

<style scoped></style>
