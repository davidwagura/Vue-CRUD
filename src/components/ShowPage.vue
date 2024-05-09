<template>
    <div class="bg-white shadow-md rounded-md p-4">
      <div class="flex justify-between items-center mb-4">
        <h4 class="text-lg font-semibold">Visitor</h4>
        <router-link to="/create" class="border border-black p-2">Add New Visitor</router-link>
      </div>
      <!-- Success message -->
      <div v-if="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-2 mb-4 rounded" role="alert">
        {{ successMessage }}
      </div>
      <table class="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th class="px-4 py-2">Id</th>
            <th class="px-4 py-2">First Name</th>
            <th class="px-4 py-2">Last Name</th>
            <th class="px-4 py-2">ID Number</th>
            <th class="px-4 py-2">Age</th>
            <th class="px-4 py-2">Nationality</th>
            <th class="px-4 py-2">Edit</th>
            <th class="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="visitor in visitors" :key="visitor.id">
            <td class="px-4 py-2">{{ visitor.id }}</td>
            <td class="px-4 py-2">{{ visitor.first_name }}</td>
            <td class="px-4 py-2">{{ visitor.last_name }}</td>
            <td class="px-4 py-2">{{ visitor.id_number }}</td>
            <td class="px-4 py-2">{{ visitor.age }}</td>
            <td class="px-4 py-2">{{ visitor.nationality }}</td>
            <td class="px-4 py-2">
              <router-link :to="'/edit/' + visitor.id" class="text-blue-500">Edit</router-link>
            </td>
            <td class="px-4 py-2">
              <button @click.prevent="deleteItem(visitor.id)" class="text-red-500">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
    
<script>
    import axios from 'axios';
  
    export default {
        name: 'ShowPage',
  
        data() {
            return {
                visitors: [],
                successMessage: ''
            };
        },
    
        created() {
            this.listvisitors()
        },
    
        methods: {
            listvisitors() {
                axios.get('http://127.0.0.1:8000')
                .then(response => {
                    this.visitors = response.data;
    
                });
            },
            deleteItem() {
                axios.delete(`http://127.0.0.1:8000`)
                .then(response => {
                    console.log(response);
                    this.successMessage = 'Visitor deleted successfully.';
                    this.listvisitors();
                })
                .catch(error => {
                    console.error('Error deleting visitor:', error);
                    this.successMessage = 'Failed to delete visitor.';
                });
            }
        }          
    }
</script>