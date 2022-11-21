<template>
  <div>
    <h4>주소록</h4>

    <input type="text" @input="searchGroup($event)" />

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">직책/직급</th>
          <th scope="col">부서</th>
          <th scope="col">이메일</th>
          <th scope="col">전화번호</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in addressBook"
          :key="index"
          class="group-item"
        >
          <td>{{ item.userName }}</td>
          <td>{{ item.userGrade }}</td>
          <td>{{ item.userDepartment }}</td>
          <td>{{ item.userEmail }}</td>
          <td>{{ item.userPhoneNumber }}</td>
        </tr>
      </tbody>
    </table>
    <div class="container" id="notFound">
      <h2 v-show="errorshow">검색된 결과가 없습니다.</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Diary",
  components: {},
  data() {
    return {
      addressBook: [], //주소록
      errorshow: false,
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
          // this.errorshow = true;
        } else {
          document.querySelectorAll(".group-item")[i].style.display = "";
          // this.errorshow = false;
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
