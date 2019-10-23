/* 布局 */
import Row from '@vt/row'
import Col from '@vt/col'

/* 基础组件 */
import Quote from '@vt/quote'
import Code from '@vt/code'
import  { Btn, BtnGroup } from '@vt/button/index'
import { Table, TableColumn } from '@vt/table'
import Pagination from '@vt/pagination'
import { Radio, RadioBtn, RadioGroup } from '@vt/radio'
import { Checkbox, CheckboxBtn, CheckboxGroup } from '@vt/checkbox'
import Select from '@vt/select'
import Input from '@vt/input'
import Alert from '@vt/alert'
import Tooltip from '@vt/tooltip'
import { Tag, TagGroup } from '@vt/tag'
import Snackbar from '@vt/snackbar'
import Toast from '@vt/toast'

/* 弹框 */
import Poper from '@vt/poper'
import Dialog from '@vt/dialog'

/* 复合组件 */
import { Dropdown, DropdownItem } from '@vt/dropdown'
import { Nav, NavItem } from '@vt/nav'

/* 动画 */
import Particle from '@vt/particle'

const components = [
  Row,
  Col,

  Quote,
  Code,
  Btn,
  BtnGroup,
  TableColumn,
  Table,
  Pagination,
  Radio,
  RadioBtn,
  RadioGroup,
  Checkbox,
  CheckboxBtn,
  CheckboxGroup,
  Input,
  Select,
  Alert,
  Tooltip,
  Tag,
  TagGroup,

  Poper,
  Dialog,

  Dropdown,
  DropdownItem,
  Nav,
  NavItem,

  Particle
]

export default {
  install (Vue) {
    components.map(component => {
      Vue.component(component.name, component)
    })

    Vue.prototype.$snackbar = Snackbar
    Vue.prototype.$toast = Toast
  }
}
