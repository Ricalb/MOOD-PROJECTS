var happypics=["https://www.baumannmusic.com/wp-content/uploads/2016/09/Happy-Background-Music-Download-e1475058467492.jpg","http://images.hellogiggles.com/uploads/2015/03/22/featured.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4R5c6v3zGdnbMgeZersLabUSFnuzVtfQtXCDjsbpwoIYvLTdG"];

var angrypics=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8sgv8bgiTgmvAhiY0IlxwVxgcb8PEY0cdKpbdDDAjLQhz7nn","https://media2.giphy.com/media/3oEdv6UfpU2K6jHot2/source.gif","https://i.pinimg.com/originals/9d/f5/47/9df5473084c7b868c54112f6d2ad1bb0.gif"];

var hungrypics=["https://t2.ftcdn.net/jpg/01/90/72/79/400_F_190727909_0bMsdE5O8ZIXUYU36RUOioUmb8nkBt91.jpg","https://2.bp.blogspot.com/-EIGIXESf_yE/VqPMAPh5qwI/AAAAAAAACjQ/2vDjs6msKtA/s1600/26.%2BWhen%2Byou%2527re%2Breally%2Bhungry.gif","http://i.imgur.com/KXKtuJM.gif"];

var tiredpics=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcPEHmFW6B5lnNZK9yhubC0WLoaBLvfDVzZsLt19O9YiZD2IJ","https://i.pinimg.com/originals/0c/a4/25/0ca425f480a73b86f53f64dd78b266cd.gif","http://replygif.net/i/355.gif"];

function happy(){
    changeBackground("yellow");
    changeTextColor("red");
    displayImage(happypics);
}
function angry(){
    changeBackground("black");
    changeTextColor("red");
    displayImage(angrypics);
}
function hungry(){
    changeBackground("purple");
    changeTextColor("orange");
    displayImage(hungrypics);
}

function tired(){
    changeBackground("grey");
    changeTextColor("black");
    displayImage(tiredpics);
}


function changeBackground(color){
    $('body').css('background-color', color);
}

function changeTextColor(color){
    $('body').css('color', color);
}

function displayImage(pics){
    pics.forEach(function(image){
    $('.images').append('<img src ='+ image + '>');
});
}




$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "happy"){
        happy();
    } else if(input==="tired"){
        tired();
    }else if(input==="angry"){
      angry();
    }else if(input==="hungry"){
      hungry();
    }else{
     alert("Please enter happy, angry, hungry, or tired");   
    }
});

