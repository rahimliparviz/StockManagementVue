<template>
  <div>
    <div class="row">
      <router-link to="/employees" class="btn btn-primary">All Employee</router-link>
    </div>

    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Add Employee</h1>
                  </div>

                  <form class="user" @submit.prevent="employeeInsert" enctype="multipart/form-data">
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                             
                            placeholder="Enter Your Full userName"
                            v-model="form.userName"
                          />
                          <small class="text-danger" v-if="errors.userName">
                            {{ errors.userName
                            }}
                          </small>
                        </div>

                        <div class="col-md-6">
                          <input
                            type="email"
                            class="form-control"
                             
                            placeholder="Enter Your Email"
                            v-model="form.email"
                          />
                          <small class="text-danger" v-if="errors.email">
                            {{ errors.email}}
                          </small>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                             
                            placeholder="Enter Your Address"
                            v-model="form.address"
                          />
                          <small class="text-danger" v-if="errors.address">
                            {{
                            errors.address[0] }}
                          </small>
                        </div>

                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                             
                            placeholder="Enter Your Salary"
                            v-model="form.salary"
                          />
                          <small class="text-danger" v-if="errors.salary">
                            {{ errors.salary[0]
                            }}
                          </small>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="date"
                            class="form-control"
                             
                            placeholder="Enter Your Joining Date"
                            v-model="form.joiningDate"
                          />
                          <small class="text-danger" v-if="errors.joiningDate">
                            {{
                            errors.joiningDate[0] }}
                          </small>
                        </div>

                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Your Password"
                            v-model="form.password"
                          />
                          <small class="text-danger" v-if="errors.password">
                            {{ errors.password[0]
                            }}
                          </small>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                             
                            placeholder="Enter Your phone Number"
                            v-model="form.phone"
                          />
                          <small class="text-danger" v-if="errors.phone">
                            {{ errors.phone[0]
                            }}
                          </small>
                        </div>

                        <div class="col-md-6"></div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="file"
                            class="custom-file-input"
                            id="customFile"
                            @change="onFileSelected"
                          />

                          <small class="text-danger" v-if="errors.photo">
                            {{ errors.photo[0]
                            }}
                          </small>
                          <label class="custom-file-label" for="customFile">
                            Choose
                            file
                          </label>
                        </div>

                        <div class="col-md-6" v-if="form.photo">
                          <img :src="form.photo" style="height: 40px; width: 40px;" />
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </div>
                  </form>
                  <hr />
                  <div class="text-center"></div>
                  <div class="text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script type="text/javascript">
export default {
  data() {
    return {
      form: {
        userName: "Emloyee",
        email: "employee@gmail.com",
        phone: "123456789",
        salary: '12',
        address: 'fesf',
        photo: '',
        password: '!1Qazxcvrer',
        joiningDate: ''
      },
      errors: {},
      selectedFile: null
    };
  },
  methods: {
  onFileSelected(event) {
       this.selectedFile = event.target.files[0];
      if (this.selectedFile.size > 1048770) {
        this.$notification.image_validation();
      } else {
        let reader = new FileReader();
        reader.onload = event => {
          this.form.photo = event.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
      }
    },
    employeeInsert() {
      const fd = new FormData();
      if (this.selectedFile) {
        fd.append("photo", this.selectedFile, this.selectedFile.name);
      }
      fd.append("userName", this.form.userName);
      fd.append("email", this.form.email);
      fd.append("phone", this.form.phone);
      fd.append("salary", this.form.salary);
      fd.append("address", this.form.address);
      fd.append("password", this.form.password);
      fd.append("joiningDate", this.form.joiningDate);

      this.$agent.Employee.create(fd)
        .then(() => {
          this.$router.push({ name: "employees" });
          this.$notificationsuccess();
        })
        .catch(error => {
          this.errors = error.data.errors;
        });
    }
  }
};
</script>
