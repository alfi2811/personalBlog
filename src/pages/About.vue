<template>
  <Layout>    
    <div style="width: 55%" class="about mx-auto mt-5">
      <div class="about-photo">      
          <g-image src="../../static/images/profil.png"  class="about-img mx-auto" />            
        
        <!-- <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img> -->
      </div>
      <div class="about-text mt-3" style="line-height: 40px;">        
        <b style="font-size: 30px;">Im Alfi Syahri</b>, <span style="font-size: 25px;"> Front-end Developer that ever gone to Silicon Valley and HQ Google. (Sombong dikit boleh -Kata Seseorang) </span>
      </div>
    </div>
    
    
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  },
  data(){
    return {
     
    }
  }
}
</script>

<style >
  .about-photo{
    display: flex;    
  }
  .about-img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  .about-text{
    text-align: center;
    color: white;
  }

  .about {
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