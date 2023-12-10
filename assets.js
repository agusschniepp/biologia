class Preguntas {
    constructor(pregunta,respuestas,correcta){
        this.pregunta = pregunta;
        this.respuestas = respuestas;
        this.correcta = correcta;
    }
}
// Examen 1
let a1 = new Preguntas(
    'La irritabilidad es una característica',
    [
        'de todos los seres vivos',
        'de los seres vivos que poseen órganos de los sentidos',
        'exclusiva de los organismos eucariontes',
        'propia de los organismos pluricelulares'
    ],
    0
);
let a2 = new Preguntas(
    'Todas las algas, los animales y las plantas',
    [
        'son pluricelulares',
        'pueden reproducirse de manera asexual',
        'poseen mitocondrias y cloroplastos en sus células',
        'son organismos con células eucariotas'
    ],
    3
);
let a3 = new Preguntas(
    'En un agroecosistema, los representantes de un mismo Reino',
    [
        'podrían pertenecer a distintas categorías en la clasificación ecológica.',
        'siempre forman parte de la diversidad planificada.',
        'necesariamente pertenecen a la misma categoría en la clasificación ecológica.',
        'siempre son consumidos en vida por otro organismo.'
    ],
    0
);
let a4 = new Preguntas(
    '¿Cuál es el mínimo y máximo nivel de organización de la materia que tiene un servivo?',
    [
        'celular y ecosistema',
        'celular y sistema de órganos',
        'macromolecular complejo y sistema de órganos',
        'molecular y sistema de órganos'
    ],
    1
);
let a5 = new Preguntas(
    'Un microscopio electrónico de barrido permitirá observar',
    [
        'el núcleo de una neurona',
        'cloroplasto de una célula eucarionte animal',
        'las crestas mitocondriales',
        'la superficie de un espermatozoide'
    ],
    3
);
let a6 = new Preguntas(
    'Un microscopio óptico permite observar',
    [
        'el núcleo y citoplasma de una célula del hígado',
        'la estructura de un virus',
        'el núcleo y citoplasma de una bacteria',
        'las crestas mitocondriales'
    ],
    0
);
let a7 = new Preguntas(
    'Indique dos funciones que pueden tener los lipidos',
    [
        'intermediario energético y estructural',
        'intermediario de óxido-reducción y transportador de membrana',
        'catalizador biológico y estructural',
        'reserva energética y hormonal '
    ],
    3
);
let a8 = new Preguntas(
    'Tanto la lactosa como la quitina',
    [
        'son hidratos de carbono',
        'cumplen la función de reserva energética',
        'son macromoléculas',
        'poseen estructura ramificada'
    ],
    0
);
let a9 = new Preguntas(
    'Cuál de las siguientes opciones incluye solamente proteínas con función de transporte',
    [
        'carrier de glucosa, hemoglobina, canal de sodio primasa, bomba de calcio',
        'albúmina, hemoglobina, adenilatociclasa',
        'colágeno, actina, miosina',
        'inmunoglobulina, amilasa, insulina'
    ],
    0
);
let a10 = new Preguntas(
    'Una molécula de ADN que posee 600 adeninas y 400 guaninas tendrá',
    [
        '600 timinas, 400 citosinas y 1000 pentosas',
        '600 timinas, 200 citosinas y 1000 pentosas',
        '600 timinas, 400 citosinas y 2000 pentosas',
        '400 timinas, 600 citosinas y 2000 pentosas'
    ],
    2
);
let a11 = new Preguntas(
    'Si la citosina constituye el 35% de un segmento de ADN, ¿cuál será el porcentaje correspondiente a la adenina?',
    [
        '0.7',
        '0.35',
        '0.3',
        '0.15'
    ],
    3
);
let a12 = new Preguntas(
    'Los virus envueltos poseen las siguientes biomoléculas en su estructura',
    [
        'ácido nucleico, colesterol y queratina',
        'ácido nucleico y proteínas y glucosa',
        'ácido nucleico, fosfolípidos y proteínas',
        'ácido nucleico, fosfolípidos y glucógeno'
    ],
    2
);
let a13 = new Preguntas(
    'Se sabe que lavarse las manos con agua y jabón, puede evitar el contagio del SARS Cov2. Esto podría deberse a',
    [
        'el jabón está formado por proteínas que interactúan con la capa lipídica del virus',
        'el jabón está compuesto por un ácido graso, y posee una cola hidrocarbonada que rompe la capa lipídica del virus',
        'el jabón vehiculiza al agua, y el agua entra al virus y lo destruye por hidrólisis',
        'el jabón destruye el material genético y las proteínas del virus'
    ],
    1
);
let a14 = new Preguntas(
    'Indique cuál de las siguientes afirmaciones acerca de la membrana plasmática es correcta',
    [
        'es fluída, asimétrica y permeable a todos los solutos',
        'todas las proteínas integrales tienen función transportadora',
        'las proteínas periféricas tienen función de receptores',
        'los fosfolípidos la hacen permeable a las sustancias hidrofóbicas.'
    ],
    3
);
let a15 = new Preguntas(
    'La fagocitosis involucra la actividad de',
    [
        'la membrana plasmática y la pared celular',
        'la membrana plasmática y sus microfilamentos asociados',
        'el sistema de Golgi y los lisosomas',
        'los lisosomas y el citoesqueleto'
    ],
    1
);
let a16 = new Preguntas(
    'Las células de la mucosa estomacal elaboran y secretan activamente la proteína pepsinógeno. Indique qué estructuras citoplasmáticas tienen muy desarrolladas',
    [
        'el REG y las mitocondrias',
        'el REG y los ribosomas',
        'el REL y el complejo de Golgi',
        'el REG y el Complejo de Golgi'
    ],
    3
);
let a17 = new Preguntas(
    'La ATP-sintetasa que se encuentra en la membrana tilacoide',
    [
        'permite el bombeo de H+ hacia el estroma',
        'permite la difusión facilitada de H+ hacia el estroma',
        'consume ATP en el bombeo de H+ hacia el estroma',
        'consume ATP en la difusión facilitada de H+ hacia el estroma'
    ],
    1
);
let a18 = new Preguntas(
    'Se nutren neuronas con aminoácidos marcados radiactivamente y se observan en el microscopio las marcas fluorescentes que indican la localización de estos aminoácidos. ¿Qué opción indica el patrón correcto en dichas marcas en el entorno de la membrana plasmática?',
    [
        'la mitad de las marcas se verán en la cara citoplasmática y la otra mitad se verán en la cara extracelular',
        'todas las marcas se verán solo en la cara citoplasmática',
        'todas las marcas se verán en el ancho de la membrana',
        'algunas marcas se verán solo en la cara extracelular'
    ],
    3
);
let a19 = new Preguntas(
    'En los seres humanos, la membrana plasmática de los glóbulos rojos es 8,5% más permeable a iones que la membrana plasmática de las células del hígado. Esto se debe a que',
    [
        'la membrana plasmática de los glóbulos rojos posee más receptores',
        'la membrana plasmática de los glóbulos rojos es menos fluida',
        'la membrana plasmática de los glóbulos rojos es más fluida',
        'la membrana plasmática de los glóbulos rojos posee más proteínas'
    ],
    3
);
let a20 = new Preguntas(
    'El complejo del poro nuclear posee sitios específicos para el pasaje de agua denominados acuaporinas. ¿Cómo se desarrollará el movimiento de esta molécula?',
    [
        'del sitio de mayor al de menor concentración de agua, con hidrólisis de ATP',
        'del sitio de mayor al de menor concentración de agua, por proteínas transportadoras',
        'del sitio de mayor al de menor concentración de agua, sin gasto energético',
        'del sitio de mayor al de menor concentración de agua, por endocitosis'
    ],
    2
);
let a21 = new Preguntas(
    'Una sustancia con carga y de nivel de organización atómico puede atravesar la membrana plasmática por',
    [
        'sólo por canales',
        'solo por bombas',
        'solo por carriers y por bombas',
        'por canales y por bombas'
    ],
    3
);
let a22 = new Preguntas(
    'Una hormona es una señal que',
    [
        'es siempre un lípido',
        'puede requerir de 2dos. mensajerospara cumplir su función',
        'requiere siempre de un receptor en la membrana para cumplir su función',
        'es siempre una proteína'
    ],
    1
);
let a23 = new Preguntas(
    'Indique la opción correcta',
    [
        'parte del ATP que produce una célula se consume en los procesos anabólicos',
        'sólo las reacciones exergónicas son catalizadas por enzimas',
        'la hidrólisis del ATP es una reacción endergónica',
        'todas las reacciones de un proceso anabólico son endergónicas'
    ],
    0
);
let a24 = new Preguntas(
    'Con excepción de algunas enzimas bacterianas, la mayoría de las enzimas sometidas a temperaturas superiores a 60 °C pierden su actividad debido a que',
    [
        'se desnaturalizan al perder su estructura primaria',
        'se hidrolizan al perder su estructura cuaternaria',
        'se hidrolizan al perder secundaria y terciaria',
        'se desnaturalizan al perder su estructura secundaria y terciaria'
    ],
    3
);
let a25 = new Preguntas(
    'Si en una reacción química la energía de los sustratos es de 100 calorías y la de los productos es de 250 calorías, dicha reacción es',
    [
        'anabólica y endergónica',
        'anabólica y exergónica',
        'catabólica y endergónica',
        'catabólica y exergónica'
    ],
    0
);
let a26 = new Preguntas(
    'El HCl liberado por las células del estómago permite generar un ambiente con pH ácido. Si se inhibiera la liberación de HCl a la luz del estómago',
    [
        'no se verá alterada la actividad de las proteasas y lipasas del estómago por el cambio de pH',
        'se incrementará la actividad de las proteasas y lipasas del estómago por el cambio de pH',
        'disminuirá la actividad de las proteasas y lipasas del estómago por el cambio de pH',
        'se producirá la ruptura de la estructura primaria por el cambio de pH'
    ],
    2
);
let a27 = new Preguntas(
    'Si la célula no puede sintetizar la enzima ARN polimerasa',
    [
        'no se pueden llevar a cabo los procesos de duplicación y traducción',
        'no se pueden llevar a cabo los procesos de duplicación y transcripción',
        'no se puede llevar a cabo el proceso de duplicación',
        'no se puede llevar a cabo los procesos de transcripción y traducción'
    ],
    1
);
let a28 = new Preguntas(
    'La glucólisis',
    [
        'requiere NAD y FAD para llevarse a cabo',
        'sólo ocurre en células eucariontes',
        'permite generar dos ATP por cada glucosa que se oxida',
        'es una vía aeróbica común a todos los seres vivos'
    ],
    2
);
let a29 = new Preguntas(
    'El ATP es',
    [
        'un producto de la fotosíntesis y un sustrato de la respiración',
        'un ácido nucleico que puede cumplir el rol de intermediario',
        'una macromolécula que es monómero del ADN',
        'un producto de la respiración y un intermediario en la fotosíntesis.'
    ],
    3
);
let a30 = new Preguntas(
    'Algunos organismos del reino protista forman parte del fitoplancton de los océanos. Estos organismos realizan la etapa lumínica de la fotosíntesis',
    [
        'en el citoplasma de la célula',
        'en las crestas mitocondriales',
        'en las laminillas de la membrana plasmática',
        'en los tilacoides de los cloroplastos'
    ],
    3
);
let a31 = new Preguntas(
    'La inhalación o el consumo de cianuro, así como de ácido cianhídrico o sales de cianuro puede causar hipoxia histotóxica, provocando que las células ya no puedan utilizar el oxígeno durante la respiración celular. Como resultado, la producción de ATP se reduce significativamente. ¿A qué podría deberse la disminución en la producción de ATP?',
    [
        'el cianuro inhibe la reducción del NAD+ y FAD durante el ciclo de Krebs',
        'el cianuro inhibe la degradación de la glucosa durante la glucólisis',
        'el cianuro inhibe la transferencia de electrones hacia el aceptor final en la cadena de transporte de electrones',
        'el cianuro inhibe el transporte del piruvato a través de la membrana mitocondrial'
    ],
    2
);
let a32 = new Preguntas(
    'Una especie que se encuentra con frecuencia en la cavidad oral es Streptococcus mutans, una bacteria anaeróbica asociada fuertemente con la formación de caries dentales. S. mutans metaboliza la glucosa y otros azúcares en la dieta que permanecen en la boca después de comer, y produce ácido láctico como subproducto. Al pasar el tiempo, los niveles altos de ácido láctico pueden erosionar el esmalte de los dientes, lo que puede llevar a la formación de caries dentales. ¿Qué medicamento debería elegir un dentista para tratar a sus pacientes con caries causadas por S. mutans?',
    [
        'un medicamento que inhibe la formación de un gradiente de protones a través de la membrana celular',
        'un medicamento que impide la conversión de la glucosa en piruvato',
        'un medicamento que inhibe la producción de NADH y FADH2 durante el ciclo de Krebs',
        'un medicamento que impide el movimiento de oxígeno a través de la membrana celular'
    ],
    1
);
let a33 = new Preguntas(
    'La replicación es un proceso',
    [
        'endergónico porque requiere energía para la formación de enlaces fosfodiéster',
        'exergónico porque se libera energía de la ruptura de los enlaces trifosfatos.',
        'exergónico porque se libera energía al formarse enlaces covalentes.',
        'endergónico porque requiere energía para la formación de la doble hélice'
    ],
    0
);
let a34 = new Preguntas(
    'El cariotipo permite detectar',
    [
        'diferencias alélicas entre cromosomas homólogos',
        'el parentesco entre dos individuos',
        'mutaciones puntuales',
        'alteraciones cromosómicas'
    ],
    3
);
let a35 = new Preguntas(
    'El ADN cumple el rol de molde en',
    [
        'la transcripción, la traducción y la duplicación',
        'la transcripción y la traducción',
        'la transcripción y la duplicación',
        'la transcripción únicamente'
    ],
    2
);
let a36 = new Preguntas(
    'Teniendo en cuenta que el síndrome de Down es una trisomía del par 21',
    [
        'es una mutación cromosómica',
        'es una mutación puntual por deleción',
        'es una mutación génica',
        'es una mutación genómica'
    ],
    3
);
let a37 = new Preguntas(
    'Se comparan los tiempos transcurridos en la etapa S de dos células, una del Reino Monera y una del Reino Protista. ¿Qué opción representa mejor los resultados esperados?',
    [
        'más tiempo en la del Reino Monera pues su ADN Polimerasa sólo sintetiza en sentido 5´-3´',
        'menos tiempo en la del Reino Monera pues sus enzimas replicativas trabajan a mayor velocidad',
        'menos tiempo en la del Reino Monera pues duplica solo una de las hebras del ADN',
        'más tiempo en la del Reino Monera pues posee un único origen de replicación'
    ],
    1
);
let a38 = new Preguntas(
    'La presencia del gen PTR1 confiere a los tomates resistencia a la infección por bacterias del género Pseudomonas. En tomates resistentes, este gen se encuentra',
    [
        'como eucromatina, sin asociarse a histonas',
        'como eucromatina, central en el núcleo',
        'como heterocromatina, periférico en el núcleo',
        'como heterocromatina, asociado a histonas'
    ],
    1
);
let a39 = new Preguntas(
    'El ajo (Allium sativum) es una especie 2n=16. Esto implica que en su cariotipo',
    [
        'no puede haber 8 pares de cromosomas metacéntricos',
        'puede haber hasta 8 pares de cromosomas metacéntricos',
        'puede haber 16 cromosomas metacéntricos y 16 cromosomas telocéntricos',
        'puede haber hasta 16 pares de cromosomas metacéntricos'
    ],
    1
);
let a40 = new Preguntas(
    'El papilomavirus humano posee genoma de ADN. Para poder hacer copias de su genoma utilizando las enzimas celulares, necesita que la célula se encuentre en',
    [
        'la etapa G1 de la interfase del ciclo celular',
        'la etapa G2 de la interfase del ciclo celular',
        'la etapa M o división del ciclo celular',
        'la etapa S de la interfase del ciclo celular'
    ],
    3
);
let a41 = new Preguntas(
    '¿Cuál de los siguientes elementos es un sustrato de la transcripción?',
    [
        'ARNpolimerasa',
        'AMP',
        'ADN molde',
        'ATP'
    ],
    3
);
let a42 = new Preguntas(
    '¿Cuál de los siguientes elementos es un sustrato de la traducción?',
    [
        'ribosomas',
        'ARN mensajero',
        'aminoácidos',
        'peptidiltransferasa'
    ],
    2
);
let a43 = new Preguntas(
    '¿Cuál de las siguientes características es común a la traducción y a la transcripción?',
    [
        'ocurren siempre en el interior del núcleo.',
        'requieren nucleótidos trifosfatados',
        'utilizan como molde una molécula de ADN',
        'ocurren siempre en el citoplasma'
    ],
    1
);
let a44 = new Preguntas(
    'La mitosis y la meiosis tienen en común que ambas',
    [
        'son reduccionales',
        'pueden ocurrir en células eucariotas y procariotas',
        'ocurren sólo en células eucariotas',
        'son ecuacionales'
    ],
    2
);
let a45 = new Preguntas(
    'Las células somáticas de la planta de papa tienen 48 cromosomas. Por lo tanto, en cada polo de la telofase mitótica habrá',
    [
        '48 cromosomas duplicados',
        '24 cromosomas duplicados',
        '24 cromosomas simples',
        '48 cromosomas simples'
    ],
    3
);
let a46 = new Preguntas(
    'En la profase',
    [
        'se descondensala cromatina',
        'se desorganiza la envoltura nuclear',
        'se desorganiza el huso',
        'se aparean los cromosomas'
    ],
    1
);
let a47 = new Preguntas(
    'Con referencia a la gametogénesis humana',
    [
        'en la mujer la meiosis inicia en el estado embrionario (3º mes de gestación)',
        'en el hombre nunca tiene la misma duración',
        'en la mujer genera 4 células hijas viables',
        'en el hombre produce gametas viables 1 vez al mes'
    ],
    0
);
let a48 = new Preguntas(
    'En un tubo de ensayo se colocan ARNm de ratón,ribosomas y enzimas necesarias para la traducción provenientes de gato;aminoácidos unidos a ARNt provenientes de murciélago y un dador de energía. El cóctel se incuba en una solución a 37°C. ¿A qué organismo corresponderá el polipéptido sintetizado?',
    [
        'mezcla de polipéptidos de ratón y gato',
        'mezcla de polipéptidos de ratón y murciélago',
        'sólo de murciélago',
        'sólo de ratón'
    ],
    3
);
let a49 = new Preguntas(
    'Si un gen que codifica uno de los polipéptidos que forman la inmunoglobulina sufre una mutación silenciosa',
    [
        'la secuencia de la cadena de inmunoglobulina sintetizada, no cambia',
        'la cadena de inmunoglobulina sintetizada carece de actividad biológica y su secuencia es distinta',
        'no hay transcripción',
        'no se expresa el gen de la inmunoglobulina'
    ],
    0
);
let a50 = new Preguntas(
    'El splicing alternativo permite',
    [
        'generar distintos mensajeros inmaduros que codifican para distintas proteínas',
        'generar distintos mensajeros maduros que codifican para distintas proteínas',
        'generar copias de mensajeros inmaduros que codifican para la misma proteína',
        'generar copias de mensajeros maduros que codifican para la misma proteína'
    ],
    1
);
let a51 = new Preguntas(
    'El gen que codifica el receptor de la insulina se encontrará',
    [
        'en todas las células del individuo',
        'sólo en las células somáticas',
        'sólo en las células que expresan la proteína receptora',
        'sólo en las gametas'
    ],
    0
);
let a52 = new Preguntas(
    'Numerosos tratamientos contra el cáncer a menudo, generan pérdida de cabello (como un efecto secundario). ¿Por qué es un efecto secundario común?',
    [
        'los tratamientos se administran y las células del folículo piloso se mantienen en estado de reposo.',
        'los tratamientos se dirigen a las células que se dividen lentamente, como las células cancerosas y las células del folículo piloso',
        'los tratamientos se dirigen a las células que se dividen rápidamente, como las células cancerosas y las células del folículo piloso',
        'los tratamientos se dirigen a las células que se dividen con poca frecuencia, como las células cancerosas y las células del folículo piloso'
    ],
    2
);
let a53 = new Preguntas(
    'M. recibe la visita de un supuesto “hermano”, H. La madre de M. es del grupo sanguíneo AB, mientras que su “hermano” es del grupo sanguíneo O. Con esta información, M. deduce que',
    [
        'ese hombre es su hermano',
        'ese hombre puede ser su hermano de parte de padre',
        'ese hombre puede ser su hermano por parte de madre',
        'ese hombre no es su hermano'
    ],
    3
);
let a54 = new Preguntas(
    'La talasemia es un tipo de anemia humana frecuentemente en poblaciones mediterráneas.Hay dos tipos:talasemia mayor (TT) y talasemia menor (Tt).Las personas sanas son homocigotas para el alelo normal (tt).En una familia, el padre y la madre sufren talasemia menor.¿Cuál es la probabilidad un hijo de esa pareja sea normal?',
    [
        '0.5',
        '0.25',
        '0.75',
        '1.0'
    ],
    1
);
let a55 = new Preguntas(
    'El grupo sanguíneo AB en humanos es un ejemplo de',
    [
        'codominancia y alelos múltiples',
        'epistasis y dominancia completa',
        'genes ligados al sexo y dominancia incompleta',
        'genes ligados y herencia poligénica'
    ],
    0
);
let a56 = new Preguntas(
    'Un criadero de perros “bulldog francés” elige a un macho de características típicas de la raza para ofrecer su cruza con distintas hembras. ¿Cuál será el genotipo deseable de ese macho con respecto a los caracteres de interés?',
    [
        'homocigota recesivo',
        'diploide',
        'homocigota dominante',
        'heterocigota'
    ],
    2
);
let a57 = new Preguntas(
    '¿Qué individuos deben cruzarse para generar una hija mujer hemofílica?',
    [
        'una mujer portadora y un hombre sano',
        'no hay mujeres hemofílicas',
        'una mujer sana y un hombre portador',
        'una mujer portadora y un hombre hemofílico'
    ],
    3
);
let a58 = new Preguntas(
    'En la soja “roundup ready” el gen R confiere resistencia al herbicida glifosato. Señale el par de cruzas que produce la misma cantidad de individuos resistentes en F1',
    [
        'Rr x Rr y RR x rr',
        'Rr x Rr y Rr x RR',
        'RR x Rr y Rr x rr',
        'RR x Rr y RR x rr'
    ],
    3
);
let a59 = new Preguntas(
    'El cóccix humano se considera un vestigio de una “cola” ancestral. Señale la opción que describe una postura evolutiva sobre esta estructura',
    [
        'según Lamarck, la falta de uso atrofió la cola en los seres humanos',
        'según Kimura y Crow, la cola surgió por una mutación “útil” en los seres humanos',
        'según Darwin, la cola incrementó la supervivencia y reproducción en los seres humanos',
        'según Eldredge y Jay Gould, la cola apareció en todo el género que incluye a los seres humanos'
    ],
    0
);
let a60 = new Preguntas(
    'Luego de 5 años de fumigar usando el mismo insecticida, el gobierno de Macondo no observa reducciones en la cantidad de mosquitos en la ciudad. ¿Qué espera al comparar las poblaciones de mosquitos el primer y el quinto año de fumigación?',
    [
        'enriquecimiento en un tipo de alelos en el pool poblacional',
        'ningún cambio en el pool de alelos poblacional',
        'cambio total en el pool de alelos poblacional',
        'todos los alelos iguales en el pool de alelos poblacional'
    ],
    0
);

let prueba1 = [];
prueba1.push(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, a35, a36, a37, a38, a39, a40, a41, a42, a43, a44, a45, a46, a47, a48, a49, a50, a51, a52, a53, a54, a55, a56, a57, a58, a59, a60
    );
// Examen 2
let b1 = new Preguntas(
    'Una de las caracteristicas que distinguen a una célula de un virus es',
    [
        'el metabolismo',
        'la capacidad de intercambiar materia y energia con el medio',
        'la presencia de una o más moléculas con información genética',
        'La presencia de moléculas orgánicas biológicas'
    ],
    0
);
let b2 = new Preguntas(
    'Indique la frase correcta',
    [
        'las células procariotas tienen pared celular de celulosa',
        'las células procariotas pueden o no presentar endomembranas',
        'los ribosomas están presentes en todas las células',
        'se llama organela a cualquier estructura subcelular'
    ],
    2
);
let b3 = new Preguntas(
    '¿A cuál de los siguientes reinos podría pertenecer un individuo unicelular, aeróbico, heterotrofo, nucleado y sin pared celular?',
    [
        'monera',
        'animalia',
        'fungi',
        'protista'
    ],
    3
);
let b4 = new Preguntas(
    'Una planta que dirige su crecimiento hacia la luz y transpira el exceso de agua manifiesta las características de',
    [
        'irritabilidad y homeostasis',
        'crecimiento y desarrollo',
        'irritabilidad y metabolismo',
        'crecimiento y homeostasis'
    ],
    0
);
let b5 = new Preguntas(
    'Un microscopio óptico permite observar',
    [
        'la estructura de un virus',
        'las crestas mitocondriales',
        'el núcleo y citoplasma de una célula del hígado',
        'el núcleo y citoplasma de una bacteria'
    ],
    2
);
let b6 = new Preguntas(
    'Un microscopio electrónico de barrido permitirá observar',
    [
        'las crestas mitocondriales',
        'cloroplasto de una célula eucarionte animal',
        'el núcleo de una neurona',
        'la superficie de un espermatozoide'
    ],
    3
);
let b7 = new Preguntas(
    '¿Cuál de las siguientes afirmaciones es correcta?',
    [
        'sólo los nucleótidos monofosfatados pueden ser intermediarios energéticos',
        'todos los nucleótidos contienen una pentosa',
        'la única función de los nucleótidos es estructural',
        'sólo los desoxiribonucleótidosforman polímeros'
    ],
    1
);
let b8 = new Preguntas(
    'Los triglicéridos y los fosfolípidos tienen en común',
    [
        'forman parte de los ribosomas',
        'forman parte del grupo de los esteroides',
        'son complejos macromoleculares',
        'poseer ácidos grasos en su composición'
    ],
    3
);
let b9 = new Preguntas(
    'Cuál de las siguientes opciones incluye solamente proteínas con función de transporte',
    [
        'colágeno, actina, miosina',
        'inmunoglobulina, amilasa, insulina',
        'carrier de glucosa, hemoglobina, canal de sodio primasa, bomba de calcio',
        'albúmina, hemoglobina, adenilatociclasa'
    ],
    2
);
let b10 = new Preguntas(
    'En un laboratorio del CONICET se genera una linea celular que carece de nucléolo. En consecuencia, estas células resultan incapaces de sintetizar ningún tipo de proteinas. Esto se debe a que',
    [
        'las células carecen de ácido desoxirribonucleico',
        'Las células no poseen ALGÚN ácido nucleico',
        'las células carecen de ácido ribonucleico',
        'las células no poseen NINGÚN ácido nucleico'
    ],
    1
);
let b11 = new Preguntas(
    'Los fosfolipidos y las proteínas tienen en común',
    [
        'formar la estructura de las membranas plasmáticas',
        'ser los principales componentes de la pared celular',
        'ser macromoléculas polares',
        'ser polímerosanfipáticos'
    ],
    0
);
let b12 = new Preguntas(
    'Si la citosina constituye el 35% de un segmento de ADN, ¿cuál será el porcentaje correspondiente a la adenina?',
    [
        '0.3',
        '0.15',
        '0.35',
        '0.7'
    ],
    1
);
let b13 = new Preguntas(
    'La pasteurización de la leche consiste en someter al líquido a 72°C por 15 segundos para inactivar enzimas microbianas nocivas. ¿Qué estructura espera que se rompa y de qué manera durante el proceso de pasteurización?',
    [
        'estructura primaria proteica/ruptura irreversible',
        'estructura de doble hélice/ruptura reversible',
        'estructura de doble hélice/ruptura irreversible',
        'estructura primaria proteica/ruptura reversible'
    ],
    0
);
let b14 = new Preguntas(
    'La actina',
    [
        'se encuentra solamente en las células musculares',
        'interviene en el movimiento de cilias y flagelos',
        'se encuentra asociada a la tubulina',
        'participa en la contracción muscular'
    ],
    3
);
let b15 = new Preguntas(
    'Indique cuál de las siguientes afirmaciones acerca de la membrana plasmática es correcta',
    [
        'todas las proteínas integrales tienen función transportadora',
        'los fosfolípidos la hacen permeable a las sustancias hidrofóbicas',
        'es fluída, asimétrica y permeable a todos los solutos',
        'las proteínas periféricas tienen función de receptores'
    ],
    1
);
let b16 = new Preguntas(
    'Se nutren neuronas con aminoácidos marcados radiactivamente y se observan en el microscopio las marcas fluorescentes que indican la localización de estos aminoácidos. ¿Qué opción Indica el patrón correcto en dichas marcas en el entorno de la membrana plasmática?',
    [
        'todas las marcas se verán en el ancho de la membrana',
        'todas las marcas se verán solo en la cara citoplasmática',
        'la mitad de las marcas se verán en la cara citoplasmática y la otra mitad se verán en la cara extracelular',
        'algunas marcas se verán solo en la cara extracelular'
    ],
    3
);
let b17 = new Preguntas(
    'Un estudiante mide la desaparición de ATP como forma de evaluar el gasto energético de distintos procesos metabólicos. Indique la opción en la que se observará desaparición de ATP',
    [
        'apertura de canales de Ca+2 en la membrana del REL de una neurona',
        'difusión de CO2 post-respiración celular en una levadura facultativa',
        'difusión facilitada de glucosa en célula de músculo cardíaco',
        'fagocitocis de un patógeno por parte de un macrófago (célula del sistema inmune)'
    ],
    3
);
let b18 = new Preguntas(
    'Una sustancia con carga y de nivel de organización atómico puede atravesar la membrana plasmatica por',
    [
        'solo por carriers y por bombas',
        'solo por bombas',
        'sólo por canales',
        'por canales y por bombas'
    ],
    3
);
let b19 = new Preguntas(
    'En la respiración pulmonar se inhala aire atmosférico con 20% de Oxígeno: ¿mediante qué mecanismo de transporte el oxígeno del aire inspirado atraviesa las membranas alveolar, endotelial y de los glóbulos rojos hasta Llegar a la hemoglobina?',
    [
        'por difusión simple entre los fosfolípidos',
        'por medio de pinocitosis con consumo de ATP',
        'por difusión facilitada, gracias a las proteínas integrales de membrana',
        'por medio de un transporte activo de bombas de iones con consumo de ATP'
    ],
    0
);
let b20 = new Preguntas(
    'En los seres humanos, la membrana plasmática de los glóbulos rojos es 8,5% más permeable a iones que la membrana plasmática de las células del hígado. Esto se debe a que',
    [
        'la membrana plasmática de los glóbulos rojos es más fluida',
        'la membrana plasmática de los glóbulos rojos es menos fluida',
        'la membrana plasmática de los glóbulos rojos posee más receptores',
        'la membrana plasmática de los glóbulos rojos posee más proteínas'
    ],
    3
);
let b21 = new Preguntas(
    '¿Qué opción describe mejor cómo funcionan las organelas del sistema vacuolar citoplasmático (SVC) en el transporte proteínas?',
    [
        'membranas intracelulares contiguas que conectan cada organela, permitiendo que las proteínas viajen a través del sistema vacuolar citoplasmático',
        'los ribosomas brotan de una organela y luego se fusionan con otras para transportar proteínas a través del sistema vacuolar citoplasmático',
        'membranas extracelulares contiguas que conectan cada organelo, permitiendo que las proteínas viajen a través del sistema vacuolar citoplasmático',
        'vesículas que brotan de una organela y luego se fusionan con otras para transportar proteínas a través del sistema vacuolar citoplasmático'
    ],
    3
);
let b22 = new Preguntas(
    'Una hormona es una señal que',
    [
        'puede requerir de 2dos. mensajerospara cumplir su función',
        'es siempre un lípido',
        'es siempre una proteína',
        'requiere siempre de un receptor en la membrana para cumplir su función'
    ],
    0
);
let b23 = new Preguntas(
    'Las enzimas son saturables. Esto implica que',
    [
        'existe una velocidad máxima a la cual pueden ocurrir las reacciones que catalizan',
        'cada enzima reconoce a un tipo de sustrato',
        'a elevadas concentraciones de sustrato las enzimas se inactivan',
        'si todos los sitios activos se encuentran ocupados no puede llevarse a cabo la reacción'
    ],
    0
);
let b24 = new Preguntas(
    'Con excepción de algunas enzimas bacterianas, la mayoría de las enzimas sometidas a temperaturas superiores a 60 °C pierden su actividad debido a que',
    [
        'se hidrolizan al perder su estructura cuaternaria',
        'se desnaturalizan al perder su estructura primaria',
        'se desnaturalizan al perder su estructura secundaria y terciaria',
        'se hidrolizan al perder secundaria y terciaria'
    ],
    2
);
let b25 = new Preguntas(
    'Si una reacción en la que el sustrato A se transforma en el producto B y sólo puede ocurrir acoplada a la hidrólisis de ATP significa que',
    [
        'es una reacción catabólica y exergónica',
        'el ATP forma parte de la estructura del producto B',
        'el ATP es el catalizador de la reacción',
        'es una reacción anabólica y endergónica'
    ],
    3
);
let b26 = new Preguntas(
    'El HCL liberado por las células del estómago permite generar un ambiente con pH ácido. Si se inhibiera la liberación de HCI a la luz del estómago',
    [
        'no se verá alterada la actividad de las proteasas y lipasas del estómago por el cambio de PH',
        'disminuirá la actividad de las proteasas y lipasas del estómago por el cambio de pH',
        'se producirá la ruptura de la estructura primaria por el cambio de pH',
        'se incrementará la actividad de las proteasas y lipasas del estómago por el cambio de pH'
    ],
    1
);
let b27 = new Preguntas(
    'Una célula vegetal con cloroplastos y mitocondrias realizará en dichas organelas reacciones',
    [
        'anabólicas y exergónicas y catabólicas y endergónicas',
        'anabólicas y endergónicas y catabólicas y exergónicas',
        'solo catabólicas y endergónicas',
        'solo anabólicas y endergónicas'
    ],
    1
);
let b28 = new Preguntas(
    'La respiración aeróbica y la fermentación son procesos alternativos',
    [
        'en todos los organismos',
        'exclusivamente en ciertas bacterias',
        'en los organismos aerobios estrictos',
        'sólo en células facultativas'
    ],
    3
);
let b29 = new Preguntas(
    'Si se aislan las membranas tilacoidestilacoideas de los cloroplastos. ¿qué se podrá extraer de dichas membranas?',
    [
        'fotosistemas y ATP sintetasa',
        'fotosistemas, ATP sintetasa y enzimas del ciclo de Calvin',
        'enzimas del ciclo de Calvin',
        'ADN circular, fotosistemas y ATP sintetasa'
    ],
    0
);
let b30 = new Preguntas(
    'La fermentación láctica y la fotosintesis tienen en común que',
    [
        'utilizan como sustrato a la glucosa',
        'ocurren solamente en organismos procariontes',
        'dependen de la presencia de coenzimas',
        'liberan CO2 como producto'
    ],
    2
);
let b31 = new Preguntas(
    'Si se marca radiactivamente el oxigeno del aire disponible para un organismo de respiración aeróbica,el oxigeno marcado podrá luego detectarse en',
    [
        'el ATP generado en la fosforilación oxidativa',
        'el dióxido de carbono liberado en el ciclo de Krebs',
        'el ácido pirúvico producido en la glucólisis',
        'Las moléculas de agua generadas en la cadena respiratoria'
    ],
    3
);
let b32 = new Preguntas(
    'Se riega una planta con agua que posee oxígeno marcado radioactivamente. Al cabo de unas horas de luz, se podrá detectar el oxígeno marcado en',
    [
        'el dióxido de carbono',
        'el NADPH',
        'la atmósfera',
        'la glucosa'
    ],
    2
);
let b33 = new Preguntas(
    'La heterocromatina contiene secuencias de ADN',
    [
        'que no se pueden transcribir',
        'que se pueden transcribir',
        'que se transcriben sólo en la etapa S',
        'que son siempre no codificantes'
    ],
    0
);
let b34 = new Preguntas(
    'El genoma de una bacteria',
    [
        'presenta gran cantidad de secuencias repetidas',
        'contiene únicamente operones',
        'presenta secuencias reguladoras',
        'contiene genes con intrones y exones'
    ],
    2
);
let b35 = new Preguntas(
    'Indique la opción correcta',
    [
        'durante G2 se encuentra activo el FPM si la célula se va a dividir',
        'durante G1 se encuentra activo el FPM si la célula se va a dividir',
        'durante G1 la cromatina alcanza el máximo grado de empaquetamiento',
        'durante G2 la célula posee los cromosomas sin duplicar'
    ],
    0
);
let b36 = new Preguntas(
    'La función de la helicasa es',
    [
        'cortar y empalmar los exones',
        'romper puentes de hidrógeno entre bases complementarias',
        'remover los fragmentos de Okasaki',
        'romper enlaces fosfodiéster entre bases complementarias'
    ],
    1
);
let b37 = new Preguntas(
    'Se observan células de maiz (2n=20) después de la etapa S y células de ciruelo (2n=24) antes de la etapa S. ¿Qué opción es correcta?',
    [
        'el ciruelo presenta más cromátides hermanas que el maíz',
        'el ciruelo presenta más cromosomas de dos cromátides que el maíz',
        'el maíz presenta más parès de cromosomas homólogos que el ciruelo',
        'el maiz presenta más moléculas de ADN que el ciruelo'
    ],
    3
);
let b38 = new Preguntas(
    'El papilomavirus humano posee genoma de ADN. Para poder hacer copias de su genoma utilizando las enzimas celulares, necesita que la célula se encuentre en',
    [
        'la etapa M o división del ciclo celular',
        'la etapa G2 de la interfase del ciclo celular',
        'la etapa G1 de la interfase del ciclo celular',
        'la etapa S de la interfase del ciclo celular'
    ],
    3
);
let b39 = new Preguntas(
    'La presencia del gen PTR1 confiere a los tomates resistencia a la infección por bacterias del género Pseudomonas. En tomates resistentes, este gen se encuentra',
    [
        'como eucromatina, central en el núcleo',
        'como heterocromatina, asociado a histonas',
        'como heterocromatina, periférico en el núcleo',
        'como eucromatina, sin asociarse a histonas'
    ],
    0
);
let b40 = new Preguntas(
    'La transcripción del gen HIST2H3C resulta en una histona. La proteina resultante presentará',
    [
        'péptido señal',
        'señal de localización nuclear',
        'una secuencia ORI (origen de replicación)',
        'señal de exportación nuclear'
    ],
    1
);
let b41 = new Preguntas(
    'La traducción',
    [
        'utiliza al ARNm como molde',
        'utiliza como sustrato al código genético',
        'es un proceso exergónico',
        'es un proceso catabólico'
    ],
    0
);
let b42 = new Preguntas(
    '¿Sería posible encontrar en el código genético 3 codones diferentes que codificaran para el mismo aminoácido?',
    [
        'sí, porque el código es degenerado',
        'no,dado que el código es universal',
        'no, dado que el código no es ambiguo',
        'sí, ya que existen varios codones de iniciación'
    ],
    0
);
let b43 = new Preguntas(
    'Los factores específicos de transcripción son',
    [
        'proteínas que presentan afinidad por ciertas regiones reguladoras del ADN',
        'proteínas que presentan afinidad por la región operadora del ADN',
        'secuencias de ribonucleótidos que se unen a la región promotora del ADN',
        'secuencias de desoxi-ribonucleótidos que se unen a proteínas específicas'
    ],
    0
);
let b44 = new Preguntas(
    'Una célula es diploide si',
    [
        'tiene pares de cromosomas homólogos',
        'todos sus cromosomas son iguales',
        'tiene cromosomas simples en G1 y duplicados en G2',
        'sus cromosomas están formados por dos cromátides'
    ],
    0
);
let b45 = new Preguntas(
    'Las células somáticas de la planta de papa tlenen 48 cromosomas. Por lo tanto, en cada polo de la telofase mitótica habrá',
    [
        '24 cromosomas simples',
        '24 cromosomas duplicados',
        '48 cromosomas simples',
        '48 cromosomas duplicados'
    ],
    2
);
let b46 = new Preguntas(
    'En la profase',
    [
        'se desorganiza la envoltura nuclear',
        'se descondensala cromatina',
        'se desorganiza el huso',
        'se aparean los cromosomas'
    ],
    0
);
let b47 = new Preguntas(
    'Si un gen que codifica uno de los polipeptidos que forman la inmunoglobulina sufre una mutación silenciosa',
    [
        'no hay transcripción',
        'la secuencia de la cadena de inmunoglobulina sintetizada, no cambia',
        'no se expresa el gen de la inmunoglobulina',
        'la cadena de inmunoglobulina sintetizada carece de actividad biológica y su secuencia es distinta'
    ],
    1
);
let b48 = new Preguntas(
    'Se denomina diferenciación celular a',
    [
        'la consecuencia de la migración diferencial de las cromátidas hermanas en la mitosis',
        'la consecuencia de transcripción diferencial de genes en las distintas células',
        'la consecuencia de traducción diferencial de genes en las distintas células',
        'La consecuencia de la migración diferencial de los cromosomas homólogos en la meiosis'
    ],
    1
);
let b49 = new Preguntas(
    'El splicing alternativo permite',
    [
        'generar distintos mensajeros maduros que codifican para distintas proteinas',
        'generar copias de mensajeros inmaduros que codifican para la misma proteína',
        'generar copias de mensajeros maduros que codifican para la misma proteína',
        'generar distintos mensajeros inmaduros que codifican para distintas proteínas'
    ],
    0
);
let b50 = new Preguntas(
    'Durante la meiosis suele ocurrir un reordenamiento genético que aumenta la variación genética en la descendencia. ¿Cuál es el mecanismo y en qué etapa de la meiosis?',
    [
        'entrecruzamiento o crossing over; durante la anafase II',
        'mutaciones espontáneas; durante la metafase I',
        'segregación independiente; durante la metafase I',
        'entrecruzamiento o crossing over, durante la telofase I'
    ],
    2
);
let b51 = new Preguntas(
    'el gen que codifica el receptor de la insulina se encontrará',
    [
        'sólo en las gametas',
        'sólo en las células que expresan la proteina receptora',
        'en todas las células del individuo',
        'sólo en las células somáticas'
    ],
    2
);
let b52 = new Preguntas(
    'Si por una mutación apareciera un codón de terminación antes de tiempo en el ARN mensajero',
    [
        'la proteína resultante sería más corta que la normal, y posiblemente no funcional',
        'el ARN mensajero, directamente no sería leído por estar defectuoso',
        'la proteína resultante tendría el mismo tamaño que la normal, pero con otra secuencia de aminoácidos',
        'la proteína resultante tendría el mismo tamaño que la normal'
    ],
    0
);
let b53 = new Preguntas(
    'El alelo del daltonismo es recesivo con respecto al alelo normal,¿Cuál es la probabilidad que un hombre daltónico casado con una mujer normal portadora para el daltonismo, tengan un hijo y una hija, ambos daltónicos',
    [
        '¼ y ½',
        '1/2 y ½',
        '1 y ½',
        '¼ y ¼'
    ],
    1
);
let b54 = new Preguntas(
    'De la cruzada de 2 gatos heterocigotas para el manto naranja se encuentra una F1 con probabilidad fenotípica',
    [
        '1',
        '1 a 1',
        '3 a 1',
        '1 a 3'
    ],
    2
);
let b55 = new Preguntas(
    'La anemia falciforme es una enfermedad autosómica recesiva. el alelo que codifica para la enfermedad presenta información que al traducirse, una de las cadenas de la hemoglobina es defectuosa para el transporte de 02 y la conformación de los glóbulos rojos. Para que el fenotipo sea "enfermo". El genotipo del individuo debe ser',
    [
        'heterocigota',
        'hija de madre portadora y padre sano',
        'homocigota dominante',
        'homocigota recesivo'
    ],
    3
);
let b56 = new Preguntas(
    '¿Que individuos deben cruzarse para generar una hija mujer hemofílica?',
    [
        'una mujer portadora y un hombre sano',
        'una mujer sana y un hombre portador',
        'una mujer portadora y un hombre hemofílico',
        'no hay mujeres hemofílicas'
    ],
    2
);
let b57 = new Preguntas(
    'Un hombre presenta un tipo de cataratas (anormalidad en los ojos) y depende de un alelo dominante "C" .Su padre tenía vista normal, su madre sufre de cataratas y su abuela tenia visión normal. Si se casa con una mujer normal, la probabilidad de tener un hijo normal es',
    [
        '0.75',
        '1.0',
        '0.5',
        '0.25'
    ],
    2
);
let b58 = new Preguntas(
    'Cuenta la leyenda que las escamas negras en los dragones, se debe a un alelo recesivo y ligado al sexo. De la cruza de 2 dragones verdes se obtuvieron 2 huevos de dragones verdes hembras y 1 huevo de dragón negro macho. ¿Cómo espera que sea el genotipo del dragón negro?',
    [
        'Xv Yv',
        'XV YV',
        'XV Y',
        'Xv Y'
    ],
    3
);
let b59 = new Preguntas(
    'Luego de 5 años de fumigar usando el mismo insecticida, el gobierno de Macondo no observa reducciones en la cantidad de mosquitos en la ciudad. ¿Qué espera al comparar las poblaciones de mosquitos el primer y el quinto año de fumigación?',
    [
        'todos los alelos iguales en el pool de alelos poblacional',
        'enriquecimiento en un tipo de alelos en el pool poblacional',
        'cambio total en el pool de alelos poblacional',
        'ningún cambio en el pool de alelos poblacional'
    ],
    1
);
let b60 = new Preguntas(
    'Las plantas CAM, típicas de regiones cálidas, cierran sus estomas durante el día evitando perder agua, y los abren de noche para permitir la difusión del CO2 para la fotosíntesis. Según el Darwinismo, en las poblaciones ancestrales de estas plantas',
    [
        'los individuos con esta estrategia dejaron menos descendientes',
        'los individuos sin esta estrategia sobrevivieron menos',
        'los individuos incorporaron gradualmente esta estrategia hasta acoplarse al ambiente',
        'los individuos crearon esta estrategia por presión del ambiente'
    ],
    1
);

let prueba2 = [];
prueba2.push(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49, b50, b51, b52, b53, b54, b55, b56, b57, b58, b59, b60);
// Examen 3
let c1 = new Preguntas(
    'La irritabilidad es una característica',
    [
        'de todos los seres vivos', 
        'de los seres vivos que poseen órganos de los sentidos', 
        'exclusiva de los organismos eucariontes', 
        'propia de los organismos pluricelulares'
    ],
    0
);
let c2 = new Preguntas(
    'Todas las algas, los animales y las plantas',
    [
        'son pluricelulares', 
        'pueden reproducirse de manera asexual', 
        'poseen mitocondrias y cloroplastos en sus células', 
        'son organismos con células eucariotas'
    ],
    3
);
let c3 = new Preguntas(
    'El hecho de que una lombriz de tierra se desplace hacia zonas más húmedas involucra directamente las siguientes características',
    [
        'reproducción y desarrollo', 
        'crecimiento y complejidad estructural', 
        'metabolismo y homeostasis', 
        'irritabilidad y adaptabilidad'
    ],
    3
);
let c4 = new Preguntas(
    'Las células vegetales, a diferencia de las animales, poseen la capacidad de sintetizar',
    [
        'ARNm a partir de ribonucleótidos',
        'lípidos a partir de glicerol y ácidos grasos',
        'glúcidos a partir de CO2 y H2O',
        'proteínas a partir de aminoácidos'
    ],
    2
);
let c5 = new Preguntas(
    '¿Cuál es el mínimo y máximo nivel de organización de la materia que tiene un ser vivo?',
    [
        'molecular y sistema de órganos',
        'macromolecular complejo y sistema de órganos',
        'celular y sistema de órganos',
        'celular y ecosistema'
    ],
    2
);
let c6 = new Preguntas(
    '¿Qué es un reino?',
    [
        'un tipo organización basada en la antigüedad de las especies',
        'una clasificación teórica basada en características morfológicas y funcionales',
        'una clasificación para la estructura de la materia',
        'un lugar donde se conservan las especies'
    ],
    1
);
let c7 = new Preguntas(
    'Los ácidos nucleicos pueden',
    [
        'presentar nucleótidos mono- o trifosfatados',
        'presentar o no el elemento N (nitrógeno)',
        'ser lineales o ramificados',
        'ser monocatenarios o bicatenarios'
    ],
    3
);
let c8 = new Preguntas(
    'Tanto la lactosa como la quitina',
    [
        'poseen estructura ramificada',
        'son hidratos de carbono',
        'son macromoléculas',
        'cumplen la función de reserva energética'
    ],
    1
);
let c9 = new Preguntas(
    'Indique la opción que incluya una sustancia polimérica',
    [
        'celulosa',
        'ADP',
        'fosfolípido',
        'esteroide'
    ],
    0
);
let c10 = new Preguntas(
    'Una molécula de ADN que posee 600 adeninas y 400 guaninas tendrá',
    [
        '600 timinas, 400 citosinas y 2000 pentosas',
        '600 timinas, 400 citosinas y 3000 pentosas',
        '600 timinas, 200 citosinas y 1000 pentosas',
        '600 timinas, 400 citosinas y 1000 pentosas'
    ],
    0
);
let c11 = new Preguntas(
    'Los fosfolípidos y las proteínas tienen en común',
    [
        'ser los principales componentes de la pared celular',
        'formar la estructura de las membranas plasmáticas',
        'ser polímeros anpáticos',
        'ser macromoléculas polares'
    ],
    1
);
let c12 = new Preguntas(
    'Si una molécula de ARN tiene 300 nucleótidos',
    [
        'tendrá 300 desoxirribosas',
        'tendrá 300 pentosas y 600 bases nitrogenadas',
        'tendrá 600 pentosas',
        'tendrá 300 pentosas y 300 bases nitrogenadas'
    ],
    3
);
let c13 = new Preguntas(
    'La pasteurización de la leche consiste en someter al líquido a 72°C por 15 segundos para inactivar enzimas microbianas nocivas. ¿Qué estructura espera que se rompa y de qué manera durante el proceso de pasteurización?',
    [
        'estructura de doble hélice/ruptura irreversible',
        'estructura de doble hélice/ruptura reversible',
        'estructura primaria proteica/ruptura reversible',
        'estructura primaria proteica/ruptura irreversible'
    ],
    3
);
let c14 = new Preguntas(
    'La actina',
    [
        'se encuentra asociada a la tubulina',
        'interviene en el movimiento de cilias y flagelos',
        'se encuentra solamente en las células musculares',
        'participa en la contracción muscular'
    ],
    3
);
let c15 = new Preguntas(
    'La fagocitosis involucra la actividad de',
    [
        'los lisosomas y el citoesqueleto',
        'la membrana plasmática y la pared celular',
        'la membrana plasmática y sus microlamentos asociados',
        'el sistema de Golgi y los lisosomas'
    ],
    2
);
let c16 = new Preguntas(
    'Se nutren neuronas con aminoácidos marcados radiactivamente y se observan en el microscopio las marcas fluorescentes que indican la localización de estos aminoácidos. ¿Qué opción indica el patrón correcto en dichas marcas en el entorno de la membrana plasmática?',
    [
        'la mitad de las marcas se verán en la cara citoplasmática y la otra mitad se verán en la cara extracelular',
        'todas las marcas se verán en el ancho de la membrana',
        'algunas marcas se verán solo en la cara extracelular',
        'todas las marcas se verán solo en la cara citoplasmática'
    ],
    2
);
let c17 = new Preguntas(
    'El SARS-CoV-2 es el virus causante de la enfermedad Covid-19 en todo el mundo. Teniendo en cuenta el nivel de complejidad de su estructura, ¿qué mecanismo podría utilizar para su ingreso a la célula?',
    [
        'difusión facilitada a través de proteínas canal',
        'transporte activo utilizando bombas ATPasas',
        'difusión facilitada a través de proteínas transportadoras',
        'endocitosis'
    ],
    3
);
let c18 = new Preguntas(
    'El complejo del poro nuclear posee sitios específicos para el pasaje de agua denominados acuaporinas. ¿Cómo se desarrollará el movimiento de esta molécula?',
    [
        'del sitio de menor al de mayor concentración de soluto, sin gasto energético',
        'del sitio de menor al de mayor concentración de soluto, con hidrólisis de ATP',
        'del sitio de menor al de mayor concentración de soluto, por difusión facilitada',
        'del sitio de menor al de mayor concentración de soluto, por proteínas transportadoras'
    ],
    0
);
let c19 = new Preguntas(
    '¿Qué actividad se verá afectada si se eliminan todas las proteínas de la biomembrana?',
    [
        'transporte de colesterol',
        'movimiento lateral de los fosfolípidos',
        'transporte de oxígeno',
        'difusión facilitada'
    ],
    3
);
let c20 = new Preguntas(
    'Una célula sufre plasmólisis al sumergirla en',
    [
        'una solución hipertónica',
        'agua sin soluto',
        'una solución isotónica',
        'una solución hipotónica'
    ],
    0
);
let c21 = new Preguntas(
    'La ATP-sintetasa que se encuentra en la membrana tilacoide',
    [
        'consume ATP en la difusión facilitada de H+ hacia el estroma',
        'permite el bombeo de H+ hacia el estroma',
        'permite la difusión facilitada de H+ hacia el estroma',
        'consume ATP en el bombeo de H+ hacia el estroma'
    ],
    2
);
let c22 = new Preguntas(
    'Una hormona es una señal que',
    [
        'requiere siempre de un receptor en la membrana para cumplir su función',
        'puede requerir de segundos mensajeros para cumplir su función',
        'es siempre un lípido',
        'es siempre una proteína'
    ],
    1
);
let c23 = new Preguntas(
    'Las enzimas son saturables. Esto implica que',
    [
        'existe una velocidad máxima a la cual pueden ocurrir las reacciones que catalizan',
        'si todos los sitios activos se encuentran ocupados no puede llevarse a cabo la reacción',
        'cada enzima reconoce a un tipo de sustrato',
        'a elevadas concentraciones de sustrato las enzimas se inactivan'
    ],
    0
);
let c24 = new Preguntas(
    'Si la célula no puede sintetizar la enzima ARN polimerasa',
    [
        'no se puede llevar a cabo el proceso de duplicación',
        'no se puede llevar a cabo los procesos de transcripción y traducción',
        'no se pueden llevar a cabo los procesos de duplicación y transcripción',
        'no se pueden llevar a cabo los procesos de duplicación y traducción'
    ],
    2
);
let c25 = new Preguntas(
    'El HCl liberado por las células del estómago permite generar un ambiente con pH ácido. Si se inhibiera la liberación de HCl a la luz del estómago',
    [
        'no se verá alterada la actividad de las proteasas y lipasas del estómago por el cambio de pH',
        'se incrementará la actividad de las proteasas y lipasas del estómago por el cambio de pH',
        'se producirá la ruptura de la estructura primaria por el cambio de pH',
        'disminuirá la actividad de las proteasas y lipasas del estómago por el cambio de pH'
    ],
    3
);
let c26 = new Preguntas(
    'Una célula vegetal con cloroplastos y mitocondrias realizará en dichas organelas reacciones',
    [
        'solo anabólicas y endergónicas',
        'solo catabólicas y endergónicas',
        'anabólicas y exergónicas y catabólicas y endergónicas',
        'anabólicas y endergónicas y catabólicas y exergónicas'
    ],
    3
);
let c27 = new Preguntas(
    'Si una reacción en la que el sustrato A se transforma en el producto B solo puede ocurrir acoplada a la hidrólisis de ATP significa que',
    [
        'el ATP forma parte de la estructura del producto B',
        'es una reacción anabólica y endergónica',
        'es una reacción catabólica y exergónica',
        'el ATP es el catalizador de la reacción'
    ],
    1
);
let c28 = new Preguntas(
    'El NADH',
    [
        'es un nucleótido monofosfatado con funciones energéticas',
        'se produce en la primera etapa de la fotosíntesis para utilizarse en el ciclo de Calvin',
        'es intermediario en la respiración celular',
        'es producto de la cadena respiratoria'
    ],
    2
);
let c29 = new Preguntas(
    'El ATP es',
    [
        'un producto de la fotosíntesis y un sustrato de la respiración',
        'un producto de la respiración y un intermediario en la fotosíntesis.',
        'un ácido nucleico que puede cumplir el rol de intermediario',
        'una macromolécula que es monómero del ADN'
    ],
    1
);
let c30 = new Preguntas(
    'Si se aíslan las membranas tilacoides de los cloroplastos, ¿qué se podrá extraer de dichas membranas?',
    [
        'fotosistemas, ATP sintetasa y enzimas del ciclo de Calvin',
        'enzimas del ciclo de Calvin',
        'ADN circular, fotosistemas y ATP sintetasa',
        'fotosistemas y ATP sintetasa'
    ],
    3
);
let c31 = new Preguntas(
    'En un laboratorio se hacen cultivos celulares bajo diversas condiciones. ¿Cuál de los siguientes cultivos crecerá más?',
    [
        'cultivo de células facultativas en ausencia de oxígeno',
        'cultivo de células anaeróbicas en presencia de oxígeno',
        'cultivo de células aeróbicas en ausencia de oxígeno',
        'cultivo de células facultativas en presencia de oxígeno'
    ],
    3
);
let c32 = new Preguntas(
    'Algunos herbicidas producen el bloqueo del fotosistema I. ¿Cuál será la consecuencia de su aplicación, a nivel celular, sobre los cloroplastos?',
    [
        'no se sintetizan proteínas',
        'no se sintetiza ATP ni se obtiene oxígeno',
        'no se sintetiza NADPH ni glucosa',
        'no se produce el gradiente de protones'
    ],
    3
);
let c33 = new Preguntas(
    'Teniendo en cuenta que el síndrome de Down es una trisomía del par 21',
    [
        'es una mutación génica',
        'es una mutación cromosómica',
        'es una mutación genómica',
        'es una mutación puntual por deleción'
    ],
    2
);
let c34 = new Preguntas(
    'La cantidad de ADN',
    [
        'en G0 es menor que en G1',
        'en G2 es mayor que en cada polo de la telofase',
        'en G1 es menor que en cada polo de la telofase',
        'en G0 es mayor que en G1'
    ],
    1
);
let c35 = new Preguntas(
    'La replicación es un proceso',
    [
        'endergónico porque requiere energía para la formación de enlaces fosfodiéster',
        'exergónico porque se libera energía de la ruptura de los enlaces trifosfatos.',
        'exergónico porque se libera energía al formarse enlaces covalentes.',
        'endergónico porque requiere energía para la formación de la doble hélice'
    ],
    0
);
let c36 = new Preguntas(
    'Indique la opción correcta',
    [
        'durante G2 se encuentra activo el FPM si la célula se va a dividir',
        'durante G1 se encuentra activo el FPM si la célula se va a dividir',
        'durante G2 la célula posee los cromosomas sin duplicar',
        'durante G1 la cromatina alcanza el máximo grado de empaquetamiento'
    ],
    0
);
let c37 = new Preguntas(
    'El papilomavirus humano posee genoma de ADN. Para poder hacer copias de su genoma utilizando las enzimas celulares, necesita que la célula se encuentre en',
    [
        'la etapa M o división del ciclo celular',
        'la etapa S de la interfase del ciclo celular',
        'la etapa G2 de la interfase del ciclo celular',
        'la etapa G1 de la interfase del ciclo celular'
    ],
    1
);
let c38 = new Preguntas(
    'El ajo (Allium sativum) es una especie 2n=16. Esto implica que en su cariotipo',
    [
        'no puede haber 8 pares de cromosomas metacéntricos',
        'puede haber hasta 16 pares de cromosomas metacéntricos',
        'puede haber hasta 8 pares de cromosomas metacéntricos',
        'puede haber 16 cromosomas metacéntricos y 16 cromosomas telocéntricos'
    ],
    2
);
let c39 = new Preguntas(
    'Se observan células de maíz (2n=20) después de la etapa S y células de ciruelo (2n=24) antes de la etapa S. ¿Qué opción es correcta?',
    [
        'el maíz presenta más pares de cromosomas homólogos que el ciruelo',
        'el ciruelo presenta más cromosomas de dos cromátides que el maíz',
        'el ciruelo presenta más cromátides hermanas que el maíz',
        'el maíz presenta más moléculas de ADN que el ciruelo'
    ],
    3
);
let c40 = new Preguntas(
    'El nucléolo se visualiza',
    [
        'con un microscopio óptico durante toda la interfase',
        'con un microscopio electrónico de barrido durante todo el ciclo celular',
        'con un microscopio óptico sólo durante la división celular',
        'con un microscopio óptico durante todo el ciclo celular'
    ],
    0
);
let c41 = new Preguntas(
    'La información para la estructura primaria de las proteínas se encuentra en',
    [
        'los aminoácidos',
        'los ARN de transferencia',
        'los ARN mensajeros',
        'el código genético'
    ],
    2
);
let c42 = new Preguntas(
    '¿Cuál de los siguientes elementos es un sustrato de la transcripción?',
    [
        'ARN polimerasa',
        'AMP',
        'ATP',
        'ADN molde'
    ],
    2
);
let c43 = new Preguntas(
    '¿Cuál de las siguientes características es común a la traducción y a la transcripción?',
    [
        'ocurren siempre en el citoplasma',
        'requieren nucleótidos trifosfatados',
        'utilizan como molde una molécula de ADN',
        'ocurren siempre en el interior del núcleo.'
    ],
    1
);
let c44 = new Preguntas(
    'En la profase',
    [
        'se descondensa la cromatina',
        'se desorganiza el huso',
        'se desorganiza la envoltura nuclear',
        'se aparean los cromosomas'
    ],
    2
);
let c45 = new Preguntas(
    'Una célula es diploide si',
    [
        'tiene pares de cromosomas homólogos',
        'tiene cromosomas simples en G1 y duplicados en G2',
        'todos sus cromosomas son iguales',
        'sus cromosomas están formados por dos cromátides'
    ],
    0
);
let c46 = new Preguntas(
    'La mitosis y la meiosis tienen en común que ambas',
    [
        'pueden ocurrir en células eucariotas y procariotas',
        'son ecuacionales',
        'ocurren sólo en células eucariotas',
        'son reduccionales'
    ],
    2
);
let c47 = new Preguntas(
    'El splicing alternativo permite',
    [
        'generar copias de mensajeros maduros que codifican para la misma proteína',
        'generar distintos mensajeros inmaduros que codifican para distintas proteínas',
        'generar distintos mensajeros maduros que codifican para distintas proteínas',
        'generar copias de mensajeros inmaduros que codifican para la misma proteína'
    ],
    2
);
let c48 = new Preguntas(
    'El gen que codifica el receptor de la insulina se encontrará',
    [
        'sólo en las células que expresan la proteína receptora',
        'en todas las células del individuo',
        'sólo en las gametas',
        'sólo en las células somáticas'
    ],
    1
);
let c49 = new Preguntas(
    'En un tubo de ensayo se colocan ARNm de ratón, ribosomas y enzimas necesarias para la traducción provenientes de gato; aminoácidos unidos a ARNt provenientes de murciélago y un dador de energía. El cóctel se incuba en una solución a 37°C. ¿A qué organismo corresponderá el polipéptido sintetizado?',
    [
        'sólo de murciélago',
        'mezcla de polipéptidos de ratón y murciélago',
        'sólo de ratón',
        'mezcla de polipéptidos de ratón y gato'
    ],
    2
);
let c50 = new Preguntas(
    'El número de cromosomas hijos de una célula humana en anafase II de la meiosis es',
    [
        '23',
        '46',
        '92',
        '2'
    ],
    1
);
let c51 = new Preguntas(
    'Con referencia a la gametogénesis humana',
    [
        'en el hombre produce gametas viables 1 vez al mes',
        'en la mujer genera 4 células hijas viables',
        'en la mujer la meiosis inicia en el estado embrionario (3º mes de gestación)',
        'en el hombre nunca tiene la misma duración'
    ],
    2
);
let c52 = new Preguntas(
    'Se denomina diferenciación celular a',
    [
        'la consecuencia de la migración diferencial de las cromátidas hermanas en la mitosis',
        'la consecuencia de la migración diferencial de los cromosomas homólogos en la meiosis',
        'la consecuencia de traducción diferencial de genes en las distintas células',
        'la consecuencia de transcripción diferencial de genes en las distintas células'
    ],
    3
);
let c53 = new Preguntas(
    'Un hombre presenta un tipo de cataratas (anormalidad en los ojos) y depende de un alelo dominante “C”. Su padre tenía vista normal, su madre sufre de cataratas y su abuela tenía visión normal. Si se casa con una mujer normal, la probabilidad de tener un hijo normal es',
    [
        '0.25',
        '0.5',
        '0.75',
        '1.0'
    ],
    1
);
let c54 = new Preguntas(
    'La talasemia es un tipo de anemia humana frecuente en poblaciones mediterráneas. Hay dos tipos: talasemia mayor (TT) y talasemia menor (Tt). Las personas sanas son homocigotas para el alelo normal (tt). En una familia, el padre y la madre sufren talasemia menor. ¿Cuál es la probabilidad de que un hijo de esa pareja sea normal?',
    [
        '0.75',
        '1.0',
        '0.25',
        '0.5'
    ],
    2
);
let c55 = new Preguntas(
    'Cuenta la leyenda que las escamas negras en los dragones se deben a un alelo recesivo y ligado al sexo. De la cruza de 2 dragones verdes se obtuvieron 2 huevos de dragones verdes hembras y 1 huevo de dragón negro macho. ¿Cómo espera que sea el genotipo del dragón negro?',
    [
        'XV YV',
        'XV Y',
        'Xv Yv',
        'Xv Y'
    ],
    3
);
let c56 = new Preguntas(
    'Un criadero de perros “bulldog francés” elige a un macho de características típicas de la raza para ofrecer su cruza con distintas hembras. ¿Cuál será el genotipo deseable de ese macho con respecto a los caracteres de interés?',
    [
        'heterocigota',
        'diploide',
        'homocigota dominante',
        'homocigota recesivo'
    ],
    2
);
let c57 = new Preguntas(
    'En la soja “roundup ready” el gen R confiere resistencia al herbicida glifosato. Señale el par de cruzas que produce la misma cantidad de individuos resistentes en F1',
    [
        'RR x Rr y Rr x rr',
        'Rr x Rr y Rr x RR',
        'Rr x Rr y RR x rr',
        'RR x Rr y RR x rr'
    ],
    3
);
let c58 = new Preguntas(
    'El “oído absoluto” musical tiene una base genética recesiva. ¿Qué chances de tener un/a hijo/a con “oído absoluto” tiene una mujer homocigota recesiva si forma pareja con un hombre homocigota dominante?',
    [
        '0.25',
        'ninguna',
        '0.5',
        '0.75'
    ],
    1
);
let c59 = new Preguntas(
    '¿Cómo se explican los cambios evolutivos de los seres vivos con reproducción asexual, teniendo en cuenta que no poseen la variabilidad genética de los seres vivos diploides?',
    [
        'la irritabilidad',
        'el efecto ambiental y las mutaciones',
        'crecimiento y desarrollo',
        'la homeostasis'
    ],
    1
);
let c60 = new Preguntas(
    'Originalmente los guepardos se distribuían por todo el continente africano, pero luego de períodos extensos de frío extremo y congelamiento (“glaciaciones”), los pocos individuos sobrevivientes quedaron limitados al este y sur del continente. ¿Qué cambio en las frecuencias alélicas representa este caso?',
    [
        'reducción por recombinación genética',
        'reducción por deriva génica',
        'incremento del flujo génico',
        'incremento por efecto fundador'
    ],
    1
);

let prueba3 = [];
prueba3.push(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52, c53, c54, c55, c56, c57, c58, c59, c60);
// insertas ejercicios
let ejercicios = [prueba1,prueba2,prueba3]

// Background animado

background('back')

function background(id) {
    document.getElementById(id).innerHTML = `
    <svg version="1.1" id="home-anim" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 1820 1080" style="enable-background:new 0 0 1820 1080;" xml:space="preserve">
    
    <g id="home">
        <defs>
            <rect id="masque" y="0.4" width="1820" height="1080"/>
        </defs>
        <clipPath id="cache">
            <use xlink:href="#masque"  style="overflow:visible;"/>
        </clipPath>
        <g id="light-blue">
            <line x1="630.8" y1="894.3" x2="476.3" y2="1048.8"/>
            <line x1="858.2" y1="823.9" x2="1012.7" y2="669.4"/>
            <line x1="1066.9" y1="458.2" x2="912.4" y2="612.7"/>
            <line x1="1294.3" y1="387.8" x2="1448.8" y2="233.3"/>
            <line x1="1503" y1="22.1" x2="1348.5" y2="176.6"/>
            <line x1="895.6" y1="1166.6" x2="1050.1" y2="1012.1"/>
            <line x1="1104.3" y1="800.9" x2="949.8" y2="955.4"/>
            <line x1="1331.7" y1="730.5" x2="1486.2" y2="576"/>
            <line x1="1540.4" y1="364.8" x2="1385.9" y2="519.3"/>
            <line x1="1767.8" y1="294.4" x2="1922.3" y2="139.9"/>
            <line x1="1976.5" y1="-71.3" x2="1822" y2="83.2"/>
            <line x1="1369.1" y1="1073.2" x2="1523.6" y2="918.7"/>
            <line x1="1577.8" y1="707.5" x2="1423.3" y2="862"/>
            <line x1="1805.2" y1="637.1" x2="1959.7" y2="482.6"/>
            <line x1="1624" y1="1041.4" x2="1469.4" y2="1195.9"/>
            <line x1="-134.7" y1="674.9" x2="19.8" y2="520.4"/>
            <line x1="74" y1="309.2" x2="-80.5" y2="463.7"/>
            <line x1="301.4" y1="238.8" x2="455.9" y2="84.3"/>
            <line x1="510.1" y1="-126.9" x2="355.6" y2="27.6"/>
            <line x1="-88.6" y1="1008.9" x2="65.9" y2="854.4"/>
            <line x1="120.1" y1="643.1" x2="-34.4" y2="797.7"/>
            <line x1="347.5" y1="572.8" x2="502" y2="418.3"/>
            <line x1="556.2" y1="207.1" x2="401.7" y2="361.6"/>
            <line x1="783.6" y1="136.7" x2="938.1" y2="-17.8"/>
            <line x1="157.6" y1="985.8" x2="3" y2="1140.3"/>
            <line x1="384.9" y1="915.5" x2="539.4" y2="760.9"/>
            <line x1="593.6" y1="549.7" x2="439.1" y2="704.3"/>
            <line x1="821" y1="479.4" x2="975.5" y2="324.9"/>
            <line x1="1029.7" y1="113.6" x2="875.2" y2="268.2"/>
            <line x1="1257.1" y1="43.3" x2="1411.6" y2="-111.2"/>
        </g>
        <g id="red">
            <line x1="794.4" y1="883.4" x2="639.8" y2="1037.9"/>
            <line x1="694.6" y1="834.8" x2="849.2" y2="680.3"/>
            <line x1="1230.4" y1="447.3" x2="1075.9" y2="601.8"/>
            <line x1="1130.7" y1="398.7" x2="1285.2" y2="244.2"/>
            <line x1="1666.5" y1="11.2" x2="1512" y2="165.7"/>
            <line x1="732" y1="1177.5" x2="886.6" y2="1023"/>
            <line x1="1267.9" y1="790" x2="1113.3" y2="944.5"/>
            <line x1="1168.1" y1="741.4" x2="1322.7" y2="586.9"/>
            <line x1="1703.9" y1="353.9" x2="1549.4" y2="508.4"/>
            <line x1="1604.2" y1="305.3" x2="1758.7" y2="150.8"/>
            <line x1="1205.5" y1="1084.1" x2="1360.1" y2="929.6"/>
            <line x1="1741.4" y1="696.5" x2="1586.8" y2="851.1"/>
            <line x1="1641.6" y1="648" x2="1796.2" y2="493.5"/>
            <line x1="1787.5" y1="1030.5" x2="1633" y2="1185"/>
            <line x1="1687.8" y1="981.9" x2="1842.3" y2="827.4"/>
            <line x1="200.1" y1="-44.4" x2="45.6" y2="110.1"/>
            <line x1="237.5" y1="298.3" x2="83" y2="452.8"/>
            <line x1="137.8" y1="249.7" x2="292.3" y2="95.2"/>
            <line x1="673.6" y1="-137.8" x2="519.1" y2="16.7"/>
            <line x1="283.7" y1="632.2" x2="129.2" y2="786.8"/>
            <line x1="184" y1="583.7" x2="338.5" y2="429.2"/>
            <line x1="719.8" y1="196.2" x2="565.2" y2="350.7"/>
            <line x1="620" y1="147.6" x2="774.6" y2="-6.9"/>
            <line x1="321.1" y1="974.9" x2="166.6" y2="1129.4"/>
            <line x1="221.4" y1="926.4" x2="375.9" y2="771.8"/>
            <line x1="757.2" y1="538.8" x2="602.7" y2="693.4"/>
            <line x1="657.5" y1="490.3" x2="812" y2="335.8"/>
            <line x1="1193.3" y1="102.7" x2="1038.7" y2="257.3"/>
            <line x1="1093.5" y1="54.2" x2="1248.1" y2="-100.3"/>
        </g>
        <g id="blue">
            <line x1="225.8" y1="1151" x2="534.9" y2="841.9"/>
            <line x1="827.1" y1="1003.3" x2="518" y2="1312.3"/>
            <line x1="661.9" y1="714.9" x2="971" y2="405.9"/>
            <line x1="1263.1" y1="567.2" x2="954.1" y2="876.3"/>
            <line x1="1098" y1="278.8" x2="1407.1" y2="-30.2"/>
            <line x1="1699.2" y1="131.1" x2="1390.2" y2="440.2"/>
            <line x1="699.3" y1="1057.6" x2="1008.4" y2="748.5"/>
            <line x1="1300.6" y1="909.9" x2="991.5" y2="1218.9"/>
            <line x1="1135.4" y1="621.5" x2="1444.5" y2="312.4"/>
            <line x1="1736.6" y1="473.8" x2="1427.6" y2="782.8"/>
            <line x1="1571.5" y1="185.4" x2="1880.6" y2="-123.6"/>
            <line x1="1172.8" y1="964.2" x2="1481.9" y2="655.1"/>
            <line x1="1774.1" y1="816.5" x2="1465" y2="1125.5"/>
            <line x1="1608.9" y1="528.1" x2="1918" y2="219"/>
            <line x1="1219" y1="1298.1" x2="1528" y2="989.1"/>
            <line x1="1655.1" y1="862" x2="1964.1" y2="553"/>
            <line x1="232.8" y1="75.5" x2="-76.2" y2="384.6"/>
            <line x1="270.2" y1="418.2" x2="-38.8" y2="727.3"/>
            <line x1="105.1" y1="129.8" x2="414.2" y2="-179.2"/>
            <line x1="706.3" y1="-17.9" x2="397.3" y2="291.2"/>
            <line x1="-284.8" y1="899.9" x2="24.2" y2="590.8"/>
            <line x1="316.4" y1="752.2" x2="7.3" y2="1061.2"/>
            <line x1="151.3" y1="463.8" x2="460.3" y2="154.7"/>
            <line x1="752.5" y1="316.1" x2="443.4" y2="625.1"/>
            <line x1="587.3" y1="27.7" x2="896.4" y2="-281.4"/>
            <line x1="1188.6" y1="-120" x2="879.5" y2="189"/>
            <line x1="-247.4" y1="1242.5" x2="61.6" y2="933.5"/>
            <line x1="188.7" y1="806.4" x2="497.7" y2="497.4"/>
            <line x1="789.9" y1="658.8" x2="480.8" y2="967.8"/>
            <line x1="624.8" y1="370.4" x2="933.8" y2="61.3"/>
            <line x1="1226" y1="222.7" x2="916.9" y2="531.7"/>
            <line x1="1662.1" y1="-213.4" x2="1353" y2="95.6"/>
        </g>
    </g>
    </svg>
    `
}