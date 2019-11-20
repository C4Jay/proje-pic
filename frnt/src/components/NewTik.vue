<template>

   <div class="container">
    <h1>Create A Ticket</h1>
    <form v-on:submit.prevent="addTicket">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <v-text-field
            label="Mail"
            solo
            v-model="tik.mail"
          ></v-text-field>
    <!--        <input type="text" class="form-control" v-model="tik.mail"/>   -->
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <v-textarea
          solo
          name="input-7-4"
          label="Description"
          v-model="tik.img"
        ></v-textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <v-btn color="yellow" v-on:click.prevent="addTicket"> Ticket</v-btn>
        </div>
    </form>
  </div>
</template>
<script>
export default {
    data(){
        return {
          tik: {}
        }
    },
    methods: {
       addTicket() {
            let uri = 'http://localhost:4000/tiks1/new';
            this.axios.post(uri, this.tik).then((response) => {
              console.log(response);
            });
       }
    }
}
</script>