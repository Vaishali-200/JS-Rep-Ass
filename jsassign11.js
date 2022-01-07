let numofqun=60,amount= 500,discount,finalbill=0;
if(numofqun<5)
{
    amount=amount;
    console.log("Your total Bill Is :",amount);
} else if(numofqun > 5 && numofqun < 25)
{   
    amount=amount*numofqun;
    discount=amount * 0.05;
    finalbill=amount-discount;
    console.log("Your total Bill Is :",amount,"and ur discount",discount,  "bill Amount",finalbill);
}else if(numofqun > 25 && numofqun < 50)
{   
    amount=amount*numofqun;
    discount=amount * 0.15;
    finalbill=amount-discount;
    console.log("Your total Bill Is :",amount,"and ur discount",discount,  "bill Amount",finalbill);
}else if(numofqun > 50)
{  
    amount=amount*numofqun;
    discount=amount * 0.20;
    finalbill=amount-discount;
    console.log("Your total Bill Is :",amount,"and ur discount",discount, "bill Amount",finalbill);
}