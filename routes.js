
const indexFile = `${__dirname}/views/index.html`

module.exports = function exportRoutes(app){

    // route to homepage
    app.route('/').get((req,res)=>{
        res.sendFile(indexFile)
    })

}