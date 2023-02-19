<template>
 <div>
  <!-- INICIO NAV BAR -->
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <a class="navbar-brand order-md-last">CRUD Vue.js PostgreSQL Node.js</a>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Create New Employee</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/list-employees">List all Employees</router-link>
      </li>
    </ul>
  </nav>
  <!-- FIM NAV BAR -->
  <div class="container mt-5">
    <router-view></router-view>
  </div>
 </div>
</template>
