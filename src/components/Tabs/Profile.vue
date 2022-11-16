<template>
    <div class="container-xl px-4 mt-4">
      <!-- Account page navigation-->
      <nav class="nav nav-borders">
        <a class="nav-link active ms-0" href="#" target="__blank">Profile</a>
      </nav>
      <hr class="mt-0 mb-4" />
      <div class="row">
        <div class="col-xl-4">
          <!-- Profile picture card-->
          <div class="card mb-4 mb-xl-0">
            <div class="card-header">Profile Picture</div>
            <div class="card-body text-center">
              <!-- Profile picture image-->
              <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
              <!-- Profile picture help block-->
              <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
              <!-- Profile picture upload button-->
              <button class="btn btn-primary" type="button">Upload new image</button>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <!-- Account details card-->
          <div class="card mb-4">
            <div class="card-header">Account Details</div>
            <div class="card-body">
              <form>
                <!-- Form Group (username)-->
                <div class="mb-3">
                  <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                  <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username" />
                </div>
  
                <!-- Form Row        -->
                <div class="row gx-3 mb-3"></div>
                <!-- Form Group (email address)-->
                <div class="mb-3">
                  <label class="small mb-1" for="inputEmailAddress">Email address</label>
                  <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com" />
                </div>
                <!-- Form Row-->
                <div class="row gx-3 mb-3">
                  <!-- Form Group (phone number)-->
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputPhone">Phone number</label>
                    <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567" />
                  </div>
                  <!-- Form Group (Department)-->
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputDepartmenty">부서</label>
                    <input class="form-control" id="inputDepartment" type="text" name="Department" placeholder="Enter your Department" value="개발" />
                  </div>
                </div>
                <!-- Save changes button-->
                <button class="btn btn-primary" type="button">Save changes</button>
              </form>
            </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">비밀번호 변경</button>
          </div>
        </div>
      </div>
  
      <!-- Modal3 -->
      <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <ChagePassword />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ChagePassword from "../components/changePassword.vue";
  
  export default {
    components: { ChagePassword },
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
    background-color: #f2f6fc;
    color: #69707a;
  }
  .img-account-profile {
    height: 10rem;
  }
  .rounded-circle {
    border-radius: 50% !important;
  }
  .card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
  }
  .card .card-header {
    font-weight: 500;
  }
  .card-header:first-child {
    border-radius: 0.35rem 0.35rem 0 0;
  }
  .card-header {
    padding: 1rem 1.35rem;
    margin-bottom: 0;
    background-color: rgba(33, 40, 50, 0.03);
    border-bottom: 1px solid rgba(33, 40, 50, 0.125);
  }
  .form-control,
  .dataTable-input {
    display: block;
    width: 100%;
    padding: 0.875rem 1.125rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1;
    color: #69707a;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #c5ccd6;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.35rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  .nav-borders .nav-link.active {
    color: #0061f2;
    border-bottom-color: #0061f2;
  }
  .nav-borders .nav-link {
    color: #69707a;
    border-bottom-width: 0.125rem;
    border-bottom-style: solid;
    border-bottom-color: transparent;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0;
    padding-right: 0;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  </style>