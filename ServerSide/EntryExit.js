const db = require('./dtb');
const encrypt = require('bcrypt');
var verdade = false
const saltador = 10;
var crack;

module.exports = {

    async result(req, res, next) {
        try{
        const {idprodutos} = req.body;
        const {custo} = req.body;
        const {nome} = req.body;
        const {passe} = req.body;

        let insert = "INSERT INTO produtos (idprodutos, custo, nome, senha) VALUES ( ?, ?, ?, ?)";

        const senha = await encrypt.hash(passe, 10);
        db.query(insert, [idprodutos, custo, String( nome ),String( senha )], (error, hash)=>{
            console.log(error);
        })
        console.log('essa é o encrypt', String( senha ));
       

        return res.status(201).send({senha})

    } catch(error){console.log(error);}},

    async login(req, res){
        try{
            const {nome} = req.body;
            const passe = req.body.passe;
            
            let text = "SELECT * FROM produtos WHERE nome = '"+ String(nome) + "';";
            db.query(text, (err, resultado)=> {
                if (err) throw err;
                if (resultado.length === 0) {
                    console.log(resultado);
                    console.log('alertaaaaaaaaaaa');
                } 
                else {
                crack = {resultado};
                var hashado = String( crack.resultado[0].senha );
        
                for (let index = 0; index < crack.resultado.length; index++) {
                    var hashado = String( crack.resultado[index].senha )

                    var chave = encrypt.compare(String( passe ), hashado, (err, data) =>{
                        console.log(data);
                        if (data == true) {
                            index = crack.resultado.length;
                            var fd = true;
                            alerta(fd);
                        }});
                    
                    console.log('esse é o resultado: ', crack);
                    console.log('esse é chave: ', chave);
                    console.log('essa é a lenght', crack.resultado.length);
                 }
                function alerta(fd) {
                    console.log('esse é o alerta: ', fd);
                    
                }
            }

            }).on('error', function(err) {
                console.log("[mysql error]",err);
            });

           
            return res.status(201).send({nome, passe})
        }
        catch(err){console.log(err);}
    },
    
    banana(req, res) {
            //idprodutos int PK custo int nome
        let insert = "INSERT INTO produtos (idprodutos, custo, nome) VALUES ('23432', '00', 'alkain')";
        db.query(insert, (error, result) =>{
            console.log(error);
        })
        res.send('Hello Kalibutan, this is my Database: ')
    },


}

//you don't decrypt your stored hash, 
//instead you perform the same bcrypt operation on the user input and compare the hashes. 
//If they're identical, you accept the authentication.

//553
//zika