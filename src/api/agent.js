import axios from "axios";
import router from '../router/index'
import Notification from '../helpers/Notification'
import camelcaseKeys from 'camelcase-keys'


// axios.defaults.baseURL ='/api';
axios.defaults.baseURL ='http://localhost:5000/api';

axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
}, error => {
    return Promise.reject(error);
})


axios.interceptors.response.use(undefined, error => {

    if (error.message === 'Network Error' && !error.response) {
        Notification.error('Network error - make sure API is running!',2000)
    }
    const {status, data, config,headers} = error.response;
    
   
    if (status === 400) {
        data.errors = camelcaseKeys(data.errors)
    }
    if (status === 404) {
        router.push('/notfound')
    }
    if (status === 401) {
        Notification.warning('Password or mail is invalid',2000)
    }
    if (status === 401 && headers['www-authenticate'] === 'Bearer error="invalid_token", error_description="The token is expired"') {
        window.localStorage.removeItem('jwt');
        router.push('/')
        Notification.warning('Your session has expired, please login again',2000)
      }
    // if (status === 400 && config.method === 'get' && data.errors.hasOwnProperty('id')) {
        if (status === 400 && config.method === 'get' && data.errors) {
        router.push('/notfound')
    }
    if (status === 500) {
        Notification.warning('Server error - check the terminal for more info!',2000)
    }
    throw error.response;
})

const responseBody = (response)=>response.data;


const requests = {
    get: (url)=> axios.get(url).then(responseBody),
    getWithParams: (url,body)=> axios.get(url, {params:body}).then(responseBody),
    post: (url,body)=> axios.post(url,body).then(responseBody),
    put: (url,body)=> axios.put(url,body).then(responseBody),
    del: (url)=> axios.delete(url).then(responseBody),
    postForm: (url, file) => {
        let formData = new FormData();
        formData.append('File', file);
        return axios.post(url, formData, {
            headers: {'Content-type': 'multipart/form-data'}
        }).then(responseBody)
    }
}

const Employee = {
    list: () => requests.get(`/employees`),
    details: (id) => requests.get(`/employees/${id}`),
    create: (employee) => requests.post('/employees', employee),
    update: (formData) =>requests.put(`/employees/${formData.get('id')}`, formData),
    delete: (id) => requests.del(`/employees/${id}`),
  };

  const Supplier = {
    list: () => requests.get(`/suppliers`),
    details: (id) => requests.get(`/suppliers/${id}`),
    create: (supplier) => requests.post('/suppliers', supplier),
    update: (formData) =>requests.put(`/suppliers/${formData.get('id')}`, formData),
    delete: (id) => requests.del(`/suppliers/${id}`),
  };

  const Category = {
    list: () => requests.get(`/categories`),
    details: (id) => requests.get(`/categories/${id}`),
    create: (category) => requests.post('/categories', category),
    update: (category) =>requests.put(`/categories/${category.id}`, category),
    delete: (id) => requests.del(`/categories/${id}`),
  };

  const Product = {
    list: () => requests.get(`/products`),
    details: (id) => requests.get(`/products/${id}`),
    create: (product) => requests.post('/products', product),
    update: (formData) =>requests.put(`/products/${formData.get('id')}`, formData),
    delete: (id) => requests.del(`/products/${id}`),
  };

  const Expense = {
    list: () => requests.get(`/expenses`),
    details: (id) => requests.get(`/expenses/${id}`),
    create: (expense) => requests.post('/expenses', expense),
    update: (expense) =>requests.put(`/expenses/${expense.id}`, expense),
    delete: (id) => requests.del(`/expenses/${id}`),
  };

  const Customer = {
    list: () => requests.get(`/customers`),
    details: (id) => requests.get(`/customers/${id}`),
    create: (customer) => requests.post('/customers', customer),
    update: (formData) =>requests.put(`/customers/${formData.get('id')}`, formData),
    delete: (id) => requests.del(`/customers/${id}`),
  };

  const Salary = {
      list: () => requests.get(`/salaries`),
    pay: (data) => requests.post(`/salaries/pay`,data),
    update: (data) => requests.put(`/salaries/${data.id}`,data),
    edit: (id) => requests.get(`/salaries/${id}`),
    view: (id) => requests.get(`/salaries/monthly/${id}`),
  };

  const Stock = {
      update: (data) => requests.post(`/products/stock-update/${data.id}`,data),
  };

    const Reports = {
        dateReports: (data) => requests.getWithParams(`/reports/date/reports`,data),
        stockOut: () => requests.get(`/reports/today/stock-out`),
    };

    const Regulations = {
        get: () => requests.get(`/regulations`),
    }

const Order = {
    // TODO - merge list and listBydate to one request with nullable param
    list: () => requests.get(`/orders`),
    listByDate: (date) => requests.get(`/orders/date/${date}`),
    order: (id) => requests.get(`/orders/${id}`),
    search:(data)=>requests.post('/search/order',data),
    submitOrder: (order) => requests.post(`/orders/`,order),

};


const User = {
    // current: (): Promise<IUser> => requests.get('/user'),
    login: (user) => requests.post(`/auth/login`, user),
    register: (user) => requests.post(`/auth/signup`, user),
}


const Dashboard = {
    // expenses: (user) => requests.post(`/auth/login`, user),
    expenses: (params) =>
        axios.get('/dashboard/expenses', { params: params }).then(responseBody),
    orders: (params) =>
        axios.get('/dashboard/orders', { params: params }).then(responseBody)
}


export default {
    Dashboard,
    User,
    Employee,
    Supplier,
    Category,
    Product,
    Expense,
    Customer,
    Salary,
    Stock,
    Reports,
    Regulations,
    Order,

}
