export const navigationData = {
  ADMIN: [
    {
      id: "equipement",
      title: "Équipement",
      isToggleable: true,
      subLinks: [
        { to: "/home/equipements/add", label: "Ajouter équipement" },
        { to: "/home/equipements/", label: "Liste des équipements" }
      ]
    },
    {
      id: "affectation",
      title: "Affectation",
      isToggleable: true,
      subLinks: [
        { to: "/home/affectations", label: "Liste des affectations" },
        { to: "/home/affectations/add", label: "Créer une affectation" }
      ]
    },
    {
      id: "reclamation",
      title: "Réclamation",
      isToggleable: true,
      subLinks: [
        { to: "/home/reclamations", label: "Liste des réclamations" }
      ]
    }
  ],

  UTILISATEUR: [
    {
      id: "affectation",
      title: "Affectation",
      isToggleable: true,
      subLinks: [
        { to: "/home/affectations", label: "Mes affectations" }
      ]
    },
    {
      id: "reclamation",
      title: "Réclamation",
      isToggleable: true,
      subLinks: [
        { to: "/home/reclamations/add", label: "Faire une réclamation" },
        { to: "/home/reclamations", label: "Mes réclamations" }
      ]
    }
  ]
};
