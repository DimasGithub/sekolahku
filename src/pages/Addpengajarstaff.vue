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
          Tambah Pengajar & Staff
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
                type="number"
                rounded
                v-model="datapengajarstaf.nip"
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
                rounded
                name="jobs"
                v-model="datapengajarstaf.jobs"
                dense
                outlined
                label="Jabatan"
                style="width:90%; margin-right:10px; margin-left:10px; justify-content: center;"
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
              />
              <p style=" width:90%;">Upload Gambar :</p>
              <q-file
                rounded
                name="picture"
                dense
                @change="handleFileObject()"
                outlined
                v-model="picture"
                label="Gambar produk"
                style="width:90%; margin-right:10px; margin-left:10px; margin-bottom: 20px; "
              />
              <q-btn
                @click.prevent="addPegawai"
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
      datapengajarstaf: {
        nama: "",
        nip: 0,
        jobs: ""
      },
      picture: null
    };
  },
  methods: {
    addPegawai() {
      let datapengajarstaf = new FormData();
      datapengajarstaf.append("picture", this.picture);
      _.each(this.datapengajarstaf, (value, key) => {
        datapengajarstaf.append(key, value);
      });
      axios
        .post("http://127.0.0.1:8000/api/pengajarstaff/", datapengajarstaf, {
          headers: {
            "Content-Type":
              "multipart/form-data; charset=utf-8; boundary=" +
              Math.random()
                .toString()
                .substr(2)
          }
        })
        .then(response => {
          this.$router.push("/indexpengajarstaff");
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
    handleFileObject() {
      this.picture = this.$refs.file.files[0];
      this.pictureName = this.picture.name;
      console.log(this.pictureName);
    }
  }
};
</script>
<style>
.ngopi {
  font-family: "customfont";
}
</style>
