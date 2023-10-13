import { defineStore } from "pinia";
import axios from 'axios';
const baseurl = 'https://jsonplaceholder.typicode.com/'
export const useStore = defineStore({
  id: "questionB",
  state: () => ({
    users: [],
    paginationData:{
        start:0,
        limit:5,
        count:10,
        page:1
    },
    filterData:[],
  }),
  getters: {
    getAllUsers: (state) => state.users,
    userPaginationData:(state) => state.paginationData,
    getFilterData:(state)=> state.filterData
  },
  actions: {
    changePage(payload){
        console.log('changePage-s',payload)
        const {page=1,limit=5} = payload;
        this.paginationData.page = page;
        this.paginationData.start = (page - 1) * this.paginationData.limit;
        this.fetchAllUsers()
    },
    fetchAllUsers(payload={}) {
        // const {start=5,limit=5} = payload;
        new Promise((resolve, reject) => {
            axios.get(`${baseurl}users?_start=${this.paginationData.start}&_limit=${this.paginationData.limit}`)
            .then((response)=>{
                console.log('fetchAllUsers',response)
                this.users = response.data
                this.filterData = response.data
                resolve(response.data)
            })
            .catch((error)=>{
                reject(error)
            })
        })
    },
    searchUser(payload) {
        return new Promise((resolve, reject) => {
          this.filterData = this.users.filter(user => {
            const searchTerm = payload.toLowerCase();
            // Check if the search term exists in any key or value of the user object
            return Object.values(user).some(value => {
              return value.toString().toLowerCase().includes(searchTerm);
            });
          });
          resolve();
        });
      }
      
  },
});
