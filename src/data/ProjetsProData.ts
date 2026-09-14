import ProjectData from '@/data/ProjectData.ts'

export default [
  new ProjectData("Interim Sodimas", "Interim Sodimas", "img/projects/Sodimas-1.png", `
    <div class="paragraph">
      En 2025, j'ai été sollicité pour effectuer une mission d'intérim chez <strong>Sodimas</strong>.</br>
      C'est cette fois le bureau d'études mécaniques qui m'a recruté pour une durée initiale de trois mois, mission qui s'est achevée au bout de presque un an.
    </div>

    <div class="paragraph">
      <strong>Sodimas</strong> est une entreprise de conception, fabrication, distribution d'ascenseurs complets et de composants pour ascenseurs.
    </div>

    <div class="paragraph">
      Mon travail consistait principalement à développer de nouveaux outils sur des applications existantes, utilisées par le reste du bureau d'études.</br>
    </div>

    <div class="paragraph">
      J'ai d'abord été assigné à l'application appelée <strong>Note de Calcul</strong>.</br>
      Voici des tâches que j'ai pu accomplir en travaillant sur cette application :
      <ul>
        <li>Conversion de tous les projets de l'application de VB en C#</li>
        <li>Ajout d'un environnement de développement, en plus des environnements de production et de test</li>
        <li>Mise à jour de l'historisation de données de l'application</li>
        <li>Ajout d'une fenêtre de comparaison des valeurs entre différents environnements</li>
        <li>Mise à jour du webservice en fonction de l'environnement</li>
        <li>Ajout d'une fenêtre de détails d'erreur, pour le détail des écarts pour un test de référence</li>
        <li>Ajout de détails par table, d'une modification, dans un groupe de modification</li>
        <li>Ajout d'une possibilité de modifier les « groupes de modifications » d'une modification</li>
      </ul>
    </div>

    <div class="paragraph">
      J'ai ensuite travaillé sur l'application de <strong>plan automatique</strong> d'ascenseurs :</br>
      <ul>
        <li>Gestion des blocs utilisés par le plan automatique</li>
        <li>Ajout d'un mode debug au plan auto</li>
        <li>Ajout d'un choix de dossier spécifique où ranger les blocs, et modification de la logique du code en conséquence</li>
        <li>Ajout d'une arborescence par folio</li>
        <li>Ajout d'un test en console</li>
        <li>Ajout d'un système de configuration personnalisé par utilisateur</li>
      </ul>
    </div>

    <div class="paragraph">
      Mon travail s'est enfin porté sur une nouvelle application de <strong>gestion des imports</strong> pour l'utilisation d'<strong>AutoCAD</strong> :</br>
      <ul>
        <li>Création de l'application avec les différents imports possibles</li>
        <li>Ajout d'une section pour les testeurs avec des imports différents de la production</li>
        <li>Ajout d'une publication des bundles modifiés, différents pour prod et test</li>
        <li>Ajout d'une section admin pour empêcher n'importe qui de publier</li>
        <li>Mise à jour de la publication pour une publication plus précise sur les bundles choisis uniquement</li>
        <li>Ajout d'un archivage par version des bundles</li>
      </ul>
    </div>

  `, "#1606c1", false, true),


  new ProjectData("Stage Sodimas", "Stage Sodimas", "img/projects/Sodimas-2.png", `
    <div class="paragraph">
      <strong>Sodimas</strong> est une entreprise de conception, fabrication, distribution d'ascenseurs complets et de composants pour ascenseurs.
    </div>
    
    <div class="paragraph">       
      En 2024, j'ai pu réaliser un stage dans l'entreprise <strong>Sodimas</strong>, située à Pont-de-l'Isère, près de Valence, dans la Drôme.<br/>
      Mon stage a duré trois mois au sein du service R&D électrique de l'entreprise.<br/>
      J'avais pour mission de mettre à jour une application obsolète ainsi que développer un système de <strong>prédestination d'ascenseur</strong> et de <strong>positionnement prédictif</strong> dans cette nouvelle application.
    </div>

    <div class="paragraph">       
      La <strong>prédestination d'ascenseurs</strong> est un système qui permet aux usagers de sélectionner leur étage de destination avant d'entrer dans la cabine, via des terminaux situés aux paliers.<br/>
      Contrairement aux systèmes traditionnels où l'on appelle l'ascenseur par sens de marche (haut/bas), ce système affecte chaque passager à un ascenseur spécifique en fonction de sa destination et de l'optimisation du trafic global.<br/>
      Ce système est le plus performant dans un environnement avec plusieurs ascenseurs et beaucoup de trafic.<br/> 
      Il permet une réduction drastique du temps d'attente et de trajet.
    </div>

    <div class="paragraph">       
      Le <strong>positionnement prédictif</strong> des ascenseurs est un système qui essaie d'anticiper où le prochain appel d'ascenseur va probablement arriver, et positionne la ou les cabines à l'avance à des étages stratégiques pendant les périodes creuses.<br/>
      Le système enregistre et actualise les habitudes de trafic et les tendances observées (heures de pointe (ex: afflux le matin), étages les plus sollicités (ex: cafétéria le midi), jours de la semaine, etc.), ces données servent à construire un modèle de probabilité indiquant quel étage a le plus de chances de générer un appel dans les minutes qui suivent.<br/>
      Quand plusieurs ascenseurs sont disponibles et inactifs, le système peut répartir chaque cabine vers un étage "probable" différent, de façon à couvrir un maximum de zones du bâtiment.<br/>
      Le but est de réduire le temps d'attente moyen perçu par les usagers, en évitant qu'une cabine soit "mal placée" au moment où un appel survient.
    </div>
  `, "#1ca1e2", true, false),

  new ProjectData("IP-Grade", "IP-Grade", "img/projects/IP-Garde.png", `
    <div class="paragraph">
      En 2023 j'ai pu effectuer un stage de 2 mois chez <strong>IP-Garde</strong>.<br/>
      J'y ai appris les bases du développement d'application en entreprises.
    </div>

    <div class="paragraph">
      J'y ai fait mes débuts en C# et .NET, tout en découvrant de nouveaux outils comme WordPress.
    </div>

    <div class="paragraph">
      Parmi les projets auxquels j'ai pu participer, le plus marquant pour moi a été le développement d'une application .NET.</br>
      Il fallait y saisir un numéro de SIRET et l'application récupérait les données via une API, organisait les données importantes, puis les affichait à l'utilisateur.<br/>
      Le but était de connaître la situation ayant entraîné d'autres entreprises vers un redressement judiciaire.
    </div>
  `),
];
