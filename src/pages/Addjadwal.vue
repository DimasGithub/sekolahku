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
          Tambah jadwal
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
                @click.prevent="addJadwal"
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
      tanggal: {
        date_schedule: '',
        events: "",
      }
    };
  },
  methods: {
    addJadwal() {
      axios
        .post("http://127.0.0.1:8000/api/jadwal/",this.tanggal)
        .then(response => {
          this.$router.push("/indexjadwal");
          this.$q.notify({
            
            type: "positive",
            message: `Jadwal berhasil ditambah.`
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
  }
  // name: 'PageName',
};
</script>
<style>
.ngopi {
  font-family: "customfont";
}
</style>
