// display 2 images 
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

}



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



var voteCtr = 0;


var overAllCount = 0;

// click counter function
Product.prototype.increaseClickCounter = function(){
this.clickCtr++;
}
//create new goat


//

//randomizes pictures
addEventListener("click", function() {




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
productimg1.shownCtr++;
img1.setAttribute('src',productimg1.imgURL);
var name1 = document.getElementById('left-image-name');
//name2.textContent= parseInt(productimg1.clickCtr);
name1.textContent = productimg1.name;




var img2 = document.getElementById('middle-image-img');
var productImg2 = products[Math.floor(Math.random() * products.length)];
productImg2.shownCtr++;
img2.setAttribute('src',productImg2.imgURL);

var name2 = document.getElementById('middle-image-name');
name2.textContent= productImg2.name;






var img3 = document.getElementById('right-image-img');
var productImg3 = products[Math.floor(Math.random() * products.length)];
img3.setAttribute('src',productImg3.imgURL);

productImg3.shownCtr++;

var name3 = document.getElementById('right-image');
name3.textContent= productImg3.name;




// if(overAllCount === 10){
//     this.alert('its over!');
// // }


for(var i =0; i< products.length;i++){
     
 if(products[i].clickCtr === 5){
  
this.alert(producs[i], 'wins');
    console.log(shownCtr);
 }
}

var tableHeader = addElement('tr',tableElement);

for(var i = 0; i < products.length; i++){
    if(products[i].clickCtr !== 0){
   addElement('tr', tableHeader,products[i].name);
    addElement('td', tableHeader,products[i].clickCtr);
    }
}

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


