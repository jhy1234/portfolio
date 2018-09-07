function forprint(){
if (!window.print){

return
}
window.print()
}


function makePDF(){
    var doc= new jsPDF();
    
    console.log(document.getElementById("myapp"));
    doc.fromHTML(
        document.getElementById("myapp"), 
        15, // x coord
        15,
    {
        width: 170
    },(data)=>{
        console.log(data);
    });
    
    doc.save("untitiled.pdf");
}