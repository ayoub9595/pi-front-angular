export const navigationData = {
  ADMIN: [
    {
      id: "equipement",
      title: "Équipement",
      isToggleable: true,
      subLinks: [
        { to: "/home/equipements/add", label: "Ajouter équipement",showRoleBadge: false },
        { to: "/home/equipements/", label: "Liste des équipements",showRoleBadge: false }
      ]
    },
    {
      id: "affectation",
      title: "Affectation",
      isToggleable: true,
      subLinks: [
        { to: "/home/affectations", label: "Liste des affectations",showRoleBadge: false },
        { to: "/home/affectations/add", label: "Créer une affectation",showRoleBadge: false }
      ]
    },
    {
      id: "reclamation",
      title: "Réclamation",
      isToggleable: true,
      subLinks: [
        { to: "/home/reclamations", label: "Liste des réclamations",showRoleBadge: false }
      ]
    }
  ],

  UTILISATEUR: [
    {
      id: "affectation",
      title: "Affectation",
      isToggleable: true,
      subLinks: [
        { to: "/home/affectations", label: "Mes affectations",showRoleBadge: false }
      ]
    },
    {
      id: "reclamation",
      title: "Réclamation",
      isToggleable: true,
      subLinks: [
        { to: "/home/reclamations/add", label: "Faire une réclamation" ,showRoleBadge: false},
        { to: "/home/reclamations", label: "Mes réclamations",showRoleBadge: false }
      ]
    }
  ]
};
