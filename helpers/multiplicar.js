const fs=require('fs');
const crearArchivo=async(base=5, listar=false, hasta=10)=>{
        try{
                        console.clear();     
                        
                        let salida = '';
                        let consola='';
                        for(let i=1;i<=hasta;i++){
                                salida+=`${base} x ${i} = ${base*i}\n`;
                                consola+=`${base} ${'x'.red} ${i} ${'='.red}${base*i}\n`;
                            
                        }
                        if(listar){
                                console.log("==============".green);
                                console.log(`==TABLA DEL ${base}==`.blue);
                                console.log("==============".rainbow);          
                                console.log(consola);
                        }
                        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
                        return`tablas-${base}.txt creado`;
        }catch(error){

        }


}

module.exports={
    crearArchivo
}