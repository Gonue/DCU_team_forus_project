<template>
    <div>
      <div class="snippet-body">
        <div class="container mt-5 mb-5">

          <div class="row d-flex align-items-center justify-content-center"  
          v-for="(item, index) in history" :key="index">
            <div class="col-md-6">
              <div class="card">
                <div class="d-flex justify-content-between p-2 px-3">
                  <div class="d-flex flex-row align-items-center">
                    <img
                     :src="item.writerProfileImage"
                      width="50"
                      class="rounded-circle"
                    />
                    <div class="d-flex flex-column ml-2">
                      <span class="font-weight-bold">{{ item.writerDepartment }}</span>
                      <small class="text-primary">{{ item.writerGrade }}</small>
                    </div>
                  </div>
                  <div class="d-flex flex-row mt-1 ellipsis">
                    <small class="mr-2">수정</small>
                    <i class="fa fa-pencil-square"></i>
                  </div>
                </div>
                <img src="https://i.imgur.com/xhzhaGA.jpg" class="img-fluid" />
                <div class="p-2">
                  <p class="text-justify">
                    {{ item.historyContent }}
                  </p>
                  <hr />
                  <div class="justify-content-between align-items-center">
                    <!-- ㅁㄴㅇ -->
                    <div class="d-flex justify-content-between p-2 px-3">
                      <div class="shfl">
                        <div
                          class="d-flex flex-row icons d-flex align-items-center"
                        >
                          <i class="fa fa-heart"></i>좋아요
                        </div>
                      </div>
                      <div class="shfr">
                        <div
                          class="d-flex flex-row muted-color accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div class="accordion-item">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              <i class="fa fa-bars" aria-hidden="true"
                                >댓글 펼치기</i
                              >
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- ㅁㄴㅇ -->
                    <hr />
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <!-- 댓글 시작 -->
                      <div class="comments accordion-body">
                        <div class="d-flex flex-row mb-2">
                          <img
                            src="https://i.imgur.com/1YrCKa1.jpg"
                            width="40"
                            class="rounded-image"
                          />
                          <div class="d-flex flex-column ml-2">
                            <span class="name">이정훈</span>
                            <small class="comment-text">나도 코딩이 좋아</small>
                            <div
                              class="d-flex flex-row align-items-center status"
                            >
                              <small>Like</small> <small>Reply</small>
                              <small>Translate</small> <small>8 mins</small>
                            </div>
                          </div>
                        </div>
  
                        <div class="d-flex flex-row mb-2">
                          <img
                            src="https://i.imgur.com/9AZ2QX1.jpg"
                            width="40"
                            class="rounded-image"
                          />
                          <div class="d-flex flex-column ml-2">
                            <span class="name">Daniel Frozer</span>
                            <small class="comment-text"
                              >I like this alot! thanks alot</small
                            >
                            <div
                              class="d-flex flex-row align-items-center status"
                            >
                              <small>Like</small> <small>Reply</small>
                              <small>Translate</small> <small>18 mins</small>
                            </div>
                          </div>
                        </div>
  
                        <!-- 댓글 종료 -->
                        <div class="comment-input">
                          <input type="text" class="form-control" />
                          <div class="fonts"><i class="fa fa-camera"></i></div>
                        </div>
                      </div>
  
                      <!-- 댓글 종료 -->
                    </div>
                    <!-- 요위에 까지가 아코디언 -->
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    components: {},
    data() {
      return {
        sampleData: "",
        history: [], 
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
      .get("/history/list/pj-22d3c678-3497-43c9-86a1-08171faa4bac")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          this.history.push({
            writerProfileImage: response.data[i].writerProfileImage,
            writerDepartment: response.data[i].writerDepartment,
            writerGrade: response.data[i].writerGrade,
            historyName: response.data[i].historyName,
            historyContent: response.data[i].historyContent,
          });
        }
        console.log(this.history);
      })
      .catch((ex) => {
        console.log("error");
        console.log(ex);
        return ex;
      });
    },
    unmounted() {},
    methods: {},
  };
  </script>
  
  <style scoped>
  ::-webkit-scrollbar {
    width: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");
  
  .snippet-body {
    background-color: #eee;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  
    overflow-x: scroll;
  }
  .card {
    border: none;
  }
  .ellipsis {
    color: #a09c9c;
  }
  hr {
    color: #a09c9c;
    margin-top: 4px;
    margin-bottom: 8px;
  }
  .muted-color {
    color: #a09c9c;
    font-size: 13px;
  }
  .ellipsis i {
    margin-top: 3px;
    cursor: pointer;
  }
  .icons i {
    font-size: 25px;
  }
  .icons .fa-heart {
    color: red;
  }
  .icons .fa-smile-o {
    color: yellow;
    font-size: 29px;
  }
  .rounded-image {
    border-radius: 50% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
  }
  .name {
    font-weight: 600;
  }
  .comment-text {
    font-size: 12px;
  }
  .status small {
    margin-right: 10px;
    color: blue;
  }
  .form-control {
    border-radius: 26px;
  }
  .comment-input {
    position: relative;
  }
  .fonts {
    position: absolute;
    right: 13px;
    top: 8px;
    color: #a09c9c;
  }
  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #8bbafe;
    outline: 0;
    box-shadow: none;
  }
  
  .ml-2 {
    margin-left: 0.5rem !important;
  }
  
  .mr-2 {
    margin-right: 0.5rem !important;
  }
  
  .sh {
    border: 1px solid red;
  }
  
  .shfl {
    float: left;
  }
  .shfr {
    float: right;
  }
  </style>