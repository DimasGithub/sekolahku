<template>
  <q-layout class= "ngopi" view="lHh Lpr lFf">
    <q-header>
      <q-toolbar >
        <q-btn
          flat
          dense
          round
          icon="arrow_back"
          aria-label="Menu"
          @click="$router.push('/indexadmin')"
        />

        <q-toolbar-title>
       
        </q-toolbar-title>

      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


export default {
  name: 'BackLayout',
  data () {
    return {

    }
  }
}
</script>
<style>
.ngopi {
  font-family: 'customfont';
}
</style>
