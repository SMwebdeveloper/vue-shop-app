<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">VUE-CLI</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link
                  class="navbar-link"
                  :title="link.title"
                  :to="link.url"
                  >{{ link.title }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Home", url: "/" },
        { title: "Shop", url: "/shop" },
      ],
    };
  },
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

a {
  text-decoration: none;
}

input,
textarea,
select button {
  border: 1px solid #ccc;
}

ul li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

.wrapper-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.wrapper-content.wrapper-content--fixed {
  margin-top: 80px;
}

.container {
  width: 100%;
  flex: 0 0 auto;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 20px 0;
  background-color: #ffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
}

.navbar.logo {
  font-size: 24px;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar-list {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar-item {
  margin-right: 30px;
}
.navbar-item:last-child {
  margin-right: 0;
}
.navbar-link {
  display: block;
  color: #aaaad5;
}
.navbar-link.active {
  color: #4343aa;
}
.navbar-link.router-link-exact-active {
  color: #5247e7;
}
/* link */
.link{
  cursor:pointer;
  border-bottom:1px solid #4343aa;
  color: #4343aa;
}
.link.linkWhite{
  border-bottom: 1px solid #fff;
  color: #fff;
}
.link.linkFalse{
  border-bottom: 1px solid #b53f3f;
  color: #b53f3f;
}
.link.linkTrue{
  border-bottom: 1px solid #7bd782;
  color: #7bd782;
}

/* title */
.title{
  margin-bottom:20px ;
  color: #333333;
  font-size: 30px;
  font-weight: 700;
}
</style>
