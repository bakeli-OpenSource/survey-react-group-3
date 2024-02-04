import React, { useState, useEffect } from 'react';
import axios from 'axios';

let token = sessionStorage.getItem('token');

const AfficherSondage = () => {
  const [donneesSondage, setDonneesSondage] = useState([]);

  useEffect(() => {
    // Récupérer les données du sondage depuis l'API
    const recupererDonnees = async () => {
      try {
        const reponse = await axios.get('http://localhost:8000/api/sondage/liste', {
          headers: {
            "Authorization": `Bearer ${token}`
          },
        });
        console.log(reponse);
        setDonneesSondage(reponse.data);
      } catch (erreur) {
        console.error('Erreur lors de la récupération des données du sondage :', erreur);
      }
    };

    recupererDonnees();
  }, []); // L'effet sera exécuté une seule fois lors du montage du composant


    return (
        <div>
            <h2 className="text-black">Liste des sondages</h2>
            <ul>
                {donneesSondage.map((sondage, index) => (
                    <li key={index}>
                        <h3>{sondage.titre}</h3>
                        <p>Questions :</p>
                        <ul>
                            {JSON.parse(sondage.contenu).map((question, indexQuestion) => (
                                <li key={indexQuestion}>
                                    <p>{question.question}</p>
                                    <ul>
                                        {question.options.map((option, indexOption) => (
                                            <li key={indexOption}>{option}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AfficherSondage;
