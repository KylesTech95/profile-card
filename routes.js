
const indexFile = `${__dirname}/views/index.html`
module.exports = function exportRoutes(app,pool){
    // route to homepage
    app.route('/').get((req,res)=>{
        res.sendFile(indexFile)
    })
    app.route('/card').post(async(req,res)=>{
        let {first,last,username,phone,email} = req.body
        // res.send(req.body)
        // find collection by email/phone/username
        try{
            const uname = await pool.query('select username from profile where username=$1',[username])
            const p = await pool.query('select phone from profile where phone=$1',[phone])
            const e = await pool.query('select email from profile where email=$1',[email])

            if(uname.rows.length>0||p.rows.length>0||e.rows.length>0){
                console.log('Record is already on file')
                res.redirect('/')
            }
            else{
                await pool.query('insert into profile(fname,lname,username,phone,email) values($1,$2,$3,$4,$5)',[first,last,username,phone,email])
                const getuname = await pool.query('select username from profile where username=$1',[username])
                console.log('Welcome '+getuname.rows[0].username+'.\nYou have been added')
            }
        }
        catch(err){
            console.log(err)
        }
    })

app.route('/users').get(async(req,res)=>{
const users = await  pool.query('select fname,lname,username,phone,email from profile')
if(users.rows.length > 0){
    let mappedUsers = [...users.rows].map((user,i)=>{
        return `${user.fname} ${user.lname} - ${user.username} / ${user.email}`
    })
    res.json([...mappedUsers])

}
else{
console.log('noone in the db')
res.redirect('/')
}
})
}