import { defineStore } from "pinia";
import axios from 'axios';
const baseurl = 'https://jsonplaceholder.typicode.com/'
export const useStore = defineStore({
  id: "questionB",
  state: () => ({
    users: [],
    paginationData:{
        _start:0,
        _limit:5,
        count:10
    },
    filterData:[],
  }),
  getters: {
    getAllUsers: (state) => state.users,
    userPaginationData:(state) => state.paginationData,
    getFilterData:(state)=> state.filterData
  },
  actions: {
    fetchAllUsers(payload={}) {
        const {start=0,limit=5} = payload;
        new Promise((resolve, reject) => {
            axios.get(`${baseurl}users?_start=${start}&_limit=${limit}`)
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
