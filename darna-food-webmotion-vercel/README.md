# Darna Food — Webmotion

Version 5 : site FR/AR/EN, carte, animations et scènes 3D.

## Publication sur Vercel

Décompressez cette archive. Le dossier contenant ce README et vercel.json est la racine du projet.

Option terminal (Node.js nécessaire) :

```sh
npx vercel login
npx vercel --prod
```

Choisir votre compte, créer un nouveau projet nommé darna-food-webmotion et conserver le répertoire courant (.). La configuration indique le dossier dist, sans compilation.

Option GitHub : déposer le contenu de ce dossier dans un dépôt, puis importer le dépôt dans Vercel / Add New / Project. Framework : Other ; Output Directory : dist ; Build Command : vide. Cliquer sur Deploy.

Après publication : vérifier FR/AR/EN, navigation mobile, panier, réservation et 3D. Les commandes et réservations restent des démonstrations locales, sans envoi à un restaurant ni paiement. Le déploiement ne crée pas de backend.

Les médias et scripts locaux sont fournis dans dist/assets. Certaines polices utilisent Google Fonts avec des polices de secours.
