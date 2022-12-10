<template>
  <div>
    <div><h2>프로젝트 생성</h2></div>
    <div class="mb-3 mx-3">
      <label for="formGroupExampleInput" class="form-label">프로젝트이름</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="프로젝트 이름 입력"
      />
    </div>
    <div class="mb-3 mx-3">
      <label for="formGroupExampleInput2" class="form-label"
        >프로젝트 설명</label
      >
      <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="CK에디터 삽입"
        disabled
      />
    </div>
    <div class="mb-3 mx-3">
      <label for="formGroupExampleInput2" class="form-label"
        >프로젝트 썸네일</label
      >
      <input
        type="file"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="이미지"
      />
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
      <label for="formGroupExampleInput2" class="form-label"
        >프로젝트 담당자</label
      >
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
          <tr
          v-for="(item, index) in addressBook"
          :key="index"
          class="group-item"
        >
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
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import CKEditor from "ckeditor4-vue";
import DiaryCheck from "../components/Tabs/DiaryCheck.vue";
import axios from "axios";

Vue.use(CKEditor);
export default {
  name: "ProjectUpdate",
  components: { DiaryCheck },
  data() {
    return {
      addressBook: [], //주소록
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
      },
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
  unmounted() {},
  methods: {
    testCkeditor() {
      console.log(this.editorData);
    },

    //이미지 미리보기
    // readURL(input) {
    //   if (input.files && input.files[0]) {
    //     var reader = new FileReader();
    //     reader.onload = function (e) {
    //       document.getElementById("preview").src = e.target.result;
    //     };
    //     reader.readAsDataURL(input.files[0]);
    //   } else {
    //     document.getElementById("preview").src = "";
    //   }
    // },
  },
};
</script>

<style scoped></style>
