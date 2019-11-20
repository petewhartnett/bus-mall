/// display 2 images 
// click on favorite 
// keep track of click 
// counter to keep track of goat clicks
// how many times goats were shown 
// how many rounds have happened
// goat constructor
// picture, counter, name shown-counter
// keep track of votes on tracker itself
var parentElem = document.getElementById('table-spot');
var tableElement = addElement('table',parentElem);

function Product(name, imgURL, ){
this.name = name;
this.imgURL = imgURL;
this.clickCtr = 0;
this.shownCtr = 0;
this.shownCtr2 = 0;

}

var shown = true;

var rand = [];
var products = [];

 products[0] = new Product('Bag','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/bag.jpg' );
products [1] = new Product('Banana','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/banana.jpg' );
products[2] = new Product('bathroom','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/bathroom.jpg' );
products [3] = new Product('boots','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/boots.jpg' );
products[4] = new Product('breakfast','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/breakfast.jpg' );
products [5] = new Product('bubblegum','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/bubblegum.jpg' );
products[6] = new Product('chair','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/chair.jpg' );
products [7] = new Product('monster','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/cthulhu.jpg' );
products[8] = new Product('dog-duck','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/dog-duck.jpg' );
products [9] = new Product('shark','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/shark.jpg' );
products [10] = new Product('dragon','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/dragon.jpg' );
products[11] = new Product('pen','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/pen.jpg' );
products [12] = new Product('pet-sweep','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/pet-sweep.jpg' );
products[13] = new Product('Scissors','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/scissors.jpg' );
products [14] = new Product('Star-Wars','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/tauntaun.jpg' );
products [15] = new Product('Unicorn','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/unicorn.jpg' );
products[16] = new Product('Water-can','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/water-can.jpg' );
products [17] = new Product('pet-sweep','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/pet-sweep.jpg' );
products[18] = new Product('Wine-Glass','https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/wine-glass.jpg' );





var voteCtr = 0;


var overAllCount = 0;
var workingImages = [];

// click counter function
Product.prototype.increaseClickCounter = function(){
this.clickCtr++;
}



//randomizes pictures
addEventListener("click", function() {


for(var i = 0; i < products.length; i++){
    if(workingImages.length >= 18){
        products[i].shownCtr = 0;
        
    }
}
    



for(var i = 0; i < products.length;i++){

    if(event.target.src === products[i].imgURL){
        products[i].clickCtr++;
        
        console.log(products[i].clickCtr, ' ', products[i].name);
    
    }

  

if(event.target.src === products[i].imgURL){;
overAllCount++;
console.log(overAllCount, 'Over all');
}
}



var img1 = document.getElementById('left-image-img');
var productimg1 = products[Math.floor(Math.random() * products.length)];

while(productimg1.shownCtr != 0){
    productimg1 = products[Math.floor(Math.random() * products.length)];
    
}
productimg1.shownCtr++;
productimg1.shownCtr2++;
workingImages.push(productimg1);

img1.setAttribute('src',productimg1.imgURL);
var name1 = document.getElementById('left-image-name');
//name2.textContent= parseInt(productimg1.clickCtr);
name1.textContent = productimg1.name;





var img2 = document.getElementById('middle-image-img');
var productImg2 = products[Math.floor(Math.random() * products.length)];

while(productImg2.shownCtr != 0){
    productImg2 = products[Math.floor(Math.random() * products.length)];
    
}
productImg2.shownCtr++;
productImg2.shownCtr2++;
workingImages.push(productImg2);

img2.setAttribute('src',productImg2.imgURL);

var name2 = document.getElementById('middle-image-name');
name2.textContent= productImg2.name;





var img3 = document.getElementById('right-image-img');

var productImg3 = products[Math.floor(Math.random() * products.length)];

while(productImg3.shownCtr != 0){
productImg3 = products[Math.floor(Math.random() * products.length)];

}
img3.setAttribute('src',productImg3.imgURL);
productImg3.shownCtr++;
productImg3.shownCtr2++;
workingImages.push(productImg3);
var name3 = document.getElementById('right-image');
name3.textContent= productImg3.name;




// if(overAllCount === 10){
//     this.alert('its over!');
// // }


for(var i =0; i< products.length;i++){
    console.log(products[i].name, 'shown:  ', products[i].shownCtr);
 if(products[i].clickCtr === 5){
  
this.alert(producs[i], 'wins');
    
 }
}

if(overAllCount === 24){
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Total Slections',products[0].name, products[1].name, products[2].name, products[3].name, products[4].name, products[5].name, products[6].name, products[7].name,products[8].name,products[9].name,products[10].name, products[11].name, products[12].name, products[13].name, products[14].name, products[15].name, products[16].name, products[17].name,products[18].name],
        datasets: [{
            label: 'Your Favorite Products',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [overAllCount, products[0].clickCtr, products[1].clickCtr, products[2].clickCtr, products[3].clickCtr, products[4].clickCtr, products[5].clickCtr, products[6].clickCtr,products[7].clickCtr,products[8].clickCtr,products[9].clickCtr, products[10].clickCtr, products[11].clickCtr, products[12].clickCtr, products[13].clickCtr, products[14].clickCtr, products[15].clickCtr, products[16].clickCtr, products[17].clickCtr, products[18].clickCtr,   ] },
            {
                label: "Total Times Shown",
                data:
           
                [, products[0].shownCtr2, products[1].shownCtr2, products[2].shownCtr2, products[3].shownCtr2, products[4].shownCtr2, products[5].shownCtr2, products[6].shownCtr2,products[7].shownCtr2,products[8].shownCtr2,products[9].shownCtr2, products[10].shownCtr2, products[11].shownCtr2, products[12].shownCtr2, products[13].shownCtr2, products[14].shownCtr2, products[15].shownCtr2, products[16].shown, products[17].shownCtr2, products[18].shownCtr2,   ],
            type: 'bar'
            

           
        }]
    },

    // Configuration options go here
    options: {}
});
}
// var tableHeader = addElement('tr',tableElement);

// for(var i = 0; i < products.length; i++){
    
//     if(products[i].clickCtr !== 0){
//    addElement('tr', tableHeader,products[i].name);
//     addElement('td', tableHeader,products[i].clickCtr);
//     }
// }
this.console.log(workingImages);
});






function addElement(tag, container, text) {
    var element = document.createElement(tag);
    container.appendChild(element);
    element.textContent = text;
    return element;
}










// var leftImageElem = document.getElementById('left-image-img');
// leftImageElem.setAttribute('src', products[0].imgURL );

// var leftNameElem = document.getElementById('left-image-name');
// leftNameElem.textContent = products[0].name;

// var rightImageElem = document.getElementById('middle-image-img');
// rightImageElem.setAttribute('src', products[1].imgURL );

// var rightNameElem = document.getElementById('middle-image-name');
// rightNameElem.textContent = products[1].name;


// leftImageElem.addEventListener('click', clickHandler);
// rightImageElem.addEventListener('click', clickHandler);
