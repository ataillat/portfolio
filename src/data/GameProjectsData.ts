import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("Rise Beyond", "Rise Beyond", "img/projects/RiseBeyond-1.png", `
        <div class="paragraph">
            <strong>Rise Beyond</strong> est un jeu mobile né d'un projet étudiant de fin d'études, développé par une quinzaine de personnes. 
            C'est un projet qui nous tient particulièrement à cœur, donc son développement se poursuit encore aujourd'hui, même s'il tourne au ralenti ces derniers temps.<br/>
        </div>

        <div class="paragraph">
            <strong>SYNOPSIS :</strong><br/>
            Incarnez un adolescent qui va rendre une visite surprise à son oncle, mais tout ne se passe pas comme prévu. Lorsque vous arrivez chez lui, son appartement est dérangé, et il n’est plus là.<br/>
            Explorez le Multivers, résolvez des puzzles, et découvrez la réelle identité de votre oncle !<br/>
        </div>

        <div class="paragraph center">
            <iframe class="youtube" src="img/projects/Trailer-RiseBeyond.mp4" frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="paragraph">
            <strong>Aperçu :</strong>
            <ul>
                <li><strong>Titre :</strong> RISE BEYOND</li>
                <li><strong>Plateforme :</strong> Mobile Android</li>
                <li><strong>Genre :</strong> Casual 3D Isometric Puzzle Room</li>
                <li><strong>Cible :</strong> Casual & Mid-core (de 15 à 25 ans)</li>
                <li><strong>Moteur de jeu :</strong> Unity 2022.3</li>
                <li><strong>Joueur :</strong> Solo offline</li>
                <li><strong>Langage :</strong> Français et Anglais</li>
            </ul>
        </div>

        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/RiseBeyond-2.gif" alt="RiseBeyond-2 Screenshot" />
            <img class="pc-screenshot" src="img/projects/RiseBeyond-3.gif" alt="RiseBeyond-3 Screenshot" />
            <img class="pc-screenshot" src="img/projects/RiseBeyond-4.gif" alt="RiseBeyond-4 Screenshot" />
        </div>
    `, "#304aab", false, true),

    new ProjectData("Démineur", "Démineur", "img/projects/Demineur-3.png", `
        <div class="paragraph">
            Un jeu de <strong>Démineur</strong> réalisé lors de ma première découverte de <strong>Unity</strong>.<br/>
        </div>

        <div class="paragraph">
            Toutes les cases ont été recréées et personnalisées pour un jeu plus chaleureux.<br/>
            Utilisation de Unity <strong>Tilemap</strong> pour la disposition des cases.<br/>
        </div>
    
        <div class="notice">
            Le code source est disponible sur <a href="https://github.com/ataillat/Minesweeper" target="_blank">GitHub</a>.
        </div>
    
        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/Demineur-5.png" alt="Demineur-5 Screenshot" />
            <img class="pc-screenshot" src="img/projects/Demineur-6.png" alt="Demineur-6 Screenshot" />
            <img class="pc-screenshot" src="img/projects/Demineur-8.png" alt="Demineur-8 Screenshot" />
            <img class="pc-screenshot" src="img/projects/Demineur-7.png" alt="Demineur-7 Screenshot" />
            <img class="pc-screenshot" src="img/projects/Demineur-4.png" alt="Demineur-4 Screenshot" />
            <img class="pc-screenshot" src="img/projects/Demineur-1.png" alt="Demineur-1 Screenshot" />
            <img class="pc-screenshot" src="img/projects/Demineur-2.png" alt="Demineur-2 Screenshot" />
            <img class="pc-screenshot" src="img/projects/Demineur-3.png" alt="Demineur-3 Screenshot" />
        </div>
    `, "#3aab30"),

    new ProjectData("Réalité Ensorcelée", "Réalité Ensorcelée", "img/projects/realite-fracture.png", `
        <div class="paragraph">
            <strong>Réalité Ensorcelée</strong> est un jeu en VR développé à quatre.
            C'est un projet qui avait pour but de nous faire découvrir les différentes interactions possibles en VR et de nous familiariser avec ce nouveau genre.<br/>
        </div>

        <div class="paragraph">
            Le jeu se présente sous la forme d'une série d'énigmes représentées par plusieurs pièces qu'il faut franchir une par une.<br/>
            <br/>
        </div>
        
        <div class="notice">
            Le jeu est disponible sur <a href="https://ataillat.itch.io/ralit-ensorcele" target="_blank">itch.io</a>.
        </div>

        <div class="paragraph center">
            <iframe class="youtube" src="img/projects/Gameplay réalité ensorcelé.mp4" frameborder="0" allowfullscreen></iframe>
        </div>
    `, "#ab3030"),

    new ProjectData("PokéLike", "PokéLike", "img/projects/PokeLike-1.png", `
        <div class="paragraph">
            <strong>PokéLike</strong> est un jeu court grandement inspiré de <strong>Pokémon</strong>.<br/>
        </div>

        <div class="paragraph">
            Le jeu a été réalisé à l'aide de <strong>SFM</strong>L.<br/>
            Les éléments du menu sont personnalisés et la carte a été créée à l'aide de <strong>Tiled</strong>.<br/>
            Un système de combats simplifié a été réalisé.<br/>
        </div>
        
        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/PokeLike-1.png" alt="PokeLike-1 Screenshot" />
            <img class="pc-screenshot" src="img/projects/PokeLike-2.png" alt="PokeLike-2 Screenshot" />
            <img class="pc-screenshot" src="img/projects/PokeLike-3.png" alt="PokeLike-3 Screenshot" />
            <img class="pc-screenshot" src="img/projects/PokeLike-4.png" alt="PokeLike-4 Screenshot" />
            <img class="pc-screenshot" src="img/projects/PokeLike-5.png" alt="PokeLike-5 Screenshot" />
            <img class="pc-screenshot" src="img/projects/PokeLike-6.png" alt="PokeLike-6 Screenshot" />
        </div>
        `, "#5a78af"),

    new ProjectData("Morpion en ligne", "Morpion en ligne", "img/projects/Morpion-1.png", `
        <div class="paragraph">
            C'est un jeu de <strong>morpion</strong> classique, en ligne.<br/>
            Il m'a permis d'apprendre à utiliser les threads et les sockets pour créer un mode multijoueur en ligne fluide.<br/>
            Un serveur web a été ajouté pour conserver l'historique des coups en temps réel.<br/>
        </div>
        
        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/Morpion-1.png" alt="Morpion-1 Screenshot" />
            <img class="pc-screenshot" src="img/projects/Morpion-2.png" alt="Morpion-2 Screenshot" />
            <img class="pc-screenshot" src="img/projects/Morpion-3.png" alt="Morpion-3 Screenshot" />
        </div>
    `, "#23bd69"),

    new ProjectData("bitsy", "Il n'y a pas de jeu !", "img/projects/bitsy-1.png", `
        <div class="paragraph">
            <strong>Il n'y a pas de jeu !</strong> est ma toute première expérience de création de jeu.<br/>
            Le jeu est réalisé sur <strong>bitsy</strong> pour une première approche.<br/>
        </div>
        
        <div class="paragraph">
            Il n'y a pas de jeu ! est inspiré de l'œuvre : <strong>There Is No Game</strong>.<br/>
            Le but du jeu est d'embêter au plus le narrateur pour pouvoir progresser dans ce qui est censé ne pas être un jeu.<br/>
        </div>

        <div class="paragraph">
            <div class="notice">
                Jeu disponible sur <a href="https://ataillat.itch.io/il-ny-a-pas-de-jeu" target="_blank">itch.io</a>.
            </div>
        </div>
    
        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/bitsy-1.png" alt="bitsy-1 Screenshot" />
            <img class="pc-screenshot" src="img/projects/bitsy-2.png" alt="bitsy-2 Screenshot" />
            <img class="pc-screenshot" src="img/projects/bitsy-3.png" alt="bitsy-3 Screenshot" />
        </div>
    `, "#e48246")
];
