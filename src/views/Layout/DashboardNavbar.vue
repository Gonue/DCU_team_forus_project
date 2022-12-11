<template>
  <base-nav container-classes="container-fluid" class="navbar-top navbar-expand"
    :class="{ 'navbar-dark': type === 'default' }">
    <a href="#" aria-current="page"
      class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block active router-link-active"> {{ $route.name }}
    </a>
    <!-- Navbar links -->
    <b-navbar-nav class="align-items-center ml-md-auto">


    </b-navbar-nav>

    <b-navbar-nav class="align-items-center ml-auto ml-md-0">
      <!--
      <sidebar-item :link="{
        name: ' 프로젝트 생성',
        path: '/projectcreate',
        icon: 'ni ni-atom text-dark'
      }">
      </sidebar-item>
-->

      <sidebar-item :link="{
        name: ' 유저 관리',
        path: '/usermanage',
        icon: 'ni ni-single-02 text-dark'
      }" v-if="isLoggined()">
      </sidebar-item>

      <sidebar-item :link="{
        name: ' 마이페이지',
        path: '/mypage',
        icon: 'ni ni-planet text-dark'
      }" v-if="isLoggined()">
      </sidebar-item>

      <!-- <div>
        <li v-if="!sessionStorage">
      <sidebar-item :link="{
        name: ' 로그인',
        path: '/login',
        icon: 'ni ni-key-25 text-dark'
      }">
      <a to="/login" class="nav-link" @click="logout()" v-else>LogOut</a>
      </sidebar-item>
      </li>

      <li @click="logout()" v-else>
      <sidebar-item :link="{
        name: ' 로그아웃',
        path: '/login',
        icon: 'ni ni-key-25 text-dark'
      }">
      </sidebar-item>
    </li>
  </div> -->
    <li class="nav-item">
        <router-link to="/login" class="nav-link" v-if="!isLoggined()">로그인</router-link>
        <a class="nav-link" v-else @click="logout">logout</a>
      </li>

      <a href="#" class="nav-link pr-0" @click.prevent slot="title-container" v-if="isLoggined()">
        <b-media no-body class="align-items-center">
          <span class="avatar avatar-sm rounded-circle">
            <img alt="Image placeholder" src="img/theme/team-4.jpg">
          </span>

          <b-media-body class="ml-2 d-none d-lg-block">
            <span class="mb-0 text-sm  font-weight-bold" >{{name}}</span>
          </b-media-body>
        </b-media>
      </a>


    </b-navbar-nav>
  </base-nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import { BaseNav, Modal } from '@/components';
import axios from 'axios';
import store from '../../routes/store';
import router from '../../routes/router';
import SidebarItem from '../../components/SidebarPlugin/SidebarItem.vue';


export default{
  name: 'DashboardNavbar',
  setup() {
    const logout = () => {
      axios.post("/api/account/logout").then(() => {
        store.commit('setAccount', clear);
        router.push({ path: "/" });
      });
    }
    return { logout }
  },
  components: {
    CollapseTransition,
    BaseNav,
    Modal,
    SidebarItem
  },
  props: {
    type: {
      type: String,
      default: 'default', // default|light
      description: 'Look of the dashboard navbar. Default (Green) or light (gray)'
    }
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
  },
  data() {
    return {
      searchModalVisible: false,
      searchQuery: '',
      name:''
    };
  },
  mounted(){
    this.name = sessionStorage.getItem('nickname');
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    isLoggined(){
      if (!sessionStorage.getItem('nickname')){
        return false
      }else{
        return true
      }
    },
    logout(){
      sessionStorage.removeItem('nickname');
      sessionStorage.removeItem('id');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('profileImage');
      localStorage.removeItem('projectUuid');
      router.push('/login')
      
    }
  }
};
</script>
