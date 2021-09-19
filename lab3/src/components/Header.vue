<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                 <router-link to="/#" class="navbar-brand ">
                    <img src="../assets/phone-book.png" alt="" width="30px" height="24px" class="d-inline-block align-top">
                    NumGuide
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/profile" class="nav-link ">Profile</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link ">About us</router-link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <router-link to="/signIn" class="btn btn-outline-danger ">Exit</router-link>
                    </form>
                </div>
            </div>
        </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
html{
    background-color: #49444f;
}

.function{
    background-color: #49444f;
}

.avatar{
    margin-top: 25px;
    margin-right: 25px;
    height: 75px;
    width: 75px;
}

.my-name{
    margin-top: 35px;
    font-family: monospace;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 44px;
    letter-spacing: 0.11em;
    text-transform: uppercase;

    color: #FFFFFF;
}

.add-contact-but{
    color: #2b3b2e;
    background-color: #f8f74f;
    font-family: monospace;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
}

.add-contact-but:hover{
    color: #f0f8ff;
    background-color: #b22222;
}

.delete-btn{
    height: 15px;
    width: 15px;
    background-color: #f8f74f;
}

.dropdown-menu{
    background-color: #E577A7;
}

.dropdown-menu a:hover{
    background-color: #e577a7;
    color: #fff980;
}

th{
    color: #fff980;
}

.name{
    color: #63f576;
}

.number{
    color: #ffe4c4;
}

.telegram{
    color: #00d3ff;
}

* {
    margin: 0;
    padding: 0;
}

h1 {
    font-weight: bold;
    text-align: center;
    color: #f8f74f;
    padding-top: 50px;
    padding-bottom: 50px;
}

.function{
    background-image: url("../assets/5053309.jpg");
    background-size: cover;
    padding-bottom: 25px;
    min-height: calc(100vh - 110px);
}

.about{
    font-size: large;
    font-weight: bold;
    color: #00d3ff;
}

</style>