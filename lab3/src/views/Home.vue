<template>
  <div class="home">
    <Header />
  <section class="function">
        <div class="container">
            <div class="row">
                <div class="col-xs-6 col-sm-4">
                    <img src="../assets/avatar_picture.png" class="rounded-circle img-thumbnail rounded float-start avatar" alt="Avatar picture">
                    <p class="my-name">Oleksii Bikerei</p>
                </div>
                <div class="col-xs-11 col-sm-5" style="margin-top: 40px">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a class="btn add-contact-but" href="#" role="button"> + Add Contact</a>
                        <button class="btn add-contact-but" type="button"> Sorted</button>
                    </div>
                </div>
            </div>
            <table class="table table-striped justify-content-center" style="margin-top: 20px">
                <thead>
                <tr>
                    <th class="col-xs-1">#</th>
                    <th class="col-xs-3">Name</th>
                    <th class="col-xs-3">Phone</th>
                    <th class="col-xs-3">Telegram</th>
                    <th class="col-xs-1"></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row" >1</th>
                    <td class="name">Mark</td>
                    <td class="number">+380758563167</td>
                    <td class="telegram">@mark</td>
                    <td>
                        <div class="dropdown">
                            <a class="btn dropdown-toggle delete-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Delete</a></li>
                                <li><a class="dropdown-item" href="#">Edit</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td class="name">Jacob</td>
                    <td class="number">+380758563167</td>
                    <td class="telegram">@jacob</td>
                    <td>
                        <div class="dropdown">
                            <a class="btn dropdown-toggle delete-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Delete</a></li>
                                <li><a class="dropdown-item" href="#">Edit</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td class="name">John</td>
                    <td class="number">+380758566585</td>
                    <td class="telegram">@john</td>
                    <td>
                        <div class="dropdown">
                            <a class="btn dropdown-toggle delete-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Delete</a></li>
                                <li><a class="dropdown-item" href="#">Edit</a></li>
                            </ul>
                        </div>
                    </td>
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
  name: 'Home',
  components: {
    Footer,
    Header
  }
}
</script>
