<template>
  <div>
    <div class="row">
      <router-link to="/products" class="btn btn-primary">All Product</router-link>
    </div>

    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Product Update</h1>
                  </div>

                  <form  class="user" @submit.prevent="productUpdate" enctype="multipart/form-data">
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleFormControlSelect1">Product Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Product Name"
                            v-model="form.name"
                          />
                          <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
                        </div>

                        <div class="col-md-6">
                          <label for="exampleFormControlSelect1">Product Code</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Product Code"
                            v-model="form.code"
                          />
                          <small class="text-danger" v-if="errors.code">{{ errors.code[0] }}</small>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleFormControlSelect1">Product Category</label>
                          <select
                            class="form-control"
                            id="exampleFormControlSelect1"
                            v-model="form.categoryId"
                          >
                            <option
                              :key="category.id"
                              :value="category.id"
                              v-for="category in categories"
                            >{{ category.name }}</option>
                          </select>
                          <small
                            class="text-danger"
                            v-if="errors.categoryId"
                          >{{ errors.categoryId[0] }}</small>
                        </div>

                        <div class="col-md-6">
                          <label for="exampleFormControlSelect1">Product Supplier</label>
                          <select
                            class="form-control"
                            id="exampleFormControlSelect1"
                            v-model="form.supplierId"
                          >
                            <option
                              :key="supplier.id"
                              :value="supplier.id"
                              v-for="supplier in suppliers"
                            >{{ supplier.name }}</option>
                          </select>
                          <small
                            class="text-danger"
                            v-if="errors.supplierId"
                          >{{ errors.supplierId[0] }}</small>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-4">
                          <label for="exampleFormControlSelect1">Product Root</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            v-model="form.root"
                          />
                          <small class="text-danger" v-if="errors.root">{{ errors.root[0] }}</small>
                        </div>

                        <div class="col-md-4">
                          <label for="exampleFormControlSelect1">Buying Price</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            v-model="form.buyingPrice"
                          />
                          <small
                            class="text-danger"
                            v-if="errors.buyingPrice"
                          >{{ errors.buyingPrice[0] }}</small>
                        </div>

                        <div class="col-md-4">
                          <label for="exampleFormControlSelect1">Selling Price</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            v-model="form.selingPrice"
                          />
                          <small
                            class="text-danger"
                            v-if="errors.selingPrice"
                          >{{ errors.selingPrice[0] }}</small>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleFormControlSelect1">Buying Date</label>
                          <!-- TODO - Change to another datetime component for showing date -->
                          <input
                            type="date"
                            class="form-control"
                            id="exampleInputFirstName"
                            v-model="form.buyingDate"
                          />
                          <small
                            class="text-danger"
                            v-if="errors.buyingDate"
                          >{{ errors.buyingDate[0] }}</small>
                        </div>

                        <div class="col-md-6">
                          <label for="exampleFormControlSelect1">Product Quantity</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Quantity"
                            v-model="form.quantity"
                          />
                          <small class="text-danger" v-if="errors.quantity">{{ errors.quantity[0] }}</small>
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

                          <small class="text-danger" v-if="errors.photo">{{ errors.photo[0] }}</small>
                          <label class="custom-file-label" for="customFile">Choose file</label>
                        </div>

                        <div class="col-md-6">
                          <img v-if="uploadedPhoto" :src="uploadedPhoto" style="height: 40px; width: 40px;" />
                          <img v-else :src="$api_url + form.photo" style="height: 40px; width: 40px;" />
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
        code: "",
        categoryId: "",
        supplierId: "",
        root: "",
        photo: "",
        buyingPrice: "",
        selingPrice: "",
        buyingDate: "",
        quantity: "",
      },
      uploadedPhoto: null,
      errors: {},
      categories: {},
      suppliers: {},
      selectedFile:null
    };
  },
  created() {
    let id = this.$route.params.id;
    this.$agent.Product.details(id)
      .then(data => {
        this.form = data;
      })
      .catch(console.log("error"));
    // Category Collected
    this.$agent.Category.list().then(data => (this.categories = data));
    // Supplier Collected
    this.$agent.Supplier.list().then(data => (this.suppliers = data));
  },
  methods: {
    onFileSelected(event) {
       this.selectedFile = event.target.files[0];
      if (this.selectedFile.size > 1048770) {
        this.$notification.image_validation();
      } else {
        let reader = new FileReader();
        reader.onload = event => {
          this.uploadedPhoto = event.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
      }
    },
    productUpdate() {
      const fd = new FormData();
      if(this.selectedFile){
        fd.append('photo',this.selectedFile,this.selectedFile.name)
      }
      fd.append('name',this.form.name)
      fd.append('code',this.form.code)
      fd.append('categoryId',this.form.categoryId)
      fd.append('supplierId',this.form.supplierId)
      fd.append('root',this.form.root)
      fd.append('buyingPrice',this.form.buyingPrice)
      fd.append('selingPrice',this.form.selingPrice)
      fd.append('buyingDate',this.form.buyingDate)
      fd.append('quantity',this.form.quantity)
      fd.append('id',this.form.id)
  

      this.$agent.Product.update(fd)
        .then(() => {
          this.$router.push({ name: "products" });
          this.$notification.success();
        })
        .catch(error => {
          console.log(error);
          this.errors = error.data.errors;
        });
    }
  }
};
</script>
