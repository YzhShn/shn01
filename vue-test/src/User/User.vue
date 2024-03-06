<template>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="groupId" label="Id" width="180">
        </el-table-column>
        <el-table-column prop="groupName" label="组名" width="180">
        </el-table-column>
        <el-table-column label="用户信息">
            <template slot-scope="scope">
                <el-table :data="scope.row.users" style="width: 100%">
                    <el-table-column label="Name" prop="name"></el-table-column>
                    <el-table-column label="Email" prop="email"></el-table-column>
                    <el-table-column label="Role" prop="role"></el-table-column>
                    <el-table-column label="Created At">
                        <template slot-scope="userScope">
                            {{ formatCreatedAt(userScope.row.createdAt) }}
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </el-table-column>
    </el-table>
</template>
  
<script>
export default {
    data() {
        return {
            tableData: []

        }

    },
    mounted() {
        this.getList()
    },
    methods: {
        getList() {
            let res = require('./data.json')
            console.log(res);
            this.tableData = res.data
        },
        formatCreatedAt(createdAt) {
            return new Date(createdAt).toLocaleString();
        }
    }
}

</script>