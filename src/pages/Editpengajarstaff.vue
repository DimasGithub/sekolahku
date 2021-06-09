<template>
  <q-layout class="ngopi" view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="arrow_back"
          aria-label="Menu"
          @click="$router.push('/indexpengajarstaff')"
        />
        <q-toolbar-title>
          Ubah Pengajar & staff
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
              <p style=" width:90%; margin-top:20px;">Nama lengkap :</p>
              <q-input
                rounded
                name="namaproduk"
                dense
                v-model="datapengajarstaf.nama"
                outlined
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
                label="Nama lengkap"
                style="width:90%; margin-right:10px; margin-left:10px; justify-content: center;"
              />
              <p style=" width:90%; ">Nip :</p>
              <q-input
                v-model="datapengajarstaf.nip"
                type="number"
                rounded
                name="nip"
                dense
                outlined
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
                label="Nip"
                style="width:90%; margin-right:10px; margin-left:10px; justify-content: center;"
              />
              <p style=" width:90%; ">Jabatan :</p>
              <q-input
                v-model="datapengajarstaf.jobs"
                rounded
                name="harga"
                dense
                outlined
                label="Jabatan"
                style="width:90%; margin-right:10px; margin-left:10px; justify-content: center;"
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
              />
              <p style=" width:90%;">Profil gambar :</p>
              <q-img
                :src="'http://app.iphonesborneo.com' + datapengajarstaf.picture"
                style="width:200px; height:200px; border-radius:200px"
              />
              <p style=" width:90%;">Ganti profil gambar :</p>
              <q-file
                @change="handleFileObject"
                rounded
                v-model="gambar"
                name="picture"
                dense
                outlined
                label="Gambar produk"
                style="width:90%; margin-right:10px; margin-left:10px; margin-bottom: 20px; "
              />
              <q-btn
                dense
                @click.prevent="ubah"
                type="submit"
                rounded
                color="primary"
                label="Edit"
                style="width:90%; margin-bottom:20px; justify-content: center;"
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
      datapengajarstaf: {},
      gambar: null
    };
  },
  methods: {
    ubah() {
      if (this.gambar === null) {
        let datapengajarstaf = new FormData();
        datapengajarstaf.append("nama", this.datapengajarstaf.nama);
        datapengajarstaf.append("nip", this.datapengajarstaf.nip);
        datapengajarstaf.append("jobs", this.datapengajarstaf.jobs);
        datapengajarstaf.append("picture", this.gambar);
        _.each(this.datapengajarstaf, (value, key) => {
          datapengajarstaf.append(key, value);
        });
        axios
          .put(
            "http://app.iphonesborneo.com/api/Detailpengajarstaff/" + this.id,
            this.datapengajarstaf,
          )
          .then(response => {
            this.$router.push("/indexpengajarstaff");
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
      } else {
        let datapengajarstaf = new FormData();
        datapengajarstaf.append("nama", this.datapengajarstaf.nama);
        datapengajarstaf.append("nip", this.datapengajarstaf.nip);
        datapengajarstaf.append("jobs", this.datapengajarstaf.jobs);
        datapengajarstaf.append("picture", this.gambar);
        _.each(this.datapengajarstaf, (value, key) => {
          datapengajarstaf.append(key, value);
        });
        axios
          .put(
            "http://app.iphonesborneo.com/api/Detailpengajarstaff/" + this.id,
            datapengajarstaf,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          )
          .then(response => {
            this.$router.push("/indexpengajarstaff");
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
      this.gambar = this.$refs.file.files[0];
      this.pictureName = this.picture.name;
      console.log(this.gambar);
    }
  },
  mounted() {
    axios
      .get("http://app.iphonesborneo.com/api/Detailpengajarstaff/" + this.id)
      .then(response => {
        this.datapengajarstaf = response.data[0];
        console.log(this.datapengajarstaf);
      });
  }
};
</script>
<style>
.ngopi {
  font-family: "customfont";
}
</style>
