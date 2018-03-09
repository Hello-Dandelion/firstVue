<template>
  <div class="table-box">
    <div class="download"><span @click="export2Excel"><i class="icon-download"></i>下载</span></div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="序号"
        width="80">
        <template slot-scope="scope">{{ scope.row.index }}</template>
      </el-table-column>
      <el-table-column
        label="日期"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="work"
        label="职业"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="option"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index,tableData)"
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 15, 20 ,25]"
      :page-size="defaultShowNum"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableDataAll.length">
    </el-pagination>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>确定删除此项？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="confirmFn">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          dialogVisible: false,
          deleteIndex:'',
          tableData:[],
          tableDataAll: [{
            index:1,
            date: '2017-05-03',
            name: 'Elem',
            address: '成都市 高新区',
            work:'程序员'
          }, {
            index:2,
            date: '2017-05-02',
            name: 'Price',
            address: '成都市 双流区',
            work:'网路工程师'
          }, {
            index:3,
            date: '2017-05-04',
            name: 'Andy',
            address: '成都市 锦江区',
            work:'会计'
          }, {
            index:4,
            date: '2017-05-01',
            name: 'Peter',
            address: '成都市 武侯区',
            work:'讲师'
          }, {
            index:5,
            date: '2017-05-08',
            name: 'John',
            address: '成都市 成华区',
            work:'厨师'
          }, {
            index:6,
            date: '2017-05-06',
            name: 'Candy',
            address: '成都市 青羊区',
            work:'教师'
          }, {
            index:7,
            date: '2017-05-07',
            name: 'Dandelion',
            address: '成都市 温江区',
            work:'医生'
          }, {
            index:8,
            date: '2017-05-01',
            name: 'Peter',
            address: '成都市 武侯区',
            work:'讲师'
          }, {
            index:9,
            date: '2017-05-08',
            name: 'John',
            address: '成都市 成华区',
            work:'厨师'
          }, {
            index:10,
            date: '2017-05-01',
            name: 'Peter',
            address: '成都市 武侯区',
            work:'讲师'
          }, {
            index:11,
            date: '2017-05-08',
            name: 'John',
            address: '成都市 成华区',
            work:'厨师'
          }, {
            index:12,
            date: '2017-05-06',
            name: 'Candy',
            address: '成都市 青羊区',
            work:'教师'
          }, {
            index:13,
            date: '2017-05-07',
            name: 'Dandelion',
            address: '成都市 温江区',
            work:'医生'
          }, {
            index:14,
            date: '2017-05-07',
            name: 'Dandelion',
            address: '成都市 温江区',
            work:'医生'
          }, {
            index:15,
            date: '2017-05-08',
            name: 'John',
            address: '成都市 成华区',
            work:'厨师'
          }, {
            index:16,
            date: '2017-05-08',
            name: 'John',
            address: '成都市 成华区',
            work:'厨师'
          }, {
            index:17,
            date: '2017-05-06',
            name: 'Candy',
            address: '成都市 青羊区',
            work:'教师'
          }, {
            index:18,
            date: '2017-05-07',
            name: 'Dandelion',
            address: '成都市 温江区',
            work:'医生'
          }, {
            index:19,
            date: '2017-05-06',
            name: 'Candy',
            address: '成都市 青羊区',
            work:'教师'
          }, {
            index:20,
            date: '2017-05-07',
            name: 'Dandelion',
            address: '成都市 温江区',
            work:'医生'
          }, {
            index:21,
            date: '2017-05-06',
            name: 'Candy',
            address: '成都市 青羊区',
            work:'教师'
          }, {
            index:22,
            date: '2017-05-07',
            name: 'Dandelion',
            address: '成都市 温江区',
            work:'医生'
          }, {
            index:23,
            date: '2017-05-06',
            name: 'Candy',
            address: '成都市 青羊区',
            work:'教师'
          }, {
            index:24,
            date: '2017-05-07',
            name: 'Dandelion',
            address: '成都市 温江区',
            work:'医生'
          }],
          multipleSelection: [],
          defaultShowNum:10,
          currentPage:1
        }
      },

      methods: {
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        deleteRow(index,data){
          this.dialogVisible = true;
          this.deleteIndex = index;
        },
        confirmFn(){
          this.tableData.splice(this.deleteIndex, 1);
          this.dialogVisible = false;
        },
        handleSizeChange(val) {
          this.defaultShowNum = val;
          this.tableData = this.tableDataAll.slice(0,val);
          this.currentPage = 0;//选择显示多少页时，使第一页高亮
          this.currentPage = 1;
        },
        handleCurrentChange(val) {
          let num = this.defaultShowNum;
          this.tableData = this.tableDataAll.slice((val-1)*num,val*num);
          //console.log(`当前页: ${val}`);
        },
        export2Excel() {
          require.ensure([], () => {
            const { export_json_to_excel } = require('../vendor/Export2Excel');
            const tHeader = ['日期','姓名', '地址', '职业',];
            const filterVal = ['date', 'name', 'address', 'work'];
            const list = this.tableDataAll;
            const data = this.formatJson(filterVal, list);
            export_json_to_excel(tHeader, data, 'XXX表');
          })
        },
        formatJson(filterVal, jsonData) {
          return jsonData.map(v => filterVal.map(j => v[j]))
        }
      },
      created(){
        this.tableData = this.tableDataAll.slice(0,this.defaultShowNum);
      }
    };
</script>

<style lang="scss" scoped>
  .option-btns{
    margin: 10px 0;
    float: right;
  }
</style>
<style lang="scss">
  @mixin fontSize($fontSize:12px){
    font-size: $fontSize;
  }
  .table-box{
    .el-table{
      th,td{
        text-align: center !important;
      }
      th{
        padding: 10px 0;
        background-color: #e6ebf5;
      }
      td{
        padding: 6px 0;
      }
    }
    .cell,.cell>div,.cell>button>span{
      @include fontSize;
      div, span{
        @include fontSize;
      }
    }
    .el-pagination{
      margin: 18px 0;
      float: right;
    }
    .download{
      span{
        float: right;
        padding: 6px 12px;
        margin-bottom: 10px;
        color: #2ba3f9;
        i{
          font-size: 15px;
          margin-right: 2px;
        }
      }
    }
  }
</style>
