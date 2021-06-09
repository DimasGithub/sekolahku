<template>
  <transition
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutLeft"
    appear
    :duration="700"
  >
    <q-page>
      <div class="q-pa-md q-gutter-sm">
        <h4>Edit Visi & Misi</h4>
        <p style="font-size : 20px;">Visi :</p>
        <q-editor
          v-model="visimisi.visi"
          :definitions="{
            bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' }
          }"
        />

        <p style="font-size : 20px;">Misi :</p>

        <q-editor
          v-model="visimisi.misi"
          :definitions="{
            bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' }
          }"
        />

        <q-btn
          rounded
          color="primary"
          label="Edit"
          dense
          @click="ubah"
          style="width:100%; margin-top: 20px; font-weight:bold;"
        />
        <q-btn
          @click="$router.push('/indexadmin')"
          rounded
          outline
          color="primary"
          label="Batal"
          dense
          style="width:100%; margin-top: 20px; margin-bottom: 20px;font-weight:bold;"
        />
      </div>
    </q-page>
  </transition>
</template>

<script>
import axios from "app/node_modules/axios";
import _ from "lodash";
export default {
  data() {
    return {
      visimisi: {}
    };
  },
  methods: {
    berhasil() {
    this.$q.notify({
            type: "positive",
            message: `Data berhasil diubah.`
          });
    },
    ubah() {
      let visimisi = new FormData();
      _.each(this.visimisi, (value, key) => {
        visimisi.append(key, value);
      });
      axios
        .put("http://app.iphonesborneo.com/api/visimisi/1?format=json", this.visimisi)
        .then(response => {
          this.berhasil();
          this.$router.push("/indexadmin");
        })
        .catch(err => {
          if (err.response.status === 422) {
            this.$q.notify({
              type: "negative",
              message: `Data gagal diubah.`
            });
            this.errors = [];
            _.each(err.response.data.errors, error => {
              _.each(error, e => {
                this.errors.push(e);
              });
            });
          }
        });
    }
  },
  mounted() {
    axios
      .get("http://app.iphonesborneo.com/api/visimisi/1?format=json")
      .then(response => {
        this.visimisi = response.data[0];
      });
  }
};
</script>
