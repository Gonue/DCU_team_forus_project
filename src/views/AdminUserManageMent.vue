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
            <h3 slot="header" class="mb-0">사용자 관리 페이지</h3>
            
              <!--여기입니당 ㅋㅋ -->
              <button
              type="button"
              class="btn btn-primary float-right mt-n1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal4"
              >
                <i class="fas fa-plus"></i> 사용자 추가
              </button>

<!-- 모달 시작 -->
<div
      class="modal fade"
      id="exampleModal4"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">회원 추가</h1>
            
          </div>
          <div class="modal-body">
            
            <AddUserVue/>
          </div>
        </div>
      </div>
    </div>

<!-- 모달 끝 -->
              <diary></diary>
            
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
import AddUserVue from '../components/AddUser.vue';
  Vue.use(VueClipboard)
  export default {
    name: 'icons',
    components: {
      BaseHeader,
        Diary,
        AddUserVue,
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
