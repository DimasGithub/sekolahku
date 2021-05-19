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
          @click="$router.push('/indexadmin')"
        />

        <q-toolbar-title>
          <q-input
            bg-color="white"
            outlined
            dense
            border
            rounded
            style="top: 35px; width: 100%;"
            v-model="filter"
            placeholder="Cari jadwal"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page padding>
        <transition
          enter-active-class="animated fadeInRight"
          leave-active-class="animated fadeOutLeft"
          appear
          :duration="700"
        >
          <div class="q-pa-md">
            <q-table
              grid
              :data="jadwal"
              :columns="columns"
              row-key="date_schedule"
              :filter="filter"
              hide-header
            >
              <template v-slot:item="props">
                <div class="q-pa-xs col-xs-12 col-sm-12 col-md-12">
                  <div class="row">
                    <q-card
                      class="my-card"
                      style="width:100%; border-radius:20px;"
                    > <p style="font-weight:bold; margin:10px;">Tanggal :</p>
                      <p style="font-size:15px; margin:10px;">{{ props.row.tglstr }}</p>
                      <p style="font-weight:bold; margin:10px;">Acara : </p>
                      <p style="margin:10px;" v-html="props.row.events" />
                    </q-card>
                  </div>
                </div>
              </template>
            </q-table>
            <q-page-sticky position="bottom-right" :offset="[15, 50]">
              <q-btn
                @click="$router.push('/addjadwal')"
                fab
                icon="add"
                color="secondary"
              />
            </q-page-sticky>
          </div>
        </transition>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      confirm: false,
      filter: "",
      columns: [
        {
          name: "date_schedule",
          label: "Tanggal",
          field: "date_schedule",
          align: "left",
          sortable: true
        },
        {
          name: "events",
          align: "left",
          label: "Acara",
          field: "events",
          sortable: true
        }
      ],
      jadwal: [],
      judul: "Petugas"
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/jadwal/?format=json")
      .then(response => (this.jadwal = response.data));
  },
  methods: {
    hapus(id) {
      axios
        .delete("http://127.0.0.1:8000/api/Detailpengajarstaff/" + id)
        .then(location.reload())
        .catch(err => err);
      console.log("Deleted article successfully " + id);
    },
    ngedit(id) {
      this.$router.push("editpengajarstaff/" + id);
    }
  }
};
</script>
<style>
.q-btn icon {
  font-size: 100px;
}
.ngopi {
  font-family: "customfont";
}
</style>
