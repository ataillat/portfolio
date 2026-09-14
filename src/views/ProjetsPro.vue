<template>
  <div>
    <h1>Projets professionnels en entreprise</h1>

    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import projetsProData from "@/data/ProjetsProData.ts";

export default Vue.extend({
  name: "ProjetsPro",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: projetsProData,
    };
  },
});
</script>
