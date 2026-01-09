export default function notfound(req, res, next) {
    res.json({
        errore: "404",
        message: "errore dati non trovati chiedi a loris !!"
    })
}   