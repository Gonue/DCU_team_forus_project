<template>
  <div>
    <div><h2>프로젝트수정</h2></div>
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
        type="text"
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
      <input type="file" class="form-control" name="file" id="file" onchange="readURL(this);" />
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
          <tr v-for="(item, index) in sampleData" :key="index">
            <td>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1"></label>
              </div>
            </td>
            <td>이정훈</td>
            <td>사원</td>
            <td>개발</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal 1-->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <DiaryCheck></DiaryCheck>
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
    <!-- <button v-on:click="testCkeditor"></button> -->
  </div>
</template>

<script>
import Vue from "vue";
import CKEditor from "ckeditor4-vue";
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
