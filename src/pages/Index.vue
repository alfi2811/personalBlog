<template class="bg-index">  
  <Layout>   
  <div class="all" style="margin-top: 180px;">
    <div class="flex-container">        
      <h1 class="flex-item">Alfi Nasution's Blog</h1>                    
    </div>
    <div class="line">
    </div>
    <p class="text-line">Trying to be Frontend Developer and loves about technology</p>
    <!-- <div class="container__home mx-auto">
      <h1 class="home__hello">Hii....</h1>
      <h2 class="home__name">Welcome to My Blog</h2>
      <p class="home__descjob">Im trying to be Frontend Developer and like write something about Technology</p>

      <p class="home__description">
        If you want to know more about me and front-end things.        
        You can Find me <br> on
        <a
          href="https://github.com/mfaridzia"
          target="_blank"
        >Github,</a>
        <a href="https://twitter.com/Muhfaridzia" target="_blank">Twitter,</a>
        <a href="https://www.facebook.com/MuhFaridZia" target="_blank">Facebook</a> and
        <a href="https://www.linkedin.com/in/muhfaridzia/" target="_blank">LinkedIn</a>
      </p>    
    </div> -->
  </div> 
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (perPage: 2, page: $page) @paginate {
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
  },  
};
</script>

<style>
 .post-list {
   margin-bottom: 0px;
 }
  .flex-item{
    text-align: center;
    color: rgb(238, 255, 0);
    font-size: 60px;
  }
  
  .text-line{
    color: white;
    text-align: center;
    margin-top: 10px;
    font-size: 23px;
  }


 .text{
   padding-top: 0.5rem
 }

 /* .card-body {
   padding: 0
 }

 .container__home{
   margin-top: 100px;
   width: 80%;
 } */
 .line {
   width: 100%;
   height: 10px;
   background-color: rgb(238, 255, 0);
 }
/* 
 .home__descjob{
   font-size: 18px;
 }   */
 .all {
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
</style>