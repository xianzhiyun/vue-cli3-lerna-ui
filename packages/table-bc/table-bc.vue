<template>
	<div>
		<!-- 搜索组件 -->
		<h-search
			:searchList=searchList
			@searchData="getTableList"
			@reset="reset"
		>
			<!-- 搜索左侧的操作按钮 -->
			<template #searchLeft>
				<slot name="searchLeft"/>
			</template>
			<!-- 其他插槽使用 -->
			<template
				v-for="(item) in searchList"
				v-slot:[item.slotName]
			>
				<slot v-if="item.slotName" :name="item.slotName"/>
			</template>
		</h-search>
		<!-- 表格组件 -->
		<h-table
			:tableConfig="tableConfig"
			@onSizeChange="onSizeChange"
			@onCurrentChange="onCurrentChange">
			<!-- 暴露插槽给父级元素，供使用-->
			<template #no="{scope}" v-for="(item) in tableConfig.columns">
				<slot v-if="item.slotName" :name="item.slotName" :scope="scope"/>
			</template>
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
    props: {
        searchList: {
            type: Array,
            default: () => []
        },
        tableConfig: {
            type: Object,
            required: true
        }
    },
    data () {
        return {}
    },
    mounted () {
        // 第一次进行触发搜索
        this.getTableList()
    },
    methods: {
        /**
         * @method 搜索
         */
        getTableList (val, type) {
            this.tableConfig.loading = true
            if (type === 'search') {
                this.tableConfig.pagination['current-page'] = 1
            }
            let params = {
                ...val,
                pageNum: this.tableConfig.pagination['current-page'],
                pageSize: this.tableConfig.pagination['page-size'],
                ...this.tableConfig.params
            }
            axios({
                method: 'GET',
                url: this.tableConfig.url,
                headers: {
                    Authorization: 'Bearer db35d398-7624-4534-9299-be5b4b1fd386'
                },
                params: {
                    ...params
                }
            }).then((data) => {
                let res = data.data.data
                this.tableConfig.data = res.list
                this.tableConfig.pagination.total = res.total
                this.tableConfig.loading = false
            })
        },
        /**
         * @method 重置
         * */
        reset () {
            this.getTableList({}, 'reset')
            this.tableConfig.pagination['current-page'] = 1
        },
        onCurrentChange (val) {
            this.tableConfig.pagination['current-page'] = val
            this.getTableList({}, 'reset')
        },
        onSizeChange (val) {
            this.tableConfig.pagination['page-size'] = val
            this.tableConfig.pagination['current-page'] = 1
            this.getTableList()
        }
    }
}
</script>
