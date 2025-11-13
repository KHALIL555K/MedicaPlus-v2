const data = {} ;

for(let i = 0 ; i<localStorage.length ;i++)
{
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)

    try{
        data[key] = JSON.parse(value) ; 
    }catch(e){
        data[key] = value ; 
    }
}


const exportJSON  = () =>{
    const jsonData = JSON.stringify(data,null,2);
    const blob = new Blod([jsonData],{type: 'application/json'})

    const url = URL.createObjectURL(blob) ;

    const link = document.createElement('a');
    
    link.href = url;
    link.download = 'data.json';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);   
}




// <!DOCTYPE html>
// <html>
// <head>
//     <title>Exporter JSON</title>
// </head>
// <body>
//     <button onclick="exportJSON()">Télécharger JSON</button>

//     <script>
//         const data = { nom: "John Doe", âge: 30, ville: "Paris" };
//         const jsonData = JSON.stringify(data, null, 2);

//         const exportJSON = () => {
//             const blob = new Blob([jsonData], { type: 'application/json' });
//             const url = URL.createObjectURL(blob);
//             const link = document.createElement('a');
            
//             link.href = url;
//             link.download = 'data.json';
//             link.style.display = 'none';
            
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//             URL.revokeObjectURL(url);
            
//             console.log('Le fichier JSON a été créé avec succès !');
//         }
//     </script>
// </body>
// </html>