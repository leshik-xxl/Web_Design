<template>
  <div class="profile">
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
            <div class="col-xs-6 col-sm-4">
                <img src="../assets/avatar_picture.png" class="rounded-circle img-thumbnail rounded float-start avatar" alt="Avatar picture">
                <p class="my-name">Oleksii Bikerei</p>
            </div>
        </div>
        <table class="table table-striped" style="margin-top: 20px">
            <thead>
            <tr>
                <th class="col-xs-3">Name</th>
                <th class="col-xs-3">LastName</th>
                <th class="col-xs-3">E-mail</th>
                <th class="col-xs-2">Birth Date</th>
                <th class="col-xs-1">Gender</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th class="name">Oleksii</th>
                <th class="name">Bikerei</th>
                <th class="telegram">oleksii.bikerei@gmail.com</th>
                <th class="number">07.10.2000</th>
                <th class="telegram">Male</th>
            </tr>

            </tbody>
        </table>
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
  name: 'Profile',
  components: {
    Footer,
    Header
  }
}
</script>

