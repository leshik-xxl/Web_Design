<template>
    <footer class="bg-light text-center text-lg-start footer">
        <div class="text-center p-3">
            © 2021 Copyright: Oleksii Bikerei KV-82
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
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

footer{
    margin-top: 0;
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