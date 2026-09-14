<template>
  <div>
    <h1>CV</h1>

    <div class="paragraph">
      Je m'appelle <strong>Axel Taillat</strong>,
      <br />Je suis passionné par la création de jeux vidéo.
      <br />
      <br />Je suis actuellement à la recherche d'un <strong>CDI</strong> ou <strong>CDD</strong>.
      <br />Si mon profil vous intéresse, n'hésitez pas à <router-link to="/contact">me contacter</router-link>.
      <br />

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/CV%202026%20-%20Axel%20Taillat.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/TAILLAT-Axel.png" alt="Photo of John" />
    </div>

    <div style="clear:both"></div>

    <!-- -->
    <div class="full-content">
      <h2>Expériences</h2>

      <h3>Jeux vidéo</h3>

      <h4>Développeur jeu mobile</h4>
      <div>WIP, Développement de Rise Beyond</div>
      <div class="tech-stack">Unity, C#, travail en équipe</div>

      <h4>Développeur Java</h4>
      <div>2021, Développement du jeu de société <strong>Le Labyrinthe</strong></div>
      <div class="tech-stack">Java, travail en équipe</div>

      <h3>Autres développements</h3>

      <h4>Développeur d’applications C# chez Sodimas</h4>
      <div>2025/2026, Mission d'intérim pour le développement d'outils et d'applications</div>
      <div class="tech-stack">C#, travail en entreprise</div>

      <h4>Développeur C++ chez Sodimas</h4>
      <div>2024, Stage de développement sur un algorithme de prédestination d'une batterie d'ascenseurs</div>
      <div class="tech-stack">C++, travail en entreprise</div>

      <h4>Développeur React, JavaScript chez G-Studio</h4>
      <div>2023, Mission bénévole de développement d’un site internet marchand</div>
      <div class="tech-stack">React, JavaScript, travail en équipe</div>

      <h4>Développeur C# et .NET chez IP-Garde</h4>
      <div>2022, Stage de développement et découverte d'entreprise</div>
      <div class="tech-stack">C#, .NET, travail en entreprise</div>


      <h2>Formations</h2>

      <h4>2022-2024, Bachelor Développeur Informatique, option jeu vidéo</h4>
      <div>Gaming Campus, G-TECH, Lyon</div>

      <h4>2020-2022, DUT Informatique</h4>
      <div>IUT de Valence</div>

      <h4>Baccalauréat S SI option informatique</h4>
      <div>Lycée Camille Vernet, Valence</div>


      <h2>Compétences</h2>

      <h3>Langages</h3>
      <h4>Programmation :</h4>
      <div>C#, C++, C, Python, Java, SQL</div>
      <h4>Développement web :</h4>
      <div>HTML/CSS, PHP, JavaScript</div>

      <h3>Outils</h3>
      <h4>Moteurs :</h4>
      <div>Unity, Unreal Engine</div>
      <h4>Systèmes :</h4>
      <div>Windows, Linux</div>
      <h4>Base de données :</h4>
      <div>MySQL, PostgreSQL, SQL serveur</div>
      <h4>Organisation de projets :</h4>
      <div>GitHub, GitLab</div>

      <h3>Gestion de projet</h3>
      <h4>Comptabilité générale :</h4>
      <div>Création d'entreprise</div>
      <h4>Planification :</h4>
      <div>Diagramme de Gantt</div>

      <h3>Langues</h3>
      <div class="skill-set">
        <SkillRate name="Français (maternelle)" :rate="5" />
        <SkillRate name="Anglais (B2)" :rate="4" />
        <SkillRate name="Espagnol (B1)" :rate="2" />
        <SkillRate name="Japonais (apprentissage)" :rate="1" />
      </div>
      <div style="clear:both" />


      <h2>À part ça ...</h2>
      <div>
        <h3>J'❤️ Monster Hunter</h3>
        <div>Je suis fan inconditionnel de la saga Monster Hunter.</div>

        <h3>J'🧡 Magic the Gathering</h3>
        <div>Je joue à des jeux de cartes stratégiques.</div>

        <h3>J'💛 le Basket</h3>
        <div>J'aime un peu tous les sports, mais ai une préférence pour le basket.</div>

        <h3>J'💚 les jeux de société</h3>
        <div>Qu'ils soient de plateaux, de cartes ou de dés, je suis chaud pour une partie.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.paragraph a {
  color: #f29d0d;
  opacity: 1;
}

.paragraph a:hover {
  text-decoration: underline;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>
