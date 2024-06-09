const story = [
    {
        titulo: 'Fuck YOU',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
    {
        titulo: '',
        cuento: '',
    },
]

window.onload = function () {
    let id = parseInt(localStorage.getItem("historia"));
    document.getElementById('titulo').innerHTML = story[id].titulo;
    document.getElementById('cuento').innerHTML = story[id].cuento;
}