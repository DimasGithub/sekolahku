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
          @click="$router.push('/indexadmin')"
        />
        <q-toolbar-title>
          Pengaturan
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="row" style="width:100%;">
  
          <transition
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutLeft"
            appear
            :duration="700"
          >
        <form>
            <div class="row justify-center">
              <p style=" width:90%; margin-top:20px;">Judul navigasi bar :</p>
              <q-input
                rounded
                name="title_bar"
                dense
                v-model="pengaturan.title_bar"
                outlined
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
                style="width:90%; margin-right:10px; margin-left:10px; justify-content: center;"
              />
              <p style=" width:90%; margin-top:20px;">Judul utama :</p>
              <q-input
                rounded
                name="title_sub"
                dense
                v-model="pengaturan.title_sub"
                outlined
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
                style="width:90%; margin-right:10px; margin-left:10px; justify-content: center;"
              />
              
              <p style=" width:90%;">Gambar utama : </p>
              <q-img :src="'http://127.0.0.1:8000'+pengaturan.img_main " style="width:50%; margin-bottom:10px;" />
              <q-file
                
                @change="handleFileObject"
                v-model="gambar1"
                rounded
                name="img_main"
                dense
                outlined
                style="width:90%; margin-right:10px; margin-left:10px; margin-bottom: 20px; "
              />
              <p style=" width:90%;">Judul tentang : </p>
              <q-input
                rounded
                name="title_about"
                dense
                v-model="pengaturan.title_about"
                outlined
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
                style="width:90%; margin-right:10px; margin-left:10px; justify-content: center;"
              />
              <p style=" width:90%; ">Isi tentang :</p>
              <q-editor

                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
                v-model="pengaturan.content_about"
                style="width:90%; margin-right:10px; margin-left:10px; margin-bottom:20px; justify-content: center; border-radius:20px;"
                :definitions="{
                  bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' }
                }"
              />
              <p style=" width:90%;">Email :</p>
              <q-input
                rounded
                name="email_about"
                dense
                v-model="pengaturan.email_about"
                outlined
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
                style="width:90%; margin-right:10px; margin-left:10px; justify-content: center;"
              />
              <p style=" width:90%;">No. hp :</p>
              <q-input
                rounded
                name="phone_about"
                dense
                v-model="pengaturan.phone_about"
                outlined
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
                style="width:90%; margin-right:10px; margin-left:10px; justify-content: center;"
              />
              <p style=" width:90%;">Gambar tentang : </p>
              <q-img :src="'http://127.0.0.1:8000'+pengaturan.img_about " style="width:50%; margin-bottom:10px;" />

              <q-file
                @change="handleFileObject2"
                v-model="gambar2"
                rounded
                name="img_about"
                dense
                outlined
                style="width:90%; margin-right:10px; margin-left:10px; margin-bottom: 20px; "
              />
              <q-btn
                @click.prevent="editpengaturan"
                type="submit"
                dense
                rounded
                color="primary"
                label="Simpan"
                style="width:90%; margin-bottom:20px; justify-content: center;"
              />
              <q-btn
                rounded
                dense
                outline
                color="primary"
                label="Batal"
                style="width:90%; justify-content: center; margin-bottom:20px;"
              />
            </div>
          </form>
          </transition>
        
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import axios from "axios";
import _ from "lodash";
export default {
  props: ["id"],
  data() {
    return {
      confirm: false,
      pengaturan: {

      },
      gambar1 :null,
      gambar2 : null
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/pengaturan/1")
      .then(response => {
        this.pengaturan = response.data[0];
      });
  },
  methods: {
    editpengaturan() {
      if(this.gambar1 == null || this.gambar2 == null){
      console.log('masih salah');
      let pengaturan = new FormData();
      pengaturan.append("img_main", this.pengaturan.img_main);
      pengaturan.append("img_about", this.pengaturan.img_about);
      _.each(this.pengaturan, (value, key) => {
        pengaturan.append(key, value);
      });
      axios
        .put(
          "http://127.0.0.1:8000/api/pengaturan/1",
          pengaturan,
          {
            headers: {
              "Content-type": "multipart/form-data"
            }
          }
        )
        .then(response => {
          this.$router.push("/indexadmin");
          this.$q.notify({
            type: "positive",
            message: `Data berhasil diubah.`
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
      }else{
      let pengaturan = new FormData();
      pengaturan.append("img_main", this.gambar1);
      pengaturan.append("img_about", this.gambar2);
      _.each(this.pengaturan, (value, key) => {
        pengaturan.append(key, value);
      });
      axios
        .put(
          "http://127.0.0.1:8000/api/pengaturan/1",
          pengaturan,
          {
            headers: {
              "Content-type": "multipart/form-data"
            }
          }
        )
        .then(response => {
          this.$router.push("/indexadmin");
          this.$q.notify({
            type: "positive",
            message: `Data berhasil diubah.`
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
    }
    },

    handleFileObject() {
      this.gambar1 = this.$refs.file.files[0];
    },
    handleFileObject2() {
      this.gambar2 = this.$refs.file.files[0];
    },

  }
  // name: 'PageName',
};
</script>
<style>
.ngopi {
  font-family: "customfont";
}
</style>
