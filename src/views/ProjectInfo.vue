<template>
  <div>
    <!-- BootstrapVue Done -->
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-blue">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6"> </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="mt--7">
      <b-row class="justify-content-center">
        <b-col>
          <card header-classes="bg-transparent">
            <h3 slot="header" class="mb-0">프로젝트정보</h3>
            <ProjectInforDetail></ProjectInforDetail>
            <!--여기입니당 ㅋㅋ -->

            <!-- <Diary></Diary>
            <DiaryRadio></DiaryRadio>
            <DiaryCheck></DiaryCheck> -->
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Vue from "vue";
import VueClipboard from "vue-clipboard2";
import BaseHeader from "@/components/BaseHeader";
import ProjectInforDetail from "@/components/ProjectInfoDetail.vue";
// import Diary from "../components/Tabs/Diary.vue";
// import DiaryRadio from "../components/Tabs/DiaryRadio.vue";
// import DiaryCheck from "../components/Tabs/DiaryCheck.vue";

Vue.use(VueClipboard);
export default {
  name: "icons",
  components: {
    BaseHeader,
    ProjectInforDetail,
    // Diary,
    // DiaryRadio,
    // DiaryCheck,
  },
  methods: {
    onCopy() {
      this.$notify({
        type: "info",
        message: "Copied to clipboard",
      });
    },
  },
};
</script>
<style></style>
