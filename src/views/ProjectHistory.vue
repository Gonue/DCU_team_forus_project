<template>
    <div>
         <!-- BootstrapVue Done -->
      <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-blue">
        <!-- Card stats -->
        <b-row>
          <b-col xl="3" md="6">
          </b-col>
        </b-row>
      </base-header>
  
      <b-container fluid class="mt--7">
        <b-row class="justify-content-center">
          <b-col>
            <card header-classes="bg-transparent">
              <h3 slot="header" class="mb-0">업무 히스토리</h3>
              
                <!--여기입니당 ㅋㅋ -->
  
                <project-card></project-card>
              
            </card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  <script>
    import Vue from 'vue'
    import VueClipboard from 'vue-clipboard2'
    import BaseHeader from '@/components/BaseHeader';
  import Diary from '../components/Tabs/Diary.vue';
import ProjectCard from '../components/projectCard.vue';
  
    Vue.use(VueClipboard)
    export default {
      name: 'icons',
      components: {
        BaseHeader,
          Diary,
            ProjectCard
      },
      methods: {
        onCopy() {
          this.$notify({
            type: 'info',
            message: 'Copied to clipboard'
          })
        }
      }
    };
  </script>
  <style></style>
  