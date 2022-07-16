var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var MenuItems = document.getElementById("MenuItems");
	MenuItems.style.maxHeight = "0px";
	function menutoggle(){
		if(MenuItems.style.maxHeight == "0px")
		{
			MenuItems.style.maxHeight = "300px";
		}
		else
		{
			MenuItems.style.maxHeight = "0px";
		}
	}




	



		var ProductImg = document.getElementbyId("ProductImg");
		var SmallImg = document.getElementbyClassName("small-img");
	
			SmallImg[0].onclick = function()
			{
			ProductImg.src = SmallImg[0].src;
			}
			SmallImg[1].onclick = function()
			{
			ProductImg.src = SmallImg[1].src;
			}
			SmallImg[2].onclick = function()
			{
			ProductImg.src = SmallImg[2].src;
			}
			SmallImg[3].onclick = function()
			{
			ProductImg.src = SmallImg[3].src;
			}











	//dito yung code nung filter

	filterSelection("all");
	function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("col-4");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
	}

	function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	}
	}

	function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
		arr1.splice(arr1.indexOf(arr2[i]), 1);     
		}
	}
	element.className = arr1.join(" ");
	}

	// Add active class to the current button (highlight it)
	var btnContainer = document.getElementById("myBtnContainer");
	var btns = btnContainer.getElementsByClassName("btn1");
	for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function(){
		var current = document.getElementsByClassName("active1");
		current[0].className = current[0].className.replace(" active1", "");
		this.className += " active1";
	});
	}


//popup


