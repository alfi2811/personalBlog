<template>
  <Layout>    
    <div class="post-list">      
      <p style="color: white; font-size: 30px;">List Blog</p>
      <div v-for="post in $page.posts.edges" v-bind:key="post">  
        <b-card class="bg-card">
          <div class="row no-gutters" >
            <div class="col-md-4 col-sm">
              <g-image :src="post.node.image" class="img-blog" alt="ha" fit="contain" />             
            </div>
            <div class="col-md-8 col-sm-12 pl-1 text">
              <b-card-text  v-html="post.node.date" class="mb-0"></b-card-text>
              <b-card-title  v-html="post.node.title" >              
              </b-card-title>            
              <g-link :to="post.node.path" class="read">Read More...</g-link>                        
            </div>
          </div>
        </b-card>
        <br>

        <!-- <g-image :src="post.node.image" alt="ha" />      
        <hr class="line" />
        <p class="date" v-html="post.node.date" />
        <h1 class="title" v-html="post.node.title" />
        <p class="description" v-html="post.node.description" />
        <b> {{post.node.timeToRead}} min read </b>
        <g-link :to="post.node.path" class="read">Read More...</g-link> -->
            
      </div>          
      
    </div>
    <div class="col bt" style="background-color: white;">
      <Pager :info="$page.posts.pageInfo" />
    </div>
    <br>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        title
        timeToRead
        date (format: "D MMMM YYYY")
        image (width: 200, height: 140, blur: 10)
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
export default {
  components: {
    Pager
  }
};
</script>

<style>
 .post-list {
   margin-bottom: 0px;
 }

 .text{
   padding-top: 0.5rem
 }
 .text p {
   font-size: 14px;
 }

 .bg-card {
   background-color: white;
 }

 .card-body {
   padding: 0;   
 } 
 .bt{
   bottom: 0;
 }
 .bg-card, .bt {
   animation: transitionIn 1.5s;
 }
  @keyframes transitionIn {
    from {
      opacity: 0;
      transform: translateY(10px)
      /* transform: rotateX(-10deg); */
    }
    to {
      opacity: 1;
      transform: translateY(0px);

    }
  }
  @media screen and (max-width: 769px) {
    .g-image--loaded {
      display: none;
    }
    .text p {    
      font-size: 12px;
    }
    .text h4 {
      font-size: 1.3rem;
    }
    .read {
      font-size: 15px;
    }

  }
</style>