<template>
  <div class="row">
  <div class="col-6">
    <div class="lb" v-if="items.length > 0">
        <div class="lb-grid" :class="[
        css,
        items.length > cells ? 'lb-grid-' + cells : 'lb-grid-' + items.length,
      ]" style="max-width: 850px;margin: auto;">
            <div class="lb-item" v-for="(src, i) in items" v-bind:key="src" @click="show(i)" :style="bg(src)">
                <span class="lb-more" v-if="i == cells - 1 && items.length - cells > 0"
          >{{ items.length - cells }}+</span>
            </div>
        </div>

        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <div class="lb-modal" v-if="index >= 0">
                <button
          class="btn btn-outline-danger btn-sm lb-modal-close"
          @click="close"
        >
          <i class="fas fa-times fa-2x"></i>
        </button>
                <button class="btn btn-outline-primary lb-modal-prev" @click="prev">
          <i class="fas fa-angle-left fa-2x"></i>
        </button>
                <button class="btn btn-outline-primary lb-modal-next" @click="next">
          <i class="fas fa-angle-right fa-2x"></i>
        </button>

                <div class="lb-modal-img" @click="close">
                    <img :src="src" />
                    <div class="spinner spinner-dots-wave" v-if="loading">
                        <span class="badge badge-primary rounded-circle w-10 h-10">
              <i class="sr-only">&nbsp;</i>
            </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
              <i class="sr-only">&nbsp;</i>
            </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
              <i class="sr-only">&nbsp;</i>
            </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
              <i class="sr-only">&nbsp;</i>
            </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
              <i class="sr-only">&nbsp;</i>
            </span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
  </div>
    <div class="col-6" style="margin-top: 50px;">
      <h2 style="    font-family: 'Carter One';
    font-size: 2.5em;
    color: #ee5e5e;
    text-shadow: 2px -1px 3px black;text-align: center;">Explore {{Name}} and Its most Beautiful Places</h2>
    <div style="text-align: center;">
      <b-button pill variant="info" @click="CityPlaces(Name)" style="font-size: 2em;
    font-family: 'Poppins';
    padding: 13px 32px;
    font-weight: bold;">Go!</b-button>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
    export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },

    css: {
      type: String,
      default: () => "h-250 h-md-400 h-lg-600",
    },

    cells: {
      type: Number,
      default: () => 5,
    },
  },

  data() {
    return {
      src: "",
      index: -1,
      loading: false,
      events: [],
      Name:""

    };
  },
  created()
  {
     let URL01 = "http://localhost:3005/api/FindCity";
          this.itemname=localStorage.Name
        axios.post(URL01,{name:localStorage.CityName}).then((res) => {
              this.Images = res.data[0].Pictures
              this.Name = res.data[0].name
              this.Description = res.data[0].Description
              console.log(this.Images)
            })
        .catch(error => {
          console.log(error)
        });

    console.log(localStorage.CityId)
  },
  methods: {
    bind() {
      if (this.events.length > 0) return;

      this.events.push([
        "keydown",
        (e) => {
          if (this.index < 0) return;
          if (e.keyCode === 37) {
            this.prev();
          } else if (e.keyCode === 39) {
            this.next();
          } else if (e.keyCode === 27) {
            this.close();
          }
        },
      ]);
      this.events.forEach((e) => {
        window.addEventListener(e[0], e[1]);
      });
    },

    show(i) {
      if (i >= this.items.length) {
        i = 0;
      }
      if (i < 0) {
        i = this.items.length - 1;
      }
      this.loading = true;
      this.bind();
      this.index = i;
      var src = this.items[i];
      var img = new Image();
      img.src = src;
      img.onload = () => {
        this.loading = false;
        this.src = src;
      };
    },
    next() {
      this.show(this.index - 1);
    },

    prev() {
      this.show(this.index + 1);
    },
    close() {
      this.index = -1;
      this.events.forEach((e) => {
        window.removeEventListener(e[0], e[1]);
      });
      this.events = [];
    },
    bg(i) {
      return i && i.length > 0 ? `background-image: url('${i}')` : "";
    },
    CityPlaces(name) {
      localStorage.setItem('CityName' , name)
      this.$router.push("/AllPlace");
    }
  },
};
</script>
