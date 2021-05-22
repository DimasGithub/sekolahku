<template>
  <q-layout class= "ngopi" view="lHh Lpr lFf">
    <q-header>
      <q-toolbar >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Admin
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Tentang',
    caption: 'Tentang aplikasi',
    icon: 'info',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Keluar',
    caption: 'Keluar admin',
    icon: 'logout',
    link: 'http://127.0.0.1:8080/'

  },

];

export default {
  name: 'SecondLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
<style>
.ngopi {
  font-family: 'customfont';
}
</style>
