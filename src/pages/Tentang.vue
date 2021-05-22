<template>
  <q-layout class="ngopi" >
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          rounded
          icon="arrow_back"
          arial-label="Menu"
          @click="$router.push('/')"
        />
        <q-toolbar-title>
          Tentang
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="column" style="width:100%; ">
        <q-card class="my-card" style="margin:10px; border-radius:20px;">
          <div v-for="a in pengaturan" :key="a.id">
            <img
              :src="'http://127.0.0.1:8000' + a.img_about"
              style="width:300px; display: block; margin-left: auto; margin-right: auto;"
            />
            <q-card-section
              class="vertical-top "
              style="text-align: justify;"
              >{{ a.content_about }}</q-card-section
            >
            <div class="row justify-center">
              <q-btn
                @click="
                  redirect(
                    'https://wa.me/62' + a.phone_about + '?text=Hi%2C%20'
                  )
                "
                unelevated
                rounded
                color="primary"
                label="Hubungi kami"
                style="width:90%; margin-bottom : 20px;"
              />
            </div>
          </div>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import axios from "app/node_modules/axios";
export default {
  data() {
    return {
      slide: 1,
      pengaturan: {}
    };
  },
  methods: {
    redirect(url) {
      window.location = url;
    }
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/pengaturan/1")
      .then(response => (this.pengaturan = response.data));
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
