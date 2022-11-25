<template>
  <div>
    <div><h2>프로젝트 맴버 추가</h2></div>

    <div class="mb-3 mx-3">
      <label for="formGroupExampleInput2" class="form-label"
        >프로젝트 담당자</label
      >

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
          <tr v-for="(item, index) in sampleData" :key="index">
            <td>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" />
                <!--  class="custom-control-input" id="item" /> -->
                <!-- <label class="custom-control-label" for="item"></label> -->
              </div>
            </td>
            <td>이정훈</td>
            <td>사원</td>
            <td>개발</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import CKEditor from "ckeditor4-vue";
import axiosEnv from "../api/axios.env";
import axios from "axios";
import DiaryCheck from "../components/Tabs/DiaryCheck.vue";

Vue.use(CKEditor);
export default {
  name: "ProjectUpdate",
  components: { DiaryCheck },
  data() {
    return {
      sampleData: [0, 1, 2, 3, 4, 5, 6],
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  setup() {},
  created() {},
  mounted() {},
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
