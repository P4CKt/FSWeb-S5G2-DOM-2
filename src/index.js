import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
 document.querySelector("h1").addEventListener("click",function(e){
 alert("https://www.youtube.com/watch?v=G1IbRujko-A")
 });

 document.querySelector("h1").addEventListener("mouseover",function(e){
    alert("https://www.youtube.com/watch?v=G1IbRujko-A")
    });
    document.querySelector("div").addEventListener("load",function(e){
       window.style.backgroundColor("blue").setTimeout(myGreeting, 5000);;
        });
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

// Kodlar buraya gelecek!