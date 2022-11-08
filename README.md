# Composantes REACT
Implémentation d'une bibliothèque de 10 composantes REACT réutilisable à l'aide des frameworks Antd et Material-UI.

## Liste des composantes
- Alerte
- Avatar
- Bouton
- Carte
- ChampTexte
- Etape
- LoadSpin
- MenuDeroulant
- Popup
- Resultat
- Extra
- Collection
- Détails des composants

### Alerte

- Succès : Applique la couleur et le texte de l'alerte succès.
- Avertissement : Applique la couleur et le texte de l'alerte avertissement.
- Erreur : Applique la couleur et le texte de l'alerte erreur.
##### Exemple d'utilisation:

```sh
<Alerte
  message="Vous avez réussi à créer votre alerte!!!"
  type="success"
/>
```

### Avatar

- Petit : La taille de l'avatar sera petite.
- Moyen : La taille de l'avatar sera moyenne.
- Grand : La taille de l'avatar sera grande.
##### Exemple d'utilisation:

```sh
<Avatars
  alt="Roger"
  src="assets/img/macareux.jpg"
  height={24}
  width={24}
/>
```

### Bouton

- Start : Applique l'aspect visuel du bouton Start.
- Eject : Applique l'aspect visuel du bouton Eject.
- Destroy Applique l'aspect visuel du bouton Auto Destroy.
##### Exemple d'utilisation:

```sh
<Bouton
  type="danger"
  shape="default"
  text1="AUTO"
  text2="DESTROY"
  color="red"
  borderColor="black"
  height={80}
  width={80}
/>
```

### Carte

- Default : Carte par défaut.
- DarkMode : Active le "DarkMode".
- Hoverable : Change l'aspect visuel de la carte pour qu'elle soit "hoverable".
##### Exemple d'utilisation:

```sh
<Carte
  width={250}
  title="European cool girl" 
  description="www.tinder.com" 
/>
```
#### ChampTexte

- Contour : Ajoute à l'aspect visuel du champ un contour bleu.
- Attention : Ajoute à l'aspect visuel du champ un avertissement.
- Succes : Ajoute à l'aspect visuel du champ un encadré succès.
##### Exemple d'utilisation:

```sh
<ChampTexte
  label="Nom"
  color="primary"
  defaultValue=""
  helperText=""
/>
```

### Etape

- Attente : L'étape est au niveau attente.
- Chargement : L'étape est au niveau chargement.
- Termine : Toute les étapes sont terminées.
##### Exemple d'utilisation:

```sh
<Etape
  current="1"
  labelPlacement="vertical"
  title1="En attente.."
  title2="Chargement"
  title3="Terminé!"
  description1=""
  description2=""
  description3=""  
/>
```
### LoadSpin

- Small : L'icône de chargement est petit.
- Medium : L'icône de chargement est moyen.
- Large :  L'icône de chargement est grand.
##### Exemple d'utilisation:

```sh
<LoadSpin 
  size="small" 
/>
```

### MenuDeroulant

- BottomLeft : Menu en bas à gauche.
- Bottom : Menu en bas au milieu.
- Right : Menu à droite.
##### Exemple d'utilisation:

```sh
<MenuDeroulant
  item1="Hot-Dog"
  item2="Poutine"
  item3="Hamburger"
  placement="bottomLeft"
/>
```

### Popup

- Basic : Fênetre modale de base.
- Centered : Fênetre modale centré.
- Warning : Fênetre modale d'alerte.
##### Exemple d'utilisation:

```sh
<PopUp
  title="Basic modal" 
/>
```

### Resultat

- Succes : Affiche la couleur, le logo et le texte pour un succès.
- Probleme : Affiche la couleur, le logo et le texte pour un avertissement.
- Erreur : Affiche la couleur, le logo et le texte pour une erreur.
##### Exemple d'utilisation:

```sh
<Resultats
  status="success"
  title="Votre achat a été complété avec succès!"
  subTitle="Numéro de commande : 1234567890"
  type="primary"  
  key="console"  
/>
```

Pour démarrer le projet dans le terminal:

```sh
yarn install
yarn storybook
```
ou

```sh
npm install
npm run storybook
```
