const argv=require('yargs')
                    .option(
                        'b',{
                            alias:'base',
                            type:'number',
                            demandOption:true
                        }    )
                        .option(
                            'l',{
                                alias:'listar',
                                type:'boolean',
                                demandOption:true,
                            }    )
                          .option(
                                'h',{
                                    alias:'hasta',
                                    type:'number',
                                    default:10,
                                    describe:"fin de la tabla"
                                }    )

                        .check((argv,option)=>{
                                if(isNaN(argv.b)){
                                    throw'la base tiene que ser un numero'
                                }return true;
                        })
                        .argv;
module.exports=argv;