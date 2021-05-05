<template>
  <q-page>
    <div class="q-pa-md">
      <div v-if="page !== 'Login'">
        <div class="slider" v-if="page !== 'Pengajar dan staff'">
          <q-carousel
            style="height:150px; width:100%;"
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
            <q-carousel-slide
              :name="1"
              style="border-radius: 30px;"
              img-src="https://cdn.quasar.dev/img/mountains.jpg"
            />
            <q-carousel-slide
              :name="2"
              style="border-radius: 30px;"
              img-src="https://specials-images.forbesimg.com/imageserve/179282892/960x0.jpg?fit=scale"
            />
            <q-carousel-slide
              :name="3"
              style="border-radius: 30px;"
              img-src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
            <q-carousel-slide
              :name="4"
              style="border-radius: 30px;"
              img-src="https://cdn.quasar.dev/img/quasar.jpg"
            />
          </q-carousel>
        </div>
      </div>
      <div v-if="page !== 'Login'">
        <q-virtual-scroll :items="heavyList" virtual-scroll-horizontal>
          <template v-slot="{ item, index }">
            <div
              style="font-weight:bold; margin:10px; border-radius: 20px; background-color: #26A69A;"
              :key="index"
              :class="item.class"
              @click="panggil(item.label)"
            >
              {{ item.label }}
            </div>
          </template>
        </q-virtual-scroll>
      </div>
      <transition
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft"
        appear
        :duration="700"
      >
        <div
          v-if="page === 'awal'"
          style=" width: 100%;  margin:10px; padding: 1px;"
        >
          <center>
            <q-img src="~assets/sekolah.png" style="width:80%;" />
            <p style="font-size:20px; font-weight:bold;">
              Sekolahku Negeri Pemalang
            </p>
          </center>
        </div>
      </transition>
      <transition
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft"
        appear
        :duration="700"
      >
        <q-card
          v-if="page === 'Visi misi'"
          class="my-card"
          style=" border-radius: 20px;"
        >
          <div style="margin:10px; padding: 1px;">
            <p style="font-size: 30px; font-weight:bold;">Visi</p>
            <div v-for="a in visimisi" :key="a.id">
              <p>{{ a.visi }}</p>
            </div>
            <p style="font-size: 30px; font-weight:bold;">Misi</p>
            <div v-for="a in visimisi" :key="a.id">
              <p v-html="a.misi"></p>
            </div>
          </div>
        </q-card>
      </transition>
      <transition
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft"
        appear
        :duration="700"
      >
        <q-card
          v-if="page === 'Pengajar dan staff'"
          class="my-card"
          style=" border-radius: 20px;"
        >
          <q-input
  
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
          <q-scroll-area
            :thumb-style="thumbStyle"
            :content-style="contentStyle"
            :content-active-style="contentActiveStyle"
            style="height: 470px; "
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
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </template>
              </q-table>
            </div>
          </q-scroll-area>
        </q-card>
      </transition>
      <transition
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft"
        appear
        :duration="700"
      >
        <div class="KartuPengumuman" v-if="page === 'Pengumuman'">
          <q-scroll-area
            :thumb-style="thumbStyle"
            :content-style="contentStyle"
            :content-active-style="contentActiveStyle"
            style="height: 310px; border-radius:20px;"
          >
            <q-card
              class="my-card bg-secondary text-white"
              style="border-radius:20px; margin:10px;"
            >
              <q-card-section>
                <div class="text-h6">Judul pengumuman</div>
                <div class="text-subtitle2">Dari @username</div>
                <q-separator dark />
              </q-card-section>
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>
            <q-card
              class="my-card bg-secondary text-white"
              style="border-radius:20px; margin:10px;"
            >
              <q-card-section>
                <div class="text-h6">Judul pengumuman</div>
                <div class="text-subtitle2">Dari @username</div>
                <q-separator dark />
              </q-card-section>
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>
            <q-card
              class="my-card bg-secondary text-white"
              style="border-radius:20px; margin:10px;"
            >
              <q-card-section>
                <div class="text-h6">Judul pengumuman</div>
                <div class="text-subtitle2">Dari @username</div>
                <q-separator dark />
              </q-card-section>
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>
          </q-scroll-area>
        </div>
      </transition>

      <transition
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft"
        appear
        :duration="700"
      >
        <div
          v-if="page === 'Jadwal'"
          style=" width: 100%; height: 100%; margin:10px; padding: 1px;"
        >
          <q-stepper v-model="step" vertical color="primary" animated>
            <q-step
              :name="1"
              title="Pembagian raport siswa"
              icon="assignment"
              caption="10 maret 2020"
              :done="step > 1"
            >
              Pembagian rapot siswa tanggal 27 maret 2020 dapat diambil diruang
              kelas masing masing

              <q-stepper-navigation>
                <q-btn @click="step = 2" color="primary" label="Lanjut" />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="2"
              title="Pelatihan jaringan guru tkj"
              caption="28 maret 2020"
              icon="assignment"
              :done="step > 2"
            >
              Pelatihan jaringan komputer untuk guru jurusan teknik komputer
              jaringan

              <q-stepper-navigation>
                <q-btn @click="step = 4" color="primary" label="Lanjut" />
                <q-btn
                  flat
                  @click="step = 1"
                  color="primary"
                  label="Back"
                  class="q-ml-sm"
                />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="3"
              title="Batasan dapodik peserta didik"
              icon="assignment"
              caption="14 april 2020"
              disable
            >
              Batasan pengisian peserta dapodik untuk wali kelas masing-masing
            </q-step>

            <q-step
              :name="4"
              caption="1 mei 2020"
              title="Hut sekolah"
              icon="assignment"
            >
              memperingati hari jadi sekolah
              <q-stepper-navigation>
                <q-btn color="primary" label="Finish" />
                <q-btn
                  flat
                  @click="step = 2"
                  color="primary"
                  label="Back"
                  class="q-ml-sm"
                />
              </q-stepper-navigation>
            </q-step>
          </q-stepper>
        </div>
      </transition>
      <div v-if="page === 'Login'">
        <transition
          enter-active-class="animated fadeInRight"
          leave-active-class="animated fadeOutLeft"
          appear
          :duration="700"
        >
          <div class="loginpage">
            <q-input
              outlined
              v-model="username"
              placeholder="Username"
              rounded
              dense
              style="margin-top:60px;"
            />
            <q-input
              outlined
              v-model="password"
              placeholder="Password"
              type="password"
              rounded
              dense
              style="margin-top:30px;"
            />
            <q-btn
              rounded
              color="primary"
              label="Login"
              dense
              style="width:100%; margin-top: 20px; font-weight:bold;"
            />
          </div>
        </transition>
      </div>
    </div>
  </q-page>
</template>
<script>
const heavyList = [
  {
    label: "Visi misi",
    class: "q-pa-lg text-white"
  },
  {
    label: "Pengajar dan staff",
    class: "q-pa-lg text-white"
  },
  {
    label: "Pengumuman",
    class: "q-pa-lg text-white"
  },
  {
    label: "Berita",
    class: "q-pa-lg text-white"
  },
  {
    label: "Jadwal",
    class: "q-pa-lg text-white"
  },
  {
    label: "Login",
    class: "q-pa-lg text-white"
  }
];
import axios from "app/node_modules/axios";
export default {
  data() {
    return {
      filter: "",

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
      judul: "Petugas",
      cek: {},
      visimisi: {},
      username: "",
      password: "",
      step: 1,
      contentStyle: {
        backgroundColor: "rgba(0,0,0,0.02)",
        color: "#555",
        borderRadius: "20px"
      },
      contentActiveStyle: {
        backgroundColor: "#eee",
        color: "black",
        borderRadius: "20px"
      },
      thumbStyle: {
        right: "2px",
        borderRadius: "5px",
        backgroundColor: "#26A69A",
        width: "5px",
        opacity: 0.75
      },
      page: "awal",
      heavyList,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      slide: 1,
      autoplay: true
    };
  },
  methods: {
    panggil(halaman) {
      if (halaman !== "Berita") {
        this.page = halaman;
      } else {
        this.$router.push("/news");
      }
    }
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/visimisi/1?format=json")
      .then(response => {
        this.visimisi = response.data;
        console.log(this.visimisi.visi);
      });
    axios
      .get("http://127.0.0.1:8000/api/pengajarstaff/?format=json")
      .then(response => (this.datapengajar = response.data));
  }
};
</script>
<style></style>
