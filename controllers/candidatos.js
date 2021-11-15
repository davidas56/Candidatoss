const candidatosGet = (req, res) => {
    res.json({ msg: "get candidatos controller" });
}

const candidatosPost = (req, res) => {
    const { name, author } = req.body;

    res.json({ msg: "Post candidatos controller", name, author });
}

const candidatosGetBySKU = (req, res) => {
    res.json({ msg: "get by SKU candidatos controller" });
}

const candidatosPut = (req, res) => {
    res.json({ msg: "put candidatos controller" });
}

const candidatosDelete = (req, res) => {
    res.json({ msg: "delete candidatos controller" });
}

module.exports = {
    candidatosGet, candidatosPost, candidatosGetBySKU, candidatosPut, candidatosDelete
}