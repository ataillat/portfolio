<template>
  <div>
    <h1>Autres Projets</h1>

    <div style="margin-bottom: 30px;">
      Et voici quelques autres projets que j'ai fait ou auxquelles j'ai grandement contribué.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
