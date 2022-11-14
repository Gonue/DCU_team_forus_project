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

      <sidebar-item :link="{
        name: ' 프로젝트 생성',
        path: '/icons',
        icon: 'ni ni-atom text-blue'
      }">
      </sidebar-item>

      <sidebar-item :link="{
        name: ' 유저 관리',
        path: '/icons',
        icon: 'ni ni-single-02 text-blue'
      }">
      </sidebar-item>


      <sidebar-item :link="{
        name: ' 마이페이지',
        path: '/icons',
        icon: 'ni ni-planet text-blue'
      }">
      </sidebar-item>
      
      
      <sidebar-item :link="{
        name: ' 로그인',
        path: '/login',
        icon: 'ni ni-key-25 text-blue'
      }" >
      </sidebar-item>




      <base-dropdown menu-on-right class="nav-item" tag="li" title-tag="a" title-classes="nav-link pr-0">
        <a href="#" class="nav-link pr-0" @click.prevent slot="title-container">
          <b-media no-body class="align-items-center">
            <span class="avatar avatar-sm rounded-circle">
              <img alt="Image placeholder" src="img/theme/team-4.jpg">
            </span>

            <b-media-body class="ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm  font-weight-bold">John Snow</span>
            </b-media-body>
          </b-media>
        </a>

        <template>
          <b-dropdown-header class="noti-title">
            <h6 class="text-overflow m-0">Welcome!</h6>
          </b-dropdown-header>
          <b-dropdown-item href="#!">
            <i class="ni ni-single-02"></i>
            <span>My profile</span>
          </b-dropdown-item>
          <b-dropdown-item href="#!">
            <i class="ni ni-settings-gear-65"></i>
            <span>Settings</span>
          </b-dropdown-item>
          <b-dropdown-item href="#!">
            <i class="ni ni-calendar-grid-58"></i>
            <span>Activity</span>
          </b-dropdown-item>
          <b-dropdown-item href="#!">
            <i class="ni ni-support-16"></i>
            <span>Support</span>
          </b-dropdown-item>
          <div class="dropdown-divider"></div>
          <b-dropdown-item href="#!">

            <i class="ni ni-user-run"></i>
            <span>Logout</span>

          </b-dropdown-item>

        </template>
      </base-dropdown>
    </b-navbar-nav>
  </base-nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import { BaseNav, Modal } from '@/components';
import axios from 'axios';
import store from '../../routes/store';
import router from '../../routes/router';
import DashboardVue from '../Dashboard.vue';
import SidebarItem from '../../components/SidebarPlugin/SidebarItem.vue';


export default {
  name: 'DashboardNavbar',
  setup() {
    const logout = () => {
      axios.post("/api/account/logout").then(() => {
        store.commit('setAccount', 0);
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
    }
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: ''
    };
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
    }
  }
};
</script>
