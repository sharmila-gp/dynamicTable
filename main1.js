var cart = [
			{
				productName:"Mariegold",
				productId:"1001",
				price:100,
				quantity:"<input type='number'value='1' id= 'box0' min='0' oninput =  multiply('box0',cart[0],'mytd1')>"
			},
			{
				productName:"JimJam",
				productId:"1002",
				price:102,
				quantity:"<input type='number' value='1'id= 'box1' min='0' oninput = multiply('box1',cart[1],'mytd2')>"
			},
			{
				productName:"Hide&Seek",
				productId:"1003",
				price:150,
				quantity:"<input type='number'value='1' id= 'box2' min='0' oninput = multiply('box2',cart[2],'mytd3')>"
			},
			{
				productName:"Bourborn",
				productId:"1004",
				price:160,
				quantity:"<input type='number' value='1' id= 'box3' min='0' oninput = multiply('box3',cart[3],'mytd4')>"
			}];
			
var	i=0;	
tableData();				
function tableData()
{
	var x = document.createElement("TABLE");
	x.setAttribute("id","mytable");
	document.body.appendChild(x);
	var x1 = document.createElement("TR");
	x1.setAttribute("id","myth");
	document.getElementById("mytable").appendChild(x1);
	
	var x2=document.createElement("TD");
	x2.innerHTML = "ProductName";
	document.getElementById("myth").appendChild(x2);
	
	var x3=document.createElement("TD");
	x3.innerHTML = "ProductId";
	document.getElementById("myth").appendChild(x3);
	
	var x4=document.createElement("TD");
	x4.innerHTML = "Price" ;
	document.getElementById("myth").appendChild(x4);
	
	var x5 = document.createElement("TD");
	x5.innerHTML = "Quantity";
	document.getElementById("myth").appendChild(x5);
	
	var x6 = document.createElement("TD");
	x6.innerHTML = "NetPrice";
	document.getElementById("myth").appendChild(x6);

	for (j=0;j<cart.length;j++){
		var tr1 = document.createElement("TR");
		tr1.setAttribute("id","mytr"+j);
		document.getElementById("mytable").appendChild(tr1);
			
		var td1=document.createElement("TD");
		td1.innerHTML=cart[j].productName;
		document.getElementById("mytr"+j).appendChild(td1);
		
		var td2=document.createElement("TD");
		td2.innerHTML=cart[j].productId
		document.getElementById("mytr"+j).appendChild(td2);
	
		var td3=document.createElement("TD");
		td3.innerHTML= cart[j].price;
		document.getElementById("mytr"+j).appendChild(td3);
	
		var td4=document.createElement("TD");
		var ch=cart[j].quantity;
		td4.innerHTML= ch;
		document.getElementById("mytr"+j).appendChild(td4);
		
		var td5=document.createElement("TD");
		i++;
		td5.setAttribute("id","mytd"+i);
		var inputele = document.getElementById("box"+j).value;
		td5.innerHTML = inputele * cart[j].price;
		document.getElementById("mytr"+j).appendChild(td5);
		
	}

	var tr5 = document.createElement("tr");
	tr5.setAttribute("id","mytr");
	document.getElementById("mytable").appendChild(tr5);

	var x7 = document.createElement("TD");
	x7.setAttribute("colspan","4");
	x7.innerHTML = "TOTAL";
	document.getElementById("mytr").appendChild(x7);

	var x8 = document.createElement("TD");
	x8.setAttribute("id","tot");
	var to = 0;
	for(var z=1;z<=cart.length;z++){
		var xx1 = document.getElementById("mytd"+z);
		to = to +parseInt(xx1.innerHTML);
	}
	x8.innerHTML = to;
	document.getElementById("mytr").appendChild(x8);
}


function multiply(val, obj, idna){
	let mul;
	let ii = document.getElementById(val);
	let tdi = document.getElementById(idna);
	mul=ii.value*obj.price;
	tdi.innerHTML=mul;
	var sum = 0;
	var table = document.getElementById("mytable");
	for(var z=1;z<=cart.length;z++){
		var xx1 = document.getElementById("mytd"+z);
		sum = sum +parseInt(xx1.innerHTML);
	}

	totalValue = document.getElementById("tot");
	totalValue.innerHTML = sum;
}
	
