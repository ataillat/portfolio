<template>
  <div style="margin-bottom: 80px;">
    <h1>Bonjour !</h1>

    <div class="paragraph">
      <div>
        Je m'appelle <strong>Axel Taillat</strong>, je suis un développeur spécialisé dans les applications et le jeu vidéo.<br/>
        Je suis un joueur et développeur passionné, créatif et j'aime discuter, concevoir et développer des applications et des jeux.
      </div>

      <div style="margin-top: 20px;">
        J'ai réalisé plusieurs <router-link to="/game-projects">jeux</router-link> ainsi que divers autres projets, et ai pu participer au développement de projets dans <router-link to="/resume">quelques entreprises</router-link>.<br/>
      </div>

      <div style="margin-top: 40px;">
        Je suis actuellement à la recherche d'un travail (CDI ou CDD), pas forcément dans le jeu vidéo mais ce serait un plus.<br/>
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

.paragraph a {
  color: #f29d0d;
  opacity: 1;
}

.paragraph a:hover {
  text-decoration: underline;
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
