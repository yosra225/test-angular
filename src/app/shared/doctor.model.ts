export class Doctor {
    nom!: string;
    specialite!: string;
    disponibilite!: boolean; 
    constructor(nom: string, specialite: string, disponibilite: boolean) {
        this.nom = nom;
        this.specialite = specialite;
        this.disponibilite = disponibilite;
      }
}

