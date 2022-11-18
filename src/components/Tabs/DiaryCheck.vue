<template>
  <div>
    <h4>주소록</h4>

    <input type="text" @input="searchGroup($event)" />

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col"><i class="ni ni-check-bold"></i></th>
          <th scope="col">이름</th>
          <th scope="col">직책/직급</th>
          <th scope="col">부서</th>
          <th scope="col">이메일</th>
          <th scope="col">전화번호</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <!--   <div v-if="address.user_name.includes(searchName)"> -->
          <td>
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
                checked
              />
              <label class="custom-control-label" for="customCheck1"></label>
            </div>
          </td>
          <td>안녕하세용 ㅋㅋ</td>
          <td>안녕하세용 ㅋㅋ</td>
          <td>안녕하세용 ㅋㅋ</td>
          <td>안녕하세용 ㅋㅋ</td>
          <td>안녕하세용 ㅋㅋ</td>
        </tr>
      </tbody>
    </table>
    <div class="container" id="notFound">
      <h2 v-show="errorshow">검색된 결과가 없습니다.</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiaryCheck",
  components: {},
  data() {
    return {
      addressBook: [], //주소록
      errorshow: false,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    searchGroup(event) {
      const len = this.addressBook.length;

      for (let i = 0; i < len; i++) {
        if (
          this.addressBook[i].userName.includes(event.target.value) === false &&
          this.addressBook[i].userGrade.includes(event.target.value) ===
            false &&
          this.addressBook[i].userDepartment.includes(event.target.value) ===
            false &&
          this.addressBook[i].userEmail.includes(event.target.value) ===
            false &&
          this.addressBook[i].userPhoneNumber.includes(event.target.value) ===
            false
        ) {
          document.querySelectorAll(".group-item")[i].style.display = "none";
          this.errorshow = true;
        } else {
          document.querySelectorAll(".group-item")[i].style.display = "";
          this.errorshow = false;
        }
      }
    },
  },
};
</script>

<style scoped>
#notFound {
  display: "none";
}
</style>
