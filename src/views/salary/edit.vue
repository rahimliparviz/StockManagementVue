

<template>
  <div>
    <div class="row">
      <router-link to="/salaries" class="btn btn-primary">Go Back</router-link>
    </div>

    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Update Salary</h1>
                  </div>

                  <form class="user" @submit.prevent="salaryUpdate">
                
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleFormControlSelect1">
                            <b>Months</b>
                          </label>

                          <select
                            class="form-control"
                            id="exampleFormControlSelect1"
                            v-model="form.month"
                          >
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                          </select>
                          <small
                            class="text-danger"
                            v-if="errors.month"
                          >{{ errors.month[0] }}</small>
                        </div>

                        <input type="hidden" v-model="form.employeeId" />

                        <div class="col-md-6">
                          <label for="exampleFormControlSelect1">
                            <b>Amount</b>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                             
                            placeholder="Enter Your Salary"
                            v-model="form.amount"
                          />
                          <small class="text-danger" v-if="errors.amount">{{ errors.amount[0] }}</small>
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
          month: "",
          amount: "",
          employeeId: "",
         isUpdating:true
      },
      errors: {}
    };
  },
  created() {
    let id = this.$route.params.id;
    this.$agent.Salary.edit(id)
      .then(data => {
        console.log(data)
        this.form = data
        })
      .catch(console.log("error"));
  },

  methods: {
    salaryUpdate() {
      console.log(this.form)
      this.$agent.Salary.update(this.form)
        .then(() => {
          this.$router.push({ name: "salaries" });
          this.$notificationsuccess();
        })
        .catch(error => {
          console.log(error)
          this.errors = error.data.errors
        });
    }
  }
};
</script>


<style type="text/css">
</style>
