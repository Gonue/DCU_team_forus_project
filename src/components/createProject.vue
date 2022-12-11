<template>
  <div>
    <div>
      <h2>프로젝트 생성</h2>
    </div>
    <div class="mb-3 mx-3">
      <label for="formGroupExampleInput" class="form-label">프로젝트이름</label>
      <input type="text" class="form-control" id="projectName" placeholder="프로젝트 이름 입력" v-model="projectName" />

    </div>
    <form @submit.prevent="submitForm">
      <div class="mb-3 mx-3">
        <label for="formGroupExampleInput2" class="form-label">
          프로젝트 설명
        </label>

        <textarea row="20" v-model="projectExplantion" type="text" class="form-control"
        id="projectExplantion" />


      </div>
      <div class="mb-3 mx-3">
        <label for="formGroupExampleInput2" class="form-label">프로젝트 썸네일</label>
        <input type="file" name="files" class="form-control" id="formGroupExampleInput2" placeholder="이미지" onchange={onFileChange}/>
      </div>
      <!-- 사진 -->
      <!-- 상품사진 -->
      <!-- <div class="mb-3"><img id="preview" /></div>
    <div class="mb-3">
      <label for="file" class="form-label">상품대표이미지</label>
      <input
        type="file"
        class="form-control"
        name="file"
        id="file"
        onchange="readURL(this);"
      />
    </div> -->
      <!-- 사진 끝 -->
      <div class="mb-3 mx-3">
        <label for="formGroupExampleInput2" class="form-label">프로젝트 담당자</label>
        <!-- <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="프로젝트 담당자, 프로젝트 담당자
        프로젝트 담당자, 프로젝트 담당자,프로젝트 담당자,프로젝트 담당자,프로젝트 담당자
        "
        disabled
      /> -->

        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col"><i class="ni ni-check-bold"></i></th>
              <th scope="col">이름</th>
              <th scope="col">직책/직급</th>
              <th scope="col">부서</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in addressBook" :key="index" class="group-item">
              <td>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" />
                </div>
              </td>
              <td>{{ item.userName }}</td>
              <td>{{ item.userGrade }}</td>
              <td>{{ item.userDepartment }}</td>
            </tr>
          </tbody>
        </table>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            닫기
          </button>
          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">생성</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import CKEditor from "ckeditor4-vue";
import DiaryCheck from "../components/Tabs/DiaryCheck.vue";
import axios from "axios";
import ButtonCheckbox from './ButtonCheckbox.vue';

Vue.use(CKEditor);
export default {
  name: "ProjectUpdate",
  components: { DiaryCheck, ButtonCheckbox },
  data() {
    return {
      addressBook: [], //주소록
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  setup() {

  },
  created() { },
  mounted() {
    const axiosToken = axios.create({
      baseURL: process.env.VUE_APP_BASE_URL,
      headers: {
        Authorization: sessionStorage.token, // header의 속성
      },
    });
    axiosToken
      .get("/diary")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          this.addressBook.push({
            userEmail: response.data[i].userEmail,
            userName: response.data[i].userName,
            userDepartment: response.data[i].userDepartment,
            userPhoneNumber: response.data[i].userPhoneNumber,
            userGrade: response.data[i].userGrade,
          });
        }
        console.log(this.addressBook);

      })
      .catch((ex) => {
        console.log("error");
        console.log(ex);
        return ex;
      });

  },

  unmounted() { },

  methods: {
    
    async submitForm() {

      let formData = new FormData();
      

      // API 요청시 전달할 userData 객체
      let projectData = {
        projectName: this.projectName,
        projectExplantion: this.projectExplantion,
      };
      formData.append("projectDto", new Blob([JSON.stringify(projectData)], {
        type: "application/json"
      }));
      

      console.log();
      console.log(projectData.projectName);
      console.log(projectData.projectExplantion);

      const BASE_URL = process.env.VUE_APP_BASE_URL;
        axios({
          url:BASE_URL+"/project/create",
          method: "POST",
          headers:{
            'Content-Type' : 'multipart/form-data',
            'Authorization': sessionStorage.token,
          },
          data : formData
        }).then((res)=>{
          alert('프로젝트 생성완료');
          navigate('/');
        })
      
            
      
    },

  },
};
</script>

<style scoped>

</style>
