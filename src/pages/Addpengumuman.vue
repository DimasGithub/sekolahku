<template>
  <q-layout class="ngopi" view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          rounded
          icon="arrow_back"
          arial-label="Menu"
          @click="$router.push('/indexpengumuman')"
        />
        <q-toolbar-title>
          Tambah pengumuman
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="row" style="width:100%;">
        <form>
          <transition
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutLeft"
            appear
            :duration="700"
          >
            <div class="row justify-center">
              <p style=" width:90%; margin-top:20px;">Judul pengumuman :</p>
              <q-input
                rounded
                name="namaproduk"
                dense
                v-model="datapengumuman.title"
                outlined
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
                label="Judul pengumuman"
                style="width:90%; margin-right:10px; margin-left:10px; justify-content: center;"
              />
              <p style=" width:90%; ">Isi pengumuman :</p>
              <q-editor
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
                v-model="datapengumuman.content"
                style="width:90%; margin-right:10px; margin-left:10px; margin-bottom:20px; justify-content: center; border-radius:20px;"
                :definitions="{
                  bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' }
                }"
              />
              <p style=" width:90%;">File lampiran : (opsi tambahan)</p>
              <q-file
                v-model="datapengumuman.attachment"
                rounded
                name="attachment"
                dense
                outlined
                label="File lampiran"
                style="width:90%; margin-right:10px; margin-left:10px; margin-bottom: 20px; "
              />
              <q-btn
                @click.prevent="addPengumuman"
                type="submit"
                dense
                rounded
                color="primary"
                label="Tambah"
                style="width:90%; margin-bottom:20px; justify-content: center;"
              />
              <q-btn
                type="reset"
                rounded
                dense
                outline
                
                color="primary"
                label="Batal"
                style="width:90%; justify-content: center; margin-bottom:20px;"
              />
            </div>
          </transition>
        </form>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  data() {
    return {
      datapengumuman: {
        title:"",
        content:"",
        attachment:null,
      }
    };
  },
  methods: {
    addPengumuman() {
      let datapengumuman = new FormData();
      datapengumuman.append("attachment", this.datapengumuman.attachment);
      _.each(this.datapengumuman, (value, key) => {
        datapengumuman.append(key, value);
      });
      axios
        .post("http://app.iphonesborneo.com/api/pengumuman/", datapengumuman, {
          headers: {
            "Content-type": "multipart/form-data"
          }
        })
        .then(response => {
          this.$router.push("/indexadmin");
          this.$q.notify({
            type: "positive",
            message: `Data berhasil ditambah.`
          });
        })
        .catch(err => {
          if (err.response.status === 422) {
            this.errors = [];
            _.each(err.response.data.errors, error => {
              _.each(error, e => {
                this.errors.push(e);
              });
            });
          }
        });
    },
    handleFileObject(){
      this.datapengumuman.attachment = this.$refs.file.files[0];
    }
  }
  // name: 'PageName',
};
</script>
<style>
.ngopi {
  font-family: "customfont";
}
</style>
