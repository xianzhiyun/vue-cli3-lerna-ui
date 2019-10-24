<template>
	<div class="search-content">
		<div
			style="display: flex;justify-content: flex-end"
		>
			<div
				class="factor"
				v-for="(item, index) in searchList"
				:key="index">
				<div class="search-span" v-if="item.label">{{ item.label }}:</div>
				<!-- 输入框 -->
				<el-input
					v-if="item.type === 'INPUT'"
					v-model="item.value"
					clearable
					size="small"
					:placeholder="item.paplaceholder || '请输入'"
					maxlength="50"
					@keyup.enter.native="searchClick"
				/>
				<!-- 下拉选择器 -->
				<el-select
					v-if="item.type === 'SELECT'"
					v-model="item.value"
					:placeholder="item.paplaceholder || '请输入'"
					clearable
					size="small"
				>
					<el-option
						v-for="val in item.options"
						:key="val.id"
						:label="val.name"
						:value="val.id"
					/>
				</el-select>
				<!-- 日期选择 -->
				<el-date-picker
					v-if="item.type === 'DATE'"
					v-model="item.value"
					size="small"
					type="date"
					:placeholder="item.paplaceholder || '请选择日期'"
				/>
				<!-- 日期,时间选择 -->
				<el-date-picker
					v-if="item.type === 'DATETIME'"
					v-model="item.value"
					size="small"
					type="datetime"
					:placeholder="item.paplaceholder || '请选择日期'"
				/>
				<!-- 日期范围 -->
				<el-date-picker
					v-if="item.type === 'DATERANGE'"
					v-model="item.value"
					size="small"
					type="daterange"
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
				/>
			</div>
			<div style="margin-left: 15px">
				<el-button
					type="primary"
					size="small"
					icon="el-icon-search"
					@click="searchClick"
				>搜 索
				</el-button>
				<el-button
					size="small"
					class="bt-class"
					@click="resetClick"
				>重 置
				</el-button>
			</div>
		</div>
	</div>
</template>
<script>
/**
 * @author MARS  <wangyunfan@vtstar.net>
 * @fileoverview 搜索条件封装
 * @this 帆哥出品,转载请注明出处 🤙🤙🤙
 * 用于普通表格页面搜索，不展开情况
 */
export default {
    name: 'HSearch',
    props: {
        searchList: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            hidden: true,
            iconName: 'open'
        }
    },

    methods: {
        /**
         * @method 判断按钮展开收起
         * @param {String} val 展开收起标识符
         */
        expansion (val) {
            if (this.hidden) {
                this.hidden = !this.hidden
            } else {
                this.hidden = true
            }
            if (val === 'open') {
                this.iconName = null
            } else {
                this.iconName = 'open'
            }
        },
        /**
         * @method 搜索
         */
        searchClick () {
            let obj = {}
            this.searchList.map(item => {
                obj[item.key] = item.value
            })
            this.$emit('searchData', obj, 'search')
        },
        searchClickA () {
            let obj = {}
            this.searchList.map(item => {
                obj[item.key] = item.value
            })
            return obj
        },
        /**
         * @method 重置
         */
        resetClick () {
            this.searchList.map(item => {
                item.value = null
            })
            this.$emit('reset')
        }
    }
}
</script>
<style scoped>
	.el-input {
		width: auto !important;
	}
	
	.flex-col {
		display: flex;
		flex-direction: column;
	}
	
	.flex-row {
		display: flex;
		flex-direction: row;
	}
	
	.flex-1 {
		flex: 1;
	}
	
	.search-content {
		padding: 15px 0 0 0;
		text-align: right;
	}
	
	.factor {
		min-height: 36px;
		margin-bottom: 10px;
		display: flex;
		align-items: center;
	}
	
	.search-span {
		margin-right: 15px;
	}
	
	.bt-class {
		border: 1px solid #66b1ff;
		color: #3792ff;
	}
</style>
