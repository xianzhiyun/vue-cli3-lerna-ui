<template>
	<div>
		<h3>表格</h3>
		<div class="table">
            <h-table-bc
				:searchList="searchList"
				:tableConfig="tableConfig">
				<template #searchLeft>
					<el-button
						type="primary"
						size="small"
						icon="el-icon-search"
					>搜 索
					</el-button>
				</template>
				<template #no="{scope}">
					{{'>>>>'}}-{{scope.row.no}}
				</template>
			</h-table-bc>
		</div>
		<h3>参数示例</h3>
	</div>
</template>

<script>

export default {
    name: 'table',
    data () {
        return {
            // 搜索配置项
            searchList: [
                {label: '编号', key: 'no',value: null, type: 'INPUT'}
            ],
            // 表格table数据配置项的
            tableConfig: {
                url: `${process.env.VUE_APP_BASE_API}/SERVICE-BUSINESS/api/productionExecutionPlanning/page/planning`,
				params: {},
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
                        slotName: 'no',
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
    }
}
</script>


<style scoped></style>

