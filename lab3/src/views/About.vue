<template>
  <div class="about">
    <Header />
  <section class="function">
    <div class="container">
        <div class="row">
            <h1 class="justify-content-center">
                <img src="../assets/phone-book.png" alt="logo" height="48px" width="60px">
                NumGuides is the best instrument to manage your contact
            </h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <img src="../assets/il_340x270.1920032201_47io.jpg" alt="phone-book" width="240" height="170">
            </div>
            <div class="col-md-9">
                <p class="about">  This application will help you keep your phone numbers in one place.
                    For large commercial clients, it is possible to store your client base in a single web interface.
                    With the ability to easily communicate with this information around the world.
                    You only need to have an easy access to the Internet using a browser. This can be done on any device.</p>
            </div>
        </div>

    </div>
    </section>
    <Footer />

  </div>
</template>


<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'


export default {
  name: 'About',
  components: {
    Footer,
    Header
  }
}
</script>

