import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
 document.querySelector("h1").addEventListener("click",function(e){
 alert("https://www.youtube.com/watch?v=G1IbRujko-A")
 });

 document.querySelector("h1").addEventListener("mouseover",function(e){
    alert("https://www.youtube.com/watch?v=G1IbRujko-A")
    });
   // document.querySelector("div").addEventListener("load",function(e){
    //   window.style.backgroundColor("blue").setTimeout(myGreeting, 5000);;
     //   }); 
    window.addEventListener("wheel",()=>{
            alert("yavaş ol aslan! --> Sağdaki Çubuğu Kullan")
     });
     const textBox = document.querySelector('input[type="text"]')
    textBox.addEventListener("focus",function(e){
         if(textBox=="Ankara"){
             alert("Doğru Tercih");
            }
            else{
           
            }
            
 });
 const home = document.querySelector("#hadi");
 home.addEventListener("mouseover",(e)=> {e.target.style.backgroundColor="red"});

 window.addEventListener("resize",(event)=> {
if(window.innerWidth< 800 ){
    document.querySelector("body").style.backgroundColor="blue";
}
else{
    document.querySelector("body").style.backgroundColor="white";
}
const nInput = document.createElement("input");
document.querySelector(".content-section").appendChild(nInput);

document.addEventListener("keydown", (event)=>{
    nInput.value = event.key + " tuşlandı";
});
nInput.addEventListener("select", (event) => {
    event.target.style.color = "gray";
  });


 })
 
const butt= document.querySelectorAll(".destination .btn");
butt.forEach((item)=>{
item.addEventListener("dblclick",(event)=>{
    event.target.style.color="red"
})

})
