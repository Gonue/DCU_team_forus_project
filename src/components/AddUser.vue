<template>
    <div>
      
      
      
      <form @submit.prevent="submitForm">
        <!-- 회원 이름 -->
        <div class="mb-3 mx-3">
            <label for="formGroupExampleInput" class="form-label">회원 이름</label>
            <input type="text"  class="form-control" id="userName" placeholder="회원 이름 입력" v-model="userName" />
        </div>
        <!-- 회원 이메일 입력 -->
        <div class="mb-3 mx-3">
          <label for="formGroupExampleInput2" class="form-label">회원 이메일</label>
          <input type="text"  class="form-control" id="userEmail" placeholder="회원 이메일" v-model="userEmail" />
        </div>
        <!-- 회원 부서 입력 -->
        <div class="mb-3 mx-3">
          <label for="formGroupExampleInput2" class="form-label">회원 부서</label>
          <input type="text"  class="form-control" id="userDepartment" placeholder="ex) 시설 부서" v-model="userDepartment" />
        </div>
        <!-- 회원 전화번호 입력 -->
        <div class="mb-3 mx-3">
          <label for="formGroupExampleInput2" class="form-label">회원 전화번호</label>
          <input type="text"  class="form-control" id="userPhoneNumber" placeholder="ex) 010xxxxyyyy" v-model="userPhoneNumber" />
        </div>
        
        <div class="mb-3 mx-3">        
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              닫기
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal"><router-link to="/usermanage"></router-link>생성</button>
          </div>
        </div>

      </form>
    </div>
  </template>
  
  <script>
import axios from 'axios';
import router from '../routes/router';

  export default {
    name: "addUser",
    components: {  },
    setup() {
    
    },
    created() { },
    mounted() {
    },data(){
        return {
            userEmail: '',
            userName: '',
            userDepartment: '',
            userPhoneNumber: ''
        }
    },
  
    unmounted() { },
  
    methods: {
        submitForm(){
            const axiosToken = axios.create({
            baseURL: process.env.VUE_APP_BASE_URL,
            headers: {
            Authorization: sessionStorage.token, // header의 속성
            },
        });
        axiosToken
          .post("/admin/add/user",{
              "userEmail" : this.userEmail,
              "userName" : this.userName,
              "userDepartment" : this.userDepartment,
              "userPhoneNumber" : this.userPhoneNumber
          }).then((res)=>{
            console.log(res.data);
            
          }).catch((err)=>{
            console.log(err);
          })
        }
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  