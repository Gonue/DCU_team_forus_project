<template>
<diary></diary>
</template>
<script>
  import projects from './../projects'
  import { Table, TableColumn} from 'element-ui'
import Diary from '../../../components/Tabs/Diary.vue';
  export default {
    name: 'light-table',
    components: {
        Diary,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects,
        currentPage: 1
      };
    }
  }
</script>
