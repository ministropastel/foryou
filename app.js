const story = [
    {
        titulo: 'I ADORE YOU',
        cuento: 'K Esta es una prueba de escritura para la pagina. A continuacion se agregara un lorem: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis, ligula in vehicula posuere, tortor diam venenatis arcu, non fermentum urna risus eu sapien. Phasellus iaculis nibh in mauris vehicula scelerisque. Pellentesque pharetra mi elit, et placerat ligula accumsan eget. Suspendisse efficitur purus ut justo auctor, ac efficitur magna volutpat. Curabitur ultricies nibh id dapibus vulputate. Cras nec nisi varius, dapibus nulla eu, sagittis est. Fusce nec mollis lorem. Vivamus id eros libero. Suspendisse potenti. Cras nec vulputate arcu, in elementum ipsum. Phasellus eu ex ligula. In mauris diam, pretium tempor elementum ac, mollis ut sapien. Morbi sit amet arcu a diam dignissim vehicula ac et augue. Mauris sit amet commodo nunc. Suspendisse rutrum tristique mauris vel fermentum. Proin nec hendrerit sapien. In blandit lorem libero, vel faucibus velit imperdiet in. Mauris molestie, tellus et vestibulum aliquet, elit est posuere arcu, nec semper ex ipsum eget lectus. Donec ut volutpat ante, a pharetra ante. Morbi ut nulla eget eros ullamcorper vehicula. Integer a risus a urna venenatis consectetur. Aenean rutrum quis libero non consequat. Suspendisse et ex diam. Maecenas rutrum sed diam eu dignissim. Donec auctor nisi laoreet augue faucibus, vitae dictum sem ultricies. Pellentesque euismod risus nec ex porttitor, eu ultrices ex elementum. Phasellus fermentum tellus et neque scelerisque porta.',
    },
    {
        titulo: 'SEGUNDA',
        cuento: 'O',
    },
    {
        titulo: 'TERCERA',
        cuento: 'T',
    },
    {
        titulo: 'CUARTO',
        cuento: 'X',
    },
    {
        titulo: 'QUITA',
        cuento: 'U',
    },
    {
        titulo: 'SEXTA',
        cuento: 'K',
    },
    {
        titulo: 'SEPTIMA',
        cuento: 'I',
    },
    {
        titulo: 'OCTAVA',
        cuento: 'V',
    },
    {
        titulo: 'NOVENA',
        cuento: 'B',
    },
    {
        titulo: 'DECIMA',
        cuento: 'I',
    },
    {
        titulo: 'ONCEAVA',
        cuento: 'K',
    },
    {
        titulo: 'DOCEAVA',
        cuento: 'O',
    },
    {
        titulo: 'TRECEAVA',
        cuento: 'E',
    },
    {
        titulo: 'CATORCEAVA',
        cuento: 'O',
    },
    {
        titulo: 'QUINCEAVA',
        cuento: 'V',
    },
    {
        titulo: 'DISEISAVA',
        cuento: 'X',
    },
    {
        titulo: 'DIECISEISAVA',
        cuento: 'E',
    },
    {
        titulo: 'DIECIOCHOAVA',
        cuento: 'I',
    },
    {
        titulo: 'DIECINUEAVA',
        cuento: 'Ñ',
    },
    {
        titulo: 'VEINTEAVA',
        cuento: 'B',
    },
    {
        titulo: 'VEINTIUNAVA',
        cuento: 'K',
    },
    {
        titulo: 'VEINTIDOSAVA',
        cuento: 'I',
    },
]

window.onload = function () {
    let id = parseInt(localStorage.getItem("historia"));
    document.getElementById('titulo').innerHTML = story[id].titulo;
    document.getElementById('cuento').innerHTML = story[id].cuento;
}