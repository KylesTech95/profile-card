
const indexFile = `${__dirname}/views/index.html`
const cardFile = `${__dirname}/views/card.html`

const sec = process.env.SEC

module.exports = function exportRoutes(app,pool){
    // route to homepage
    app.route('/').get((req,res)=>{
        res.sendFile(indexFile)
    })
    // route to profile card after login
    app.route('/card').post(async(req,res)=>{
        let {first,last,username,phone,email} = req.body
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
                res.sendFile(cardFile)
            }
        }
        catch(err){
            console.log(err)
        }
    })

    // obtain all users
    app.route('/users').get(async(req,res)=>{
    const users = await  pool.query('select fname,lname,username,phone,email from profile')
    if(users.rows.length > 0){
        let mappedUsers = [...users.rows].map((user,i)=>{
            return ({name: user.fname+' '+user.lname,username:user.username,email:user.email, phone:user.phone})
         })
        res.json([...mappedUsers])

    }
    else{
    console.log('noone in the db')
    res.redirect('/')
    }
    })

    // delete all users
    app.route(sec?sec:'/esc').get(async(req,res)=>{
        const users = await  pool.query('select fname,lname,username,phone,email from profile')
        if(users.rows.length > 0){
            await pool.query('truncate profile cascade;truncate location cascade;alter sequence profile_id_seq restart with 1')
            res.send('users have been deleted')
            
        }
        else{
        console.log('noone in the db')
        res.redirect('/')
        }
    })


}