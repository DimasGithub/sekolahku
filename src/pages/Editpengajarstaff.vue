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
          @click="$router.push('/indexpengajarstaff')"
        />
        <q-toolbar-title>
          Edit Pengajar & staff
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
              <p style=" width:90%; margin-top:20px;">Nama lengkap :</p>
              <q-input
                rounded
                name="namaproduk"
                dense
                outlined
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
                label="Nama lengkap"
                style="width:90%; margin-right:10px; margin-left:10px; justify-content: center;"
              />
              <p style=" width:90%; ">Nip :</p>
              <q-input
                type="number"
                rounded
                name="nip"
                dense
                outlined
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
                label="Nip"
                style="width:90%; margin-right:10px; margin-left:10px; justify-content: center;"
              />
              <p style=" width:90%; ">Jabatan :</p>
              <q-input
                rounded
                name="harga"
                dense
                outlined
                label="Jabatan"
                style="width:90%; margin-right:10px; margin-left:10px; justify-content: center;"
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Isikan Jawban ini']"
              />
              <p style=" width:90%;">Profil gambar :</p>
               <q-img
                  src="~assets/avatar.png"
                  style="width:200px; border-radius:200%;"
                />
              <p style=" width:90%;">Ganti profil gambar :</p>
              <q-file
                rounded
                name="gambar"
                dense
                outlined
                label="Gambar produk"
                style="width:90%; margin-right:10px; margin-left:10px; margin-bottom: 20px; "
              />
              <q-btn
                type="submit"
                dense
                rounded
                color="primary"
                label="Edit"
                style="width:90%; margin-bottom:20px; justify-content: center;"
              />
            </div>
          </transition>
        </form>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
<style>
.ngopi {
  font-family: "customfont";
}
</style>
