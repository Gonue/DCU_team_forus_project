<template>
  <div>
    <div class="container p-0">
      <button
        type="button"
        class="btn btn-primary float-right mt-n1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal4"
      >
        <i class="fas fa-plus"></i> 프로젝트 생성
      </button>

      <h1 class="h3 mb-3">Projects</h1>

      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-3"
          v-for="(item, index) in projectList"
          :key="index"
        >
          <div class="card" @click="checkProject(item.projectUuid, item.projectName)">
            <img
              class="card-img-top"
              alt="Unsplash"
              :src="item.projectTitleImage"
            />

            <div class="card-header px-4 pt-4">
              <div class="card-actions float-right">
                <div class="dropdown show">
                  <a href="#" data-toggle="dropdown" data-display="static">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-more-horizontal align-middle"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </a>

                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another Action</a>
                    <a class="dropdown-item" href="#">Something Else Here</a>
                  </div>
                </div>
              </div>
              <h5 class="card-title mb-0">{{ item.projectName }}</h5>
            
            </div>
            <div class="card-body px-4 pt-2">
              <p>
                {{ item.projectExplanation }}
              </p>
            </div>
            <ul class="list-group list-group-flush">
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 모달시작 -->
    <!-- Modal4 -->
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
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            
          </div>
          <div class="modal-body">
            <CreateProject />
          </div>
        </div>
      </div>
    </div>
    <!-- 모달끝 -->

    <!-- 프로젝트 멤버 초대하기 모달 -->
    <div
      class="modal fade"
      id="exampleModal5"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          </div>
          <div class="modal-body">
            <InviteProjectMembers />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 프로젝트 멤버 초대하기 모달 끝 -->
  </div>
</template>

<script>
import CreateProject from "./createProject.vue";
import axios from "axios";
import InviteProjectMembers from "./InviteProjectMembers.vue";
import store from "../routes/store";

export default {
  components: { CreateProject, InviteProjectMembers },
  data() {
    return {
      
      projectList: [ ],
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    const axiosToken = axios.create({
      baseURL: process.env.VUE_APP_BASE_URL,
      headers: {
        Authorization: sessionStorage.token, // header의 속성
      },
    });
    axiosToken
      .get("/project/join/list")
      .then((response) => {
        if(response.data === '가입된 프로젝트가 없습니다.'){
          return alert(response.data);
        }else{
        for (let i = 0; i < response.data.length; i++) {
          this.projectList.push({
            projectUuid: response.data[i].projectUuid,
            projectName: response.data[i].projectName,
            projectExplanation: response.data[i].projectExplanation,
            projectTitleImage: response.data[i].projectTitleImage,
          });
        }
      }

      })
      .catch((ex) => {
        return ex;
      });
  },
  unmounted() {},
  methods: {
    checkProject(uuid,name){
      
      sessionStorage.setItem('projectUuid',uuid);
      
    }
  },
};
</script>

<style scoped>
.vps-main-content {
  min-height: 100%;
  overflow-x: scroll;
}
.pjbody {
  margin-top: 20px;
  background-color: #f7f7fc;
}
.card-subtitle,
.card-title {
  font-weight: 400;
}
.card-title {
  font-size: 0.875rem;
  color: #495057;
}
.card {
  margin-bottom: 24px;
  box-shadow: 0 0 0.875rem 0 rgba(33, 37, 41, 0.05);
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: initial;
  border: 0 solid transparent;
  border-radius: 0.25rem;
}
.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}
.card-header:first-child {
  border-radius: 0.25rem 0.25rem 0 0;
}
.card-header {
  border-bottom-width: 1px;
}
.pb-0 {
  padding-bottom: 0 !important;
}
.card-header {
  padding: 1rem 1.25rem;
  margin-bottom: 0;
  background-color: #fff;
  border-bottom: 0 solid transparent;
}
.float-right {
  float: right !important;
}
</style>