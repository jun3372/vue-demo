<template>
  <div class="app-main">
    <div class="basic-form">
      <basic-container>
        <el-header>
          <el-row>
            <el-button type="primary" icon="el-icon-back">返回</el-button>
          </el-row>
        </el-header>

        <el-main>
          <el-form :model="formData" ref="formData" label-width="100px" class="demo-formData">
            <el-form-item label="账户" prop="key">
              <el-input v-model="formData.username"></el-input>
            </el-form-item>

            <el-form-item label="昵称" prop="key">
              <el-input v-model="formData.nickname"></el-input>
            </el-form-item>

            <el-form-item label="密码">
              <el-input type="password" v-model="formData.password"></el-input>
            </el-form-item>

            <el-form-item label="角色">
              <el-select v-model="formData.role" multiple placeholder="请选择">
                <el-option v-for="item in roles" :label="item.title" :value="item.id"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button type="primary">提交</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </el-main>
      </basic-container>
    </div>
  </div>
</template>

<script>
import BasicContainer from "@vue-materials/basic-container";

export default {
  components: {
    BasicContainer
  },
  data() {
    return {
      formData: {
        username: "",
        nickname: "",
        password: "",
        avatar: "",
        roles: []
      },
      roles: []
    };
  }
};
</script>

<style scoped>
</style>