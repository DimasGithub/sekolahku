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
          Ubah pengumuman
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
                @click.prevent="editpengumuman"
                type="submit"
                dense
                rounded
                color="warning"
                label="Ubah"
                style="width:90%; margin-bottom:20px; justify-content: center;"
              />
              <q-btn
                @click="confirm = true"
                rounded
                dense
                outlined
                color="negative"
                label="Hapus"
                style="width:90%; justify-content: center; margin-bottom:20px;"
              />
            </div>
          </transition>
        </form>
      </div>
      <q-dialog v-model="confirm" persistent>
        <q-card style="font-family: customfont;">
          <q-card-section class="row items-center">
            <span class="q-ml-sm">Apakah anda yakin akan dihapus?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Batal" color="primary" v-close-popup />
            <q-btn
              flat
              label="Hapus"
              color="primary"
              v-close-popup
              @click="hapus(datapengumuman.id)"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
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
      datapengumuman: {
        title: "",
        content: "",
        attachment: null
      }
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/pengumuman/" + this.id)
      .then(response => {
        this.datapengumuman = response.data[0];
      });
  },
  methods: {
    editpengumuman() {
      let datapengumuman = new FormData();
      datapengumuman.append("attachment", this.datapengumuman.attachment);
      _.each(this.datapengumuman, (value, key) => {
        datapengumuman.append(key, value);
      });
      axios
        .put(
          "http://127.0.0.1:8000/api/pengumuman/" + this.id,
          datapengumuman,
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
    },
    handleFileObject() {
      this.datapengumuman.attachment = this.$refs.file.files[0];
    },
    hapus(id) {
      axios
        .delete("http://127.0.0.1:8000/api/pengumuman/" + id)
        .then(response => {
          this.$router.push("/indexpengumuman");
          this.$q.notify({
            type: "positive",
            message: `Data berhasil dihapus.`
          });
        });
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
