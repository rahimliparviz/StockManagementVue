<template>
  <div>
    <div class="row">
      <router-link to="/customers" class="btn btn-primary">All Customer</router-link>
    </div>

    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Add Customer</h1>
                  </div>

                  <form class="user" @submit.prevent="customerInsert" enctype="multipart/form-data">
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleFormControlTextarea1">
                            <b>
                              Customer
                              Name
                            </b>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Full Name"
                            v-model="form.name"
                          />
                          <small class="text-danger" v-if="errors.name">
                            {{ errors.name[0]
                            }}
                          </small>
                        </div>

                        <div class="col-md-6">
                          <label for="exampleFormControlTextarea1">
                            <b>
                              Customer
                              Email
                            </b>
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Email"
                            v-model="form.email"
                          />
                          <small class="text-danger" v-if="errors.email">
                            {{ errors.email[0]
                            }}
                          </small>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleFormControlTextarea1">
                            <b>
                              Customer
                              Address
                            </b>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Address"
                            v-model="form.address"
                          />
                          <small class="text-danger" v-if="errors.address">
                            {{
                            errors.address[0] }}
                          </small>
                        </div>

                        <div class="col-md-6">
                          <label for="exampleFormControlTextarea1">
                            <b>
                              Customer
                              Phone
                            </b>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Phone"
                            v-model="form.phone"
                          />
                          <small class="text-danger" v-if="errors.phone">
                            {{ errors.phone[0]
                            }}
                          </small>
                        </div>
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

                        <div class="col-md-6">
                          <img v-if="form.photo" :src="form.photo" style="height: 40px; width: 40px;" />
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
        name: "",
        email: "",
        phone: "",
        address: "",
        photo: ""
      },
      errors: {},
      selectedFile: null

    };
  },
  methods: {
    //TODO helper function yaz photo upload ucun
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      if (this.selectedFile > 1048770) {
        this.$notification.image_validation();
      } else {
        let reader = new FileReader();
        reader.onload = event => {
          this.form.photo = event.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
      }
    },
    customerInsert() {
    const fd = new FormData();
      if(this.selectedFile){
        fd.append('photo',this.selectedFile,this.selectedFile.name)
      }
      fd.append('name',this.form.name)
      fd.append('email',this.form.email)
      fd.append('phone',this.form.phone)
      fd.append('address',this.form.address)

      this.$agent.Customer.create(fd)
        .then(() => {
          this.$router.push({ name: "customers" });
          this.$notificationsuccess();
        })
        .catch(error => (this.errors = error.data.errors));
    }
  }
};
</script>
