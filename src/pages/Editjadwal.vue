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
          @click="$router.push('/indexjadwal')"
        />
        <q-toolbar-title>
          Ubah jadwal
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
              <p style=" width:90%; margin-top:20px;">Tanggal jadwal :</p>
              <q-input
                v-model="tanggal.date_schedule"
                dense
                rounded
                outlined
                lazy-rules
                style="width:90%; margin-right:10px; margin-left:10px; justify-content: center;"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="tanggal.date_schedule" mask="YYYY-MM-DD">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <p style=" width:90%; ">Isi pengumuman :</p>
              <q-editor
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
                v-model="tanggal.events"
                style="width:90%; margin-right:10px; margin-left:10px; margin-bottom:20px; justify-content: center; border-radius:20px;"
                :definitions="{
                  bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' }
                }"
              />
              <q-btn
                @click.prevent="editJadwal"
                type="submit"
                dense
                rounded
                color="warning"
                label="Edit"
                style="width:90%; margin-bottom:20px; justify-content: center;"
              />
              <q-btn
                @click="confirm = true"
                type="reset"
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
              @click="hapus(tanggal.id)"
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
import router from "src/router";

export default {
  props: ["id"],
  data() {
    return {
      confirm: false,
      tanggal: {
        date_schedule: "",
        events: ""
      }
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/jadwal/" + this.id).then(response => {
      this.tanggal = response.data[0];
    });
  },
  methods: {
    editJadwal() {
      axios
        .put("http://127.0.0.1:8000/api/jadwal/" + this.id, this.tanggal)
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
    hapus(id) {
      axios
        .delete("http://127.0.0.1:8000/api/jadwal/" + id)
        .then(this.$router.push("/indexjadwal"));
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
