<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <h1 class="headline grey--text">Control you Pis</h1>
    </v-layout>

    <!-- !!!!!!!!!!!!!! jebo sam se v-bind class-om , AKO NE STAVIM flat na btn 
sta god radio boje dugmica ce se zanemariti jer se uzima pozadina nad klase 
    sa flat-om ja sve to prejebem i rade samo moje klase-->

    <v-layout row wrap>
      <v-flex d-flex xs6>
        <v-btn flat @click="btn1_clicked = !btn1_clicked" v-bind:class="`${btn1_clicked}`">
          <v-card-text></v-card-text>
        </v-btn>
      </v-flex>
      <v-flex d-flex xs6>
        <v-btn flat @click="btn2_clicked=!btn2_clicked" v-bind:class="`${btn2_clicked}`">
          <v-card-text></v-card-text>
        </v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex d-flex xs6>
        <v-btn flat @click="btn3_clicked=!btn3_clicked" v-bind:class="`${btn3_clicked}`">
          <v-card-text></v-card-text>
        </v-btn>
      </v-flex>
      <v-flex d-flex xs6>
        <v-btn flat @click="btn4_clicked=!btn4_clicked" v-bind:class="`${btn4_clicked}`">
          <v-card-text></v-card-text>
        </v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex d-flex xs6>
        <v-btn flat @click="btn5_clicked=!btn5_clicked" v-bind:class="`${btn5_clicked}`">
          <v-card-text></v-card-text>
        </v-btn>
      </v-flex>
      <v-flex d-flex xs6>
        <v-btn flat @click="btn6_clicked=!btn6_clicked" v-bind:class="`${btn6_clicked}`">
          <v-card-text></v-card-text>
        </v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex d-flex xs6>
        <v-btn flat @click="btn7_clicked=!btn7_clicked" v-bind:class="`${btn7_clicked}`">
          <v-card-text></v-card-text>
        </v-btn>
      </v-flex>
      <v-flex d-flex xs6>
        <v-btn flat @click="btn8_clicked=!btn8_clicked " v-bind:class="`${btn8_clicked}`">
          <v-card-text></v-card-text>
        </v-btn>
      </v-flex>
    </v-layout>

    <v-switch @click="promeni_ME" :label="label">
      <v-switch v-model="switch1"></v-switch>
    </v-switch>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    btn1_clicked: false,
    btn2_clicked: false,
    btn3_clicked: false,
    btn4_clicked: false,
    btn5_clicked: false,
    btn6_clicked: false,
    btn7_clicked: false,
    btn8_clicked: false,
    switch1: false,
    label: "Pogasi ih sve , Majku im jebem",

    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  }),
  methods: {
    controlClicked() {
      this.clicked = true;
    },
    promeni_ME() {
      if (this.label != "") {
        this.label = "";
        this.btn1_clicked = false;
        this.btn2_clicked = false;
        this.btn3_clicked = false;
        this.btn4_clicked = false;
        this.btn5_clicked = false;
        this.btn6_clicked = false;
        this.btn7_clicked = false;
        this.btn8_clicked = false;
       
      } else {
        this.label = "Pogasi ih sve , Majku im jebem";
      }
    },
    click_One() {
    }
  }
};
</script>

<style>
.false.v-btn {
  background-color: darkgray;
}
.true.v-btn {
  background-color: green;
}
</style>
