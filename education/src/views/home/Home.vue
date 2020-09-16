<template>
  <div>
    <el-table :data="dataList" stripe style="width: 100%">
      <el-table-column prop="recordNum" label="编号" width="100"></el-table-column>
      <el-table-column prop="studentsex" label="学生性别" width="100"></el-table-column>
      <el-table-column prop="grade" label="年级" width="100"></el-table-column>
      <el-table-column prop="subject" label="科目" width="200"></el-table-column>
      <el-table-column prop="requirement" label="具体情况及要求" ></el-table-column>
      <el-table-column prop="address" label="辅导地点" ></el-table-column>
      <el-table-column prop="releaseDate" label="发布日期" >
        <template slot-scope="{ row }">
          {{ row.releaseDate | moment }}
        </template>
      </el-table-column>
    </el-table>
      <!-- hide-on-single-page -->
    <el-pagination
      :page-size="pageSize"
      :current-page.sync="currentPage"
      @current-change="handlePageChange"
      layout="prev, pager, next, total"
      :total="count"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getList } from '@/api/index'
export default {
  name: 'Home',
  data () {
    return {
      dataList: [],
      pageSize: 5,
      currentPage: 1,
      count: 11,
      maxPage: 1
    }
  },
  created () {
    this.getDataList()
  },
  methods: {
    getDataList (page = 1, pageSize = 5) {
      getList(page, pageSize).then(res => {
        console.log(res)
        // this.pageSize = res.data.pageHolder.pageSize
        // this.currentPage = res.data.pageHolder.currentPage
        this.count = res.data.pageHolder.count
        this.dataList = res.data.pageHolder.list
      }).catch(err => {
        console.log(err)
      })
    },
    handlePageChange () {
      console.log(this.currentPage)
    }
  }
}
</script>

<style>

</style>
