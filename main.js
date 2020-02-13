(function(){
const quotes=[{quote:'all human experience is one hundred percent self created.'},
{ quote:'every situation will not same. but it will change according to time.'},
{quote:`you can't make close friends because , everything will come to you with specific time duration. `},
{quote:`follow your life tenet. that tenet will help you to achieve your life goals.`},
{quote:`if you want to achieve your life, create and compliance the modus operandi of your goal in daily rountine `},
{quote:`as a person put on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones`}
];


const btn=document.getElementById('btn-generate');
const quoteValue=document.querySelector('.quote');

btn.addEventListener('click',function(){
let random=Math.floor(Math.random()*quotes.length);
//console.log(random);
let change=quotes[random];
quoteValue.textContent=change.quote;

})

})();


(function(){
let navBtn=document.querySelector('.btn__links');
let navLinks=document.querySelector('.list-items');

navBtn.addEventListener('click',function(){
    let value=navLinks.classList.contains('change');
    let rotate=navBtn.classList.contains('rotate');
    if(value && rotate){
        navLinks.classList.remove('change');
        navBtn.classList.remove('rotate');
    }else{
        navLinks.classList.add('change');
        navBtn.classList.add('rotate');
    
    }
})


})();


(function(){

    let i=0;
    //Images List
    let  images=['quoteBg0',
    'quoteBg1',
    'quoteBg2',
    'quoteBg3',
    'quoteBg4',
    'quoteBg5',
    'quoteBg6',
    'quoteBg7',
    'quoteBg8',
    'quoteBg9',
    'quoteBg10',
    'quoteBg11',
    'quoteBg12'];
    const btn=document.querySelectorAll('.btn');
    
    btn.forEach(function(btn){
        btn.addEventListener('click',function(event){
            let value=event.target;
          //  console.log(value);
         if(value.parentElement.classList.contains('btn-left')){
    i--;
    if(i<0){
        i=images.length-1;
    }
    //console.log(i);
    
    document.querySelector('.img-container').style.backgroundImage=`url('img/${images[i]}.jpg')`;
         }
    
         if(value.parentElement.classList.contains('btn-right')){
            i++;
            if(i>images.length-1){
                i=0;
            }
            //console.log(i);
            
            document.querySelector('.img-container').style.backgroundImage=`url('img/${images[i]}.jpg')`;
                 }
          
        })
    })
    })
    ();