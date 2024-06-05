var bigMacs = 0;
var cheeseBurgers = 0;
const order = new Array(16);

function updateOrder(){
    var bigMacNum = document.getElementById("big_mac_num");
    var cheeseNum = document.getElementById("cheeseB_num");
    var quarterP = document.getElementById("q_pounder_num");
    var fries = document.getElementById("fries_num");
    var coke = document.getElementById("coca_cola_num");
    var drPepper = document.getElementById("dr_pepper_num");
    var fanta = document.getElementById("fanta_num");
    var sprite = document.getElementById("sprite_num");
    var cappuccino = document.getElementById("cappuccino_num");
    var caramel = document.getElementById("caramel_num");
    var mocha = document.getElementById("mocha_num");
    var lattee = document.getElementById("latte_num");
    var pie = document.getElementById("pie_num");
    var cookie = document.getElementById("cookie_num");
    var sundae = document.getElementById("sundae_num");
    var flurry = document.getElementById("flurry_num");
    var submitButton = document.getElementById("submit_order");

    bigMacNum.addEventListener('change', () => updateBigMac(bigMacNum.value));
    cheeseNum.addEventListener('change', () => updateCheeseB(cheeseNum.value));
    quarterP.addEventListener('change', () => updatePounder(quarterP.value));
    fries.addEventListener('change', () => updateFries(fries.value)); 
    coke.addEventListener('change', () => updateCoke(coke.value))
    drPepper.addEventListener('change', () => updatePep(drPepper.value));
    fanta.addEventListener('change', () => updateFanta(fanta.value));
    sprite.addEventListener('change', () => updateSprite(sprite.value));
    cappuccino.addEventListener('change', () => updateCino(cappuccino.value));
    caramel.addEventListener('change', () => updateCaramel(caramel.value));
    mocha.addEventListener('change', () => updateMocha(mocha.value));
    lattee.addEventListener('change', () => updateLat(lattee.value));
    pie.addEventListener('change', () => updatePie(pie.value));
    cookie.addEventListener('change', () => updateCookie(cookie.value));
    sundae.addEventListener('change', () => updateSundae(sundae.value));
    flurry.addEventListener('change', () => updateFlurry(flurry.value));
}

function clicked(){
    fetch("http://127.0.0.1:5000/order_summary", {method: "GET"});
}

function returnHome(){
    setTimeout(function(){
        window.location.href = "/";
    }, 10000);
}

function updateBigMac(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " Big Mac(s): $" + (amt*5.04);
    if (amt < 1){
        order[0] = undefined;
    }else{
        order[0] = ord;
    }

    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
            orderSum.value += order[i] + "\n";
            i++;
        }else{
            i++;
            continue;
        }
    }
}
function updateCheeseB(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " Cheesburger(s): $" + (amt*5.90);
    if (amt < 1){
        order[1] = undefined;
    }else{
        order[1] = ord;
    }
    
    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
            orderSum.value += order[i] + "\n";
            i++;
        }else{
            i++;
            continue;
        }
    }
}

function updatePounder(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " Quarter Pounder(s): $" + (amt*4.39);
    if (amt < 1){
        order[2] = undefined;
    }else{
        order[2] = ord;
    }

    
    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
            orderSum.value += order[i] + "\n";
            i++;
        }else{
            i++;
            continue;
        }
    }

}

function updateFries(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " French Fries: $" + (amt*2.39);
    if (amt < 1){
        order[3] = undefined;
    }else{
        order[3] = ord;
    }


    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
                orderSum.value += order[i] + "\n";
                i++;
            }else{
                i++;
                continue;
            }
        }
}

function updateCoke(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " Coca Cola: $" + (amt*1.50);
    if (amt < 1){
        order[4] = undefined;
    }else{
        order[4] = ord;
    }


    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
                orderSum.value += order[i] + "\n";
                i++;
            }else{
                i++;
                continue;
            }
        }
}

function updatePep(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " Dr. Pepper: $" + (amt*3.39);
    if (amt < 1){
        order[5] = undefined;
    }else{
        order[5] = ord;
    }


    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
                orderSum.value += order[i] + "\n";
                i++;
            }else{
                i++;
                continue;
            }
        }
}
function updateFanta(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " Fanta Orange(s): $" + (amt*3.23);
    if (amt < 1){
        order[6] = undefined;
    }else{
        order[6] = ord;
    }


    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
                orderSum.value += order[i] + "\n";
                i++;
            }else{
                i++;
                continue;
            }
        }
}
function updateSprite(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " Sprite(s): $" + (amt*4.39);
    if (amt < 1){
        order[7] = undefined;
    }else{
        order[7] = ord;
    }


    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
                orderSum.value += order[i] + "\n";
                i++;
            }else{
                i++;
                continue;
            }
        }
}
function updateCino(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " Cappuccino(s): $" + (amt*3.39);
    if (amt < 1){
        order[8] = undefined;
    }else{
        order[8] = ord;
    }


    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
                orderSum.value += order[i] + "\n";
                i++;
            }else{
                i++;
                continue;
            }
        }
}
function updateCaramel(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " Caramel Macchiato(s): $" + (amt*4.57);
    if (amt < 1){
        order[9] = undefined;
    }else{
        order[9] = ord;
    }


    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
                orderSum.value += order[i] + "\n";
                i++;
            }else{
                i++;
                continue;
            }
        }
}
function updateMocha(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " Iced Mocha(s): $" + (amt*4.57);
    if (amt < 1){
        order[10] = undefined;
    }else{
        order[10] = ord;
    }


    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
                orderSum.value += order[i] + "\n";
                i++;
            }else{
                i++;
                continue;
            }
        }
}
function updateLat(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " Mocha Latte(s): $" + (amt*5.02);
    if (amt < 1){
        order[11] = undefined;
    }else{
        order[11] = ord;
    }


    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
                orderSum.value += order[i] + "\n";
                i++;
            }else{
                i++;
                continue;
            }
        }
}
function updatePie(amt){
    console.log("Fuck this dumbass shit")
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " Apple Pie(s): $" + (amt*2.50);
    if (amt < 1){
        order[12] = undefined;
    }else{
        order[12] = ord;
    }


    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
                orderSum.value += order[i] + "\n";
                i++;
            }else{
                i++;
                continue;
            }
        }
}
function updateCookie(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " Cookie(s): $" + (amt*1.54);
    if (amt < 1){
        order[13] = undefined;
    }else{
        order[13] = ord;
    }


    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
                orderSum.value += order[i] + "\n";
                i++;
            }else{
                i++;
                continue;
            }
        }
}
function updateSundae(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " Hot Fundge Sundae(s): $" + (amt*5.00);
    if (amt < 1){
        order[14] = undefined;
    }else{
        order[14] = ord;
    }


    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
                orderSum.value += order[i] + "\n";
                i++;
            }else{
                i++;
                continue;
            }
        }
}
function updateFlurry(amt){
    var orderSum = document.getElementById("order_text");
    orderSum.value = "";
    
    var ord = amt + " McFlurry(s): $" + (amt*4.62);
    if (amt < 1){
        order[15] = undefined;
    }else{
        order[15] = ord;
    }


    var i = 0;
    while (i < order.length){
        if(typeof order[i] !== "undefined"){
                orderSum.value += order[i] + "\n";
                i++;
            }else{
                i++;
                continue;
            }
        }
}


function main_driver(){
    updateOrder();
}