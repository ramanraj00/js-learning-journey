const item = document.querySelectorAll('.item');
const body = document.querySelector("body");
 
item.forEach(function(item){
    console.log(item);
    item.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        // 2nd 
          if(e.target.id === 'gold'){
            body.style.backgroundColor = e.target.id
        }
        //3rd
          if(e.target.id === 'cyan'){
            body.style.backgroundColor = e.target.id
        }
        //4thgreenyellow
          if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id
        }
    })
})