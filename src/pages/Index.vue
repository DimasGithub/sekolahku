<template>
  <q-layout class="ngopi" view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>{{pengaturan.title_bar}}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="300"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item clickable v-ripple @click="$router.push('/indextentang')">
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>
            <q-item-section>
              Tentang
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
   <q-page>
    <div class="q-pa-md" style="margin-top:50px;">
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
              img-src="~assets/1.jpg"
            />
            <q-carousel-slide
              :name="2"
              style="border-radius: 30px;"
              img-src="~assets/2.jpg"
            />
            <q-carousel-slide
              :name="3"
              style="border-radius: 30px;"
              img-src="~assets/3.jpg"
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
            <q-img :src="'http://127.0.0.1:8000'+pengaturan.img_main" style="width:80%;" />

            <p style="font-size:20px; font-weight:bold;">
              {{pengaturan.title_sub}}
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
              <p v-html="a.visi" />
            </div>
            <p style="font-size: 30px; font-weight:bold;">Misi</p>
            <div v-for="a in visimisi" :key="a.id">
              <p v-html="a.misi" />
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
            style="height: 470px;"
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
          <q-input
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
          <q-scroll-area
            :thumb-style="thumbStyle"
            :content-style="contentStyle"
            :content-active-style="contentActiveStyle"
            style="height: 310px; top: 10px;"
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

          <div class="q-pa-md">
            <q-date
              first-day-of-week="1"
              v-model="date"
              today-btn
              :events="tanggal.tglstr"
              event-color="orange"
            />
          </div>
          <q-scroll-area
            :thumb-style="thumbStyle"
            :content-style="contentStyle"
            :content-active-style="contentActiveStyle"
            style="height: 310px; top: 10px;"
          >
          <div v-for="a in tanggal" :key="a.id">
            <q-card class="my-card" style=" border-radius: 20px; margin:5px;">
              <div style="margin:10px; padding: 1px;" v-if="date === a.tglstr">
                <p style="font-size: 30px;">{{ a.tglstr }}</p>
                <p v-html="a.events"/>
              </div>
            </q-card>
          </div>
          </q-scroll-area>
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
              @click="login"
              rounded
              color="primary"
              label="Masuk"
              dense
              style="width:100%; margin-top: 20px; font-weight:bold;"
            />
            <q-btn
              @click=" page = 'awal'"
              outline
              rounded
              color="primary"
              label="Batal"
              dense
              style="width:100%; margin-top: 20px; font-weight:bold;"
            />
          </div>
        </transition>
      </div>
    </div>
  </q-page>
  </q-layout>

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
      drawer: false,
      filterpengumuman: "",
      filter: "",
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
      username: '',
      password: '',
      pengaturan: {},
      datapengajar: [],
      datapengumuman: [],
      visimisi: {},
      tanggal: {},
      date: "",
      step: 1,
      events: [],
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
    },
    login(){
      if (this.username === 'admin' && this.password === 'admin'){
        this.$router.push('/indexadmin');
      }else{
        this.username = '';
        this.password = '';
        this.$q.notify({
            type: "negative",
            message: 'Username atau Password anda salah',
          });

      }
    },
    unduhfile(link) {
      axios.get("http://127.0.0.1:8000" + link);
    }
  },
  mounted() {
    var MyDate = new Date();
    var MyDateString;
    MyDate.setDate(MyDate.getDate());
    MyDateString =
      MyDate.getFullYear() +
      "/" +
      ("0" + (MyDate.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + MyDate.getDate()).slice(-2);

    this.date = MyDateString;

    axios.get("http://127.0.0.1:8000/api/visimisi/1").then(response => {
      this.visimisi = response.data;
    });
    axios
      .get("http://127.0.0.1:8000/api/pengajarstaff/?format=json")
      .then(response => (this.datapengajar = response.data));
    axios
      .get("http://127.0.0.1:8000/api/pengumuman/")
      .then(response => (this.datapengumuman = response.data));
    axios
      .get("http://127.0.0.1:8000/api/jadwal/")
      .then(response => (this.tanggal = response.data));
    axios
      .get("http://127.0.0.1:8000/api/pengaturan/1")
      .then(response => {
        this.pengaturan = response.data[0];
      });
  }
};
</script>
<style>
.ngopi {
  font-family: "customfont";
}
</style>