<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetClick('apple')">
        <div class="card-panel-icon-wrapper">
          <i class="el-icon-apple"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">apple</div>
          <div class="card-panel-num">102,400</div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetClick('pear')">
        <div class="card-panel-icon-wrapper">
          <i class="el-icon-pear"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">pear</div>
          <div class="card-panel-num">102,400</div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetClick('grape')">
        <div class="card-panel-icon-wrapper">
          <i class="el-icon-grape"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">grape</div>
          <div class="card-panel-num">102,400</div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetClick('cherry')">
        <div class="card-panel-icon-wrapper">
          <i class="el-icon-cherry"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">cherry</div>
          <div class="card-panel-num">102,400</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    //点击
    handleSetClick(type) {
      this.$emit('handleClick', type)
      console.log(type)
      switch (type) {
        case (type = 'apple'):
          this.appleClick()
          break
        case (type = 'pear'):
          this.pearClick()
          break
        case (type = 'grape'):
          this.grapeClick()
          break
        case (type = 'cherry'):
          this.cherryClick()
          break
      }
    },
    //苹果点击
    appleClick() {
      this.$message('苹果点击')
      this.$notify({
        title: '成功',
        message: '这是一次成功的苹果点击',
        type: 'success',
      })
    },
    //梨子点击
    pearClick() {
      this.$message({
        message: '梨子点击',
        type: 'warning',
      })
      this.$notify({
        title: '警告',
        message: '这是一次成功的梨子点击',
        type: 'warning',
      })
    },
    //葡萄点击
    grapeClick() {
      this.$message.error('葡萄点击')
      this.$notify.info({
        title: '消息',
        message: '这是一次葡萄点击',
        type: 'success',
      })
    },
    //樱桃点击
    cherryClick() {
      this.$message({
        message: '樱桃点击',
        type: 'success',
      })
      this.$notify.error({
        title: '错误',
        message: '这是一次错误的樱桃点击',
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col {
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .el-icon-apple {
        background: #40c9c6;
        color: #fff;
        border-radius: 10px;
      }

      .el-icon-pear {
        background: #36a3f7;
        color: #fff;
        border-radius: 10px;
      }

      .el-icon-grape {
        background: #f4516c;
        color: #fff;
        border-radius: 10px;
      }

      .el-icon-cherry {
        background: #34bfa3;
        color: #fff;
        border-radius: 10px;
      }
    }

    .el-icon-apple {
      color: #40c9c6;
      font-size: 70px;
    }

    .el-icon-pear {
      color: #36a3f7;
      font-size: 70px;
    }

    .el-icon-grape {
      color: #f4516c;
      font-size: 70px;
    }

    .el-icon-cherry {
      color: #34bfa3;
      font-size: 70px;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 5px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
        color: #000000;
      }
    }
  }
}
</style>