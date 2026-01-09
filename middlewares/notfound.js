export default function notfound(req, res, next) {
    res.status(404).json({
        errore: "404",
        message: "errore rotta non trovata chiedi a loris !!"
    })
}   