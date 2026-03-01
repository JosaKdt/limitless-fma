export type BlogCategory = "offers" | "leads" | "models"
export type BlogPersona =
  | "freelance"
  | "createur"
  | "ecommerce"
  | "coach"
  | "agence"
  | "commercant"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: BlogCategory
  persona: BlogPersona
  publishedAt: string
  readTime: number
  author: string
}

export const categories: { value: BlogCategory; label: string }[] = [
  { value: "offers", label: "Offres" },
  { value: "leads", label: "Leads" },
  { value: "models", label: "Models" },
]

export const personaLabels: Record<BlogPersona, string> = {
  freelance: "Freelance",
  createur: "Createur",
  ecommerce: "E-commerce",
  coach: "Coach",
  agence: "Agence",
  commercant: "Commercant",
}

export const blogPosts: BlogPost[] = [
  {
    slug: "comment-creer-offre-irresistible",
    title: "Comment creer une offre irresistible (methode 100M Offers)",
    excerpt:
      "Ton offre est la fondation de ton business. Voici comment la structurer pour que tes prospects ne puissent pas dire non.",
    content: `## Pourquoi ton offre est tout

La plupart des entrepreneurs se concentrent sur le marketing, les reseaux sociaux, la publicite. Mais si ton offre est mediocre, aucun marketing au monde ne pourra la sauver.



## Les 4 composantes d'une offre irresistible

### 1. Le Dream Outcome (Resultat Reve)
Qu'est-ce que ton client veut VRAIMENT ? Pas ton produit ou service, mais le resultat final. L'etat desire. La transformation.

### 2. La Perceived Likelihood of Achievement (Probabilite Percue)
Est-ce que ton prospect croit qu'il va reellement obtenir le resultat ? Temoignages, garanties, preuves sociales -- tout ce qui augmente la confiance.

### 3. Le Time Delay (Delai)
Combien de temps avant d'obtenir le resultat ? Plus c'est rapide, plus la valeur percue augmente. "En 30 jours" bat "en 6 mois".

### 4. L'Effort & Sacrifice
Combien d'effort ton client doit fournir ? Moins c'est mieux. "Done-for-you" bat "do-it-yourself" en valeur percue.

## La formule de valeur

**Valeur = (Dream Outcome x Perceived Likelihood) / (Time Delay x Effort & Sacrifice)**

Pour augmenter la valeur de ton offre, tu as 4 leviers :
- Augmenter le resultat reve
- Augmenter la probabilite percue
- Reduire le delai
- Reduire l'effort requis

## Application pratique

1. **Liste 10 problemes** que ton client ideal rencontre
2. **Pour chaque probleme**, trouve une solution
3. **Package ces solutions** en une offre coherente
4. **Nomme-la** de maniere impactante
5. **Prix-la** a 10x la valeur que tu delivres

## Erreur classique

Ne sous-estime jamais le prix. Un prix bas n'est pas un avantage -- c'est un signal de faible valeur. Si ton offre est vraiment irresistible, le prix est secondaire.

---

**Prochaine etape** : Reserve ton diagnostic gratuit et on construit ton offre ensemble.`,
    category: "offers",
    persona: "freelance",
    publishedAt: "2026-02-15",
    readTime: 8,
    author: "Folawe Milarepa AGLI",
  },
  {
    slug: "systeme-generation-leads-francophone",
    title: "Le systeme de generation de leads pour entrepreneurs francophones",
    excerpt:
      "Arrete de chercher des clients. Construis un systeme qui les attire automatiquement.",
    content: `## Le probleme avec la prospection traditionnelle

Tu passes des heures a envoyer des DM, a commenter des posts, a "networker". Et les resultats sont aleatoires. Un jour tu as un prospect, le lendemain plus rien.

Ce n'est pas de la generation de leads. C'est de l'esperance.

## Le framework LIMITLESS pour les leads

### Etape 1 : Identifie ton ICP (Ideal Customer Profile)
Avant de generer des leads, sais-tu exactement qui tu veux attirer ? Pas "tout le monde". Une personne precise avec un probleme precis.

### Etape 2 : Cree un Lead Magnet irresistible
Un contenu gratuit qui resout un petit probleme de ton ICP. L'objectif : demontrer ta competence et collecter un contact.

Exemples :
- Checklist "Les 10 erreurs qui tuent ton offre"
- Template "Script de vente en 5 etapes"
- Mini-formation video "Comment structurer ton prix"

### Etape 3 : Distribue via les bons canaux
Pas besoin d'etre partout. Choisis 1-2 canaux et maitrise-les :
- **WhatsApp** : Groupes, statuts, messages directs
- **Instagram** : Reels educatifs, stories a valeur ajoutee
- **LinkedIn** : Articles, posts, DM personalises

### Etape 4 : Nurture avec du contenu
Tout le monde ne va pas acheter immediatement. Cree un systeme de contenu qui garde le contact chaud : newsletter, groupe WhatsApp, blog.

### Etape 5 : Convertis avec un appel
Le but ultime : amener le lead qualifie en appel de vente. Pas de forcing, juste une conversation structuree.

## Les metriques cles

- **Taux de conversion Lead Magnet** : Vise 20%+
- **Taux de reponse DM** : Vise 30%+
- **Taux de show-up appel** : Vise 70%+
- **Taux de closing** : Vise 25%+

## Le secret que personne ne dit

La generation de leads n'est pas un evenement. C'est un **systeme quotidien**. 30 minutes par jour, chaque jour. Les resultats viennent de la consistance, pas de l'intensite.

---

**Action** : Telecharge notre template de systeme de leads et commence des aujourd'hui.`,
    category: "leads",
    persona: "coach",
    publishedAt: "2026-02-10",
    readTime: 10,
    author: "Folawe Milarepa AGLI",
  },
  {
    slug: "choisir-business-model-qui-scale",
    title: "Comment choisir le business model qui scale",
    excerpt:
      "Tous les business models ne se valent pas. Voici comment choisir celui qui te permettra de croitre sans t'epuiser.",
    content: `## Le piege du temps-contre-argent

La majorite des entrepreneurs francophones sont coinces dans le modele "temps contre argent". Tu echanges tes heures contre de l'argent. Le probleme ? Tes heures sont limitees.

Pour scaler, il faut decoller tes revenus de ton temps.

## Les 4 business models pour scaler

### 1. Le Modele Service (marge haute, echelle moyenne)
Tu vends ton expertise sous forme de service. Coaching, consulting, freelance premium.

**Comment scaler** : Packager ton service, augmenter tes prix, deleguer l'execution.

### 2. Le Modele Produit (marge variable, echelle haute)
Tu crees un produit physique ou digital. E-commerce, templates, outils.

**Comment scaler** : Automatiser la production, optimiser le marketing, diversifier les canaux.

### 3. Le Modele Formation (marge tres haute, echelle tres haute)
Tu transformes ton expertise en formation en ligne. Cours, programmes, masterclass.

**Comment scaler** : Cree une fois, vends indefiniment. Le saint graal du scaling.

### 4. Le Modele Hybride (le plus puissant)
Tu combines service + formation. Coaching groupe + contenu premium.

**Comment scaler** : Le service genere du cash, la formation genere du scale.

## Comment choisir

Pose-toi ces questions :
1. **Ou est ton expertise ?** Vends ce que tu sais faire.
2. **Quel est ton objectif de revenus ?** Certains modeles plafonnent plus vite.
3. **Combien de temps veux-tu travailler ?** Le service demande plus de temps.
4. **Quel est ton capital de depart ?** Le produit demande un investissement initial.

## La regle d'or

**Commence par le service, migre vers la formation, automatise avec le produit.** C'est le chemin le plus sur pour scaler progressivement.

## Erreur fatale

Ne saute pas d'etapes. Si tu lances une formation avant d'avoir des resultats clients en service, tu n'auras ni credibilite ni temoignages. Le service forge la preuve.

---

**Prochain pas** : On analyse ton business model actuel pendant ton diagnostic gratuit.`,
    category: "models",
    persona: "ecommerce",
    publishedAt: "2026-02-05",
    readTime: 7,
    author: "Folawe Milarepa AGLI",
  },
  {
    slug: "pricing-erreurs-entrepreneurs",
    title: "5 erreurs de pricing qui tuent ton business",
    excerpt:
      "Tu perds de l'argent a chaque vente ? Voici les 5 erreurs de pricing les plus courantes et comment les corriger.",
    content: `## Le prix est un signal

Ton prix communique la valeur de ton offre avant meme que le prospect ne la consomme. Un prix trop bas crie "mediocre". Un prix juste crie "professionnel".

## Erreur #1 : Calculer le prix a partir des couts

C'est la methode la plus commune et la plus devastatrice. Tu calcules tes couts, tu ajoutes une marge, et voila ton prix.

**Le probleme** : Tu ignores completement la valeur que tu apportes au client. Si ton service fait gagner 10 millions FCFA a ton client, peu importe que ca te coute 100K a delivrer.

**La solution** : Prix base sur la valeur, pas sur les couts.

## Erreur #2 : Copier les prix des concurrents

Si tout le monde dans ton marche vend a 50K, tu vends a 50K. Logique ? Non.

**Le probleme** : Tu te places dans une guerre de prix que tu ne peux pas gagner. Et tes concurrents ne sont peut-etre pas rentables eux-memes.

**La solution** : Differencie ton offre pour justifier un premium.

## Erreur #3 : Avoir un seul prix

Un seul produit, un seul prix. Tu perds les clients qui veulent plus (et qui paieraient plus) et ceux qui veulent juste commencer.

**La solution** : Cree 3 niveaux (Bronze, Silver, Gold). Ca augmente ton panier moyen de 25-40%.

## Erreur #4 : Reduire le prix pour vendre plus

Les soldes, les promos, les "prix lancement" permanents. Tu entraines tes clients a attendre les reductions.

**La solution** : Augmente la valeur au lieu de baisser le prix. Ajoute des bonus, pas des reductions.

## Erreur #5 : Ne pas tester

Tu fixes ton prix une fois et tu n'y touches plus jamais. Le marche change, ta valeur evolue, mais ton prix reste le meme.

**La solution** : Teste regulierement. Augmente de 20% et mesure l'impact sur les conversions.

## Le framework de pricing LIMITLESS

1. **Calcule la valeur delivree** (en argent ou en temps)
2. **Fixe ton prix a 10-20% de cette valeur**
3. **Cree 3 niveaux** d'offre
4. **Teste et ajuste** tous les trimestres

---

**A toi** : On revoit ensemble ton pricing pendant le diagnostic gratuit.`,
    category: "offers",
    persona: "agence",
    publishedAt: "2026-01-28",
    readTime: 9,
    author: "Folawe Milarepa AGLI",
  },
  {
    slug: "instagram-leads-strategie",
    title: "Comment transformer Instagram en machine a leads",
    excerpt:
      "Instagram n'est pas qu'un reseau social. C'est un systeme de generation de leads si tu l'utilises correctement.",
    content: `## Instagram est un outil, pas une finalite

La plupart des entrepreneurs postent sur Instagram sans strategie. Ils chassent les likes et les followers. Mais les likes ne paient pas les factures.

**L'objectif d'Instagram** : Convertir des inconnus en leads qualifies. Point.

## Le systeme Instagram en 4 etapes

### Etape 1 : Optimise ton profil (ta landing page)
- **Photo** : Professionnelle, fond uni, visage visible
- **Bio** : Qui tu aides + quel resultat + CTA clair
- **Lien** : Vers ton lead magnet ou ta page de reservation

### Etape 2 : Contenu strategique (pas juste "du contenu")
3 types de contenu en rotation :
- **Educatif (40%)** : Enseigne quelque chose d'actionnable
- **Credibilite (30%)** : Temoignages, resultats, behind-the-scenes
- **Conversion (30%)** : CTA directs, offres, invitations a l'appel

### Etape 3 : Engagement actif (30 min/jour)
Pas du scroll passif. Un engagement strategique :
- Commente sur les posts de ton ICP (vraies reflexions, pas des emojis)
- Reponds a chaque DM et commentaire
- Initie des conversations avec des leads potentiels

### Etape 4 : Conversion en DM
Quand un prospect engage avec ton contenu :
1. Remercie et pose une question ouverte
2. Identifie son probleme
3. Propose une solution (ton lead magnet ou un appel)
4. Ne vends jamais en DM -- invite en appel

## Les metriques qui comptent

Oublie les followers. Suis ces metriques :
- **DM recus par semaine** : Combien de conversations tu demarres
- **Leads generes** : Combien de personnes telecharge ton lead magnet
- **Appels reserves** : Combien passent en appel de vente

## La frequence ideale

- **Reels** : 3-4 par semaine
- **Stories** : Quotidien (5-10 stories)
- **Carrousels** : 1-2 par semaine
- **Engagement** : 30 min/jour

## Le piege a eviter

Ne deviens pas un "createur de contenu" qui oublie de vendre. Le contenu est un moyen, pas une fin. Chaque post doit avoir un objectif business clair.

---

**Action concrete** : Reserve ton diagnostic et on cree ensemble ta strategie Instagram.`,
    category: "leads",
    persona: "createur",
    publishedAt: "2026-01-20",
    readTime: 11,
    author: "Folawe Milarepa AGLI",
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

export function getPostsByPersona(persona: BlogPersona): BlogPost[] {
  return blogPosts.filter((post) => post.persona === persona)
}
