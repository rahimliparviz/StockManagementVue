<template>
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-body">
        <div class="row align-items-center ">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-uppercase mb-1">{{itemName}}</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800" :class="[itemCount > 0 ? 'text-success' : 'tex-danger']">{{itemCount}}</div>
    
          </div>
          <div class="col-auto" >
            <i class="fas fa-2x text-primary" :style="{ color: iconColor+'!important' }" :class="itemIcon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'quantity-indicator',
    props: {
    itemName: String,
    itemCount:String,
    itemIcon:String,
    iconColor:String
  }
};
</script>

<style lang="scss" scoped>
</style>