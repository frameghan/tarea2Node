const fs=require('fs');


const base=1;
console.clear();
console.log("============");
console.log(`==TABLA DEL ${base}==`);
console.log("============");

let salida='';
for(let i=1;i<=10;i++){
        salida+=`${base}x${i}=${base*i}\n`;
       
}
console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`,salida);
console.log(`tablas-${base}.txt creado`);

/* fs.writeFile(`tabla-${base}.tx`,salida,(err)=>{
        if(err) throw err;
        console.log(`tabla-${base}txt creado`);
    
}) */