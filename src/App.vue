<template>
  <div id="app">
    <header>
      <nav>
        <ul>        
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Home'}" exact>
                <img class="logo" src="./assets/build-a-bot-logo.png" alt="build">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Build'}" exact>
                Build-Bot
              </router-link>
            </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
    
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
main {
  margin: auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: black;
}
.router-link-active {
  color: green;
}
</style>
