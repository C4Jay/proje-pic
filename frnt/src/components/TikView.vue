<template>
 <v-container v-if="loading">
  
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>     
    </div>
  </v-container>
<v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
        v-for="tik in tiks"
        :key="tik._id"
        mb-2>
        <v-card >
          <v-img
            :src="tik.img"
            aspect-ratio="1"
          ></v-img>
<v-card-title primary-title>
            <div>
              <h2>{{tik.mail}}</h2>
          
            </div>
          </v-card-title>
<v-card-actions class="justify-center">
            <v-btn flat
              color="yellow">
              </v-btn>
          </v-card-actions>
</v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>






<script>

    export default {
        data(){
            return{
                tiks: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
           fetchItems()
           {
               let uri = 'http://localhost:4000/tiks1';
               this.axios.get(uri).then((response) => {
                   this.tiks = response.data;
               });
           }
        }
    }
</script>







