import Vue from "vue";
import VueRouter from "vue-router";
//import contacts from '@/components/contacts'
//import addContacts from '@/components/add-contacts'

Vue.use(VueRouter);

const routes = [
  /*{
    path: '/',
    name: 'contacts',
    component: contacts
  },
  {
    path: '/add-contacts',
    name: 'contacts',
    component: addContacts
  }*/
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
