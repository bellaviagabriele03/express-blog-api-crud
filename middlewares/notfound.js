export default function notfound(req, res, next) {
    res.status(404).json({
        errore: "404",
        message: "errore dati non trovati chiedi a loris !!"
    })
}   