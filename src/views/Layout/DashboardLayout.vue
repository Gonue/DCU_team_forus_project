<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot="links">
        <sidebar-item
          :link="{
            name: '프로젝트',
            path: '/projectmain',
            icon: 'ni ni-tv-2 text-primary',
          }"
        >
        </sidebar-item>

        <sidebar-item
            :link="{
              name: '파일함',
              path: '/filebox',
              icon: 'ni ni-box-2 text-blue'
              }">
        </sidebar-item>

        <sidebar-item
              :link="{
                name: 'Maps',
                path: '/maps',
                icon: 'ni ni-pin-3 text-orange'
              }">
        </sidebar-item>
        <sidebar-item
              :link="{
                name: '주소록',
                path: '/address',
                icon: 'ni ni-collection text-orange'
              }">
        </sidebar-item>

        <hr class="my-3" align="center" style="border: solid 0.3px grey; width: 80%;">
        <h6 align="center" class="navbar-heading text-muted">프로젝트</h6>
        <sidebar-item
                :link="{
                  name: '프로젝트 정보',
                  path: '/projectinfo',
                  icon: 'ni ni-bullet-list-67 text-green'
                }">
        </sidebar-item>
        <sidebar-item
                :link="{
                  name: '프로젝트 일정',
                  path: '/schedule',
                  icon: 'ni ni-calendar-grid-58 text-blue'
                }">
        </sidebar-item>
        <sidebar-item
                :link="{
                  name: '업무 히스토리',
                  path: '/history',
                  icon: 'ni ni-single-copy-04 text-yellow'
                }">
        </sidebar-item>
        <sidebar-item
                :link="{
                  name: '담당자 연락처',
                  path: '/personAddress',
                  icon: 'ni ni-collection text-red'
                }">
        </sidebar-item>



      </template>

    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  import DashboardNavbar from './DashboardNavbar.vue';
  import DashboardContent from './Content.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      DashboardContent,
      FadeTransition
    },
    methods: {
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('sidenav');
        }
      }
    },
    mounted() {
      this.initScrollbar()
    }
  };
</script>
<style lang="scss">
</style>
