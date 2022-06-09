<template>
  <v-app id="inspire">
    <v-app-bar app color="gray light-3" flat :collapse="!collapseOnScroll" :collapse-on-scroll="collapseOnScroll"
      absolute dark dense scroll-target="#scrolling-techniques-6">
      <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-sm-none"></v-app-bar-nav-icon>
      <v-container class="py-0 fill-height">
        <!-- <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar> -->
        <v-toolbar-title>
          <a href="/" class="white--text" style="text-decoration: none; font-size:3vh">Keva Systems</a>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-btn v-for="link in links" :key="link" text>
          <router-link to="/PayrollHR">test</router-link>
        </v-btn>
        <v-spacer></v-spacer> -->
        <div v-for="routerlink in routerlinks" v-bind:key="routerlink.routerlink.value" class="d-none d-sm-flex">
          <v-btn small v-bind:key="routerlink.routerlink.value" :to="routerlink.routerlink.value" color="gray" text>
            {{ routerlink.routerlink.text }}
          </v-btn>
        </div>
        <!-- <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive> -->
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(routerlink, index) in routerlinks" v-bind:key="index">
            <!-- <v-list-item-title @click="tab = index"> {{ routerlink.routerlink.text }}
            </v-list-item-title> -->
            <v-btn small v-bind:key="routerlink.routerlink.value" :to="routerlink.routerlink.value" color="gray" text>
              {{ routerlink.routerlink.text }}
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="grey lighten-3">
      <v-container>
        <router-view />
        <!-- <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <HomePage></HomePage>
            </v-sheet>
          </v-col>
        </v-row> -->
      </v-container>
    </v-main>
    <v-footer v-bind="localAttrs">
      <v-card dark flat tile width="100%" class="gray lighten-1 text-center">
        <v-card-text>
          <v-btn icon target="_blank" href="https://www.linkedin.com/company/keva-systems-llc">
            <v-icon>
              mdi-linkedin
            </v-icon>
          </v-btn>
          <v-btn icon target="_blank" href="https://www.facebook.com/KEVA-Systems-108784315191260">
            <v-icon>
              mdi-facebook
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Keva Systems</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
//import HomePage from './components/HomePage.vue'
export default {
  data: () => ({
    drawer: false,
    links: [
      "Payroll & HR",
      "Application Development",
      // 'IT Infrastructure',
      // 'Consulting Services',
      "Technlogies",
      "Careers",
      "Contact Us"
    ],
    icons: [
      "mdi-linkedin",
      "mdi-facebook",
      "mdi-twitter",
      "mdi-instagram",
    ],
    items: [
      "default",
      "absolute",
      "fixed",
    ],
    collapseOnScroll: true,
  }),
  computed: {
    localAttrs() {
      const attrs = {};
      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      }
      else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
    ...mapState({
      routerlinks: state => state.AppStore.routerlinks
    })
  },
  //components: { HomePage }
}
</script>
<style>
h4 {
    font-weight: bold;
    color: rgb(0, 110, 255);
}
h2 {
    font-weight: bold;
    color: rgb(0, 110, 255);
}
strong {
    font-weight: bold;
    color: rgb(0, 110, 255);
}
p {
    text-align: justify;
}
</style>