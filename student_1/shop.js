let Total=0;

function validate_the_form(){
  //validating the form
    var Name=document.getElementById("fullname").value;
    var Email=document.getElementById("email").value;
    var Address=document.getElementById("address").value;
    var Country=document.getElementById("country").value;
    var City=document.getElementById("city").value;
    var Province=document.getElementById("province").value;
    var Zip=document.getElementById("zip").value;
    var Name_on_card=document.getElementById("name_on_card").value;
    var Card_number=document.getElementById("card_number").value;
    var Month=document.getElementById("month").value;
    var Year=document.getElementById("year").value;
    var CVV=document.getElementById("cvv").value;

    if(Total===0){
      alert("Please buy a product before filling the form!")
      window.location.hash="#product1";
    }

    else if(Name===""){
        alert("Please enter your name!");
        window.location.hash="#form";
    }
    else if(Email===""){
        alert("Please enter your email!");
        window.location.hash="#form";
    }
    else if(Address===""){
        alert("Please enter your address!");
        window.location.hash="#form";
    }
    else if(Country===""){
        alert("Please enter your country!");
        window.location.hash="#form";
    }
    else if(City===""){
        alert("Please enter your city!");
        window.location.hash="#form";
    }
    else if(Province===""){
        alert("Please enter your province!");
        window.location.hash="#form";
    }
    else if(Zip==="" || isNaN(Zip) || Zip.length!=5){
        alert("Please enter your zip code!");
        window.location.hash="#form";
    }
    else if(Name_on_card===""){
        alert("Please enter your name on the card!");
        window.location.hash="#form";
    }
    else if(Card_number==="" || isNaN(Card_number) || Card_number.length!==16){
        alert("Please enter your correct card number!");
        window.location.hash="#form";
    }
    else if(Month==="" || isNaN(Month) || Month.length!=2 || (Month<1 && Month>13)){
        alert("Please enter the expiry month of your card!");
        window.location.hash="#form";
    }
    else if(Year==="" || isNaN(Year) || Year.length!=4 || (Year!=2023 && Year<2023)){
        alert("Please enter expiry year of your card!");
    }
    else if(CVV==="" || isNaN(CVV) || (CVV.length!==3 && CVV.length!==4)){
        alert("Please enter the cvv of your card!");
        window.location.hash="#form";
    }
    else if(Year==2024 && Month<4){
      alert("Your card has expired!");
      window.location.hash="#form";
    }
    else{
      alert("Proceed to checkout!");
      window.location.hash="#checkout_details"; //going to the check section if the validation done right
    }
}

function Edit_Email(){
  var Email=document.getElementById("email").value;
  if(Email===""){
    alert("Enter email first!");
  }
  else{
    const edit_email=document.getElementById("email");
    alert("Now you can change your email!");
    edit_email.focus();
  }
}

function Edit_Address(){
  var Address=document.getElementById("address").value;
  if(Address===""){
    alert("Enter address first!");
  }
  else{
    const edit_address=document.getElementById("address");
    alert("Now you can change your address");
    edit_address.focus();
  }
}

// incrementing and derementing the quantity of each products


  function increment1() {
    var input = document.getElementsByClassName("cart-input1")[0];
    var value = parseInt(input.value);
    input.value = value + 1;
    let price_of_product1=5;
    Total_Price_product1=price_of_product1*(value+1);
    document.getElementById("price_product1").innerHTML = "$ "+Total_Price_product1;
    return Total_Price_product1;
  }
  
  function decrement1() {
    var input = document.getElementsByClassName("cart-input1")[0];
    var value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
      let price_of_product1=5;
      Total_Price_product1=price_of_product1*(value-1);
      document.getElementById("price_product1").innerHTML = "$ "+Total_Price_product1;
    }
  }

  function increment2() {
    var input = document.getElementsByClassName("cart-input2")[0];
    var value = parseInt(input.value);
    input.value = value + 1;
    let price_of_product2=2;
     Total_Price_product2=price_of_product2*(value+1);
    document.getElementById("price_product2").innerHTML = "$ "+Total_Price_product2;

  }
  
  function decrement2() {
    var input = document.getElementsByClassName("cart-input2")[0];
    var value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
      let price_of_product2=2;
       Total_Price_product2=price_of_product2*(value-1);
      document.getElementById("price_product2").innerHTML = "$ "+Total_Price_product2;
    }
    return value;
  }

  function increment3() {
    var input = document.getElementsByClassName("cart-input3")[0];
    var value = parseInt(input.value);
    input.value = value + 1;
    let price_of_product3=20;
    Total_Price_product3=price_of_product3*(value+1);
    document.getElementById("price_product3").innerHTML = "$ "+Total_Price_product3;
  }
  
  function decrement3() {
    var input = document.getElementsByClassName("cart-input3")[0];
    var value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
      let price_of_product3=20;
      Total_Price_product3=price_of_product3*(value-1);
      document.getElementById("price_product3").innerHTML = "$ "+Total_Price_product3;
    }
    return value;
  }

  function increment4() {
    var input = document.getElementsByClassName("cart-input4")[0];
    var value = parseInt(input.value);
    input.value = value + 1;
    let price_of_product4=14;
    Total_Price_product4=price_of_product4*(value+1);
    document.getElementById("price_product4").innerHTML = "$ "+Total_Price_product4;
  }
  
  function decrement4() {
    var input = document.getElementsByClassName("cart-input4")[0];
    var value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
      let price_of_product4=14;
      Total_Price_product4=price_of_product4*(value-1);
      document.getElementById("price_product4").innerHTML = "$ "+Total_Price_product4;
    }
    return value;
  }

  function increment5() {
    var input = document.getElementsByClassName("cart-input5")[0];
    var value = parseInt(input.value);
    input.value = value + 1;
    let price_of_product5=8;
    Total_Price_product5=price_of_product5*(value+1);
    document.getElementById("price_product5").innerHTML = "$ "+Total_Price_product5;
  }
  
  function decrement5() {
    var input = document.getElementsByClassName("cart-input5")[0];
    var value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
      let price_of_product5=8;
      Total_Price_product5=price_of_product5*(value-1);
      document.getElementById("price_product5").innerHTML = "$ "+Total_Price_product5;
    }
    return value;
  }

  function increment6() {
    var input = document.getElementsByClassName("cart-input6")[0];
    var value = parseInt(input.value);
    input.value = value + 1;
    let price_of_product6=18;
    Total_Price_product6=price_of_product6*(value+1);
    document.getElementById("price_product6").innerHTML = "$ "+Total_Price_product6;
  }
  
  function decrement6() {
    var input = document.getElementsByClassName("cart-input6")[0];
    var value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
      let price_of_product6=18;
      Total_Price_product6=price_of_product6*(value-1);
      document.getElementById("price_product6").innerHTML = "$ "+Total_Price_product6;
    }
    return value;
  }

  function increment7() {
    var input = document.getElementsByClassName("cart-input7")[0];
    var value = parseInt(input.value);
    input.value = value + 1;
    let price_of_product7=12;
    var Total_Price_product7=price_of_product7*(value+1);
    document.getElementById("price_product7").innerHTML = "$ "+Total_Price_product7;
    return value;
  }
  
  function decrement7() {
    var input = document.getElementsByClassName("cart-input7")[0];
    var value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
      let price_of_product7=12;
      var Total_Price_product7=price_of_product7*(value-1);
      document.getElementById("price_product7").innerHTML = "$ "+Total_Price_product7;
    }
    return value;
  }

  function increment8() {
    var input = document.getElementsByClassName("cart-input8")[0];
    var value = parseInt(input.value);
    input.value = value + 1;
    let price_of_product8=50;
    Total_Price_product8=price_of_product8*(value+1);
    document.getElementById("price_product8").innerHTML = "$ "+Total_Price_product8;
  }
  
  function decrement8() {
    var input = document.getElementsByClassName("cart-input8")[0];
    var value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
      let price_of_product8=50;
      Total_Price_product8=price_of_product8*(value-1);
      document.getElementById("price_product8").innerHTML = "$ "+Total_Price_product8;
    }
    return value;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////

  const id = [];

  let product_id1 = "item_1";
  let product_bought1 = false;

  let product_id2 = "item_2";
  let product_bought2 = false;

  let product_id3 = "item_3";
  let product_bought3 = false;

  let product_id4 = "item_4";
  let product_bought4 = false;

  let product_id5 = "item_5";
  let product_bought5 = false;

  let product_id6 = "item_6";
  let product_bought6 = false;

  let product_id7 = "item_7";
  let product_bought7 = false;

  let product_id8 = "item_8";
  let product_bought8 = false;


  ///////////////////////////////////////////////////////////////////////////////////////////////

  //calculating the price and the total price of each product  
  function Adding_to_cart1() {
    for (let i = 0; i < id.length; i++) {
      if (id.includes(product_id1)) {
        product_bought1 = true;
        alert("You have already bought the product!");
        break;
      }
    }
  
    if (product_bought1==false) {
      id.push(product_id1);
      let Total_Price_product1 =5 * parseInt(document.getElementsByClassName("cart-input1")[0].value);
      Total = Total + Total_Price_product1;
      console.log(Total_Price_product1);
      var name = document.getElementById("fullname").value;
      //perform other operations using Total_Price_product1
      alert("Item succesfully added to the cart!");
      document.getElementById("Name_of_buyer").innerHTML ="Name of the buyer :" + name;
      document.getElementById("item_1").innerHTML ="TOGETHER BAND";
      document.getElementById("price_1").innerHTML ="$ " + Total_Price_product1;
      document.getElementById("Total_price").innerHTML = "$ " + Total;
      document.getElementById("clear_products1").style.display = "inline-block";
    }
  }
  

  function Adding_to_cart2(){
    for (let i = 0; i < id.length; i++) {
      if (id.includes(product_id2)) {
        product_bought2 = true;
        alert("You have already bought the product!");
        break;
      }
    }
    if (product_bought2==false) {
      id.push(product_id2);
      let Total_Price_product2 = 2 * parseInt(document.getElementsByClassName("cart-input2")[0].value);
      console.log(Total_Price_product2);
      Total=Total+Total_Price_product2;
      //perform other operations using Total_Price_product2
      alert("Item succesfully added to the cart!")
      document.getElementById("item_2").innerHTML="SDGs Lanyard";
      document.getElementById("price_2").innerHTML="$ "+ Total_Price_product2;
      document.getElementById("Total_price").innerHTML="$ "+ Total;
      document.getElementById("clear_products2").style.display = "inline-block";
    }
  }

  function Adding_to_cart3(){
    for (let i = 0; i < id.length; i++) {
      if (id.includes(product_id3)) {
        product_bought3 = true;
        alert("You have already bought the product!");
        break;
      }
    }
    if (product_bought3==false) {
      id.push(product_id3);
      let Total_Price_product3 = 20 * parseInt(document.getElementsByClassName("cart-input3")[0].value);
      console.log(Total_Price_product3);
      Total=Total+Total_Price_product3;
      //perform other operations using Total_Price_product3
      alert("Item succesfully added to the cart!")
      document.getElementById("item_3").innerHTML="Zero Hunger Essential T-Shirt";
      document.getElementById("price_3").innerHTML="$ "+ Total_Price_product3;
      document.getElementById("Total_price").innerHTML="$ "+Total;
      document.getElementById("clear_products3").style.display = "inline-block";
    }
  }

  function Adding_to_cart4(){
    for (let i = 0; i < id.length; i++) {
      if (id.includes(product_id4)) {
        product_bought4 = true;
        alert("You have already bought the product!");
        break;
      }
    }
    if (product_bought4==false) {
      id.push(product_id4);
      let Total_Price_product4 = 14 * parseInt(document.getElementsByClassName("cart-input4")[0].value);
      console.log(Total_Price_product4);
      Total=Total+Total_Price_product4;
      //perform other operations using Total_Price_product4
      alert("Item succesfully added to the cart!")
      document.getElementById("item_4").innerHTML="Organic SDGs Cap / Hat";
      document.getElementById("price_4").innerHTML="$ "+ Total_Price_product4;
      document.getElementById("Total_price").innerHTML="$ "+ Total;
      document.getElementById("clear_products4").style.display = "inline-block";
    }
  }

  function Adding_to_cart5(){
    for (let i = 0; i < id.length; i++) {
      if (id.includes(product_id5)) {
        product_bought5 = true;
        alert("You have already bought the product!");
        break;
      }
    }
    if (product_bought5==false) {
      id.push(product_id5);
      let Total_Price_product5 = 8 * parseInt(document.getElementsByClassName("cart-input5")[0].value);
      console.log(Total_Price_product5);
      Total=Total+Total_Price_product5;
      //perform other operations using Total_Price_product5
      alert("Item succesfully added to the cart!")
      document.getElementById("item_5").innerHTML="sustainable recycled bag";
      document.getElementById("price_5").innerHTML="$ "+ Total_Price_product5;
      document.getElementById("Total_price").innerHTML="$ "+ Total;
      document.getElementById("clear_products5").style.display = "inline-block";
    }
  }

  function Adding_to_cart6(){
    for (let i = 0; i < id.length; i++) {
      if (id.includes(product_id6)) {
        product_bought6 = true;
        alert("You have already bought the product!");
        break;
      }
    }
    if (product_bought6==false) {
      id.push(product_id6);
      let Total_Price_product6 = 18 * parseInt(document.getElementsByClassName("cart-input6")[0].value);
      console.log(Total_Price_product6);
      Total=Total+Total_Price_product6;
      //perform other operations using Total_Price_product6
      alert("Item succesfully added to the cart!")
      document.getElementById("item_6").innerHTML="SDGs Bento Lunch Box";
      document.getElementById("price_6").innerHTML="$ "+ Total_Price_product6;
      document.getElementById("Total_price").innerHTML="$ "+ Total;
      document.getElementById("clear_products6").style.display = "inline-block";
    }
  }

  function Adding_to_cart7(){
    for (let i = 0; i < id.length; i++) {
      if (id.includes(product_id7)) {
        product_bought7 = true;
        alert("You have already bought the product!");
        break;
      }
    }
    if (product_bought7==false) {
      id.push(product_id7);
      let Total_Price_product7 = 12 * parseInt(document.getElementsByClassName("cart-input7")[0].value);
      console.log(Total_Price_product7);
      Total=Total+Total_Price_product7;
      //perform other operations using Total_Price_product7
      alert("Item succesfully added to the cart!")
      document.getElementById("item_7").innerHTML="SDGs Postcards";
      document.getElementById("price_7").innerHTML="$ "+Total_Price_product7;
      document.getElementById("Total_price").innerHTML="$ "+Total;
      document.getElementById("clear_products7").style.display = "inline-block";
    }
  }

  function Adding_to_cart8(){
    for (let i = 0; i < id.length; i++) {
      if (id.includes(product_id8)) {
        product_bought8 = true;
        alert("You have already bought the product!");
        break;
      }
    }
    if (product_bought8==false) {
      id.push(product_id8);
    let Total_Price_product8 = 50 * parseInt(document.getElementsByClassName("cart-input8")[0].value);
    console.log(Total_Price_product8);
    Total=Total+Total_Price_product8;
    //perform other operations using Total_Price_product8
    alert("Item succesfully added to the cart!")
    document.getElementById("item_8").innerHTML="SDGs Soccer Ball";
    document.getElementById("price_8").innerHTML="$ "+ Total_Price_product8;
    document.getElementById("Total_price").innerHTML="$ "+Total;
    document.getElementById("clear_products8").style.display = "inline-block";
  }
}

  //clearing the products bought
  function ClearAll_1() {
    let productQuantity = parseInt(document.getElementsByClassName("cart-input1")[0].value);
  
    if (id.includes(product_id1)) {
      id.splice(id.indexOf(product_id1), 1);
      Total = Total - (5 * productQuantity);
      if (Total < 0) {
        Total = 0;
      }
      document.getElementById("item_1").innerHTML = "";
      document.getElementById("price_1").innerHTML = "";
      document.getElementById("clear_products1").style.display = "none";
      document.getElementById("Total_price").innerHTML = "$ " + Total;
      alert("Item successfully cleared from cart!");
    } else {
      alert("No items found in the cart to clear!");
    }
  }

  function ClearAll_2() {
    let productQuantity = parseInt(document.getElementsByClassName("cart-input2")[0].value);
  
    if (id.includes(product_id2)) {
      id.splice(id.indexOf(product_id2), 1);
      Total = Total - (2 * productQuantity);
      if (Total < 0) {
        Total = 0;
      }
      document.getElementById("item_2").innerHTML = "";
      document.getElementById("price_2").innerHTML = "";
      document.getElementById("clear_products2").style.display = "none";
      document.getElementById("Total_price").innerHTML = "$ " + Total;
      alert("Item successfully cleared from cart!");
    } else {
      alert("No items found in the cart to clear!");
    }
  }

  function ClearAll_3() {
    let productQuantity = parseInt(document.getElementsByClassName("cart-input3")[0].value);
  
    if (id.includes(product_id3)) {
      id.splice(id.indexOf(product_id3), 1);
      Total = Total - (20 * productQuantity);
      if (Total < 0) {
        Total = 0;
      }
      document.getElementById("item_3").innerHTML = "";
      document.getElementById("price_3").innerHTML = "";
      document.getElementById("clear_products3").style.display = "none";
      document.getElementById("Total_price").innerHTML = "$ " + Total;
      alert("Item successfully cleared from cart!");
    } else {
      alert("No items found in the cart to clear!");
    }
  }

  function ClearAll_4() {
    let productQuantity = parseInt(document.getElementsByClassName("cart-input4")[0].value);
  
    if (id.includes(product_id4)) {
      id.splice(id.indexOf(product_id4), 1);
      Total = Total - (14 * productQuantity);
      if (Total < 0) {
        Total = 0;
      }
      document.getElementById("item_4").innerHTML = "";
      document.getElementById("price_4").innerHTML = "";
      document.getElementById("clear_products4").style.display = "none";
      document.getElementById("Total_price").innerHTML = "$ " + Total;
      alert("Item successfully cleared from cart!");
    } else {
      alert("No items found in the cart to clear!");
    }
  }

  function ClearAll_5() {
    let productQuantity = parseInt(document.getElementsByClassName("cart-input5")[0].value);
  
    if (id.includes(product_id5)) {
      id.splice(id.indexOf(product_id5), 1);
      Total = Total - (8 * productQuantity);
      if (Total < 0) {
        Total = 0;
      }
      document.getElementById("item_5").innerHTML = "";
      document.getElementById("price_5").innerHTML = "";
      document.getElementById("clear_products5").style.display = "none";
      document.getElementById("Total_price").innerHTML = "$ " + Total;
      alert("Item successfully cleared from cart!");
    } else {
      alert("No items found in the cart to clear!");
    }
  }

  function ClearAll_6() {
    let productQuantity = parseInt(document.getElementsByClassName("cart-input6")[0].value);
  
    if (id.includes(product_id6)) {
      id.splice(id.indexOf(product_id6), 1);
      Total = Total - (18 * productQuantity);
      if (Total < 0) {
        Total = 0;
      }
      document.getElementById("item_6").innerHTML = "";
      document.getElementById("price_6").innerHTML = "";
      document.getElementById("clear_products6").style.display = "none";
      document.getElementById("Total_price").innerHTML = "$ " + Total;
      alert("Item successfully cleared from cart!");
    } else {
      alert("No items found in the cart to clear!");
    }
  }

  function ClearAll_7() {
    let productQuantity = parseInt(document.getElementsByClassName("cart-input7")[0].value);
  
    if (id.includes(product_id7)) {
      id.splice(id.indexOf(product_id7), 1);
      Total = Total - (12 * productQuantity);
      if (Total < 0) {
        Total = 0;
      }
      document.getElementById("item_7").innerHTML = "";
      document.getElementById("price_7").innerHTML = "";
      document.getElementById("clear_products7").style.display = "none";
      document.getElementById("Total_price").innerHTML = "$ " + Total;
      alert("Item successfully cleared from cart!");
    } else {
      alert("No items found in the cart to clear!");
    }
  }

  function ClearAll_8() {
    let productQuantity = parseInt(document.getElementsByClassName("cart-input8")[0].value);
  
    if (id.includes(product_id8)) {
      id.splice(id.indexOf(product_id8), 1);
      Total = Total - (50 * productQuantity);
      if (Total < 0) {
        Total = 0;
      }
      document.getElementById("item_8").innerHTML = "";
      document.getElementById("price_8").innerHTML = "";
      document.getElementById("clear_products8").style.display = "none";
      document.getElementById("Total_price").innerHTML = "$ " + Total;
      alert("Item successfully cleared from cart!");
    } else {
      alert("No items found in the cart to clear!");
    }
  }
  
  //if the form is validated properly let the user confirm payment
  function  Confirm_Purchase(){
    var form_validated_properly=validate_the_form();
    if(form_validated_properly){
      alert("Your items will be delivered to you soon. Thank you have a nice day!");
    }
    else{
      alert("Please fill the checkout form poperly!");
      window.location.hash="#form";

    }
  }
