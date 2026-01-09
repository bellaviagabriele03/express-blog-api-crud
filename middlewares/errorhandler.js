export default function errorhandler(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send("Loris ha distrutto il server !!!")
}