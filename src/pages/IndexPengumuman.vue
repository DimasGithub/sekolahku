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
            v-model="filterpengumuman"
            placeholder="Cari pengumuman"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar-title>
        <q-btn outline round color="white" icon="add" @click="$router.push('/addpengumuman')" />
      </q-toolbar>
    </q-header>
    <q-page-container>
    
        <transition
          enter-active-class="animated fadeInRight"
          leave-active-class="animated fadeOutLeft"
          appear
          :duration="700"
        >
          <div class="q-pa-md">
            <q-table
              grid
              :data="datapengumuman"
              :columns="columnspengumuman"
              row-key="name"
              :filter="filterpengumuman"
              hide-header
            >
              <template v-slot:item="props">
                <div class="q-pa-xs col-xs-12 col-sm-12 col-md-12">
                  <q-card
                    @click="ngedit(props.row.id)"
                    class="my-card bg-secondary text-white"
                    style="border-radius:20px;"
                  >
                    <q-card-section>
                      <div class="text-h6">{{ props.row.title }}</div>
                      <div class="text-subtitle2">
                        <p v-html="props.row.content" />
                      </div>
                      <q-separator dark />
                    </q-card-section>
                    <q-card-section>
                      <q-btn
                        @click="unduhfile(props.row.attachment)"
                        outline
                        rounded
                        color="primary"
                        label="download"
                        text-color="white"
                      />
                    </q-card-section>
                  </q-card>
                </div>
              </template>
            </q-table>
          </div>
        </transition>

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
      filterpengumuman: "",
      columnspengumuman: [
        {
          name: "title",
          label: "Judul pengumuman",
          field: "title",
          align: "left",
          sortable: true
        },
        {
          name: "content",
          label: "Konten",
          field: "content",
          align: "left",
          sortable: true
        },
        {
          name: "attachment",
          label: "Lampiran",
          field: "attachment",
          align: "left",
          sortable: true
        },
        {
          name: "date_created",
          label: "Tanggal dibuatkan",
          field: "date_created",
          align: "left",
          sortable: true
        }
      ],
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
      datapengumuman: [],
      judul: "Petugas"
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/pengumuman/")
      .then(response => (this.datapengumuman = response.data));
  },
  methods: {
    unduhfile(link) {
      axios.get("http://127.0.0.1:8000" + link);
    },
    ngedit(id) {
      this.$router.push("detailpengumuman/" + id);
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
