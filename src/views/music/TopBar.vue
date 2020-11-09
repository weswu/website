<template>
  <div id="topbar">
    <v-row justify="space-between">
      <v-col cols="12" md="4">
        <v-icon large dark>
          mdi-account-circle
        </v-icon>
        <span style="fontSize:13px;" v-if="user.nickname">{{user.nickname}}</span>
        <span @click="dialogFormVisible = true" style="color:#fff" v-else>登录</span>
        <span
          @click="logout"
          v-if="user.nickname"
          style="margin-top: 10px;margin-left: 15px;"
        >退出</span>
      </v-col>

      <v-col cols="12" md="5">
        <div>
          <a href='javascript:void(0)' @click.stop="togBack">
            <i class="el-icon-arrow-left"></i>
          </a>
        </div>
        <div>
          <a href>
            <i class="el-icon-refresh"></i>
          </a>
        </div>
        <div class="inputSq">
          <v-input
            :messages="['Messages']"
            @keyup.enter.native="togSearch"
          >
            请输入内容
          </v-input>
        </div>
        <div>
          <a href>
            <i class="el-icon-microphone"></i>
          </a>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <v-row justify="space-around">
          <v-icon dark medium>
            mdi-domain
          </v-icon>
          <v-icon dark>
            mdi-message-text
          </v-icon>
          <v-icon dark>
            mdi-access-point
          </v-icon>
          <v-icon dark>
            mdi-domain
          </v-icon>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  getPhoneLogin,
  getPhoneLoginOut,
  getUserSonglist,
} from "./network/login";
import {USER_SONGLIST} from '@/store/mutationType'

export default {
  name: "TopBar",
  data() {
    return {
      input: "",// 关联输入框内容
      dialogFormVisible: false, //显示登陆框
      userImg: require('@/assets/img/logo.png'),//默认图片
      loginInfoRules: {
        phone: [{ required: true, message: " ", trigger: "blur" }],
        password: [{ required: true, message: " ", trigger: "blur" }],
      },// 登录格式的校验
      form: {
        phone: "13479636407",
        password: "kzj2372966718",
      },// 默认给个数据，方便测试
      formLabelWidth: "80px", //登录内输入框的宽度
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  created() {
    //判断本地是否有用户信息
    if (this.user.nickname) {
      this.userImg = this.user.avatarUrl
      this.getUserSonglist(this.user.userId)
    }
  },
  methods: {
    //返回
    togBack(){
      this.$router.back();
    },
    //搜索框有数据则跳转页面
    togSearch(){
      if(this.input === ''){
        this.$toast.show("不能为空哦~",2000);
        return;
      };
       this.$router.push('/search' + this.input)
    },
    //获取用户的歌单 放到vuex上
    getUserSonglist(userId) {
      getUserSonglist(userId).then((res) => {
        // console.log(res.playlist);
        this.$store.commit(USER_SONGLIST,res.playlist);
      });
    },
    //退出接口登录 告诉接口已退出 并还原数据等操作
    getPhoneLoginOut() {
      getPhoneLoginOut().then((res) => {
        console.log(res);
        //当前用户信息设置为null
        this.user = null;
        //存储用户信息的localstorage设置为null
        window.localStorage.setItem("user", null);
        this.userImg = require("@/assets/img/logo.png");
        this.$store.commit(USER_SONGLIST,[]);
      });
    },
    //退出登录
    logout() {
      console.log("退出登录");
      //跳转到主页面
      this.$router.push('/home/rtstyle');
      this.getPhoneLoginOut();
    },
    //点击登录界面的 取消
    cancelLogin() {
      this.dialogFormVisible = false;
    },
    //点击登录页面的 确定
    confirmLogin() {
      this.getPhoneLogin(this.form.phone, this.form.password);
      // console.log(this.form.phone, this.form.password);
    },
    // 验证登录账户和密码
    getPhoneLogin(phone, pwad) {
      getPhoneLogin(phone, pwad).then((res) => {
        // console.log(res);
        //信息不符时
        if (res === undefined) {
          //登录框不消失
          this.dialogFormVisible = true;
          //弹出提示信息
          this.$toast.show("该手机号码不存在或未注册", 2000);
          return;
        }
        //其他错误时
        if (res.code !== 200) {
          this.dialogFormVisible = true;
          //提示对应的错误信息
          this.$toast.show(res.message, 2000);
          // console.log(res.message);
          return;
        }
        //保存cookie的信息
        // window.localStorage.setItem("musicCookie", res.cookie);
        //保存用户信息,退出时删除
        window.localStorage.setItem(
          "user",
          JSON.stringify(res.profile)
        );
        //放入用户的信息 图片 登录框禁止 提示
        this.user = res.profile;
        this.userImg = this.user.avatarUrl;
        this.dialogFormVisible = false;
        this.$toast.show(`欢迎你${this.user.nickname}`, 2000);
        this.getUserSonglist(this.user.userId);
      });
    },
  },
};
</script>
<style lang="sass">
#topbar
  height: 60px
  background: #5292fe
  position: relative
  color: #fff
  a
    font-size: 14px
    color: #fff
    text-decoration: none
    vertical-align: middle

.center
  color: #fff
  margin-top: 4px
  display: flex
  justify-content: space-around

.inputSq
  width: 360px
  margin-left: 15px
  margin-top: 12px

.center a i
  font-size: 20px
  color: rgba(255, 255, 255, 0.8)
  margin-left: 10px
  margin-top: 15px

.center a i:hover
  color: rgba(255, 255, 255, 1)

.m-logo
  width: 36px
  height: 36px
  border-radius: 50%

</style>
