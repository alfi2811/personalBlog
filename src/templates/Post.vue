<template>
  <Layout>
    <!-- <div v-html="$page.post.content"/>
    <div v-html="$page.post.title"/> -->
    <g-link to="/blog" class="link">  &larr; Go Back</g-link>        
    <div class="content mt-2 card">
      <div class="post-title">
        <center>
        <h1>{{$page.post.title}}</h1>
          <p class="post-date"> {{ $page.post.date}} | {{$page.post.timeToRead}} min read 
        </p>
        </center>
      </div>
      <br>
      <div class="post-content">
        <p v-html="$page.post.content" />
      </div>
    </div>
    <br>
    <!-- <g-image :src="$page.post.image" /> -->
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "D MMMM YYYY")
    timeToRead    
    content    
    path
  }  
}
</page-query>

<script>
export default {        
  metaInfo() {
    return {
    
      title: this.$page.post.title
    };
  }
};
</script>

<style>
  .link{    
    color: rgb(221, 203, 42);
  } 
  .link:hover {
    color: white;
    text-decoration: none;
  } 
  .content {    
    padding: 20px;
  }
  .post-content, .post-date, .post-title {
    animation: transitionIn 1s;
  }

  @keyframes transitionIn {
    from {
      opacity: 0;
      transform: translateY(10px)
    }
    to {
      opacity: 1;
      transform: translateY(0px)

    }
  }
</style>