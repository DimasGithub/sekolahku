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
            placeholder="Cari pegawai"
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
              :data="datapengajar"
              :columns="columns"
              row-key="name"
              :filter="filter"
              hide-header
            >
              <template v-slot:item="props">
                <div class="q-pa-xs col-xs-12 col-sm-12 col-md-12">
                  <div class="row ">
                    <div style="width:25%;">
                      <q-img
                        :src="'http://127.0.0.1:8000' + props.row.picture"
                        style="width:90px; height:90px; border-radius:100%;margin-right:20px;"
                      />
                    </div>
                    <div style="width:75%;">
                      <div class="column" style="margin-left : 30px;">
                        <p>Nama : {{ props.row.nama }}</p>
                        <p>Nip : {{ props.row.nip }}</p>
                        <p>Jabatan : {{ props.row.jobs }}</p>
                        <div style="width:100%;" class="row justify-between">
                          <q-btn
                            @click="ngedit(props.row.id)"
                            align="between"
                            label="edit"
                            unelevated
                            style="width:45%;"
                            color="warning"
                          >
                            <q-icon name="edit" />
                          </q-btn>
                          <q-btn
                            @click="hapus(props.row.id)"
                            align="between"
                            unelevated
                            label="hapus"
                            style="width:50%;"
                            color="negative"
                          >
                            <q-icon name="delete" />
                          </q-btn>
                          <!-- <q-dialog v-model="confirm" persistent>
                            <q-card>
                              <q-card-section class="row items-center">
                                <q-avatar
                                  icon="delete"
                                  color="primary"
                                  text-color="white"
                                />
                                <span class="q-ml-sm"
                                  >Apakah anda yakin akan dihapus?</span
                                >
                              </q-card-section>

                              <q-card-actions align="right">
                                <q-btn
                                  flat
                                  label="Batal"
                                  color="primary"
                                  v-close-popup
                                />
                                <q-btn
                                  flat
                                  label="Hapus"
                                  color="primary"
                                  v-close-popup
                                  @click="hapus(props.row.id)"
                                />
                              </q-card-actions>
                            </q-card>
                          </q-dialog> -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </template>
            </q-table>
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
      infoadmin: {},
      columns: [
        {
          name: "nama",
          label: "Nama lengkap",
          field: "nama",
          align: "left",
          sortable: true
        },
        {
          name: "nip",
          align: "left",
          label: "Nip",
          field: "nip",
          sortable: true
        },
        {
          name: "jobs",
          align: "left",
          label: "Jabatan",
          field: "jobs",
          sortable: true
        },
        { name: "actions", label: "Aksi", field: "id", align: "center" }
      ],
      datapengajar: [],
      judul: "Petugas"
    };
  },
  methods: {
    hapus(id) {
      axios
        .delete("http://127.0.0.1:8000/api/Detailpengajarstaff/" + id)
        .then(
          location.reload()
        ).catch(err => err)
      console.log("Deleted article successfully " + id);
    },
    ngedit(id) {
      this.$router.push("editpengajarstaff/" + id);
    }
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/pengajarstaff/?format=json")
      .then(response => (this.datapengajar = response.data));
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
