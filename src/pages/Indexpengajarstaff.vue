<template>
  <q-page padding>
    <transition
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutLeft"
      appear
      :duration="700"
    >
      <q-card class="my-card" style=" border-radius: 20px;">
        <q-scroll-area
          :thumb-style="thumbStyle"
          :content-style="contentStyle"
          :content-active-style="contentActiveStyle"
          style="height: 700px; border-radius:20px;"
        >
          <div style="margin:10px; padding: 1px;">
            <div class="row ">
              <div style="width:25%;">
                <q-img
                  src="~assets/avatar.png"
                  style="width:100px; height:100px; border-radius:200%;"
                />
              </div>
              <div style="width:75%;">
                <div class="column" style="margin-left : 30px;">
                  <p>Nama : dimas indra setiawan</p>
                  <p>Nip : 180302081</p>
                  <p>Jabatan : kepala sekolah</p>
                  <div style="width:100%;" class="row justify-between">
                    <q-btn
                      align="between"
                      label="edit"
                      unelevated
                      style="width:45%;"
                      color="warning"
                    >
                      <q-icon name="edit" />
                    </q-btn>
                    <q-btn
                      align="between"
                      unelevated
                      label="hapus"
                      style="width:50%;"
                      color="negative"
                    >
                      <q-icon name="delete" />
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="row ">
              <div style="width:25%;">
                <q-img
                  src="~assets/avatar.png"
                  style="width:100px; height:100px; border-radius:200%;"
                />
              </div>
              <div style="width:75%;">
                <div class="column" style="margin-left : 30px;">
                  <p>Nama : dimas indra setiawan</p>
                  <p>Nip : 180302081</p>
                  <p>Jabatan : kepala sekolah</p>
                  <div style="width:100%;" class="row justify-between">
                    <q-btn
                      align="between"
                      label="edit"
                      unelevated
                      style="width:45%;"
                      color="warning"
                    >
                      <q-icon name="edit" />
                    </q-btn>
                    <q-btn
                      align="between"
                      unelevated
                      label="hapus"
                      style="width:50%;"
                      color="negative"
                    >
                      <q-icon name="delete" />
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="row ">
              <div style="width:25%;">
                <q-img
                  src="~assets/avatar.png"
                  style="width:100px; height:100px; border-radius:200%;"
                />
              </div>
              <div style="width:75%;">
                <div class="column" style="margin-left : 30px;">
                  <p>Nama : dimas indra setiawan</p>
                  <p>Nip : 180302081</p>
                  <p>Jabatan : kepala sekolah</p>
                  <div style="width:100%;" class="row justify-between">
                    <q-btn
                      align="between"
                      label="edit"
                      unelevated
                      style="width:45%;"
                      color="warning"
                    >
                      <q-icon name="edit" />
                    </q-btn>
                    <q-btn
                      align="between"
                      unelevated
                      label="hapus"
                      style="width:50%;"
                      color="negative"
                    >
                      <q-icon name="delete" />
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="row ">
              <div style="width:25%;">
                <q-img
                  src="~assets/avatar.png"
                  style="width:100px; height:100px; border-radius:200%;"
                />
              </div>
              <div style="width:75%;">
                <div class="column" style="margin-left : 30px;">
                  <p>Nama : dimas indra setiawan</p>
                  <p>Nip : 180302081</p>
                  <p>Jabatan : kepala sekolah</p>
                  <div style="width:100%;" class="row justify-between">
                    <q-btn
                      align="between"
                      label="edit"
                      unelevated
                      style="width:45%;"
                      color="warning"
                    >
                      <q-icon name="edit" />
                    </q-btn>
                    <q-btn
                      align="between"
                      unelevated
                      label="hapus"
                      style="width:50%;"
                      color="negative"
                    >
                      <q-icon name="delete" />
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="row ">
              <div style="width:25%;">
                <q-img
                  src="~assets/avatar.png"
                  style="width:100px; height:100px; border-radius:200%;"
                />
              </div>
              <div style="width:75%;">
                <div class="column" style="margin-left : 30px;">
                  <p>Nama : dimas indra setiawan</p>
                  <p>Nip : 180302081</p>
                  <p>Jabatan : kepala sekolah</p>
                  <div style="width:100%;" class="row justify-between">
                    <q-btn
                      align="between"
                      label="edit"
                      unelevated
                      style="width:45%;"
                      color="warning"
                    >
                      <q-icon name="edit" />
                    </q-btn>
                    <q-btn
                      align="between"
                      unelevated
                      label="hapus"
                      style="width:50%;"
                      color="negative"
                    >
                      <q-icon name="delete" />
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn
              fab
              icon="add"
              color="secondary"
              @click="$router.push('/addpengajarstaff')"
            />
          </q-page-sticky>
        </q-scroll-area>
      </q-card>
    </transition>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      judul: "Petugas",
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
      }
    };
  }
};
</script>
<style>
.q-btn icon {
  font-size: 100px;
}
</style>
