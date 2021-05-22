<template>
  
    <q-layout class="ngopi" view="lHh Lpr lFf">
      <q-header>
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Admin</q-toolbar-title>
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
            <q-item clickable v-ripple @click="$router.push('/indexpengaturan')">
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>
              <q-item-section>
                Pengaturan
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="confirm = true">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>
              <q-item-section>
                Keluar
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-dialog v-model="confirm" persistent>
        <q-card style="font-family: customfont;">
          <q-card-section class="row items-center">
            <span class="q-ml-sm">Apakah anda yakin keluar dari admin?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Batal" color="primary" v-close-popup />
            <q-btn
              flat
              label="Keluar"
              color="primary"
              v-close-popup
              @click="$router.push('/')"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
 
</template>

<script>
const menuList = [
  {
    icon: "setting",
    label: "Pengaturan",
    separator: true,
    link: "/"
  },
  {
    icon: "logout",
    label: "Keluar",
    separator: true,
    link: "/"
  }
];

export default {
  data() {
    return {
      confirm: false,
      drawer: false,
      menuList
    };
  }
};
</script>

<style>
.ngopi {
  font-family: "customfont";
}
</style>
