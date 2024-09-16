<template>
  <div style="margin-bottom: 80px;">
    <h1>Bonjour !</h1>

    <div class="paragraph">
      <div>
        Je m'appelle <strong>Axel Taillat</strong>, je suis un étudiant/développeur spécialisé dans le jeu vidéo au niveau bac+3.<br/>
        Je suis un développeur de jeux passionné et j'aime discuter, concevoir et développer des applications et des jeux en général.
      </div>

      <div style="margin-top: 20px;">
        J'ai réalisé et suis en cours de réalisations de plusieurs  <router-link to="/game-projects">jeux</router-link> ainsi que divers autres <router-link to="/other-projects">projets</router-link>, et ai pu participer au développement de projets dans <router-link to="/resume">quelques entreprises</router-link>.<br/>
      </div>

      <div style="margin-top: 40px;">
        Je suis actuellement à la recherche d'une <strong>alternance</strong> de 2 ans pour continuer mes études en Master.<br/>
        Vous pouvez me joindre via mail à l'adresse <a href="mailto:axeltailla@gmail.com">axeltailla@gmail.com</a> ou dans la section <router-link to="/contact">contact</router-link>.
      </div>
    </div>

    <div class="photo">
      <img src="img/icon300.png" alt="Avatar d'Axel" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }
}

</style>