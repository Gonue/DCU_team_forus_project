<template>
    <div>
      <section class="section about-section gray-bg" id="about">
        <div class="container">
          <div
            class="row align-items-center justify-content-around flex-row-reverse"
          >
            <div class="col-lg-6">
              <div class="about-text">
                <h3 class="dark-color">Forus 프로젝트</h3>
                <h4 class="theme-color">
                  수리남 조 : 김석현, 이정훈, 황설현, 안재완
                </h4>
                <p>
                  Forus 프로젝트는 30인 이하 협업 서비스입니다. Forus는 라틴어로
                  벌집이라는 뜻 입니다.
                </p>
                <p>
                  벌집처럼 Forus를 이용하여 튼튼한 프로젝트를 새워보면 좋겠습니다.
                </p>
              </div>
            </div>
            <div class="col-lg-5 text-center">
              <div class="about-img">
                <img
                  width="315px"
                  height="315px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    components: {},
    data() {
      return {
        sampleData: "",
      };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {},
  };
  </script>
  
  <style scoped>
  body {
    margin-top: 20px;
  }
  /* About Me 
  ---------------------*/
  @media (max-width: 991px) {
    .about-text {
      margin-top: 40px;
    }
  }
  .about-text h3 {
    font-size: 45px;
    font-weight: 700;
    margin: 0 0 10px;
  }
  @media (max-width: 767px) {
    .about-text h3 {
      font-size: 35px;
    }
  }
  .about-text h4 {
    font-weight: 600;
    margin-bottom: 15px;
  }
  @media (max-width: 767px) {
    .about-text h4 {
      font-size: 18px;
    }
  }
  .about-text p {
    font-size: 18px;
  }
  .about-text p mark {
    font-weight: 600;
    color: #3a3973;
  }
  .about-text .btn-bar {
    padding-top: 8px;
  }
  .about-text .btn-bar a {
    min-width: 150px;
    text-align: center;
    margin-right: 10px;
  }
  
  .about-list {
    padding-top: 10px;
  }
  .about-list .media {
    padding: 5px 0;
  }
  .about-list label {
    color: #3a3973;
    font-weight: 600;
    width: 88px;
    margin: 0;
    position: relative;
  }
  .about-list label:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 11px;
    width: 1px;
    height: 12px;
    background: #3a3973;
    -moz-transform: rotate(15deg);
    -o-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
    margin: auto;
    opacity: 0.5;
  }
  .about-list p {
    margin: 0;
    font-size: 15px;
  }
  
  .about-img {
    box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.06);
    padding: 10px;
    background: #ffffff;
  }
  @media (max-width: 991px) {
    .about-img {
      margin-top: 30px;
    }
  }
  
  .counter-section {
    padding: 40px 20px;
  }
  .counter-section .count-data {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .counter-section .count {
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 10px;
  }
  .counter-section p {
    font-weight: 500;
    margin: 0;
    color: #fe4f6c;
  }
  .theme-color {
    color: #fe4f6c;
  }
  
  .section {
    padding: 100px 0;
    position: relative;
  }
  .gray-bg {
    background-color: #ebf4fa;
  }
  .px-btn.theme {
    background: #fe4f6c;
    color: #ffffff;
    border: 2px solid #fe4f6c;
  }
  .px-btn {
    padding: 0 20px;
    line-height: 42px;
    border: 2px solid transparent;
    position: relative;
    display: inline-block;
    background: none;
    border: none;
    -moz-transition: ease all 0.35s;
    -o-transition: ease all 0.35s;
    -webkit-transition: ease all 0.35s;
    transition: ease all 0.35s;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
  }
  
  .px-btn.theme-t {
    background: transparent;
    border: 2px solid #fe4f6c;
    color: #fe4f6c;
  }
  </style>