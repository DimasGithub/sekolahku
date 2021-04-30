<template>
  <transition
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutLeft"
    appear
    :duration="700"
  >
    <q-page padding>
      <div class="row justify-around" style="width:100%; ">
        <q-btn
          @click="$router.push('/editvisimisi')"
          unelevated
          color="primary"
          label="Visi & Misi"
          style="width:46%; padding: 40px; border-top-left-radius : 50px; margin:5px;"
        />
        <q-btn
          @click="$router.push('/indexpengajarstaff')"
          unelevated
          color="primary"
          label="pengumuman"
          style="width:46%; padding: 40px; border-top-right-radius : 50px; margin:5px;"
        />
      </div>
      <div class=" row justify-center">
        <q-btn
          @click="$router.push('/indexpengajarstaff')"
          unelevated
          color="primary "
          label="pengajar & staff"
          style="width:96%; padding:40px; margin:5px;"
        />
      </div>
      <div class="row justify-around" style="width:100%;">
        <q-btn
          unelevated
          color="primary"
          label="Berita"
          style="width:46%; padding:40px; border-bottom-left-radius : 50px; margin:5px;"
        />
        <q-btn
          unelevated
          color="primary"
          label="Jadwal"
          style="width:46%; padding:40px; border-bottom-right-radius : 50px; margin:5px;"
        />
      </div>
    </q-page>
  </transition>
</template>

<script>
import axios from 'app/node_modules/axios';
export default {
  data() {
    return {
      visimisi: []
    };
  },

};
</script>
