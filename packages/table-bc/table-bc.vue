<template>
	<div>
		<vt-search :searchList=searchList></vt-search>
		<h-table :tableConfig="tableConfig"></h-table>
	</div>
</template>
<script>
import HTable from '@vt/table/table.vue'
import VtSearch from '@vt/search/search.vue'

export default {
    name: 'HTableBc',
    components: {
        HTable,
        VtSearch
    },
    data () {
        return {
            // 搜索配置项
            searchList: [
                {label: '姓名', value: null, type: 'INPUT', key: 'person'}
            ],
            // 表格table数据配置项的
            tableConfig: {
                // 表格数据
                data: [
                    {part: '主轴齿轮箱润滑'},
                    {part: '丝杠与导轨润滑'},
                    {part: '主轴与丝杠冷却'},
                    {part: '油雾器'}
                ],
                // 列配置
                columns: [
                    {
                        label: '润滑部位',
                        prop: 'part',
                        'min-width': 140
                    },
                    {
                        label: '油品号',
                        prop: 'oilnum',
                        slotName: 'oilnum',
                        'min-width': 140
                    }
                ]
            }
        }
    },
    // 组件将不会把未被注册的props呈现为普通的HTML属性
    // 不会在组件最外层div设置属性
    inheritAttrs: false,
    mounted () {},
    methods: {}
}
</script>
