<template>
  <transition name="exit-card">
    <div id="container">
      <div id="card">
        <button id="exit" @click="closeContact">
          <img class="x" src="@/assets/close.svg" alt />
        </button>
        <img id="avatar" src="@/assets/avatar.svg" alt />

        <form @submit.prevent="addContact" action="javascript:0">
          <input
            type="text"
            class="text-line"
            placeholder="Contact name"
            v-model="contact"
            required
          />
          <img class="icons" src="@/assets/user.svg" alt />
          <input
            type="tel"
            pattern="^[0-9-+\s()]*$"
            inputmode="numeric"
            class="text-line"
            placeholder="Phone number"
            v-model="number"
          />
          <img class="icons" src="@/assets/phone.svg" alt />
          <button
            id="submit"
            type="submit"
            value="Submit"
            :disabled="isDisabled"
            @click="closeContact"
          >
            <img class="x" src="@/assets/submit.svg" alt />
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      contact: "",
      number: ""
    };
  },
  methods: {
    addContact() {
      this.$emit("contact-added", this.contact, this.number);
      this.contact = this.number = "";
    },
    closeContact() {
      this.$emit("close-card");
    }
  },

  computed: {
    isDisabled() {
      return !this.contact || !this.number || isNaN(this.number);
    }
  }
};
</script>

<style lang="scss" scoped>
#avatar {
  margin-top: 3em;
  margin-bottom: 1em;
}

#container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: white;
  width: 100%;
  height: 100%;
  z-index: 3;
}

#card {
  text-align: center;
  background-color: white;
  width: 279px;
  height: 434px;
  box-shadow: -10px 20px 25px rgba(36, 36, 36, 0.1);
  border: 0.5px solid #c1e2fd;
}

#submit-container {
  margin-top: 8px;
}
.text-line {
  margin: 10px;
  font-family: inherit;
  background-color: white;
  outline: none;
  outline-style: none;
  width: 160px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid #bce0fd 1px;
  padding: 15px 35px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

::placeholder {
  color: #2699fb;
}

.icons {
  position: absolute;
  margin-top: 23px;
  margin-left: -235px;
}
#exit {
  position: absolute;
  margin-left: -10px;
  margin-top: 341px;

  background-color: transparent;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  border: 1px solid #c1e2fd;
}
#submit {
  background-color: #2699fb;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  border: none;
  margin: 10px;
  margin-top: 29px;
  margin-left: 90px;
}
#submit:disabled {
  background-color: #7ac1fc;
}
.x {
  margin-top: 4px;
}

button:focus {
  outline: 0;
}
</style>