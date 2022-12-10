<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-blue py-7 py-lg-8 pt-lg-9">
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-header class="bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-3">
                <small>로그인</small>
              </div>
              <div class="btn-wrapper text-center">
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="img/icons/common/github.svg"
                  /></span>
                  <span class="btn-inner--text">Github</span>
                </a>
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="img/icons/common/google.svg"
                  /></span>
                  <span class="btn-inner--text">Google</span>
                </a>
              </div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <base-input
                alternative
                class="mb-3"
                name="Email"
                :rules="{ required: true, email: true }"
                prepend-icon="ni ni-email-83"
                placeholder="Email"
                @keyup.enter="submit()"
                v-model="state.form.userEmail"
              >
              </base-input>

              <base-input
                alternative
                class="mb-3"
                name="Password"
                :rules="{ required: true, min: 4 }"
                prepend-icon="ni ni-lock-circle-open"
                type="password"
                placeholder="Password"
                @keyup.enter="submit()"
                v-model="state.form.userPassword"
              >
              </base-input>
              <b-form-checkbox v-model="model.rememberMe"
                >Remember me</b-form-checkbox
              >
              <div class="text-center">
                <base-button
                  type="primary"
                  native-type="submit"
                  class="my-4"
                  @click="submit()"
                  >로그인</base-button
                >
              </div>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6">
              <router-link to="/dashboard" class="text-light"
                ><small>아이디 찾기</small></router-link
              >
            </b-col>
            <b-col cols="6" class="text-right">
              <router-link to="/register" class="text-light"
                ><small>비밀번호 찾기</small></router-link
              >
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { reactive } from "vue";
import axios from "axios";
import store from "../../routes/store";
import router from "../../routes/router";

export default {
  data() {
    return {
      model: {
        userEmail: "",
        userPassword: "",
        rememberMe: false,
      },
    };
  },
  setup() {
    const state = reactive({
      form: {
        userEmail: "",
        userPassword: "",
      },
    });
        const BASE_URL = process.env.VUE_APP_BASE_URL;
        const submit = () => {
            axios.post(BASE_URL+"/user/login", state.form).then((res) => {
              store.commit('setAccount', res.data);
                sessionStorage.setItem("id", res.data);
                sessionStorage.setItem("token", res.headers.authorization);
                router.push({ path: "/" });
                window.alert("로그인하였습니다.");
                
            }).catch(() => {
                window.alert("로그인 정보가 존재하지 않습니다.");
            });
        }
        return { state, submit }
  },
};
</script>
