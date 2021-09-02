var models = [ 
    {
        name : 'Dacia Duster',
        image : 'img/dacia-duster.jpg',
        image1 : 'img/dacia-duster-yandan.jpg',
        image2 : 'img/dacia-duster-onden.jpg',
        image3 : 'img/dacia-duster-ic.jpg',
        link : 'http://www.arabalar.com.tr/dacia/duster/2021/1-5-dci-comfort-4x4'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda-civic.jpg',
        image1 : 'img/honda-civic-arkadan.jpg',
        image2 : 'img/honda-civic-yandan.jpg',
        image3 : 'img/honda-civic-ic.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2021/hb-1-5-sport-plus-cvt'
    },
    {
        name : 'Fiat Agea',
        image : 'img/fiat-agea.jpg',
        image1 : 'img/fiat-egea-ic.jpg',
        image2 : 'img/fiat-egea-onden.jpg',
        image3 : 'img/fiat-egea-yandan.jpg',
        link : 'http://www.arabalar.com.tr/fiat/egea/2021/1-6-multijet-lounge'
    },
    {
        name : 'Skoda Octavia',
        image : 'img/skoda-octavia.jpg',
        image1 : 'img/skoda-octavia-arkadan.jpg',
        image2 : 'img/skoda-octavia-yandan.jpg',
        image3 : 'img/skoda-octavia-ic.jpg',
        link : 'http://www.arabalar.com.tr/skoda/octavia/2021/1-0-e-tec-elite-dsg'
    },
    {
        name : 'Toyota Yarıs',
        image : 'img/toyata.jpg',
        image1 : 'img/toyota-ic.jpg',
        image2 : 'img/toyota-bagaj.jpg',
        image3 : 'img/toyota-onden.jpg',
        link : 'http://www.arabalar.com.tr/toyota/yaris/2021/1-5-flame-e-cvt'
    }
]
var index = 0; 
var slayt_count = models.length; //4 index var ama dizinin uzunluğu 5 
var settings = {
    duration : '3000',
    random : false //bu değeri true yaparsak resimler ranadom bir şekilde değişir 
};
var interval; //bu değişkeni belirledim ki init fonksiyonu içindeki setInterval ı başka yerde kullanıyım
init(settings);//ilk bu fonksiyon çalışsın ve settings parametresini alsın

const btnLeft = document.getElementById('left');
btnLeft.addEventListener('click',function() {
    index--;
    showSlide(index);
})
const btnRight = document.getElementById('right');
btnRight.addEventListener('click',function(){
    index++;
    showSlide(index);
})

document.querySelectorAll('.ok').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});
document.querySelectorAll('.ok').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
});

function init (settings){
    
    var prev;
   
    interval = setInterval(function(){//setInterval clearInterval ile durdurmadığın sürece belirlenen süre boyunca devam eden bir fonksiyondur

        if(settings.random){
            do{
                index = Math.floor(Math.random() * slayt_count);
            }while(index == prev)
            prev = index;
        }
        else{

            if(slayt_count == index+1){
                index = -1;
            }
            showSlide(index);
            index++;

        }
        showSlide(index);
        console.log(index);
    },settings.duration)
}

function showSlide(i){
    
    index = i ;

    if(i<0){//gönderilen parametre 0 dan küçük ise 4. index e gitmesi için bu bloğu çalıştır
        index = slayt_count - 1; //slayt_count 5 olduğu için onu bir azalt ve index e at 
    }
    else if (i>=slayt_count){//gönderilen değer slay_count yani beşe eşitse yada daha büyükse bu bloğu çalıştır
        index = 0 ;//indexe sıfırı at ki tekrar başa dönsün 
    }

    document.querySelectorAll('.card-title').forEach(function(item){
        item.textContent = models[index].name;
    })
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    var x = document.querySelector('.card-link')
    x.setAttribute('href',models[index].link) 
    document.querySelector('#img1').setAttribute('src',models[index].image1);
    document.querySelector('#img2').setAttribute('src',models[index].image2);
    document.querySelector('#img3').setAttribute('src',models[index].image3);
    
}
