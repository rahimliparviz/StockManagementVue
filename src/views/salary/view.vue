

<template>
  <div>
    <div class="row">
      <router-link to="/salaries" class="btn btn-primary">Go Back</router-link>
    </div>
    <br />
    <input
      type="text"
      v-model="searchTerm"
      class="form-control"
      style="width: 300px;"
      placeholder="Search Here"
    />

    <br />

    <div class="row">
      <div class="col-lg-12 mb-4">
        <!-- Simple Tables -->
        <div class="card">
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Employee Salary Details</h6>
          </div>
          <div class="table-responsive">
            <table class="table align-items-center table-flush">
              <thead class="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Month</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="salary in searchFilter" :key="salary.id">
                  <td>{{ salary.employeeName }}</td>

                  <td>{{ salary.monthName }}</td>
                  <td>{{ salary.amount }}</td>
                  <td>{{ salary.salaryDate }}</td>
                  <td>
                    <router-link
                      :to="{name: 'edit-salary', params:{id:salary.id}}"
                      class="btn btn-sm btn-primary"
                    >Edit Salary</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
    </div>
    <!--Row-->
  </div>
</template>



<script type="text/javascript">
export default {
  data() {
    return {
      salaries: [],
      searchTerm: ""
    };
  },
  computed: {
    searchFilter() {
      return this.salaries.filter(salary => {
        return salary.employeeName.match(this.searchTerm);
      });
    }
  },

  methods: {
    viewSalary() {
      let month = this.$route.params.month;
      console.log(this.$route.params)
      this.$agent.Salary.view(month)
        .then(data => (this.salaries = data))
        .catch(error => (this.errors = error.data.errors));
    }
  },
  created() {
    this.viewSalary();
  }
};
</script>

