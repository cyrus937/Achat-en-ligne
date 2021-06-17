import {Article} from Article;

export class Panier{
    
    constructor(idArticle, quantite){
        this.idArticle = idArticle;
        this.quantite = quantite;
    }

    Ajouter(article){
        this.articles.push(article); 
        Afficher();
    }

    Supprimer(article){
        articles = articles.filter(art => art.identifiant !== article.identifiant)
    }

}

function Afficher(){
    let elt = document.getElementById('contenu');
    elt.innerHTML = ""
    for(let article of this.articles){
        elt.innerHTML += "<td>"+
        "<div class=\"card\">"+
            "<div class=\"img\">"+
                "<img src=\""+article.image+"\" alt=\""+article.nom+"\">"+
            "</div>"+
            "<div class=\"text\">"+
                "<div>"+
                    "<button type=\"button\" class=\"btn btn-danger\">Danger</button>"+
                "</div>"+
            "</div>"+
        "</div>"+
    "</td>";
    }
}