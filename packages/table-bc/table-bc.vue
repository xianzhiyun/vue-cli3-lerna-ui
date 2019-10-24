<template>
	<div>
		<h-search
			:searchList=searchList
			@searchData="getTableList"
			@reset="reset"
		></h-search>
		<h-table
			:tableConfig="tableConfig"
			@onSizeChange="onSizeChange"
			@onCurrentChange="onCurrentChange">
		</h-table>
	</div>
</template>
<script>
import HTable from '@vt/table/table.vue'
import HSearch from '@vt/search/search.vue'
import axios from 'axios'

export default {
    name: 'HTableBc',
    inheritAttrs: false,
    components: {
        HTable,
        HSearch
    },
    data () {
        return {
            // 搜索配置项
            searchList: [
                {label: '编号', key: 'no',value: null, type: 'INPUT'}
            ],
            // 表格table数据配置项的
            tableConfig: {
                loading: false,
                // 表格数据
                data: [
                    {part: '测试数据'}
                ],
                // 列配置
                columns: [
                    {
                        label: 'id',
                        prop: 'id',
                        'min-width': 140
                    },
                    {
                        label: 'no',
                        prop: 'no',
                        'min-width': 140
                    }
                ],
                pagination: {
                    total: 0, // 总页数
                    'page-size': 10,
                    'current-page': 1
                }
            }
        }
    },
    mounted () {
        // 第一次进行触发搜索
        this.getTableList()
    },
    methods: {
        /**
         * @method 搜索
         */
        getTableList (val,type) {
            this.tableConfig.loading = true
            if (type === 'search') {
                this.tableConfig.pagination['current-page'] =  1
            }
            let params = {
                ...val,
                pageNum: this.tableConfig.pagination['current-page'],
                pageSize: this.tableConfig.pagination['page-size']
            }
            axios({
                method: 'GET',
                url: `${process.env.VUE_APP_BASE_API}/SERVICE-BUSINESS/api/productionExecutionPlanning/page/planning`,
                headers: {
                    Authorization: 'Bearer 2e38e01d-a7da-4cfa-8a88-c31259f4db36'
                },
                params: {
                    ...params
                }
            }).then((data) => {
                let res = data.data.data
                this.tableConfig.data = res.list
                this.tableConfig.pagination.total = res.total
                this.tableConfig.loading = false;
            })
        },
        /**
         * @method 重置
         * */
        reset () {
            this.getTableList({}, 'reset')
            this.tableConfig.pagination['current-page'] =  1
		},
        onCurrentChange (val) {
            this.tableConfig.pagination['current-page'] = val
            this.getTableList({}, 'reset')
        },
        onSizeChange (val) {
            this.tableConfig.pagination['page-size'] = val
            this.tableConfig.pagination['current-page'] =  1
            this.getTableList()
        }
    }
}
</script>
