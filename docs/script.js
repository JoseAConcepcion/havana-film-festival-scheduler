// Base de datos de películas extraída del PDF
const moviesDatabase = [
    {
        id: 1,
        title: "Luna Rosa: La séptima ascensión de Atabey",
        description: "Dir. Omar Rodríguez-López. Una coproducción de Puerto Rico, México y Alemania.",
        duration: 107,
        genre: "Ficción",
        rating: "PG-13",
        color: "#3F51B5"
    },
    {
        id: 2,
        title: "Boca Vieja",
        description: "Dir. Yovegami Ascona Mora. Documental mexicano.",
        duration: 85,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 3,
        title: "Cubeta",
        description: "Dir. Joan Barahona. Cortometraje hondureño.",
        duration: 7,
        genre: "Ficción",
        rating: "PG",
        color: "#FFEB3B"
    },
    {
        id: 4,
        title: "Norheimsund",
        description: "Dir. Ana A. Alpizar. Cortometraje cubano-estadounidense.",
        duration: 12,
        genre: "Ficción",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 5,
        title: "Blue Heart",
        description: "Dir. Samuel Suffren. Cortometraje haitiano-francés.",
        duration: 15,
        genre: "Ficción",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 6,
        title: "Barbed Wire",
        description: "Dir. Gustavo de Carvalho. Cortometraje brasileño con subtítulos en español.",
        duration: 22,
        genre: "Ficción",
        rating: "PG",
        color: "#9C27B0"
    },
    {
        id: 7,
        title: "Humedal",
        description: "Dir. Rossana Castillo Méndez. Cortometraje chileno.",
        duration: 25,
        genre: "Ficción",
        rating: "PG",
        color: "#009688"
    },
    {
        id: 8,
        title: "Tespis Teporocho",
        description: "Dir. Alejandro Ramírez Álvarez. Cortometraje mexicano.",
        duration: 25,
        genre: "Ficción",
        rating: "PG",
        color: "#FF9800"
    },
    {
        id: 9,
        title: "Una vez en un cuerpo",
        description: "Dir. María Cristina Pérez. Animación colombo-estadounidense con subtítulos en inglés.",
        duration: 11,
        genre: "Animado",
        rating: "PG",
        color: "#8BC34A"
    },
    {
        id: 10,
        title: "Iris de Cristal",
        description: "Dir. Diego Gaviría Nieto. Animación colombiana.",
        duration: 12,
        genre: "Animado",
        rating: "PG",
        color: "#CDDC39"
    },
    {
        id: 11,
        title: "Safo",
        description: "Dir. Rosana Urbes. Animación brasileña.",
        duration: 12,
        genre: "Animado",
        rating: "PG",
        color: "#FF5722"
    },
    {
        id: 12,
        title: "Como si la tierra se las hubiera tragado",
        description: "Dir. Natalia León. Animación francesa.",
        duration: 14,
        genre: "Animado",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 13,
        title: "Merrimundi",
        description: "Dir. Niles Atallah. Animación chilena con subtítulos en inglés.",
        duration: 21,
        genre: "Animado",
        rating: "PG",
        color: "#607D8B"
    },
    {
        id: 14,
        title: "Arráncame la vida",
        description: "Dir. Roberto Sneider. Clásico moderno del cine mexicano-español.",
        duration: 110,
        genre: "Ficción",
        rating: "R",
        color: "#E91E63"
    },
    {
        id: 15,
        title: "Eva",
        description: "Dir. William Eduardo Reyes Machado. Coproducción Honduras-Colombia.",
        duration: 90,
        genre: "Ficción",
        rating: "PG-13",
        color: "#3F51B5"
    },
    {
        id: 16,
        title: "09/05/1982",
        description: "Dir. Camilo Restrepo, Jorge Caballero. Documental México-España con subtítulos en inglés.",
        duration: 11,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 17,
        title: "Tiempo detenido",
        description: "Dir. Artagna Fajardo Nuviola. Documental cubano.",
        duration: 16,
        genre: "Documental",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 18,
        title: "Atardecer en América",
        description: "Dir. Matías Rojas Valencia. Documental Chile-Brasil-Colombia.",
        duration: 17,
        genre: "Documental",
        rating: "PG",
        color: "#FF9800"
    },
    {
        id: 19,
        title: "Sueña ahora",
        description: "Dir. Gabriele Licchelli, Francesco Lorusso, Andrea Settembrini. Documental Cuba-Italia con subtítulos en español.",
        duration: 20,
        genre: "Documental",
        rating: "PG",
        color: "#9C27B0"
    },
    {
        id: 20,
        title: "Tierra enferma",
        description: "Dir. Fred Rahal, Kamikia Kisečije. Documental brasileño con subtítulos en español.",
        duration: 30,
        genre: "Documental",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 21,
        title: "Esta isla",
        description: "Dir. Cristian Carretero, Lorraine Jones Molina. Largometraje puertorriqueño con subtítulos en inglés.",
        duration: 114,
        genre: "Ficción",
        rating: "R",
        color: "#E91E63"
    },
    {
        id: 22,
        title: "Nuestra tierra",
        description: "Dir. Lucrecía Martel. Documental internacional coproducido por Argentina, EE.UU., México, Francia, Holanda y Dinamarca.",
        duration: 119,
        genre: "Documental",
        rating: "PG",
        color: "#3F51B5"
    },
    {
        id: 23,
        title: "El infierno de los vivos",
        description: "Dir. Alberto Gieco. Largometraje argentino.",
        duration: 90,
        genre: "Ficción",
        rating: "R",
        color: "#F44336"
    },
    {
        id: 24,
        title: "¡Caigan las rosas blancas!",
        description: "Dir. Albertina Carri. Coproducción Argentina, Brasil, España con subtítulos en inglés.",
        duration: 123,
        genre: "Ficción",
        rating: "R",
        color: "#FF9800"
    },
    {
        id: 25,
        title: "Si no ardemos, cómo iluminar la noche",
        description: "Dir. Kim Torres. Coproducción Costa Rica, México, Francia.",
        duration: 85,
        genre: "Ficción",
        rating: "PG-13",
        color: "#9C27B0"
    },
    {
        id: 26,
        title: "¿Cómo suturar la tierra?",
        description: "Dir. Wilson Paucar Calle. Documental ecuatoriano con subtítulos en inglés.",
        duration: 17,
        genre: "Documental",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 27,
        title: "Piel de toro muerto",
        description: "Dir. Aroldo Murguía. Documental peruano con subtítulos en inglés.",
        duration: 24,
        genre: "Documental",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 28,
        title: "Croma",
        description: "Dir. Manuel Abramovich. Coproducción Argentina, Alemania, Austria con subtítulos en inglés.",
        duration: 70,
        genre: "Ficción",
        rating: "PG-13",
        color: "#607D8B"
    },
    {
        id: 29,
        title: "Hiedra",
        description: "Dir. Ana Cristina Barragán. Coproducción Ecuador, México, Francia, España con subtítulos en inglés.",
        duration: 98,
        genre: "Ficción",
        rating: "PG-13",
        color: "#009688"
    },
    {
        id: 30,
        title: "En el camino",
        description: "Dir. David Pablos. Largometraje mexicano con subtítulos en inglés.",
        duration: 93,
        genre: "Ficción",
        rating: "R",
        color: "#FF5722"
    },
    {
        id: 31,
        title: "Mecánica nacional",
        description: "Dir. Luis Alcoriza. Un clásico de 1971 celebrando el 80 Aniversario de Estudios Churubusco.",
        duration: 105,
        genre: "Ficción",
        rating: "R",
        color: "#FF9800"
    },
    {
        id: 32,
        title: "Leyendo el mundo",
        description: "Dir. Catherine Murphy, Iris De Oliveira. Documental Brasil-EE.UU. con subtítulos en español.",
        duration: 70,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 33,
        title: "Baixada: En las aguas de Cubatão",
        description: "Dir. Renato de Castro. Cortometraje brasileño con subtítulos en español.",
        duration: 16,
        genre: "Ficción",
        rating: "PG",
        color: "#3F51B5"
    },
    {
        id: 34,
        title: "Cuadrilátero",
        description: "Dir. Daniel Rodríguez Risco. Largometraje peruano con subtítulos en inglés.",
        duration: 85,
        genre: "Ficción",
        rating: "R",
        color: "#E91E63"
    },
    {
        id: 35,
        title: "Elogio de la rebelión",
        description: "Dir. Fernando Krichmar. Documental argentino.",
        duration: 100,
        genre: "Documental",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 36,
        title: "Dolores",
        description: "Dir. Marcelo Gomes, Maria Clara Escobar. Largometraje brasileño con subtítulos en español.",
        duration: 84,
        genre: "Ficción",
        rating: "R",
        color: "#9C27B0"
    },
    {
        id: 37,
        title: "El príncipe de Nanawa",
        description: "Dir. Clarisa Navas. Documental extenso de Argentina, Paraguay, Colombia, Alemania.",
        duration: 212,
        genre: "Documental",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 38,
        title: "Mario Rivas, un artista con suerte",
        description: "Dir. Arlene Comas Fernandez. Documental cubano.",
        duration: 55,
        genre: "Documental",
        rating: "PG",
        color: "#607D8B"
    },
    {
        id: 39,
        title: "Una directora extraordinaria",
        description: "Dir. Fabiana Urricelqui. Largometraje argentino.",
        duration: 90,
        genre: "Ficción",
        rating: "PG-13",
        color: "#FFC107"
    },
    {
        id: 40,
        title: "El octubre de Valdivia",
        description: "Dir. Cecilia Ruz Ortiz. Documental chileno.",
        duration: 100,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 41,
        title: "La lata",
        description: "Dir. Maria Karla Recio Mederos. Cortometraje cubano-mexicano.",
        duration: 7,
        genre: "Ficción",
        rating: "PG",
        color: "#FFEB3B"
    },
    {
        id: 42,
        title: "El novio de mamá",
        description: "Dir. Leandro Rodolfo Mark, Nicolás Silbert. Comedia argentina.",
        duration: 90,
        genre: "Ficción",
        rating: "PG-13",
        color: "#EC407A"
    },
    {
        id: 43,
        title: "Cuatro estrellas",
        description: "Dir. Pablo Stigliani. Largometraje argentino.",
        duration: 90,
        genre: "Ficción",
        rating: "R",
        color: "#FF7043"
    },
    {
        id: 44,
        title: "Paz del corazón",
        description: "Dir. Ana Songel. Animación escocesa.",
        duration: 11,
        genre: "Animado",
        rating: "PG",
        color: "#8BC34A"
    },
    {
        id: 45,
        title: "Bodas de diamante",
        description: "Dir. Wilma Smith. Animación británica con subtítulos en español.",
        duration: 12,
        genre: "Animado",
        rating: "PG",
        color: "#CDDC39"
    },
    {
        id: 46,
        title: "La Reina del Arenque",
        description: "Dir. Eilidh Munro. Documental escocés.",
        duration: 12,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 47,
        title: "Volver a pasar",
        description: "Dir. Ana Victoria Pérez, Amparo Fortuny. Documental Escocia-España con subtítulos en español.",
        duration: 16,
        genre: "Documental",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 48,
        title: "Las flores se paran en silencio, atestiguando",
        description: "Dir. Theo Panagopoulos. Documental escocés.",
        duration: 17,
        genre: "Documental",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 49,
        title: "Cadena perpetua",
        description: "Dir. Arturo Ripstein. Clásico mexicano de 1978.",
        duration: 95,
        genre: "Clásico",
        rating: "R",
        color: "#607D8B"
    },
    {
        id: 50,
        title: "Todo documento de civilización",
        description: "Dir. Tatiana Mazú González. Documental argentino.",
        duration: 90,
        genre: "Documental",
        rating: "PG",
        color: "#607D8B"
    },
    {
        id: 51,
        title: "Halker",
        description: "Dir. Alejandro Ariel Martín. Cortometraje animado argentino.",
        duration: 8,
        genre: "Animado",
        rating: "PG",
        color: "#FFEB3B"
    },
    {
        id: 52,
        title: "Revoada - Versión Steampunk",
        description: "Dir. Ducca Ríos. Animación brasileña con subtítulos en español.",
        duration: 81,
        genre: "Animado",
        rating: "PG",
        color: "#9C27B0"
    },
    {
        id: 53,
        title: "Sendero azul",
        description: "Dir. Gabriel Mascaro. Coproducción Brasil, México, Chile, Holanda.",
        duration: 86,
        genre: "Ficción",
        rating: "R",
        color: "#03A9F4"
    },
    {
        id: 54,
        title: "El agente secreto",
        description: "Dir. Kleber Mendonça Filho. Thriller de Brasil y Francia.",
        duration: 158,
        genre: "Thriller",
        rating: "R",
        color: "#3F51B5"
    },
    {
        id: 55,
        title: "Sound of Falling",
        description: "Dir. Mascha Schilinski. Ficción alemana con subtítulos en español.",
        duration: 155,
        genre: "Ficción",
        rating: "R",
        color: "#26A69A"
    },
    {
        id: 56,
        title: "Nora",
        description: "Dir. Roly Peña. Cine cubano contemporáneo con subtítulos en inglés.",
        duration: 85,
        genre: "Ficción",
        rating: "PG-13",
        color: "#E91E63"
    },
    {
        id: 57,
        title: "(Des)control",
        description: "Dir. Rosane Svartman, Carol Minem. Ficción brasileña.",
        duration: 96,
        genre: "Ficción",
        rating: "PG-13",
        color: "#FFA726"
    },
    {
        id: 58,
        title: "Mudanza",
        description: "Dir. Raúl Sebastián Quintanilla. Ficción mexicana.",
        duration: 80,
        genre: "Ficción",
        rating: "PG",
        color: "#8D6E63"
    },
    {
        id: 59,
        title: "Melodrama",
        description: "Dir. Andrés Farías Cintrón. Ficción de República Dominicana.",
        duration: 90,
        genre: "Ficción",
        rating: "R",
        color: "#BA68C8"
    },
    {
        id: 60,
        title: "Muña Muña",
        description: "Dir. Paula Morel. Ficción argentina con subtítulos en inglés.",
        duration: 71,
        genre: "Ficción",
        rating: "PG-13",
        color: "#AED581"
    },
    {
        id: 61,
        title: "Un cabo suelto",
        description: "Dir. Daniel Hendler. Comedia dramática de Uruguay y Argentina.",
        duration: 95,
        genre: "Ficción",
        rating: "PG-13",
        color: "#FFC107"
    },
    {
        id: 62,
        title: "Isla Negra",
        description: "Dir. Jorge Riquelme Serrano. Ficción chilena.",
        duration: 105,
        genre: "Ficción",
        rating: "R",
        color: "#4DD0E1"
    },
    {
        id: 63,
        title: "Alexis Díaz Pimienta - Retrato de un poeta",
        description: "Dir. David Riondino. Documental italiano.",
        duration: 65,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 64,
        title: "Cinco tipos de miedo",
        description: "Dir. Bruno Bini. Ficción brasileña.",
        duration: 106,
        genre: "Ficción",
        rating: "R",
        color: "#F44336"
    },
    {
        id: 65,
        title: "Los Arcos Dorados de Olinda",
        description: "Dir. Douglas Henrique. Documental brasileño con subtítulos en español.",
        duration: 24,
        genre: "Documental",
        rating: "PG",
        color: "#FF9800"
    },
    {
        id: 66,
        title: "Identidad",
        description: "Dir. Florencia Santucho, Rodrigo Vázquez Salessi. Documental Argentina, Cuba, Gran Bretaña.",
        duration: 86,
        genre: "Documental",
        rating: "PG",
        color: "#3F51B5"
    },
    {
        id: 67,
        title: "La casa",
        description: "Dir. Gustavo Triviño. Ficción argentina.",
        duration: 95,
        genre: "Ficción",
        rating: "PG-13",
        color: "#9575CD"
    },
    {
        id: 68,
        title: "Una casa con dos perros",
        description: "Dir. Matías Ferreyra. Ficción argentina con subtítulos en inglés.",
        duration: 92,
        genre: "Ficción",
        rating: "PG-13",
        color: "#4DB6AC"
    },
    {
        id: 69,
        title: "Homo Argentum",
        description: "Dir. Mariano Cohn, Gastón Duprat. Ficción argentina/española.",
        duration: 98,
        genre: "Ficción",
        rating: "R",
        color: "#FFD54F"
    },
    {
        id: 70,
        title: "Our Father",
        description: "Dir. Goran Stankovic. Ficción Serbia, Italia, Croacia, Montenegro, Bosnia y Herzegovina.",
        duration: 90,
        genre: "Ficción",
        rating: "R",
        color: "#E91E63"
    },
    {
        id: 71,
        title: "Sorda",
        description: "Dir. Eva Libertad. Ficción española.",
        duration: 99,
        genre: "Ficción",
        rating: "PG-13",
        color: "#A1887F"
    },
    {
        id: 72,
        title: "Oca",
        description: "Dir. Karla Badillo. Ficción México/Argentina.",
        duration: 108,
        genre: "Ficción",
        rating: "PG",
        color: "#90A4AE"
    },
    {
        id: 73,
        title: "Memoria de 'Los olvidados'",
        description: "Dir. Javier Espada. Documental España, México, EE.UU.",
        duration: 102,
        genre: "Documental",
        rating: "PG",
        color: "#607D8B"
    },
    {
        id: 74,
        title: "Calle 232",
        description: "Dir. Rudy Mora. Ficción Cuba/México.",
        duration: 88,
        genre: "Ficción",
        rating: "PG-13",
        color: "#F06292"
    },
    {
        id: 75,
        title: "Balsanos",
        description: "Dir. Andrés Khamis Giacoman. Documental Chile, España, Estado de Palestina con subtítulos en español.",
        duration: 13,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 76,
        title: "Notas sobre un destierro",
        description: "Dir. Gustavo Castro. Documental brasileño con subtítulos en español.",
        duration: 80,
        genre: "Documental",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 77,
        title: "Vainilla",
        description: "Dir. Mayra Hermosillo. Ficción mexicana.",
        duration: 96,
        genre: "Ficción",
        rating: "PG-13",
        color: "#FFF176"
    },
    {
        id: 78,
        title: "Una isla",
        description: "Dir. Ricardo Muñoz Senior. Cortometraje México-Venezuela con subtítulos en inglés.",
        duration: 11,
        genre: "Ficción",
        rating: "PG",
        color: "#FFEB3B"
    },
    {
        id: 79,
        title: "La Fiera del Manglar",
        description: "Dir. Wara, Sivan Noam Shimon. Cortometraje Brasil-Francia.",
        duration: 14,
        genre: "Ficción",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 80,
        title: "Anba Dio",
        description: "Dir. Rosa Caldeira, Luiza Calagian. Cortometraje Cuba-Brasil-Haití con subtítulos en español.",
        duration: 18,
        genre: "Ficción",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 81,
        title: "Punto ciego",
        description: "Dir. Marcel Beltrán, Luciana Vieira. Cortometraje Brasil-Francia.",
        duration: 19,
        genre: "Ficción",
        rating: "PG",
        color: "#9C27B0"
    },
    {
        id: 82,
        title: "Pupa",
        description: "Dir. Leandro de la Rosa. Cortometraje cubano.",
        duration: 24,
        genre: "Ficción",
        rating: "PG",
        color: "#FF9800"
    },
    {
        id: 83,
        title: "Río sigue siendo lindo",
        description: "Dir. Felipe Casanova. Cortometraje Bélgica-Brasil-Suiza con subtítulos en español.",
        duration: 24,
        genre: "Ficción",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 84,
        title: "Precisamos Falar",
        description: "Dir. Pedro Waddington, Rebeca Diniz. Largometraje brasileño con subtítulos en español.",
        duration: 101,
        genre: "Ficción",
        rating: "R",
        color: "#E91E63"
    },
    {
        id: 85,
        title: "Cartas a mis padres muertos",
        description: "Dir. Ignacio Agüero. Documental chileno.",
        duration: 135,
        genre: "Documental",
        rating: "PG",
        color: "#64B5F6"
    },
    {
        id: 86,
        title: "Torniquete",
        description: "Dir. Ana Catarina Lugarini. Largometraje brasileño con subtítulos en español.",
        duration: 75,
        genre: "Ficción",
        rating: "PG-13",
        color: "#D32F2F"
    },
    {
        id: 87,
        title: "La hija cóndor",
        description: "Dir. Álvaro Olmos Torrico. Coproducción andina (Bolivia, Perú, Uruguay) con subtítulos en español.",
        duration: 109,
        genre: "Ficción",
        rating: "PG",
        color: "#FF5722"
    },
    {
        id: 88,
        title: "Abajo y a la izquierda",
        description: "Dir. Martín Baus. Documental Chile, Ecuador, Suiza con subtítulos en español.",
        duration: 15,
        genre: "Documental",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 89,
        title: "Un volcán es una herida luminosa",
        description: "Dir. José Pablo Escamilla. Cortometraje mexicano.",
        duration: 15,
        genre: "Ficción",
        rating: "PG",
        color: "#FF9800"
    },
    {
        id: 90,
        title: "¡Ya México no existirá más!",
        description: "Dir. Annalisa D. Quagliata. Documental mexicano.",
        duration: 80,
        genre: "Documental",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 91,
        title: "Cherri",
        description: "Dir. Fabián Suárez. Ficción Cuba/Guatemala/México con subtítulos en inglés.",
        duration: 82,
        genre: "Ficción",
        rating: "R",
        color: "#E53935"
    },
    {
        id: 92,
        title: "Nancy",
        description: "Dir. Luciano Zito. Ficción argentina con subtítulos en inglés.",
        duration: 75,
        genre: "Ficción",
        rating: "PG-13",
        color: "#FB8C00"
    },
    {
        id: 93,
        title: "Mi tierra extranjera",
        description: "Dir. João Moreira Salles et al. Documental brasileño con subtítulos en español.",
        duration: 99,
        genre: "Documental",
        rating: "PG",
        color: "#43A047"
    },
    {
        id: 94,
        title: "Agua y acero",
        description: "Dir. Grethel Nuez Curbelo. Documental cubano.",
        duration: 17,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 95,
        title: "El viaje del pastor",
        description: "Dir. Rigoberto Jimenez. Documental cubano.",
        duration: 90,
        genre: "Documental",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 96,
        title: "El mundo es afuera",
        description: "Dir. Pablo Roldán. Cortometraje colombiano.",
        duration: 22,
        genre: "Ficción",
        rating: "PG",
        color: "#3F51B5"
    },
    {
        id: 97,
        title: "Bajo las banderas, el sol",
        description: "Dir. Juanjo Pereira. Documental Paraguay, Argentina, EE.UU., Francia, Alemania.",
        duration: 90,
        genre: "Documental",
        rating: "PG",
        color: "#1E88E5"
    },
    {
        id: 98,
        title: "Drácula de las Pampas",
        description: "Dir. Walter Cáceres. Cortometraje animado argentino.",
        duration: 2,
        genre: "Animado",
        rating: "PG",
        color: "#FFEB3B"
    },
    {
        id: 99,
        title: "Ecocidio",
        description: "Dir. Aldana Loiseau. Cortometraje animado argentino.",
        duration: 8,
        genre: "Animado",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 100,
        title: "Corazón de las tinieblas",
        description: "Dir. Rogério Nunes. Animación Brasil-Francia.",
        duration: 87,
        genre: "Animado",
        rating: "PG",
        color: "#9C27B0"
    },
    {
        id: 101,
        title: "La luz",
        description: "Dir. Anton Kolomeyets. Ficción rusa con subtítulos en español.",
        duration: 108,
        genre: "Ficción",
        rating: "PG-13",
        color: "#FF9800"
    },
    {
        id: 102,
        title: "Calle Málaga",
        description: "Dir. Maryam Touzani. Ficción internacional (Marruecos, Francia, Alemania, España, Bélgica).",
        duration: 116,
        genre: "Ficción",
        rating: "PG-13",
        color: "#8E24AA"
    },
    {
        id: 103,
        title: "The Heart is a Muscle",
        description: "Dir. Imran Hamdulay. Ficción Sudáfrica, Arabia Saudita.",
        duration: 86,
        genre: "Ficción",
        rating: "R",
        color: "#D32F2F"
    },
    {
        id: 104,
        title: "El castillo de la pureza",
        description: "Dir. Arturo Ripstein. Clásico mexicano de 1972.",
        duration: 110,
        genre: "Ficción",
        rating: "R",
        color: "#546E7A"
    },
    {
        id: 105,
        title: "El diablo fuma (y guarda las cabezas de los cerillos quemados en la misma caja)",
        description: "Dir. Ernesto Martínez Bucio. Ficción mexicana con subtítulos en inglés.",
        duration: 97,
        genre: "Ficción",
        rating: "R",
        color: "#D81B60"
    },
    {
        id: 106,
        title: "Casting para Carmen",
        description: "Dir. Patricia Rodda. Cortometraje cubano.",
        duration: 5,
        genre: "Ficción",
        rating: "PG",
        color: "#FFEB3B"
    },
    {
        id: 107,
        title: "El amor no cabe en la sala",
        description: "Dir. Marcelo Matos de Oliveira, Wallace Nogueira. Cortometraje brasileño con subtítulos en español.",
        duration: 18,
        genre: "Ficción",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 108,
        title: "La barbarie",
        description: "Dir. Marco Cano. Cortometraje mexicano.",
        duration: 19,
        genre: "Ficción",
        rating: "PG",
        color: "#FF9800"
    },
    {
        id: 109,
        title: "Las Maravillas",
        description: "Dir. Rob Mendoza. Cortometraje ecuatoriano con subtítulos en inglés.",
        duration: 20,
        genre: "Ficción",
        rating: "PG",
        color: "#9C27B0"
    },
    {
        id: 110,
        title: "Cuéntale a ella lo que me pasó",
        description: "Dir. Pethrus Tibúreio. Cortometraje brasileño.",
        duration: 26,
        genre: "Ficción",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 111,
        title: "Baracoa",
        description: "Dir. Luis Ernesto Doñas. Ficción Cuba-Italia.",
        duration: 107,
        genre: "Ficción",
        rating: "R",
        color: "#E91E63"
    },
    {
        id: 112,
        title: "Hijo de tigre y mula",
        description: "Dir. Annie Canavaggio. Documental Panamá-Colombia con subtítulos en inglés.",
        duration: 103,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 113,
        title: "Bajo el mismo sol",
        description: "Dir. Ulises Porra. Ficción República Dominicana-España.",
        duration: 103,
        genre: "Ficción",
        rating: "PG-13",
        color: "#FFC107"
    },
    {
        id: 114,
        title: "El origen del mundo",
        description: "Dir. Jazmín López. Cortometraje argentino.",
        duration: 12,
        genre: "Ficción",
        rating: "PG",
        color: "#FFEB3B"
    },
    {
        id: 115,
        title: "Post - Familia",
        description: "Dir. Alexis Tafur. Cortometraje colombiano.",
        duration: 16,
        genre: "Ficción",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 116,
        title: "Dos veces bestia",
        description: "Dir. Luis Esguerra Cituentes. Ficción Colombia-España con subtítulos en inglés.",
        duration: 72,
        genre: "Ficción",
        rating: "R",
        color: "#9C27B0"
    },
    {
        id: 117,
        title: "Neurotica anónima",
        description: "Dir. Jorge Perugorría. Ficción cubana.",
        duration: 90,
        genre: "Ficción",
        rating: "R",
        color: "#F44336"
    },
    {
        id: 118,
        title: "Entre dos tierras",
        description: "Dir. Sebastián Del Callejo. Ficción mexicana.",
        duration: 88,
        genre: "Ficción",
        rating: "PG-13",
        color: "#8D6E63"
    },
    {
        id: 119,
        title: "Músicas",
        description: "Dir. Lila Avilés. Documental mexicano.",
        duration: 30,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 120,
        title: "Lorca en La Habana",
        description: "Dir. Antonio Manuel Rodríguez Ramos, José Antonio Torres Márquez. Documental España-Cuba.",
        duration: 87,
        genre: "Documental",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 121,
        title: "Yendo",
        description: "Dir. Ezequiel Tronconi. Ficción argentina.",
        duration: 97,
        genre: "Ficción",
        rating: "PG-13",
        color: "#3F51B5"
    },
    {
        id: 122,
        title: "Eco de luz",
        description: "Dir. Misha Vallejo. Documental Ecuador-Alemania con subtítulos en español.",
        duration: 80,
        genre: "Documental",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 123,
        title: "La niña y el mar",
        description: "Dir. Ray Ortega Moreno. Cortometraje animado cubano.",
        duration: 3,
        genre: "Animado",
        rating: "PG",
        color: "#FFEB3B"
    },
    {
        id: 124,
        title: "Mi mejor amiga",
        description: "Dir. Ruth Garaicoa Florat. Cortometraje animado cubano.",
        duration: 3,
        genre: "Animado",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 125,
        title: "Dolores (animado)",
        description: "Dir. Cecilia Andalón Delgadillo. Cortometraje animado mexicano.",
        duration: 9,
        genre: "Animado",
        rating: "PG",
        color: "#9C27B0"
    },
    {
        id: 126,
        title: "La gran historia de la filosofía occidental",
        description: "Dir. Aria Covamonas. Animación mexicana.",
        duration: 73,
        genre: "Animado",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 127,
        title: "Los domingos",
        description: "Dir. Alauda Ruiz de Azúa. Ficción española.",
        duration: 115,
        genre: "Ficción",
        rating: "PG-13",
        color: "#5C6BC0"
    },
    {
        id: 128,
        title: "Homebound",
        description: "Dir. Neeraj Ghaywan. Ficción india.",
        duration: 119,
        genre: "Ficción",
        rating: "R",
        color: "#D32F2F"
    },
    {
        id: 129,
        title: "La naturaleza de las cosas invisibles",
        description: "Dir. Rafaela Camelo. Ficción Brasil-Chile.",
        duration: 90,
        genre: "Ficción",
        rating: "PG-13",
        color: "#2196F3"
    },
    {
        id: 130,
        title: "Compraventa",
        description: "Dir. Tomás Murphy. Cortometraje argentino.",
        duration: 11,
        genre: "Ficción",
        rating: "PG",
        color: "#FFEB3B"
    },
    {
        id: 131,
        title: "El día interrumpido",
        description: "Dir. María Villar. Cortometraje argentino con subtítulos en inglés.",
        duration: 13,
        genre: "Ficción",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 132,
        title: "Nocturno",
        description: "Dir. Sol Muñoz, Ana Apontes. Cortometraje argentino.",
        duration: 14,
        genre: "Ficción",
        rating: "PG",
        color: "#9C27B0"
    },
    {
        id: 133,
        title: "Domingo familiar",
        description: "Dir. Gerardo Del Razo. Cortometraje mexicano.",
        duration: 18,
        genre: "Ficción",
        rating: "PG",
        color: "#FF9800"
    },
    {
        id: 134,
        title: "El último juego",
        description: "Dir. Daniel Chile. Cortometraje cubano.",
        duration: 24,
        genre: "Ficción",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 135,
        title: "Casa chica",
        description: "Dir. Lau Charles. Cortometraje mexicano.",
        duration: 25,
        genre: "Ficción",
        rating: "PG",
        color: "#607D8B"
    },
    {
        id: 136,
        title: "La misteriosa mirada del flamenco",
        description: "Dir. Diego Céspedes. Ficción Chile-Francia.",
        duration: 104,
        genre: "Ficción",
        rating: "PG-13",
        color: "#E91E63"
    },
    {
        id: 137,
        title: "Mijain",
        description: "Dir. Rolando Almirante, Ángel Alderete, Héctor Villar. Documental cubano.",
        duration: 80,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 138,
        title: "Baracca",
        description: "Dir. Luis Ernesto Doñas. Ficción Cuba-Italia.",
        duration: 107,
        genre: "Ficción",
        rating: "R",
        color: "#F44336"
    },
    {
        id: 139,
        title: "Cuerpo Celeste",
        description: "Dir. Nayra Ilic García. Ficción Chile-Italia.",
        duration: 97,
        genre: "Ficción",
        rating: "PG-13",
        color: "#3F51B5"
    },
    {
        id: 140,
        title: "Este no es tu jardín",
        description: "Dir. Carlos Velandía, Angélica Restrepo. Cortometraje colombiano con subtítulos en inglés.",
        duration: 13,
        genre: "Ficción",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 141,
        title: "Frío metal",
        description: "Dir. Clemente Castor. Ficción mexicana con subtítulos en inglés.",
        duration: 103,
        genre: "Ficción",
        rating: "R",
        color: "#607D8B"
    },
    {
        id: 142,
        title: "Belén",
        description: "Dir. Dolores Fonzi. Ficción argentina.",
        duration: 105,
        genre: "Ficción",
        rating: "R",
        color: "#E57373"
    },
    {
        id: 143,
        title: "Nudo mixteco",
        description: "Dir. Ángeles Cruz. Cine mexicano reciente con subtítulos en inglés.",
        duration: 91,
        genre: "Ficción",
        rating: "R",
        color: "#673AB7"
    },
    {
        id: 144,
        title: "Múltiples: Los recorridos literarios de Frei Betto",
        description: "Dir. Evanize Sydow, Américo Freire. Documental brasileño con subtítulos en español.",
        duration: 64,
        genre: "Documental",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 145,
        title: "Berezada",
        description: "Dir. Danae Reynaud Romero. Ficción mexicana con subtítulos en inglés.",
        duration: 91,
        genre: "Ficción",
        rating: "PG-13",
        color: "#FF9800"
    },
    {
        id: 146,
        title: "En la caliente - Tales of a Reggaeton Warrior",
        description: "Dir. Fabien Pisani. Documental Cuba-EE.UU.",
        duration: 85,
        genre: "Documental",
        rating: "PG-13",
        color: "#2196F3"
    },
    {
        id: 147,
        title: "Samba infinita",
        description: "Dir. Leonardo Martinelli. Cortometraje Brasil-Francia.",
        duration: 15,
        genre: "Ficción",
        rating: "PG",
        color: "#FFEB3B"
    },
    {
        id: 148,
        title: "Pensamiento lateral",
        description: "Dir. Mariano Hueter. Ficción argentina con subtítulos en inglés.",
        duration: 90,
        genre: "Ficción",
        rating: "PG-13",
        color: "#3F51B5"
    },
    {
        id: 149,
        title: "Escritor",
        description: "Dir. Paula de Luque. Ficción argentina con subtítulos en inglés.",
        duration: 90,
        genre: "Ficción",
        rating: "PG-13",
        color: "#795548"
    },
    {
        id: 150,
        title: "Historia de un baño",
        description: "Dir. Santiago Ríos. Cortometraje español con subtítulos en inglés.",
        duration: 16,
        genre: "Ficción",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 151,
        title: "La miel inmaculada",
        description: "Dir. Mauricio Calderón Rico. Cortometraje mexicano con subtítulos en inglés.",
        duration: 18,
        genre: "Ficción",
        rating: "PG",
        color: "#FF9800"
    },
    {
        id: 152,
        title: "El Claro",
        description: "Dir. Maira Carrasco. Ficción chilena.",
        duration: 61,
        genre: "Ficción",
        rating: "PG-13",
        color: "#9C27B0"
    },
    {
        id: 153,
        title: "Forenses",
        description: "Dir. Federico Atehortúa. Documental colombiano con subtítulos en inglés.",
        duration: 90,
        genre: "Documental",
        rating: "PG",
        color: "#607D8B"
    },
    {
        id: 154,
        title: "Una torreta en llamas",
        description: "Dir. Humberto Flores Jáuregui. Cortometraje mexicano.",
        duration: 22,
        genre: "Ficción",
        rating: "PG",
        color: "#F44336"
    },
    {
        id: 155,
        title: "Living the Land",
        description: "Dir. Huo Meng. Ficción china.",
        duration: 132,
        genre: "Ficción",
        rating: "PG-13",
        color: "#D32F2F"
    },
    {
        id: 156,
        title: "Matapanki",
        description: "Dir. Diego 'Mapache' Fuentes Badilla. Ficción chilena.",
        duration: 71,
        genre: "Ficción",
        rating: "PG-13",
        color: "#4DD0E1"
    },
    {
        id: 157,
        title: "Primera enseñanza",
        description: "Dir. Aria Sánchez, Marina Meira. Cortometraje cubano con subtítulos en inglés.",
        duration: 14,
        genre: "Ficción",
        rating: "PG",
        color: "#FFEB3B"
    },
    {
        id: 158,
        title: "Lanawaru",
        description: "Dir. Angello Faccini Rueda. Documental Colombia, México, EE.UU. con subtítulos en español.",
        duration: 15,
        genre: "Documental",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 159,
        title: "Alice",
        description: "Dir. Gabriel Novis. Documental brasileño con subtítulos en español.",
        duration: 17,
        genre: "Documental",
        rating: "PG",
        color: "#9C27B0"
    },
    {
        id: 160,
        title: "La felicidad",
        description: "Dir. Paz Encina. Documental paraguayo con subtítulos en inglés.",
        duration: 17,
        genre: "Documental",
        rating: "PG",
        color: "#FF9800"
    },
    {
        id: 161,
        title: "Dormidos sobre rodillas calientes",
        description: "Dir. Giuseppe Polerá. Documental Italia-Cuba con subtítulos en español.",
        duration: 25,
        genre: "Documental",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 162,
        title: "Hijo mayor",
        description: "Dir. Cecilia Kang. Ficción Argentina-Francia.",
        duration: 118,
        genre: "Ficción",
        rating: "R",
        color: "#3F51B5"
    },
    {
        id: 163,
        title: "La memoria de las mariposas",
        description: "Dir. Tatiana Fuentes Sadowski. Documental Perú-Portugal.",
        duration: 77,
        genre: "Documental",
        rating: "PG",
        color: "#E91E63"
    },
    {
        id: 164,
        title: "Punku",
        description: "Dir. Juan Daniel Fernández Molero. Cine peruano-español.",
        duration: 132,
        genre: "Ficción",
        rating: "PG-13",
        color: "#795548"
    },
    {
        id: 165,
        title: "Un poeta",
        description: "Dir. Simón Mesa Soto. Ficción Colombia, Alemania, Suecia.",
        duration: 120,
        genre: "Ficción",
        rating: "R",
        color: "#2196F3"
    },
    {
        id: 166,
        title: "Marta",
        description: "Dir. Irma Saucedo González. Documental mexicano con subtítulos en inglés.",
        duration: 71,
        genre: "Documental",
        rating: "PG",
        color: "#F44336"
    },
    {
        id: 167,
        title: "Notas que cuentan",
        description: "Dir. Saudde Laritza Cevallos. Documental Venezuela, Ecuador, España con subtítulos en inglés.",
        duration: 15,
        genre: "Documental",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 168,
        title: "Rito de paso",
        description: "Dir. José Luis Jiménez Gómez. Documental Cuba-República Dominicana con subtítulos en inglés.",
        duration: 19,
        genre: "Documental",
        rating: "PG",
        color: "#9C27B0"
    },
    {
        id: 169,
        title: "Kueka, memoria ancestral",
        description: "Dir. María de los Ángeles Peña Fonseca. Documental venezolano.",
        duration: 64,
        genre: "Documental",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 170,
        title: "Mano fuerte",
        description: "Dir. Rubens Fabricio Anzolin, João Fernando Chagas. Cortometraje brasileño con subtítulos en español.",
        duration: 24,
        genre: "Ficción",
        rating: "PG",
        color: "#FF9800"
    },
    {
        id: 171,
        title: "El niño probeta",
        description: "Dir. Carolina Hernández Correa. Ficción Ecuador, Perú, España.",
        duration: 81,
        genre: "Ficción",
        rating: "PG-13",
        color: "#3F51B5"
    },
    {
        id: 172,
        title: "Sueño en otro idioma",
        description: "Dir. Ernesto Contreras Flores. Ficción México-Holanda.",
        duration: 103,
        genre: "Ficción",
        rating: "PG-13",
        color: "#2196F3"
    },
    {
        id: 173,
        title: "Solo con tu pareja",
        description: "Dir. Alfonso Cuarón. La ópera prima de Cuarón (1991) con subtítulos en inglés.",
        duration: 85,
        genre: "Comedia",
        rating: "R",
        color: "#4CAF50"
    },
    {
        id: 174,
        title: "The Son and the Sea",
        description: "Dir. Stroma Cairns. Ficción británica.",
        duration: 102,
        genre: "Ficción",
        rating: "PG-13",
        color: "#03A9F4"
    },
    {
        id: 175,
        title: "Sentimental Value",
        description: "Dir. Joachim Trier. Ficción Noruega, Dinamarca, Francia, Alemania con subtítulos en español.",
        duration: 135,
        genre: "Ficción",
        rating: "R",
        color: "#795548"
    },
    {
        id: 176,
        title: "¡Para Vigo me voy!",
        description: "Dir. Lírio Ferreira, Karen Harley. Documental brasileño.",
        duration: 97,
        genre: "Documental",
        rating: "PG",
        color: "#FF9800"
    },
    {
        id: 177,
        title: "Man Number 4",
        description: "Dir. Miranda Pennell. Documental británico con subtítulos en español.",
        duration: 10,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 178,
        title: "Cazadores de uranio",
        description: "Dir. Davide Palella. Documental italiano con subtítulos en español.",
        duration: 12,
        genre: "Documental",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 179,
        title: "La selección de Chile",
        description: "Dir. Giulio Pacini. Documental italiano con subtítulos en inglés.",
        duration: 14,
        genre: "Documental",
        rating: "PG",
        color: "#FF9800"
    },
    {
        id: 180,
        title: "Exception",
        description: "Dir. Ezzaldeen Shallah. Documental Estado de Palestina con subtítulos en español.",
        duration: 15,
        genre: "Documental",
        rating: "PG",
        color: "#9C27B0"
    },
    {
        id: 181,
        title: "Abo Jabal",
        description: "Dir. Bisan Owda. Documental Estado de Palestina con subtítulos en español.",
        duration: 18,
        genre: "Documental",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 182,
        title: "Hind Under Siege",
        description: "Dir. Naji Salameh. Documental Estado de Palestina.",
        duration: 24,
        genre: "Documental",
        rating: "PG",
        color: "#F44336"
    },
    {
        id: 183,
        title: "La figura humana",
        description: "Dir. Giulia Claudia Massacci. Documental italiano con subtítulos en español.",
        duration: 24,
        genre: "Documental",
        rating: "PG",
        color: "#607D8B"
    },
    {
        id: 184,
        title: "A Fidal Film",
        description: "Dir. Kamai Aljafari. Documental Estado de Palestina, Alemania, Catar, Brasil, Francia con subtítulos en español.",
        duration: 78,
        genre: "Documental",
        rating: "PG",
        color: "#3F51B5"
    },
    {
        id: 185,
        title: "Cuadernos de La Habana. Gilberto Bosques en Cuba",
        description: "Dir. Miguel Díaz Reynoso. Documental mexicano.",
        duration: 80,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 186,
        title: "5 historias de amor y un bolerón desesperado",
        description: "Dir. Arturo Santana. Ficción cubana con subtítulos en inglés.",
        duration: 90,
        genre: "Ficción",
        rating: "PG-13",
        color: "#E91E63"
    },
    {
        id: 187,
        title: "Película sin querer",
        description: "Dir. Lincoln Péricles. Cortometraje brasileño con subtítulos en español.",
        duration: 25,
        genre: "Ficción",
        rating: "PG",
        color: "#FF9800"
    },
    {
        id: 188,
        title: "La mejor madre del mundo",
        description: "Dir. Anna Muylaert. Ficción Brasil-Argentina.",
        duration: 105,
        genre: "Ficción",
        rating: "PG-13",
        color: "#9C27B0"
    },
    {
        id: 189,
        title: "¿Por qué creamos?",
        description: "Dir. Claudio Peláez Sordo. Documental cubano.",
        duration: 28,
        genre: "Documental",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 190,
        title: "Y me hice maestro",
        description: "Dir. Germán Pérez Rodríguez. Documental colombiano.",
        duration: 73,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 191,
        title: "Los renacidos",
        description: "Dir. Santiago Esteves. Ficción Argentina, Chile, España.",
        duration: 87,
        genre: "Ficción",
        rating: "PG-13",
        color: "#3F51B5"
    },
    {
        id: 192,
        title: "The Designer is Dead",
        description: "Dir. Gonzalo Hergueta. Documental EE.UU.-España con subtítulos en español.",
        duration: 86,
        genre: "Documental",
        rating: "PG",
        color: "#607D8B"
    },
    {
        id: 193,
        title: "Resurrection",
        description: "Dir. Bi Gan. Ficción China-Francia.",
        duration: 156,
        genre: "Ficción",
        rating: "R",
        color: "#D32F2F"
    },
    {
        id: 194,
        title: "Más allá del olvido",
        description: "Dir. Hugo del Carril. Clásico argentino de 1955.",
        duration: 94,
        genre: "Clásico",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 195,
        title: "Los olvidados",
        description: "Dir. Luis Buñuel. Obra maestra restaurada de 1950.",
        duration: 80,
        genre: "Clásico",
        rating: "R",
        color: "#000000"
    },
    {
        id: 196,
        title: "Perros",
        description: "Dir. Gerardo Minutti Bonilla. Ficción Uruguay-Argentina.",
        duration: 100,
        genre: "Ficción",
        rating: "PG-13",
        color: "#FF9800"
    },
    {
        id: 197,
        title: "La mancha negra",
        description: "Dir. Yareni Velázquez Mendoza. Cortometraje animado mexicano.",
        duration: 5,
        genre: "Animado",
        rating: "PG",
        color: "#FFEB3B"
    },
    {
        id: 198,
        title: "Malevo",
        description: "Dir. Facundo Ifieguez. Cortometraje animado argentino.",
        duration: 5,
        genre: "Animado",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 199,
        title: "Cómo nace un río",
        description: "Dir. Luma Flóres. Cortometraje animado brasileño.",
        duration: 9,
        genre: "Animado",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 200,
        title: "Raptu",
        description: "Dir. Ivette Ávila. Cortometraje animado cubano.",
        duration: 10,
        genre: "Animado",
        rating: "PG",
        color: "#9C27B0"
    },
    {
        id: 201,
        title: "El jardín",
        description: "Dir. Miguel A. Machado, Carolina Fernandez Vega. Animación Cuba, México, Canadá con subtítulos en inglés.",
        duration: 11,
        genre: "Animado",
        rating: "PG",
        color: "#FF9800"
    },
    {
        id: 202,
        title: "Emechiche, el renacer de los cabeciblancos",
        description: "Dir. Juan Camilo González. Animación Colombia-Argentina.",
        duration: 11,
        genre: "Animado",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 203,
        title: "Cultivando resistencia",
        description: "Dir. Clara Albinati. Animación brasileña con subtítulos en español.",
        duration: 22,
        genre: "Animado",
        rating: "PG",
        color: "#4CAF50"
    },
    {
        id: 204,
        title: "La Grazia",
        description: "Dir. Paolo Sorrentino. Ficción italiana con subtítulos en español.",
        duration: 131,
        genre: "Ficción",
        rating: "R",
        color: "#E91E63"
    },
    {
        id: 205,
        title: "Dreams (Sex Love)",
        description: "Dir. Dag Johan Haugerud. Ficción noruega.",
        duration: 110,
        genre: "Ficción",
        rating: "R",
        color: "#3F51B5"
    },
    {
        id: 206,
        title: "Las tres muertes de un sol",
        description: "Dir. Santiago Londoño Gallego, Nicolas Ortega Baquero. Documental colombiano con subtítulos en inglés.",
        duration: 30,
        genre: "Documental",
        rating: "PG",
        color: "#795548"
    },
    {
        id: 207,
        title: "Tu casa es cultura. Vos sos el creador",
        description: "Dir. Adrián Carrasco Zanini. Documental nicaragüense.",
        duration: 60,
        genre: "Documental",
        rating: "PG",
        color: "#2196F3"
    },
    {
        id: 208,
        title: "Miradas del cine español",
        description: "Dir. Ignacio Ortega, Enrique Izraola. Documental español.",
        duration: 90,
        genre: "Documental",
        rating: "PG",
        color: "#F44336"
    },
    {
        id: 209,
        title: "Hen",
        description: "Dir. György Pálfi. Ficción Alemania, Grecia, Hungría.",
        duration: 96,
        genre: "Ficción",
        rating: "R",
        color: "#9C27B0"
    },
    {
        id: 210,
        title: "Case 137",
        description: "Dir. Dominik Moll. Ficción francesa.",
        duration: 115,
        genre: "Ficción",
        rating: "R",
        color: "#3F51B5"
    },
    {
        id: 211,
        title: "Romería",
        description: "Dir. Carla Simón. Ficción española.",
        duration: 112,
        genre: "Ficción",
        rating: "PG-13",
        color: "#FF9800"
    },
    {
        id: 212,
        title: "Heads or Tails?",
        description: "Dir. Matteo Zoppis, Alessio Rigo de Righi. Ficción italiana.",
        duration: 107,
        genre: "Ficción",
        rating: "R",
        color: "#795548"
    },
    {
        id: 213,
        title: "At Work",
        description: "Dir. Valérie Donzelli. Ficción francesa.",
        duration: 92,
        genre: "Ficción",
        rating: "PG-13",
        color: "#2196F3"
    },
    {
        id: 214,
        title: "Kontinental '25",
        description: "Dir. Radu Jude. Ficción rumana.",
        duration: 109,
        genre: "Ficción",
        rating: "R",
        color: "#3F51B5"
    }
];

// Base de datos de cines extraída del PDF (Nombres reales y teléfonos/ubicación)
const cinemasDatabase = [
    { id: 1, name: "23 Y 12", location: "Calle 23 y 12, Vedado (Tel: 7833-6906)" },
    { id: 2, name: "ACAPULCO", location: "Av. 26, Nuevo Vedado (Tel: 7833-9573)" },
    { id: 3, name: "CHARLES CHAPLIN", location: "Calle 23, Vedado (Tel: 7831-1101)" },
    { id: 4, name: "GLAUBER ROCHA", location: "Fundación (Tel: 7271-8967)" },
    { id: 5, name: "INFANTA SALA 1", location: "Calle Infanta (Tel: 7878-9323)" },
    { id: 6, name: "LA RAMPA", location: "Calle 23, Vedado (Tel: 7836-6146)" },
    { id: 7, name: "RIVIERA", location: "Calle 23, Vedado (Tel: 7830-9564)" },
    { id: 8, name: "ALFREDO GUEVARA (SALA A)", location: "Colegio San Gerónimo" },
    { id: 9, name: "YARA", location: "Calle 23 y L, Vedado (Tel: 7831-1723)" }
];


let screeningsDatabase = [
    // --- VIERNES 5 DICIEMBRE 2025 ---
    { id: 101, movieId: 72, cinemaId: 1, date: "2025-12-05", hour: 10, minute: 0 }, // Oca en 23 y 12
    { id: 102, movieId: 73, cinemaId: 1, date: "2025-12-05", hour: 12, minute: 30 }, // Memoria de "Los olvidados" en 23 y 12
    { id: 103, movieId: 74, cinemaId: 1, date: "2025-12-05", hour: 15, minute: 0 }, // Calle 232 en 23 y 12
    { id: 104, movieId: 75, cinemaId: 1, date: "2025-12-05", hour: 17, minute: 30 }, // Balsanos en 23 y 12
    { id: 105, movieId: 76, cinemaId: 1, date: "2025-12-05", hour: 17, minute: 30 }, // Notas sobre un destierro en 23 y 12
    { id: 106, movieId: 31, cinemaId: 1, date: "2025-12-05", hour: 20, minute: 0 }, // Mecánica nacional en 23 y 12
    { id: 107, movieId: 77, cinemaId: 2, date: "2025-12-05", hour: 10, minute: 0 }, // Vainilla en Acapulco
    { id: 108, movieId: 78, cinemaId: 2, date: "2025-12-05", hour: 12, minute: 30 }, // Una isla en Acapulco
    { id: 109, movieId: 79, cinemaId: 2, date: "2025-12-05", hour: 12, minute: 30 }, // La Fiera del Manglar en Acapulco
    { id: 110, movieId: 80, cinemaId: 2, date: "2025-12-05", hour: 12, minute: 30 }, // Anba Dio en Acapulco
    { id: 111, movieId: 81, cinemaId: 2, date: "2025-12-05", hour: 12, minute: 30 }, // Punto ciego en Acapulco
    { id: 112, movieId: 82, cinemaId: 2, date: "2025-12-05", hour: 12, minute: 30 }, // Pupa en Acapulco
    { id: 113, movieId: 83, cinemaId: 2, date: "2025-12-05", hour: 12, minute: 30 }, // Río sigue siendo lindo en Acapulco
    { id: 114, movieId: 84, cinemaId: 2, date: "2025-12-05", hour: 15, minute: 0 }, // Precisamos Falar en Acapulco
    { id: 115, movieId: 85, cinemaId: 2, date: "2025-12-05", hour: 17, minute: 30 }, // Cartas a mis padres muertos en Acapulco
    { id: 116, movieId: 86, cinemaId: 2, date: "2025-12-05", hour: 20, minute: 0 }, // Torniquete en Acapulco
    { id: 117, movieId: 87, cinemaId: 3, date: "2025-12-05", hour: 10, minute: 0 }, // La hija cóndor en Chaplin
    { id: 118, movieId: 58, cinemaId: 3, date: "2025-12-05", hour: 12, minute: 30 }, // Mudanza en Chaplin
    { id: 119, movieId: 88, cinemaId: 3, date: "2025-12-05", hour: 15, minute: 0 }, // Abajo y a la izquierda en Chaplin
    { id: 120, movieId: 89, cinemaId: 3, date: "2025-12-05", hour: 15, minute: 0 }, // Un volcán es una herida luminosa en Chaplin
    { id: 121, movieId: 90, cinemaId: 3, date: "2025-12-05", hour: 15, minute: 0 }, // ¡Ya México no existirá más! en Chaplin
    { id: 122, movieId: 91, cinemaId: 3, date: "2025-12-05", hour: 17, minute: 30 }, // Cherri en Chaplin
    { id: 123, movieId: 92, cinemaId: 3, date: "2025-12-05", hour: 20, minute: 0 }, // Nancy en Chaplin
    { id: 124, movieId: 39, cinemaId: 5, date: "2025-12-05", hour: 15, minute: 0 }, // Una directora extraordinaria en Infanta
    { id: 125, movieId: 93, cinemaId: 5, date: "2025-12-05", hour: 17, minute: 30 }, // Mi tierra extranjera en Infanta
    { id: 126, movieId: 42, cinemaId: 5, date: "2025-12-05", hour: 20, minute: 0 }, // El novio de mamá en Infanta
    { id: 127, movieId: 68, cinemaId: 6, date: "2025-12-05", hour: 15, minute: 0 }, // Una casa con dos perros en La Rampa
    { id: 128, movieId: 144, cinemaId: 6, date: "2025-12-05", hour: 17, minute: 30 }, // Múltiples: Los recorridos literarios de Frei Betto en La Rampa
    { id: 129, movieId: 67, cinemaId: 6, date: "2025-12-05", hour: 20, minute: 0 }, // La casa en La Rampa
    { id: 130, movieId: 94, cinemaId: 7, date: "2025-12-05", hour: 15, minute: 0 }, // Agua y acero en Riviera
    { id: 131, movieId: 95, cinemaId: 7, date: "2025-12-05", hour: 15, minute: 0 }, // El viaje del pastor en Riviera
    { id: 132, movieId: 59, cinemaId: 7, date: "2025-12-05", hour: 17, minute: 30 }, // Melodrama en Riviera
    { id: 133, movieId: 96, cinemaId: 7, date: "2025-12-05", hour: 20, minute: 0 }, // El mundo es afuera en Riviera
    { id: 134, movieId: 60, cinemaId: 7, date: "2025-12-05", hour: 20, minute: 0 }, // Muña Muña en Riviera
    { id: 135, movieId: 97, cinemaId: 9, date: "2025-12-05", hour: 10, minute: 0 }, // Bajo las banderas, el sol en Yara
    { id: 136, movieId: 98, cinemaId: 9, date: "2025-12-05", hour: 12, minute: 30 }, // Drácula de las Pampas en Yara
    { id: 137, movieId: 99, cinemaId: 9, date: "2025-12-05", hour: 12, minute: 30 }, // Ecocidio en Yara
    { id: 138, movieId: 100, cinemaId: 9, date: "2025-12-05", hour: 12, minute: 30 }, // Corazón de las tinieblas en Yara
    { id: 139, movieId: 101, cinemaId: 9, date: "2025-12-05", hour: 15, minute: 0 }, // La luz en Yara
    { id: 140, movieId: 102, cinemaId: 9, date: "2025-12-05", hour: 17, minute: 30 }, // Calle Málaga en Yara
    { id: 141, movieId: 103, cinemaId: 9, date: "2025-12-05", hour: 20, minute: 0 }, // The Heart is a Muscle en Yara
    // --- SÁBADO 6 DICIEMBRE 2025 ---
    { id: 142, movieId: 88, cinemaId: 1, date: "2025-12-06", hour: 10, minute: 0 }, // Abajo y a la izquierda en 23 y 12
    { id: 143, movieId: 89, cinemaId: 1, date: "2025-12-06", hour: 10, minute: 0 }, // Un volcán es una herida luminosa en 23 y 12
    { id: 144, movieId: 90, cinemaId: 1, date: "2025-12-06", hour: 10, minute: 0 }, // ¡Ya México no existirá más! en 23 y 12
    { id: 145, movieId: 85, cinemaId: 1, date: "2025-12-06", hour: 12, minute: 30 }, // Cartas a mis padres muertos en 23 y 12
    { id: 146, movieId: 78, cinemaId: 1, date: "2025-12-06", hour: 15, minute: 0 }, // Una isla en 23 y 12
    { id: 147, movieId: 79, cinemaId: 1, date: "2025-12-06", hour: 15, minute: 0 }, // La Fiera del Manglar en 23 y 12
    { id: 148, movieId: 80, cinemaId: 1, date: "2025-12-06", hour: 15, minute: 0 }, // Anba Dio en 23 y 12
    { id: 149, movieId: 81, cinemaId: 1, date: "2025-12-06", hour: 15, minute: 0 }, // Punto ciego en 23 y 12
    { id: 150, movieId: 82, cinemaId: 1, date: "2025-12-06", hour: 15, minute: 0 }, // Pupa en 23 y 12
    { id: 151, movieId: 83, cinemaId: 1, date: "2025-12-06", hour: 15, minute: 0 }, // Río sigue siendo lindo en 23 y 12
    { id: 152, movieId: 98, cinemaId: 1, date: "2025-12-06", hour: 17, minute: 30 }, // Drácula de las Pampas en 23 y 12
    { id: 153, movieId: 99, cinemaId: 1, date: "2025-12-06", hour: 17, minute: 30 }, // Ecocidio en 23 y 12
    { id: 154, movieId: 100, cinemaId: 1, date: "2025-12-06", hour: 17, minute: 30 }, // Corazón de las tinieblas en 23 y 12
    { id: 155, movieId: 104, cinemaId: 1, date: "2025-12-06", hour: 20, minute: 0 }, // El castillo de la pureza en 23 y 12
    { id: 156, movieId: 105, cinemaId: 2, date: "2025-12-06", hour: 10, minute: 0 }, // El diablo fuma en Acapulco
    { id: 157, movieId: 106, cinemaId: 2, date: "2025-12-06", hour: 12, minute: 30 }, // Casting para Carmen en Acapulco
    { id: 158, movieId: 107, cinemaId: 2, date: "2025-12-06", hour: 12, minute: 30 }, // El amor no cabe en la sala en Acapulco
    { id: 159, movieId: 108, cinemaId: 2, date: "2025-12-06", hour: 12, minute: 30 }, // La barbarie en Acapulco
    { id: 160, movieId: 109, cinemaId: 2, date: "2025-12-06", hour: 12, minute: 30 }, // Las Maravillas en Acapulco
    { id: 161, movieId: 110, cinemaId: 2, date: "2025-12-06", hour: 12, minute: 30 }, // Cuéntale a ella lo que me pasó en Acapulco
    { id: 162, movieId: 111, cinemaId: 2, date: "2025-12-06", hour: 15, minute: 0 }, // Baracoa en Acapulco
    { id: 163, movieId: 112, cinemaId: 2, date: "2025-12-06", hour: 17, minute: 30 }, // Hijo de tigre y mula en Acapulco
    { id: 164, movieId: 84, cinemaId: 2, date: "2025-12-06", hour: 20, minute: 0 }, // Precisamos Falar en Acapulco
    { id: 165, movieId: 113, cinemaId: 3, date: "2025-12-06", hour: 10, minute: 0 }, // Bajo el mismo sol en Chaplin
    { id: 166, movieId: 77, cinemaId: 3, date: "2025-12-06", hour: 12, minute: 30 }, // Vainilla en Chaplin
    { id: 167, movieId: 114, cinemaId: 3, date: "2025-12-06", hour: 15, minute: 0 }, // El origen del mundo en Chaplin
    { id: 168, movieId: 115, cinemaId: 3, date: "2025-12-06", hour: 15, minute: 0 }, // Post- Familia en Chaplin
    { id: 169, movieId: 116, cinemaId: 3, date: "2025-12-06", hour: 15, minute: 0 }, // Dos veces bestia en Chaplin
    { id: 170, movieId: 87, cinemaId: 3, date: "2025-12-06", hour: 17, minute: 30 }, // La hija cóndor en Chaplin
    { id: 171, movieId: 117, cinemaId: 3, date: "2025-12-06", hour: 20, minute: 0 }, // Neurótica anónima en Chaplin
    { id: 172, movieId: 14, cinemaId: 4, date: "2025-12-06", hour: 10, minute: 0 }, // Arráncame la vida en Glauber Rocha
    { id: 173, movieId: 38, cinemaId: 4, date: "2025-12-06", hour: 14, minute: 30 }, // Mario Rivas, un artista con suerte en Glauber Rocha
    { id: 174, movieId: 96, cinemaId: 5, date: "2025-12-06", hour: 15, minute: 0 }, // El mundo es afuera en Infanta
    { id: 175, movieId: 60, cinemaId: 5, date: "2025-12-06", hour: 15, minute: 0 }, // Muña Muña en Infanta
    { id: 176, movieId: 94, cinemaId: 5, date: "2025-12-06", hour: 17, minute: 30 }, // Agua y acero en Infanta
    { id: 177, movieId: 95, cinemaId: 5, date: "2025-12-06", hour: 17, minute: 30 }, // El viaje del pastor en Infanta
    { id: 178, movieId: 118, cinemaId: 5, date: "2025-12-06", hour: 20, minute: 0 }, // Entre dos tierras en Infanta
    { id: 179, movieId: 97, cinemaId: 6, date: "2025-12-06", hour: 15, minute: 0 }, // Bajo las banderas, el sol en La Rampa
    { id: 180, movieId: 69, cinemaId: 6, date: "2025-12-06", hour: 17, minute: 30 }, // Homo Argentum en La Rampa
    { id: 181, movieId: 59, cinemaId: 6, date: "2025-12-06", hour: 20, minute: 0 }, // Melodrama en La Rampa
    { id: 182, movieId: 119, cinemaId: 7, date: "2025-12-06", hour: 15, minute: 0 }, // Músicas en Riviera
    { id: 183, movieId: 120, cinemaId: 7, date: "2025-12-06", hour: 15, minute: 0 }, // Lorca en La Habana en Riviera
    { id: 184, movieId: 121, cinemaId: 7, date: "2025-12-06", hour: 17, minute: 30 }, // Yendo en Riviera
    { id: 185, movieId: 33, cinemaId: 7, date: "2025-12-06", hour: 20, minute: 0 }, // Baixada: En las aguas de Cubatão en Riviera
    { id: 186, movieId: 34, cinemaId: 7, date: "2025-12-06", hour: 20, minute: 0 }, // Cuadrilátero en Riviera
    { id: 187, movieId: 122, cinemaId: 9, date: "2025-12-06", hour: 10, minute: 0 }, // Eco de luz en Yara
    { id: 188, movieId: 123, cinemaId: 9, date: "2025-12-06", hour: 12, minute: 30 }, // La niña y el mar en Yara
    { id: 189, movieId: 124, cinemaId: 9, date: "2025-12-06", hour: 12, minute: 30 }, // Mi mejor amiga en Yara
    { id: 190, movieId: 125, cinemaId: 9, date: "2025-12-06", hour: 12, minute: 30 }, // Dolores (animado) en Yara
    { id: 191, movieId: 126, cinemaId: 9, date: "2025-12-06", hour: 12, minute: 30 }, // La gran historia de la filosofía occidental en Yara
    { id: 192, movieId: 54, cinemaId: 9, date: "2025-12-06", hour: 15, minute: 0 }, // El agente secreto en Yara
    { id: 193, movieId: 127, cinemaId: 9, date: "2025-12-06", hour: 17, minute: 30 }, // Los domingos en Yara
    { id: 194, movieId: 128, cinemaId: 9, date: "2025-12-06", hour: 20, minute: 0 }, // Homebound en Yara
    // --- DOMINGO 7 DICIEMBRE 2025 ---
    { id: 195, movieId: 114, cinemaId: 1, date: "2025-12-07", hour: 10, minute: 0 }, // El origen del mundo en 23 y 12
    { id: 196, movieId: 115, cinemaId: 1, date: "2025-12-07", hour: 10, minute: 0 }, // Post- Familia en 23 y 12
    { id: 197, movieId: 116, cinemaId: 1, date: "2025-12-07", hour: 10, minute: 0 }, // Dos veces bestia en 23 y 12
    { id: 198, movieId: 112, cinemaId: 1, date: "2025-12-07", hour: 12, minute: 30 }, // Hijo de tigre y mula en 23 y 12
    { id: 199, movieId: 106, cinemaId: 1, date: "2025-12-07", hour: 15, minute: 0 }, // Casting para Carmen en 23 y 12
    { id: 200, movieId: 107, cinemaId: 1, date: "2025-12-07", hour: 15, minute: 0 }, // El amor no cabe en la sala en 23 y 12
    { id: 201, movieId: 108, cinemaId: 1, date: "2025-12-07", hour: 15, minute: 0 }, // La barbarie en 23 y 12
    { id: 202, movieId: 109, cinemaId: 1, date: "2025-12-07", hour: 15, minute: 0 }, // Las Maravillas en 23 y 12
    { id: 203, movieId: 110, cinemaId: 1, date: "2025-12-07", hour: 15, minute: 0 }, // Cuéntale a ella lo que me pasó en 23 y 12
    { id: 204, movieId: 123, cinemaId: 1, date: "2025-12-07", hour: 17, minute: 30 }, // La niña y el mar en 23 y 12
    { id: 205, movieId: 124, cinemaId: 1, date: "2025-12-07", hour: 17, minute: 30 }, // Mi mejor amiga en 23 y 12
    { id: 206, movieId: 125, cinemaId: 1, date: "2025-12-07", hour: 17, minute: 30 }, // Dolores (animado) en 23 y 12
    { id: 207, movieId: 126, cinemaId: 1, date: "2025-12-07", hour: 17, minute: 30 }, // La gran historia de la filosofía occidental en 23 y 12
    { id: 208, movieId: 49, cinemaId: 1, date: "2025-12-07", hour: 20, minute: 0 }, // Cadena perpetua en 23 y 12
    { id: 209, movieId: 129, cinemaId: 2, date: "2025-12-07", hour: 10, minute: 0 }, // La naturaleza de las cosas invisibles en Acapulco
    { id: 210, movieId: 130, cinemaId: 2, date: "2025-12-07", hour: 12, minute: 30 }, // Compraventa en Acapulco
    { id: 211, movieId: 131, cinemaId: 2, date: "2025-12-07", hour: 12, minute: 30 }, // El día interrumpido en Acapulco
    { id: 212, movieId: 132, cinemaId: 2, date: "2025-12-07", hour: 12, minute: 30 }, // Nocturno en Acapulco
    { id: 213, movieId: 133, cinemaId: 2, date: "2025-12-07", hour: 12, minute: 30 }, // Domingo familiar en Acapulco
    { id: 214, movieId: 134, cinemaId: 2, date: "2025-12-07", hour: 12, minute: 30 }, // El último juego en Acapulco
    { id: 215, movieId: 135, cinemaId: 2, date: "2025-12-07", hour: 12, minute: 30 }, // Casa chica en Acapulco
    { id: 216, movieId: 136, cinemaId: 2, date: "2025-12-07", hour: 15, minute: 0 }, // La misteriosa mirada del flamenco en Acapulco
    { id: 217, movieId: 137, cinemaId: 2, date: "2025-12-07", hour: 17, minute: 30 }, // Mijaín en Acapulco
    { id: 218, movieId: 111, cinemaId: 2, date: "2025-12-07", hour: 20, minute: 0 }, // Baracoa en Acapulco
    { id: 219, movieId: 139, cinemaId: 3, date: "2025-12-07", hour: 10, minute: 0 }, // Cuerpo Celeste en Chaplin
    { id: 220, movieId: 105, cinemaId: 3, date: "2025-12-07", hour: 12, minute: 30 }, // El diablo fuma en Chaplin
    { id: 221, movieId: 140, cinemaId: 3, date: "2025-12-07", hour: 15, minute: 0 }, // Este no es tu jardín en Chaplin
    { id: 222, movieId: 141, cinemaId: 3, date: "2025-12-07", hour: 15, minute: 0 }, // Frío metal en Chaplin
    { id: 223, movieId: 113, cinemaId: 3, date: "2025-12-07", hour: 17, minute: 30 }, // Bajo el mismo sol en Chaplin
    { id: 224, movieId: 142, cinemaId: 3, date: "2025-12-07", hour: 20, minute: 0 }, // Belén en Chaplin
    { id: 225, movieId: 143, cinemaId: 4, date: "2025-12-07", hour: 10, minute: 0 }, // Nudo mixteco en Glauber Rocha
    { id: 226, movieId: 144, cinemaId: 4, date: "2025-12-07", hour: 14, minute: 30 }, // Múltiples: Los recorridos literarios de Frei Betto en Glauber Rocha
    { id: 227, movieId: 41, cinemaId: 5, date: "2025-12-07", hour: 15, minute: 0 }, // La lata en Infanta
    { id: 228, movieId: 145, cinemaId: 5, date: "2025-12-07", hour: 15, minute: 0 }, // Berezada en Infanta
    { id: 229, movieId: 146, cinemaId: 5, date: "2025-12-07", hour: 17, minute: 30 }, // En la caliente en Infanta
    { id: 230, movieId: 61, cinemaId: 5, date: "2025-12-07", hour: 20, minute: 0 }, // Un cabo suelto en Infanta
    { id: 231, movieId: 122, cinemaId: 6, date: "2025-12-07", hour: 15, minute: 0 }, // Eco de luz en La Rampa
    { id: 232, movieId: 32, cinemaId: 6, date: "2025-12-07", hour: 17, minute: 30 }, // Leyendo el mundo en La Rampa
    { id: 233, movieId: 57, cinemaId: 6, date: "2025-12-07", hour: 20, minute: 0 }, // (Des)control en La Rampa
    { id: 234, movieId: 153, cinemaId: 7, date: "2025-12-07", hour: 15, minute: 0 }, // Forenses en Riviera
    { id: 235, movieId: 187, cinemaId: 7, date: "2025-12-07", hour: 17, minute: 30 }, // Película sin querer en Riviera
    { id: 236, movieId: 92, cinemaId: 7, date: "2025-12-07", hour: 17, minute: 30 }, // Nancy en Riviera
    { id: 237, movieId: 196, cinemaId: 7, date: "2025-12-07", hour: 20, minute: 0 }, // Perros en Riviera
    { id: 238, movieId: 153, cinemaId: 9, date: "2025-12-07", hour: 10, minute: 0 }, // Forenses en Yara
    { id: 239, movieId: 197, cinemaId: 9, date: "2025-12-07", hour: 12, minute: 30 }, // La mancha negra en Yara
    { id: 240, movieId: 198, cinemaId: 9, date: "2025-12-07", hour: 12, minute: 30 }, // Malevo en Yara
    { id: 241, movieId: 199, cinemaId: 9, date: "2025-12-07", hour: 12, minute: 30 }, // Cómo nace un río en Yara
    { id: 242, movieId: 200, cinemaId: 9, date: "2025-12-07", hour: 12, minute: 30 }, // Raptu en Yara
    { id: 243, movieId: 201, cinemaId: 9, date: "2025-12-07", hour: 12, minute: 30 }, // El jardín en Yara
    { id: 244, movieId: 202, cinemaId: 9, date: "2025-12-07", hour: 12, minute: 30 }, // Emechiche, el renacer de los cabeciblancos en Yara
    { id: 245, movieId: 203, cinemaId: 9, date: "2025-12-07", hour: 12, minute: 30 }, // Cultivando resistencia en Yara
    { id: 246, movieId: 117, cinemaId: 9, date: "2025-12-07", hour: 15, minute: 0 }, // Neurótica anónima en Yara
    { id: 247, movieId: 204, cinemaId: 9, date: "2025-12-07", hour: 17, minute: 30 }, // La Grazia en Yara
    { id: 248, movieId: 205, cinemaId: 9, date: "2025-12-07", hour: 20, minute: 0 }, // Dreams (Sex Love) en Yara
    // --- LUNES 8 DICIEMBRE 2025 ---
    { id: 249, movieId: 140, cinemaId: 1, date: "2025-12-08", hour: 10, minute: 0 }, // Este no es tu jardín en 23 y 12
    { id: 250, movieId: 141, cinemaId: 1, date: "2025-12-08", hour: 10, minute: 0 }, // Frío metal en 23 y 12
    { id: 251, movieId: 137, cinemaId: 1, date: "2025-12-08", hour: 12, minute: 30 }, // Mijaín en 23 y 12
    { id: 252, movieId: 130, cinemaId: 1, date: "2025-12-08", hour: 15, minute: 0 }, // Compraventa en 23 y 12
    { id: 253, movieId: 131, cinemaId: 1, date: "2025-12-08", hour: 15, minute: 0 }, // El día interrumpido en 23 y 12
    { id: 254, movieId: 132, cinemaId: 1, date: "2025-12-08", hour: 15, minute: 0 }, // Nocturno en 23 y 12
    { id: 255, movieId: 133, cinemaId: 1, date: "2025-12-08", hour: 15, minute: 0 }, // Domingo familiar en 23 y 12
    { id: 256, movieId: 134, cinemaId: 1, date: "2025-12-08", hour: 15, minute: 0 }, // El último juego en 23 y 12
    { id: 257, movieId: 135, cinemaId: 1, date: "2025-12-08", hour: 15, minute: 0 }, // Casa chica en 23 y 12
    { id: 258, movieId: 197, cinemaId: 1, date: "2025-12-08", hour: 17, minute: 30 }, // La mancha negra en 23 y 12
    { id: 259, movieId: 198, cinemaId: 1, date: "2025-12-08", hour: 17, minute: 30 }, // Malevo en 23 y 12
    { id: 260, movieId: 199, cinemaId: 1, date: "2025-12-08", hour: 17, minute: 30 }, // Cómo nace un río en 23 y 12
    { id: 261, movieId: 200, cinemaId: 1, date: "2025-12-08", hour: 17, minute: 30 }, // Raptu en 23 y 12
    { id: 262, movieId: 201, cinemaId: 1, date: "2025-12-08", hour: 17, minute: 30 }, // El jardín en 23 y 12
    { id: 263, movieId: 202, cinemaId: 1, date: "2025-12-08", hour: 17, minute: 30 }, // Emechiche, el renacer de los cabeciblancos en 23 y 12
    { id: 264, movieId: 203, cinemaId: 1, date: "2025-12-08", hour: 17, minute: 30 }, // Cultivando resistencia en 23 y 12
    { id: 265, movieId: 173, cinemaId: 1, date: "2025-12-08", hour: 20, minute: 0 }, // Solo con tu pareja en 23 y 12
    { id: 266, movieId: 125, cinemaId: 2, date: "2025-12-08", hour: 10, minute: 0 }, // Si no ardemos, cómo iluminar la noche en Acapulco
    { id: 267, movieId: 3, cinemaId: 2, date: "2025-12-08", hour: 12, minute: 30 }, // Cubeta en Acapulco
    { id: 268, movieId: 4, cinemaId: 2, date: "2025-12-08", hour: 12, minute: 30 }, // Norheimsund en Acapulco
    { id: 269, movieId: 5, cinemaId: 2, date: "2025-12-08", hour: 12, minute: 30 }, // Blue Heart en Acapulco
    { id: 270, movieId: 6, cinemaId: 2, date: "2025-12-08", hour: 12, minute: 30 }, // Barbed Wire en Acapulco
    { id: 271, movieId: 7, cinemaId: 2, date: "2025-12-08", hour: 12, minute: 30 }, // Humedal en Acapulco
    { id: 272, movieId: 8, cinemaId: 2, date: "2025-12-08", hour: 12, minute: 30 }, // Tespis Teporocho en Acapulco
    { id: 273, movieId: 23, cinemaId: 2, date: "2025-12-08", hour: 15, minute: 0 }, // El infierno de los vivos en Acapulco
    { id: 274, movieId: 2, cinemaId: 2, date: "2025-12-08", hour: 17, minute: 30 }, // Boca Vieja en Acapulco
    { id: 275, movieId: 136, cinemaId: 2, date: "2025-12-08", hour: 20, minute: 0 }, // La misteriosa mirada del flamenco en Acapulco
    { id: 276, movieId: 30, cinemaId: 3, date: "2025-12-08", hour: 10, minute: 0 }, // En el camino en Chaplin
    { id: 277, movieId: 129, cinemaId: 3, date: "2025-12-08", hour: 12, minute: 30 }, // La naturaleza de las cosas invisibles en Chaplin
    { id: 278, movieId: 1, cinemaId: 3, date: "2025-12-08", hour: 15, minute: 0 }, // Luna Rosa: La séptima ascensión de Atabey en Chaplin
    { id: 279, movieId: 139, cinemaId: 3, date: "2025-12-08", hour: 17, minute: 30 }, // Cuerpo Celeste en Chaplin
    { id: 280, movieId: 165, cinemaId: 3, date: "2025-12-08", hour: 20, minute: 0 }, // Un poeta en Chaplin
    { id: 281, movieId: 187, cinemaId: 5, date: "2025-12-08", hour: 15, minute: 0 }, // Samba infinita en Infanta
    { id: 282, movieId: 67, cinemaId: 5, date: "2025-12-08", hour: 15, minute: 0 }, // La casa en Infanta
    { id: 283, movieId: 119, cinemaId: 5, date: "2025-12-08", hour: 17, minute: 30 }, // Músicas en Infanta
    { id: 284, movieId: 120, cinemaId: 5, date: "2025-12-08", hour: 17, minute: 30 }, // Lorca en La Habana en Infanta
    { id: 285, movieId: 148, cinemaId: 5, date: "2025-12-08", hour: 20, minute: 0 }, // Pensamiento lateral en Infanta
    { id: 286, movieId: 146, cinemaId: 6, date: "2025-12-08", hour: 15, minute: 0 }, // En la caliente en La Rampa
    { id: 287, movieId: 149, cinemaId: 6, date: "2025-12-08", hour: 17, minute: 30 }, // Escritor en La Rampa
    { id: 288, movieId: 150, cinemaId: 6, date: "2025-12-08", hour: 20, minute: 0 }, // Historia de un baño en La Rampa
    { id: 289, movieId: 151, cinemaId: 6, date: "2025-12-08", hour: 20, minute: 0 }, // La miel inmaculada en La Rampa
    { id: 290, movieId: 152, cinemaId: 6, date: "2025-12-08", hour: 20, minute: 0 }, // El Claro en La Rampa
    { id: 291, movieId: 153, cinemaId: 7, date: "2025-12-08", hour: 15, minute: 0 }, // Forenses en Riviera
    { id: 292, movieId: 39, cinemaId: 7, date: "2025-12-08", hour: 17, minute: 30 }, // Una directora extraordinaria en Riviera
    { id: 293, movieId: 154, cinemaId: 7, date: "2025-12-08", hour: 20, minute: 0 }, // Una torreta en llamas en Riviera
    { id: 294, movieId: 118, cinemaId: 7, date: "2025-12-08", hour: 20, minute: 0 }, // Entre dos tierras en Riviera
    { id: 295, movieId: 31, cinemaId: 8, date: "2025-12-08", hour: 10, minute: 0 }, // Mecánica nacional en Alfredo Guevara
    { id: 296, movieId: 104, cinemaId: 8, date: "2025-12-08", hour: 15, minute: 0 }, // El castillo de la pureza en Alfredo Guevara
    { id: 297, movieId: 162, cinemaId: 9, date: "2025-12-08", hour: 10, minute: 0 }, // El príncipe de Nanawa en Yara
    { id: 298, movieId: 51, cinemaId: 9, date: "2025-12-08", hour: 12, minute: 30 }, // Halker en Yara
    { id: 52, cinemaId: 9, date: "2025-12-08", hour: 12, minute: 30 }, // Iris de Cristal en Yara
    { id: 53, cinemaId: 9, date: "2025-12-08", hour: 12, minute: 30 }, // Safo en Yara
    { id: 54, cinemaId: 9, date: "2025-12-08", hour: 12, minute: 30 }, // Como si la tierra se las hubiera tragado en Yara
    { id: 55, cinemaId: 9, date: "2025-12-08", hour: 12, minute: 30 }, // Merrimundi en Yara
    { id: 299, movieId: 142, cinemaId: 9, date: "2025-12-08", hour: 15, minute: 0 }, // Belén en Yara
    { id: 300, movieId: 53, cinemaId: 9, date: "2025-12-08", hour: 17, minute: 30 }, // Sendero azul en Yara
    { id: 301, movieId: 155, cinemaId: 9, date: "2025-12-08", hour: 20, minute: 0 }, // Living the Land en Yara
    // --- MARTES 9 DICIEMBRE 2025 ---
    { id: 302, movieId: 1, cinemaId: 1, date: "2025-12-09", hour: 10, minute: 0 }, // Luna Rosa: La séptima ascensión de Atabey en 23 y 12
    { id: 303, movieId: 2, cinemaId: 1, date: "2025-12-09", hour: 12, minute: 30 }, // Boca Vieja en 23 y 12
    { id: 304, movieId: 3, cinemaId: 1, date: "2025-12-09", hour: 15, minute: 0 }, // Cubeta en 23 y 12
    { id: 305, movieId: 4, cinemaId: 1, date: "2025-12-09", hour: 15, minute: 0 }, // Norheimsund en 23 y 12
    { id: 306, movieId: 5, cinemaId: 1, date: "2025-12-09", hour: 15, minute: 0 }, // Blue Heart en 23 y 12
    { id: 307, movieId: 6, cinemaId: 1, date: "2025-12-09", hour: 15, minute: 0 }, // Barbed Wire en 23 y 12
    { id: 308, movieId: 7, cinemaId: 1, date: "2025-12-09", hour: 15, minute: 0 }, // Humedal en 23 y 12
    { id: 309, movieId: 8, cinemaId: 1, date: "2025-12-09", hour: 15, minute: 0 }, // Tespis Teporocho en 23 y 12
    { id: 310, movieId: 9, cinemaId: 1, date: "2025-12-09", hour: 17, minute: 30 }, // Una vez en un cuerpo en 23 y 12
    { id: 311, movieId: 10, cinemaId: 1, date: "2025-12-09", hour: 17, minute: 30 }, // Iris de Cristal en 23 y 12
    { id: 312, movieId: 11, cinemaId: 1, date: "2025-12-09", hour: 17, minute: 30 }, // Safo en 23 y 12
    { id: 313, movieId: 12, cinemaId: 1, date: "2025-12-09", hour: 17, minute: 30 }, // Como si la tierra se las hubiera tragado en 23 y 12
    { id: 314, movieId: 13, cinemaId: 1, date: "2025-12-09", hour: 17, minute: 30 }, // Merrimundi en 23 y 12
    { id: 315, movieId: 14, cinemaId: 1, date: "2025-12-09", hour: 20, minute: 0 }, // Arráncame la vida en 23 y 12
    { id: 316, movieId: 15, cinemaId: 2, date: "2025-12-09", hour: 10, minute: 0 }, // Eva en Acapulco
    { id: 317, movieId: 16, cinemaId: 2, date: "2025-12-09", hour: 12, minute: 30 }, // 09/05/1982 en Acapulco
    { id: 318, movieId: 17, cinemaId: 2, date: "2025-12-09", hour: 12, minute: 30 }, // Tiempo detenido en Acapulco
    { id: 319, movieId: 18, cinemaId: 2, date: "2025-12-09", hour: 12, minute: 30 }, // Atardecer en América en Acapulco
    { id: 320, movieId: 19, cinemaId: 2, date: "2025-12-09", hour: 12, minute: 30 }, // Sueña ahora en Acapulco
    { id: 321, movieId: 20, cinemaId: 2, date: "2025-12-09", hour: 12, minute: 30 }, // Tierra enferma en Acapulco
    { id: 322, movieId: 21, cinemaId: 2, date: "2025-12-09", hour: 15, minute: 0 }, // Esta isla en Acapulco
    { id: 323, movieId: 22, cinemaId: 2, date: "2025-12-09", hour: 17, minute: 30 }, // Nuestra tierra en Acapulco
    { id: 324, movieId: 23, cinemaId: 2, date: "2025-12-09", hour: 20, minute: 0 }, // El infierno de los vivos en Acapulco
    { id: 325, movieId: 24, cinemaId: 3, date: "2025-12-09", hour: 10, minute: 0 }, // ¡Caigan las rosas blancas! en Chaplin
    { id: 326, movieId: 25, cinemaId: 3, date: "2025-12-09", hour: 12, minute: 30 }, // Si no ardemos, cómo iluminar la noche en Chaplin
    { id: 327, movieId: 26, cinemaId: 3, date: "2025-12-09", hour: 15, minute: 0 }, // ¿Cómo suturar la tierra? en Chaplin
    { id: 328, movieId: 27, cinemaId: 3, date: "2025-12-09", hour: 15, minute: 0 }, // Piel de toro muerto en Chaplin
    { id: 329, movieId: 28, cinemaId: 3, date: "2025-12-09", hour: 15, minute: 0 }, // Croma en Chaplin
    { id: 330, movieId: 29, cinemaId: 3, date: "2025-12-09", hour: 17, minute: 30 }, // Hiedra en Chaplin
    { id: 331, movieId: 30, cinemaId: 3, date: "2025-12-09", hour: 20, minute: 0 }, // En el camino en Chaplin
    { id: 332, movieId: 31, cinemaId: 4, date: "2025-12-09", hour: 10, minute: 0 }, // Mecánica nacional en Glauber Rocha
    { id: 333, movieId: 32, cinemaId: 4, date: "2025-12-09", hour: 14, minute: 30 }, // Leyendo el mundo en Glauber Rocha
    { id: 334, movieId: 33, cinemaId: 5, date: "2025-12-09", hour: 15, minute: 0 }, // Baixada: En las aguas de Cubatão en Infanta
    { id: 335, movieId: 34, cinemaId: 5, date: "2025-12-09", hour: 15, minute: 0 }, // Cuadrilátero en Infanta
    { id: 336, movieId: 35, cinemaId: 5, date: "2025-12-09", hour: 17, minute: 30 }, // Elogio de la rebelión en Infanta
    { id: 337, movieId: 36, cinemaId: 5, date: "2025-12-09", hour: 20, minute: 0 }, // Dolores en Infanta
    { id: 338, movieId: 37, cinemaId: 6, date: "2025-12-09", hour: 15, minute: 0 }, // El príncipe de Nanawa en La Rampa
    { id: 339, movieId: 38, cinemaId: 6, date: "2025-12-09", hour: 17, minute: 30 }, // Mario Rivas, un artista con suerte en La Rampa
    { id: 340, movieId: 39, cinemaId: 6, date: "2025-12-09", hour: 20, minute: 0 }, // Una directora extraordinaria en La Rampa
    { id: 341, movieId: 40, cinemaId: 7, date: "2025-12-09", hour: 15, minute: 0 }, // El octubre de Valdivia en Riviera
    { id: 342, movieId: 41, cinemaId: 7, date: "2025-12-09", hour: 17, minute: 30 }, // La lata en Riviera
    { id: 343, movieId: 42, cinemaId: 7, date: "2025-12-09", hour: 17, minute: 30 }, // El novio de mamá en Riviera
    { id: 344, movieId: 43, cinemaId: 7, date: "2025-12-09", hour: 20, minute: 0 }, // Cuatro estrellas en Riviera
    { id: 345, movieId: 44, cinemaId: 8, date: "2025-12-09", hour: 10, minute: 0 }, // Paz del corazón en Alfredo Guevara
    { id: 346, movieId: 45, cinemaId: 8, date: "2025-12-09", hour: 10, minute: 0 }, // Bodas de diamante en Alfredo Guevara
    { id: 347, movieId: 46, cinemaId: 8, date: "2025-12-09", hour: 10, minute: 0 }, // La Reina del Arenque en Alfredo Guevara
    { id: 348, movieId: 47, cinemaId: 8, date: "2025-12-09", hour: 10, minute: 0 }, // Volver a pasar en Alfredo Guevara
    { id: 349, movieId: 48, cinemaId: 8, date: "2025-12-09", hour: 10, minute: 0 }, // Las flores se paran en silencio, atestiguando en Alfredo Guevara
    { id: 350, movieId: 49, cinemaId: 8, date: "2025-12-09", hour: 15, minute: 0 }, // Cadena perpetua en Alfredo Guevara
    { id: 351, movieId: 50, cinemaId: 9, date: "2025-12-09", hour: 10, minute: 0 }, // Todo documento de civilización en Yara
    { id: 352, movieId: 51, cinemaId: 9, date: "2025-12-09", hour: 12, minute: 30 }, // Halker en Yara
    { id: 353, movieId: 52, cinemaId: 9, date: "2025-12-09", hour: 12, minute: 30 }, // Revoada - Versión Steampunk en Yara
    { id: 354, movieId: 53, cinemaId: 9, date: "2025-12-09", hour: 15, minute: 0 }, // Sendero azul en Yara
    { id: 355, movieId: 54, cinemaId: 9, date: "2025-12-09", hour: 17, minute: 30 }, // El agente secreto en Yara
    { id: 356, movieId: 55, cinemaId: 9, date: "2025-12-09", hour: 20, minute: 0 } // Sound of Falling en Yara
];

const state = {
    selectedMovies: new Set(),
    currentWeekStart: new Date(),
    searchTerm: "",
    selectedCinema: "all",
    selectedDay: "all",
    conflicts: [],
    hiddenScreenings: new Set()  // Nuevo: almacena las proyecciones ocultas
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    filterScreeningsByTimeRange();
    initApp();
});

function initApp() {
    // Configurar la semana actual
    setCurrentWeek();
    
    // Inicializar elementos de la UI
    populateCinemaFilter();
    populateDayFilter();
    renderMoviesList();
    renderWeekView();
    renderSelectedMovies();
    
    // Configurar eventos
    setupEventListeners();
    
    // Detectar conflictos iniciales
    detectConflicts();
}

// Configurar eventos
function setupEventListeners() {
    // Búsqueda
    document.getElementById('searchInput').addEventListener('input', function(e) {
        state.searchTerm = e.target.value.toLowerCase();
        renderMoviesList();
    });
    
    document.getElementById('searchBtn').addEventListener('click', function() {
        state.searchTerm = document.getElementById('searchInput').value.toLowerCase();
        renderMoviesList();
    });
    
    // Filtros
    document.getElementById('cineFilter').addEventListener('change', function(e) {
        state.selectedCinema = e.target.value;
        renderMoviesList();
        renderWeekView();
    });
    
    document.getElementById('dayFilter').addEventListener('change', function(e) {
        state.selectedDay = e.target.value;
        renderMoviesList();
        renderWeekView();
    });
    
    // Navegación de semana
    document.getElementById('prevWeek').addEventListener('click', function() {
        changeWeek(-7);
    });
    
    document.getElementById('nextWeek').addEventListener('click', function() {
        changeWeek(7);
    });
    
    // Modal
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    document.getElementById('movieModal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    
    // Permitir cerrar modal con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
}

// NUEVA FUNCIÓN: Alternar visibilidad de una proyección
function toggleScreeningVisibility(screeningId) {
    if (state.hiddenScreenings.has(screeningId)) {
        state.hiddenScreenings.delete(screeningId);
    } else {
        state.hiddenScreenings.add(screeningId);
    }
    renderWeekView();
    detectConflicts();
}

// NUEVA FUNCIÓN: Mostrar todas las proyecciones ocultas de una película
function showAllScreeningsForMovie(movieId) {
    // Encontrar todas las proyecciones de esta película
    screeningsDatabase.forEach(screening => {
        if (screening.movieId === movieId && state.hiddenScreenings.has(screening.id)) {
            state.hiddenScreenings.delete(screening.id);
        }
    });
    renderWeekView();
    detectConflicts();
}

// Función para validar que una proyección esté dentro del rango horario
function isValidScreeningTime(hour, minute) {
    const totalMinutes = hour * 60 + minute;
    const startLimit = 10 * 60; // 10:00
    const endLimit = 21 * 60; // 21:00
    
    return totalMinutes >= startLimit && totalMinutes <= endLimit;
}

// Función para filtrar proyecciones fuera del rango horario
function filterScreeningsByTimeRange() {
    screeningsDatabase = screeningsDatabase.filter(screening => 
        isValidScreeningTime(screening.hour, screening.minute)
    );
}

// Modificar changeWeek para actualizar filtros
function changeWeek(days) {
    state.currentWeekStart.setDate(state.currentWeekStart.getDate() + days);
    updateWeekDisplay();
    updateDayFilterOptions();
    renderMoviesList();
    renderWeekView();
    detectConflicts();
}

function updateDayFilterOptions() {
    const dayFilter = document.getElementById('dayFilter');
    const currentValue = dayFilter.value;
    
    const wasAll = currentValue === "all";
    
    dayFilter.innerHTML = '<option value="all">Todos los días</option>';
    
    for (let i = 0; i < 7; i++) {
        const dayDate = new Date(state.currentWeekStart);
        dayDate.setDate(dayDate.getDate() + i);
        
        const dayName = getDayName(i);
        const dayNumber = dayDate.getDate();
        const month = dayDate.toLocaleDateString('es-ES', { month: 'short' });
        
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${dayName} ${dayNumber} ${month}`;
        dayFilter.appendChild(option);
    }
    
    if (wasAll) {
        dayFilter.value = "all";
    } else if (currentValue >= 0 && currentValue <= 6) {
        dayFilter.value = currentValue;
    }
}

function groupScreeningsByDateTime(screenings) {
    const groups = {};
    
    screenings.forEach(screening => {
        const key = `${screening.date}-${screening.hour}-${screening.minute}`;
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(screening);
    });
    
    return groups;
}

function areDurationsSimilar(screenings) {
    if (screenings.length < 2) return true;
    
    const movies = screenings.map(s => getMovieById(s.movieId));
    const durations = movies.map(m => m.duration);
    const avgDuration = durations.reduce((a, b) => a + b, 0) / durations.length;
    
    return durations.every(duration => 
        Math.abs(duration - avgDuration) / avgDuration <= 0.2
    );
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function timeToMinutes(hour, minute) {
    return hour * 60 + minute;
}

function minutesToTime(minutes) {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    return { hour, minute };
}

function doScreeningsOverlap(screeningA, screeningB) {
    const movieA = getMovieById(screeningA.movieId);
    const movieB = getMovieById(screeningB.movieId);
    
    if (screeningA.day !== screeningB.day) return false;
    
    const startA = timeToMinutes(screeningA.hour, screeningA.minute);
    const endA = startA + movieA.duration;
    
    const startB = timeToMinutes(screeningB.hour, screeningB.minute);
    const endB = startB + movieB.duration;
    
    return (
        (startB >= startA && startB < endA) ||
        (startA >= startB && startA < endB) ||
        (startA === startB)
    );
}

function populateCinemaFilter() {
    const cineFilter = document.getElementById('cineFilter');
    
    cinemasDatabase.forEach(cinema => {
        const option = document.createElement('option');
        option.value = cinema.id;
        option.textContent = cinema.name;
        cineFilter.appendChild(option);
    });
}

function populateDayFilter() {
    const dayFilter = document.getElementById('dayFilter');
    dayFilter.innerHTML = '<option value="all">Todos los días</option>';
    
    for (let i = 0; i < 7; i++) {
        const dayDate = new Date(state.currentWeekStart);
        dayDate.setDate(dayDate.getDate() + i);
        
        const dayName = getDayName(i);
        const dayNumber = dayDate.getDate();
        const month = dayDate.toLocaleDateString('es-ES', { month: 'short' });
        
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${dayName} ${dayNumber} ${month}`;
        dayFilter.appendChild(option);
    }
}

function renderMoviesList() {
    const moviesList = document.getElementById('moviesList');
    moviesList.innerHTML = '';
    
    let filteredScreenings = screeningsDatabase.filter(screening => {
        const movie = getMovieById(screening.movieId);
        const cinema = getCinemaById(screening.cinemaId);
        
        if (state.searchTerm) {
            const searchLower = state.searchTerm.toLowerCase();
            if (!movie.title.toLowerCase().includes(searchLower) && 
                !movie.genre.toLowerCase().includes(searchLower) &&
                !cinema.name.toLowerCase().includes(searchLower)) {
                return false;
            }
        }
        
        if (state.selectedCinema !== "all" && parseInt(state.selectedCinema) !== screening.cinemaId) {
            return false;
        }
        
        
       if (state.selectedDay !== "all") {
            const selectedDayIndex = parseInt(state.selectedDay);
            const screeningDate = new Date(screening.date);
            const weekStart = new Date(state.currentWeekStart);
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekEnd.getDate() + 6);
            
            // Verificar si la proyección está en la semana actual
            if (screeningDate < weekStart || screeningDate > weekEnd) {
                return false;
            }
            
            // Calcular el día de la semana (0-6, donde 0 es lunes)
            const dayDiff = Math.floor((screeningDate - weekStart) / (1000 * 60 * 60 * 24));
            
            if (dayDiff !== selectedDayIndex) {
                return false;
            }
        }
        return true;
    });
    
    const movieMap = new Map();
    
    filteredScreenings.forEach(screening => {
        const movie = getMovieById(screening.movieId);
        const cinema = getCinemaById(screening.cinemaId);
        
        if (!movieMap.has(movie.id)) {
            movieMap.set(movie.id, {
                movie: movie,
                screenings: [],
                isSelected: state.selectedMovies.has(movie.id)
            });
        }
        
        movieMap.get(movie.id).screenings.push({
            screening: screening,
            cinema: cinema,
            date: new Date(screening.date)
        });
    });
    
    if (movieMap.size === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = '<i class="fas fa-film"></i> No se encontraron películas con los filtros aplicados.';
        moviesList.appendChild(noResults);
        return;
    }
    
    const selectedMovies = [];
    const unselectedMovies = [];
    
    movieMap.forEach((data, movieId) => {
        if (state.selectedMovies.has(movieId)) {
            selectedMovies.push([movieId, data]);
        } else {
            unselectedMovies.push([movieId, data]);
        }
    });
    
    selectedMovies.sort((a, b) => a[1].movie.title.localeCompare(b[1].movie.title));
    unselectedMovies.sort((a, b) => a[1].movie.title.localeCompare(b[1].movie.title));
    
    const sortedMovies = [...selectedMovies, ...unselectedMovies];
    
    sortedMovies.forEach(([movieId, data]) => {
        const movie = data.movie;
        const screenings = data.screenings;
        
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        if (state.selectedMovies.has(movieId)) {
            movieItem.classList.add('selected');
        }
        
        const movieInfo = document.createElement('div');
        movieInfo.className = 'movie-info';
        
        const movieTitle = document.createElement('h4');
        movieTitle.textContent = movie.title;
        
        const uniqueDates = [...new Set(screenings.map(s => s.screening.date))];
        const dateStrings = uniqueDates.map(dateStr => {
            const date = new Date(dateStr);
            return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
        });
        
        const cinemaNames = [...new Set(screenings.map(s => s.cinema.name))].join(', ');
        
        const movieDetails = document.createElement('p');
        movieDetails.textContent = `${movie.genre} • ${movie.duration} min • ${cinemaNames}`;
        
        // Mostrar contador de proyecciones ocultas
        const hiddenCount = screenings.filter(s => state.hiddenScreenings.has(s.screening.id)).length;
        if (hiddenCount > 0 && state.selectedMovies.has(movieId)) {
            const hiddenInfo = document.createElement('p');
            hiddenInfo.className = 'movie-hidden-info';
            hiddenInfo.style.fontSize = '0.85rem';
            hiddenInfo.style.color = '#e74c3c';
            hiddenInfo.style.marginTop = '3px';
            hiddenInfo.innerHTML = `<i class="fas fa-eye-slash"></i> ${hiddenCount} proyección(es) oculta(s)`;
            hiddenInfo.addEventListener('click', function(e) {
                e.stopPropagation();
                showAllScreeningsForMovie(movieId);
            });
            movieInfo.appendChild(hiddenInfo);
        }
        
        if (dateStrings.length > 0) {
            const datesInfo = document.createElement('p');
            datesInfo.className = 'movie-dates';
            datesInfo.style.fontSize = '0.85rem';
            datesInfo.style.color = '#7f8c8d';
            datesInfo.style.marginTop = '3px';
            datesInfo.innerHTML = `<i class="far fa-calendar"></i> ${dateStrings.slice(0, 3).join(', ')}${dateStrings.length > 3 ? '...' : ''}`;
            movieInfo.appendChild(datesInfo);
        }
        
        movieInfo.appendChild(movieTitle);
        movieInfo.appendChild(movieDetails);
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'movie-checkbox';
        checkbox.checked = state.selectedMovies.has(movieId);
        checkbox.addEventListener('change', function() {
            toggleMovieSelection(movieId, this.checked);
        });
        
        movieItem.appendChild(movieInfo);
        movieItem.appendChild(checkbox);
        
        movieItem.addEventListener('click', function(e) {
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
                toggleMovieSelection(movieId, checkbox.checked);
            }
        });
        
        moviesList.appendChild(movieItem);
    });
}

function toggleMovieSelection(movieId, isSelected) {
    if (isSelected) {
        state.selectedMovies.add(movieId);
    } else {
        state.selectedMovies.delete(movieId);
        // Al deseleccionar una película, mostramos todas sus proyecciones
        screeningsDatabase.forEach(screening => {
            if (screening.movieId === movieId) {
                state.hiddenScreenings.delete(screening.id);
            }
        });
    }
    
    renderMoviesList();
    renderWeekView();
    renderSelectedMovies();
    detectConflicts();
}

function renderSelectedMovies() {
    const selectedMoviesList = document.getElementById('selectedMoviesList');
    const selectedCount = document.getElementById('selectedCount');
    
    selectedMoviesList.innerHTML = '';
    selectedCount.textContent = state.selectedMovies.size;
    
    state.selectedMovies.forEach(movieId => {
        const movie = getMovieById(movieId);
        
        const tag = document.createElement('div');
        tag.className = 'selected-movie-tag';
        
        const movieName = document.createElement('span');
        movieName.textContent = movie.title;
        
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'selected-movie-actions';
        
        // Botón para mostrar todas las proyecciones
        const showAllBtn = document.createElement('button');
        showAllBtn.className = 'btn-show-all';
        showAllBtn.innerHTML = '<i class="fas fa-eye"></i>';
        showAllBtn.title = 'Mostrar todas las proyecciones';
        showAllBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showAllScreeningsForMovie(movieId);
        });
        
        const removeIcon = document.createElement('i');
        removeIcon.className = 'fas fa-times';
        removeIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMovieSelection(movieId, false);
        });
        
        actionsContainer.appendChild(showAllBtn);
        actionsContainer.appendChild(removeIcon);
        
        tag.appendChild(movieName);
        tag.appendChild(actionsContainer);
        selectedMoviesList.appendChild(tag);
    });
}

function setCurrentWeek() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    state.currentWeekStart = new Date(today);
    state.currentWeekStart.setDate(today.getDate() - diff);
    state.currentWeekStart.setHours(0, 0, 0, 0);
    
    updateWeekDisplay();
}

function updateWeekDisplay() {
    const weekStart = new Date(state.currentWeekStart);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    
    const options = { month: 'short', day: 'numeric' };
    const weekRange = document.getElementById('currentWeekRange');
    weekRange.textContent = `${weekStart.toLocaleDateString('es-ES', options)} - ${weekEnd.toLocaleDateString('es-ES', options)}`;
}

// MODIFICACIÓN PRINCIPAL: Actualizar renderWeekView para incluir botones de ocultar
function renderWeekView() {
    const weekView = document.querySelector('.week-view');
    const scheduleGrid = document.querySelector('.schedule-grid');
    
    // Limpiar contenedores
    weekView.innerHTML = '';
    scheduleGrid.innerHTML = '';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Crear encabezados de días (con una celda vacía al inicio para alinear con la columna de tiempo)
    const emptyHeader = document.createElement('div');
    emptyHeader.className = 'day-header empty-header';
    emptyHeader.innerHTML = '<div>&nbsp;</div><div>&nbsp;</div>';
    weekView.appendChild(emptyHeader);
    
    for (let i = 0; i < 7; i++) {
        const dayDate = new Date(state.currentWeekStart);
        dayDate.setDate(dayDate.getDate() + i);
        
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        
        if (dayDate.toDateString() === today.toDateString()) {
            dayHeader.classList.add('today');
        }
        
        const dayName = getDayName(i);
        const dayNumber = dayDate.getDate();
        const month = dayDate.toLocaleDateString('es-ES', { month: 'short' });
        const year = dayDate.getFullYear();
        
        dayHeader.innerHTML = `
            <div>${dayName}</div>
            <div>${dayNumber} ${month} ${year}</div>
        `;
        
        weekView.appendChild(dayHeader);
    }
    
    // Definir franjas horarias
    const timeSlots = [
        { hour: 10, minute: 0, label: "10:00 AM" },
        { hour: 12, minute: 30, label: "12:30 PM" },
        { hour: 14, minute: 30, label: "2:30 PM" },
        { hour: 15, minute: 0, label: "3:00 PM" },
        { hour: 17, minute: 30, label: "5:30 PM" },
        { hour: 20, minute: 0, label: "8:00 PM" }
    ];
    
    // Crear filas para cada franja horaria
    timeSlots.forEach(timeSlot => {
        const timeRow = document.createElement('div');
        timeRow.className = 'time-slot';
        
        // Etiqueta de tiempo (primera columna)
        const timeLabel = document.createElement('div');
        timeLabel.className = 'time-label';
        timeLabel.textContent = timeSlot.label;
        timeRow.appendChild(timeLabel);
        
        // Celdas para cada día (7 columnas)
        for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            const dayDate = new Date(state.currentWeekStart);
            dayDate.setDate(dayDate.getDate() + dayIndex);
            const dateString = formatDate(dayDate);
            
            const dayCell = document.createElement('div');
            dayCell.className = 'day-cell';
            dayCell.dataset.day = dayIndex;
            dayCell.dataset.date = dateString;
            dayCell.dataset.hour = timeSlot.hour;
            dayCell.dataset.minute = timeSlot.minute;
            
            // Filtrar proyecciones para esta celda
            let screeningsForSlot = screeningsDatabase.filter(screening => {
                if (!state.selectedMovies.has(screening.movieId)) return false;
                if (state.selectedCinema !== "all" && parseInt(state.selectedCinema) !== screening.cinemaId) return false;
                return screening.date === dateString && 
                       screening.hour === timeSlot.hour && 
                       screening.minute === timeSlot.minute;
            });
            
            // Filtrar proyecciones ocultas
            screeningsForSlot = screeningsForSlot.filter(screening => 
                !state.hiddenScreenings.has(screening.id)
            );
            
            if (screeningsForSlot.length > 0) {
                const totalScreenings = screeningsForSlot.length;
                
                screeningsForSlot.forEach((screening, index) => {
                    const movie = getMovieById(screening.movieId);
                    const cinema = getCinemaById(screening.cinemaId);
                    
                    // Calcular altura según duración
                    let height = 60;
                    if (movie.duration > 60) {
                        const extraHours = Math.ceil((movie.duration - 60) / 60);
                        height += extraHours * 30;
                    }
                    height = Math.max(60, Math.min(120, height));
                    
                    const movieEvent = document.createElement('div');
                    movieEvent.className = 'movie-event';
                    movieEvent.classList.add('selected');
                    
                    const hasConflict = state.conflicts.some(conflict => 
                        conflict.some(s => s.id === screening.id)
                    );
                    if (hasConflict) {
                        movieEvent.classList.add('conflict');
                    }
                    
                    if (totalScreenings > 1) {
                        movieEvent.classList.add('vertical-bar');
                        movieEvent.style.width = `${100 / totalScreenings}%`;
                        movieEvent.style.left = `${(100 / totalScreenings) * index}%`;
                    }
                    
                    movieEvent.style.backgroundColor = movie.color;
                    movieEvent.style.height = `${height}px`;
                    
                    // Botón para ocultar
                    const hideBtn = document.createElement('button');
                    hideBtn.className = 'hide-screening-btn';
                    hideBtn.innerHTML = '<i class="fas fa-times"></i>';
                    hideBtn.title = 'Ocultar esta proyección';
                    hideBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        toggleScreeningVisibility(screening.id);
                    });
                    
                    movieEvent.innerHTML = `
                        <div class="movie-event-title">${movie.title}</div>
                        <div class="movie-event-cinema">${cinema.name}</div>
                    `;
                    movieEvent.appendChild(hideBtn);
                    
                    movieEvent.addEventListener('click', function(e) {
                        if (e.target !== hideBtn && !hideBtn.contains(e.target)) {
                            showMovieDetails(movie, cinema, screening, dayDate);
                        }
                    });
                    
                    dayCell.appendChild(movieEvent);
                });
                
                // Indicador de múltiples películas
                if (totalScreenings > 1) {
                    const indicator = document.createElement('div');
                    indicator.className = 'multi-movie-indicator';
                    indicator.textContent = `${totalScreenings}`;
                    indicator.title = `${totalScreenings} películas en este horario`;
                    dayCell.appendChild(indicator);
                }
            } else {
                dayCell.innerHTML = '<div class="no-screening">---</div>';
            }
            
            timeRow.appendChild(dayCell);
        }
        
        scheduleGrid.appendChild(timeRow);
    });
}

function showMovieDetails(movie, cinema, screening, dateObj) {
    const modal = document.getElementById('movieModal');
    const modalTitle = document.getElementById('modalMovieTitle');
    const modalCinema = document.getElementById('modalCinema');
    const modalTime = document.getElementById('modalTime');
    const modalDuration = document.getElementById('modalDuration');
    const modalGenre = document.getElementById('modalGenre');
    const modalRating = document.getElementById('modalRating');
    const modalDescription = document.getElementById('modalDescription');
    
    const screeningDate = new Date(screening.date);
    const dayName = screeningDate.toLocaleDateString('es-ES', { weekday: 'long' });
    const dateStr = screeningDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
    
    const timeStr = `${screening.hour.toString().padStart(2, '0')}:${screening.minute.toString().padStart(2, '0')}`;
    
    const endTime = new Date(screeningDate);
    endTime.setHours(screening.hour, screening.minute + movie.duration);
    const endTimeStr = `${endTime.getHours().toString().padStart(2, '0')}:${endTime.getMinutes().toString().padStart(2, '0')}`;
    
    let timeNote = '';
    if (endTime.getHours() > 21 || (endTime.getHours() === 21 && endTime.getMinutes() > 0)) {
        timeNote = '\n<i class="fas fa-exclamation-circle"></i> Esta proyección termina después del horario de visualización (21:00).';
    }
    
    modalTitle.textContent = movie.title;
    modalCinema.textContent = `${cinema.name} (${cinema.location})`;
    modalTime.innerHTML = `${dayName}, ${dateStr}<br>De ${timeStr} a ${endTimeStr}${timeNote}`;
    modalDuration.textContent = movie.duration;
    modalGenre.textContent = movie.genre;
    modalRating.textContent = movie.rating;
    modalDescription.textContent = movie.description;
    
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('movieModal');
    modal.style.display = 'none';
}

function detectConflicts() {
    state.conflicts = [];
    
    // Solo verificar conflictos si hay películas seleccionadas
    if (state.selectedMovies.size < 2) {
        updateConflictsInfo();
        return;
    }
    
    // Agrupar proyecciones por fecha
    const screeningsByDate = {};
    
    // Obtener todas las proyecciones de películas marcadas
    screeningsDatabase.forEach(screening => {
        if (!state.selectedMovies.has(screening.movieId)) return;
        if (state.hiddenScreenings.has(screening.id)) return; // Ignorar proyecciones ocultas
        
        if (!screeningsByDate[screening.date]) {
            screeningsByDate[screening.date] = [];
        }
        
        const movie = getMovieById(screening.movieId);
        screeningsByDate[screening.date].push({
            ...screening,
            movie,
            cinema: getCinemaById(screening.cinemaId),
            startMinutes: screening.hour * 60 + screening.minute,
            endMinutes: (screening.hour * 60 + screening.minute) + movie.duration
        });
    });
    
    // Para cada fecha, detectar solapamientos
    Object.values(screeningsByDate).forEach(dateScreenings => {
        // Ordenar por hora de inicio
        dateScreenings.sort((a, b) => a.startMinutes - b.startMinutes);
        
        // Comparar cada proyección con las demás
        for (let i = 0; i < dateScreenings.length; i++) {
            for (let j = i + 1; j < dateScreenings.length; j++) {
                const screeningA = dateScreenings[i];
                const screeningB = dateScreenings[j];
                
                // Verificar si hay solapamiento
                const hasOverlap = (
                    // B empieza durante A
                    (screeningB.startMinutes >= screeningA.startMinutes && 
                     screeningB.startMinutes < screeningA.endMinutes) ||
                    // A empieza durante B  
                    (screeningA.startMinutes >= screeningB.startMinutes &&
                     screeningA.startMinutes < screeningB.endMinutes) ||
                    // Misma hora exacta
                    (screeningA.startMinutes === screeningB.startMinutes)
                );
                
                // Si hay solapamiento y son en cines diferentes -> CONFLICTO
                if (hasOverlap && screeningA.cinemaId !== screeningB.cinemaId) {
                    // Verificar si ya existe un conflicto con alguna de estas proyecciones
                    let existingConflict = null;
                    for (const conflict of state.conflicts) {
                        if (conflict.some(s => s.id === screeningA.id || s.id === screeningB.id)) {
                            existingConflict = conflict;
                            break;
                        }
                    }
                    
                    if (existingConflict) {
                        // Añadir la proyección que no esté ya en el conflicto
                        if (!existingConflict.some(s => s.id === screeningA.id)) {
                            existingConflict.push(screeningA);
                        }
                        if (!existingConflict.some(s => s.id === screeningB.id)) {
                            existingConflict.push(screeningB);
                        }
                    } else {
                        // Crear nuevo conflicto
                        state.conflicts.push([screeningA, screeningB]);
                    }
                }
            }
        }
    });
    
    // Actualizar UI con información de conflictos
    updateConflictsInfo();
    renderWeekView();
}

function updateConflictsInfo() {
    const conflictsInfo = document.getElementById('conflictsInfo');
    
    if (state.conflicts.length === 0) {
        if (state.selectedMovies.size === 0) {
            conflictsInfo.innerHTML = '<p><i class="fas fa-info-circle"></i> Marca películas para ver sus horarios y detectar conflictos.</p>';
        } else if (state.selectedMovies.size === 1) {
            conflictsInfo.innerHTML = '<p><i class="fas fa-info-circle"></i> Marca al menos 2 películas para detectar conflictos de horario.</p>';
        } else {
            conflictsInfo.innerHTML = '<p><i class="fas fa-check-circle"></i> No hay conflictos de horario detectados.</p>';
        }
        return;
    }
    
    let html = `<h4><i class="fas fa-exclamation-triangle"></i> Se detectaron ${state.conflicts.length} conflicto(s) de horario:</h4>`;
    
    state.conflicts.forEach((conflict, index) => {
        // Tomar la primera proyección como referencia (mismo día)
        const firstScreening = conflict[0];
        
        // Obtener el día de la semana a partir de la fecha
        const screeningDate = new Date(firstScreening.date);
        const dayOfWeek = screeningDate.getDay(); // 0 (Domingo) a 6 (Sábado)
        
        // Convertir a nuestro sistema: 0=Lunes, 6=Domingo
        const dayIndex = dayOfWeek === 0 ? 6 : dayOfWeek;
        const dayName = getDayName(dayIndex);
        
        // Obtener la fecha formateada
        const dateStr = screeningDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

        html += `<div class="conflict-item">
                    <strong>Conflicto ${index + 1}:</strong> ${dayName} ${dateStr} - Horarios que se solapan<br>
                    <small>`;
        
        conflict.forEach(screening => {
            const movie = getMovieById(screening.movieId);
            const cinema = getCinemaById(screening.cinemaId);
            const startTime = `${screening.hour.toString().padStart(2, '0')}:${screening.minute.toString().padStart(2, '0')}`;
            
            // Calcular hora de fin
            const endHour = Math.floor((screening.hour * 60 + screening.minute + movie.duration) / 60);
            const endMinute = (screening.hour * 60 + screening.minute + movie.duration) % 60;
            const endTime = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
            
            html += `<i class="fas fa-film"></i> ${movie.title} (${cinema.name})<br>
                     &nbsp;&nbsp;&nbsp;&nbsp;<i class="far fa-clock"></i> ${startTime} - ${endTime} (${movie.duration} min)<br>`;
        });
        
        html += `</small></div>`;
    });
    
    conflictsInfo.innerHTML = html;
}

function getMovieById(id) {
    return moviesDatabase.find(movie => movie.id === id) || moviesDatabase[0];
}

function getCinemaById(id) {
    return cinemasDatabase.find(cinema => cinema.id === id) || cinemasDatabase[0];
}

function getDayName(dayIndex) {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    return days[dayIndex];
}

function addSampleData() {
    console.log("Base de datos cargada con éxito");
    console.log(`- ${moviesDatabase.length} películas`);
    console.log(`- ${cinemasDatabase.length} cines`);
    console.log(`- ${screeningsDatabase.length} proyecciones`);
}

addSampleData();

// Añadir estilos CSS para los nuevos elementos
document.head.insertAdjacentHTML('beforeend', `
    <style>
        /* Botón para ocultar proyecciones */
        .hide-screening-btn {
            position: absolute;
            top: 2px;
            right: 2px;
            width: 18px;
            height: 18px;
            background: rgba(255, 255, 255, 0.3);
            border: none;
            border-radius: 50%;
            color: white;
            font-size: 10px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s, background 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            z-index: 10;
        }
        
        .hide-screening-btn:hover {
            background: rgba(255, 255, 255, 0.5);
        }
        
        .movie-event:hover .hide-screening-btn {
            opacity: 1;
        }
        
        /* Información de proyecciones ocultas en la lista de películas */
        .movie-hidden-info {
            cursor: pointer;
            transition: color 0.2s;
        }
        
        .movie-hidden-info:hover {
            color: #c0392b !important;
        }
        
        .movie-hidden-info i {
            margin-right: 5px;
        }
        
        /* Acciones en las etiquetas de películas seleccionadas */
        .selected-movie-actions {
            display: flex;
            gap: 5px;
            margin-left: 8px;
        }
        
        .btn-show-all {
            background: #3498db;
            color: white;
            border: none;
            border-radius: 3px;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 10px;
            transition: background 0.2s;
        }
        
        .btn-show-all:hover {
            background: #2980b9;
        }
        
        /* Indicador de proyección oculta */
        .movie-event.hidden {
            opacity: 0.3;
            filter: grayscale(0.5);
        }
        
        .no-results {
            text-align: center;
            padding: 40px 20px;
            color: #7f8c8d;
            font-style: italic;
        }
        
        .no-results i {
            font-size: 2rem;
            margin-bottom: 10px;
            display: block;
            color: #bdc3c7;
        }
        
        .no-screening {
            color: #bdc3c7;
            font-size: 0.8rem;
            text-align: center;
            padding-top: 25px;
            font-style: italic;
        }
        
        .movie-event-time {
            font-size: 0.75rem;
            opacity: 0.9;
            margin-top: 2px;
        }
        
        #conflictsInfo i.fa-check-circle {
            color: #4CAF50;
            margin-right: 8px;
        }
        
        #conflictsInfo i.fa-exclamation-triangle {
            color: #FF9800;
            margin-right: 8px;
        }
    </style>
`);
