<template>
  <div>
    <transition name="card">
      <addContacts v-show="isHidden" @contact-added="addContact" @close-card="isHidden = false" />
    </transition>

    <h1>Contacts</h1>

    <button class="add-btn" v-on:click="isHidden = !isHidden">
      <img class="btn-icon" src="@/assets/plus.svg" alt />
    </button>

    <div>
      <ul>
        <transition-group name="list">
          <li v-for="(data, index) in contacts" :key="data.contact">
            <img class="contact-img" src="@/assets/contact-img.svg" alt />
            <pre> {{data.contact}}</pre>
            <pre> {{data.number}}</pre>
            <span class="contact-del">
              <img src="@/assets/contact-del.svg" alt v-on:click="remove(index)" />
            </span>
          </li>
        </transition-group>
      </ul>
      <div id="container1" v-if="!contacts.length">
        <img id="image" src="@/assets/contacts.svg" alt />
        <p id="no-contacts">No contacts yet</p>
        <p>Add new contacts</p>
      </div>
    </div>
  </div>
</template>

<script>
import addContacts from "@/components/add-contacts.vue";
export default {
  components: {
    addContacts
  },
  data() {
    return {
      isHidden: false,
      contact: "",
      number: "",
      contacts: []
    };
  },
  methods: {
    addContact(contact, number) {
      this.contacts.push({ contact: contact + "\n " + number });
    },
    remove(id) {
      this.contacts.splice(id, 1);
    }
  },
  watch: {
    contacts: {
      handler() {
        console.log("Contact changed!");
        localStorage.setItem("contacts", JSON.stringify(this.contacts));
      },
      deep: true
    }
  },
  mounted() {
    console.log("Contact mounted!");
    if (localStorage.getItem("contacts"))
      this.contacts = JSON.parse(localStorage.getItem("contacts"));
  }
};
</script>

<style lang="scss" scoped>
h1 {
  display: flex;
  margin-left: 1em;
  margin-top: -0em;
  padding-top: 1em;
  font-family: "Montserrat Alternates", sans-serif;
}

#container1 {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  animation-name: inputanimation;
  animation-duration: 8s;
}

@keyframes inputanimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#no-contacts {
  color: #989898;
  margin-top: 3em;
  margin-bottom: -0.1em;
}

ul {
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  padding-bottom: 1.5%;
}

ul li {
  display: flex;
  align-items: center;
  margin: 5px 20px 0 20px;
  box-shadow: 0px 3px 8px rgba(71, 71, 71, 0.068);
  background-color: white;
  padding: 12px;
  height: 45px;
}
.contact-img {
  margin: 0;
  margin-right: 20px;
}
.contact-del {
  margin-left: auto;
  margin-right: 10px;
  margin-top: 5px;
}

pre {
  font-size: 11pt;
  position: absolute;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
  margin-top: 13px;
  margin-left: 50px;
  padding: 0;
  color: #494949;
  font-weight: 600;
}

.list-enter-active {
  animation-name: list-animation;
  animation-duration: 0.5s;
}
.list-leave-active {
  animation-name: list-animation;
  animation-duration: 0.3s;
  animation-direction: reverse;
}

@keyframes list-animation {
  from {
    opacity: 0;
    transform: translateX(1000px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
}

.btn-icon {
  margin-top: 4px;
  margin-left: 1px;
}

.add-btn {
  box-shadow: 0px 0px 15px rgba(36, 36, 36, 0.178);
  position: fixed;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  background-color: #2699fb;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  border: none;
  z-index: 2;
  transition: all 0.3s ease 0s;
}
.add-btn:hover {
  background-color: #0062ff;
  box-shadow: 0px 15px 20px rgba(46, 156, 229, 0.4);
  bottom: 4.3rem;
}

button:focus {
  outline: 0;
}

@keyframes cardanimation {
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
.card-enter-active {
  animation-name: cardanimation;
  animation-duration: 0.3s;
}
.card-leave-active {
  animation-name: cardanimation;
  animation-duration: 0.3s;
  animation-direction: reverse;
}
</style>