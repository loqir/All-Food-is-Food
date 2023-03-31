<template>
    <header>   
    <main>
    <TheWelcome />
     <!-- adding the DeadSimpleChat Embed code to add chat room to Vue App-->
     <iframe src="https://deadsimplechat.com/NxfL9wdPM" width="400px" height="600px"></iframe>
    </main>
    </header>
  </template>

<script>
    import Sidebar2 from "@/components/SideBar2.vue";
    export default {
      name: "ChatPage",
      components: { Sidebar2 }
    };
</script>
<style scoped>
header {
  line-height: 1.5;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>