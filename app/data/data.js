import Netflix from "@/public/projects/netflix.png";
import Airbnb from "@/public/projects/airbnb.png";

export const data = [
  {
    id: 1,
    name: "Airbnb Clone",
    image: Airbnb,
    github: "https://github.com/adamdurigon/airbnb-clone",
    live: "https://rent-app-lime-pi.vercel.app/",
    description:
      "Ce projet est une reproduction d'Airbnb conçu avec Next.js, Tailwind CSS, Node.js et MongoDB. Il offre diverses fonctionnalités, dont la gestion des utilisateurs, la recherche et l'ajout en favoris de propriétés, ainsi que la réservation et la gestion des annonces.",
  },
  {
    id: 2,
    name: "Netflix Clone",
    image: Netflix,
    github: "https://github.com/adamdurigon/netflix-clone",
    live: "https://streaming-app-ashen.vercel.app/",
    description:
      "Ce projet est une reproduction de Netflix, conçu avec Next.js, Tailwind CSS, Node.js et MongoDB. Il permet aux utilisateurs de naviguer parmi une sélection de films, de gérer leurs profils, et d'ajouter des films à leurs favoris.",
  },
];
