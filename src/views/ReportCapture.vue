<template>
  <div>
    <!-- BootstrapVue Done -->
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6"> </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="mt--7">
      <b-row class="justify-content-center">
        <b-col>
          <card header-classes="bg-transparent">
            <h3 slot="header" class="mb-0">보고서 작성</h3>

            <!--여기입니당 ㅋㅋ -->
            
            <div id="app">
    <VueSignaturePad width="500px" height="500px" 
    :options="{backgroundColor: 'rgba(255,0,0,0)', penColor:'black',dotSize:'0.5',velocityFilterWeight: '0.7',}"
    :customStyle="{ border: 'black 3px solid '}"
    ref="signaturePad" />
    <div>
      <button @click="save">Save</button>
      <button @click="undo">Undo</button>
    </div>
  </div>

            <project-list></project-list>
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Vue from 'vue';
import VueSignaturePad from 'vue-signature-pad';

Vue.use(VueSignaturePad);
export default {
  name: 'MySignaturePad',
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
    }
  }
};
</script> 