<template>
  <div>
    <div class="row">
      <router-link to="/suppliers" class="btn btn-primary">All Supplier</router-link>
    </div>

    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Supplier Update</h1>
                  </div>

                  <form class="user" @submit.prevent="supplierInsert" enctype="multipart/form-data">
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Full Name"
                            v-model="form.name"
                          />
                          <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
                        </div>

                        <div class="col-md-6">
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Email"
                            v-model="form.email"
                          />
                          <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Address"
                            v-model="form.address"
                          />
                          <small class="text-danger" v-if="errors.address">{{ errors.address[0] }}</small>
                        </div>

                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Shop name"
                            v-model="form.shop_name"
                          />
                          <small
                            class="text-danger"
                            v-if="errors.shop_name"
                          >{{ errors.shop_name[0] }}</small>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your phone Number"
                            v-model="form.phone"
                          />
                          <small class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</small>
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

                          <small class="text-danger" v-if="errors.photo">{{ errors.photo[0] }}</small>
                          <label class="custom-file-label" for="customFile">Choose file</label>
                        </div>

                        <div class="col-md-6">
                          <img :src="form.photo" style="height: 40px; width: 40px;" />
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">Update</button>
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
        shopName: "",
        address: "",
        photo: ""
      },
      errors: {},
      selectedFile: null
    };
  },
  methods: {
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
    supplierInsert() {
      const fd = new FormData();
      if (this.selectedFile) {
        fd.append("photo", this.selectedFile, this.selectedFile.name);
      }
      fd.append("name", this.form.name);
      fd.append("email", this.form.email);
      fd.append("shopName", this.form.shopName);
      fd.append("phone", this.form.phone);
      fd.append("address", this.form.address);

      this.$agent.Supplier.create(fd)
        .then(() => {
          this.$router.push({ name: "suppliers" });
          this.$notification.success();
        })
        .catch(error => {
          this.errors = error.data.errors;
        });
    }
  }
};
</script>
