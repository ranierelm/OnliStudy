const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "81985851212",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday:[0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "81985851212",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday:[1],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Raniere Lima",
        avatar: "https://avatars3.githubusercontent.com/u/66389279?s=460&u=b3620b60ab1453941ba62947359d1421eda7315f&v=4",
        whatsapp: "81985851212",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday:[1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding (req, res) {
    return res.render("index.html")
}
function pageStudy (req, res) {
    const filters = req.query //recebe no backend a requisição de filtragem
    return res.render("study.html", { proffys, filters, subjects, weekdays})
}
function pageGiveClasses(req, res) {
    const data = req.query
    
    // se tiver dados 
    const isNotEmpty = Object.keys(data).length != 0
    if(isNotEmpty){

        data.subject = getSubject(data.subject)
        //adicionar data a lista de Proffys
        proffys.push(data)

        return res.redirect("/study")
    }    
    // se não tiver dados, mostrar a página
    return res.render("give-classes.html", {subjects, weekdays})
}

//servidor
const express = require('express')
const server = express()

//configurar nunjucks(Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500);

