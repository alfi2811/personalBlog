<template>
  <div class="layout">    
    <header class="header">
      <!-- <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong> -->
      <nav class="nav mx-auto">
        <g-link class="nav__link nav-link mr-3" to="/">Home</g-link>        
        <g-link class="nav__link nav-link mr-3" to="/blog/">Blog</g-link>
        <g-link class="nav__link nav-link" to="/about/">About</g-link>
      </nav>
    </header>
    
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  background-image: url("../../static/images/bg.jpg");
  background-size: 100% 100%; 
  background-attachment: fixed;    
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
  color: white;
  font-size: 18px;
}

.nav__link:hover{
  color: yellow
}

</style>




