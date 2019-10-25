<template>
<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="/">Travel Vision Vue CMS</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="/#/menu-items">Menu Items</b-nav-item>
      <b-nav-item href="/#/employees">Employees</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Travel Vision Vue CMS Admin Application'
    }
  }
}
</script>
