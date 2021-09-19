<template>
  <div class="signUp">
    <Header />
<section class="main">
        <div class="container">
            <div class="row">
                <h1 class="justify-content-center">
                    <img src="../assets/phone-book.png" alt="logo" height="48px" width="60px">
                    NumGuide is the best instrument to manage your contact
                </h1>
            </div>
        </div>

        <section class="function">
            <form class="container-md">
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label" >First name</label>
                    <input type="text" class="form-control" id="validationCustom01" value="Oleksii"  required>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationCustom02" value="Bikerei" required>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">E-mail</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername" value="oleksii.bikerei@gmail.com" required>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">Gender</label>
                    <select class="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                </div>
                <div class="col-md-4">
                    <label for="example-date-input" class="form-label">Date</label>
                    <div class="col-md-12">
                        <input class="form-control" type="date" value="2000-10-07" id="example-date-input">
                    </div>
                </div>

                <div class="col-md-4 btn registration">
                    <router-link to="/signIn" class="btn btn-success ">Sign Up</router-link>
                </div>

            </form>

            <div>

            </div>
        </section>
    </section>

    <section class="projects">
        <div class="row">
            <div class="col-md-4">
                <img src="../assets/background3.jpg" alt="back3">
            </div>
            <div class="col-md-4">
                <img src="../assets/background2.jpg" alt="back2">
            </div>
            <div class="col-md-4">
                <img src="../assets/sitebackground.jpg" alt="back3">
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
  name: 'SignUp',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: #49444f;
    min-height: calc(100vh - 200px);
}


label{
    color: #00D3FF;
    font-weight: bold;
    font-size: large;
}

footer{
    margin-top: 0;
}

h1 {
    text-align: center;
    color: #f8f74f;
    padding-top: 50px;
    padding-bottom: 50px;
}

.projects .row{
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
}

.projects .col-md-4{
    margin: 0;
    padding: 0;
}

.projects img{
    width: 100%;
    height: 40vh;
}

.registration{
    margin-top: 15px;
}



.main{
    background-image: url("../assets/5053309.jpg");
    background-size: cover;
    padding-bottom: 25px;
}
</style>