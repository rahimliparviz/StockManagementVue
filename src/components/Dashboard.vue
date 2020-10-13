<template>
  <div>
    <div class="row">
      <quantity-indicator
        iconColor="green"
        itemName="Employees"
        itemCount="12"
        itemIcon="fa fa-users"
      ></quantity-indicator>
      <quantity-indicator
        iconColor="orange"
        itemName="Monthly expense"
        itemCount="12"
        itemIcon="fa-credit-card"
      ></quantity-indicator>

      <quantity-indicator
        iconColor="red"
        itemName="Customers"
        itemCount="3"
        itemIcon="fa fa-users"
      ></quantity-indicator>
      <quantity-indicator
        iconColor="violet"
        itemName="Monthly orders"
        itemCount="12"
        itemIcon="fa-suitcase"
      ></quantity-indicator>
    </div>
    <div class="row">
      <div class="col-md-6">
        <label >Expenses according to last two month</label>
        <column-chart
          :colors="['#666']"
          :data="expenseChartData"
        ></column-chart>
      </div>
      <div class="col-md-6">
        <label>Orders according to last two month</label>

        <column-chart
          :colors="['orange']"
          label="Value"
          color="red"
          :data="orderChartData"
        ></column-chart>
      </div>
    </div>
  </div>
</template>

<script>
import QuantityIndicator from "@/components/dashboard/QuantityIndicator";
// import LineChart from "@/components/dashboard/LineChart"

export default {
  components: {
    QuantityIndicator
    // LineChart
  },
  data() {
    return {
      orderChartData: {},
      expenseChartData: {}
    };
  },
  props: {
    msg: String
  },
  created() {
    this.getExpenses();
  },
  methods: {
    getExpenses() {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const currentMonth = new Date().getMonth() + 1;
      const previousMonth = currentMonth == 12 ? 0 : currentMonth - 1;
      const params = new URLSearchParams();
      params.append("currentMonth", currentMonth);
      params.append("previousMonth", previousMonth);

      this.$agent.Dashboard.expenses(params).then(data => {
        let expensesForChart = {};
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          expensesForChart[monthNames[element.month - 1]] = element.amount;
        }
        this.expenseChartData = expensesForChart;
        // this.chartData.push({name: "Expenses", data: expensesForChart });
      });

      this.$agent.Dashboard.orders(params).then(data => {
        let ordersForChart = {};
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          ordersForChart[monthNames[element.month - 1]] = element.amount;
        }
        this.orderChartData = ordersForChart;
        // this.chartData.push({ name: "Orders", data: ordersForChart });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
