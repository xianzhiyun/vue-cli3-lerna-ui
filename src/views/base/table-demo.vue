<template>
	<div>
		<h3>表格</h3>
		<div class="table">
            <h-table-bc
				:searchList="searchList"
				:tableConfig="tableConfig">
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
    }
}
</script>


<style scoped></style>

