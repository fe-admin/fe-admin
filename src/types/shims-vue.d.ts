import VueRouter, { Route } from "vue-router";

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter;
    reload(): void;
  }
}
