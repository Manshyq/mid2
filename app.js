function dropdown_search(){
    		document.getElementById("dropdown-list").classList.toggle("show");
    	}

    	function dropdown_search_region() {
    	document.getElementById("dropdown-list-region").classList.toggle("show");
		document.getElementById("dropdown-search-input").classList.toggle("show");
		}

		function dropdown_search_region_filter() {
		  var input, filter, ul, li, a, i;
		  input = document.getElementById("dropdown-search-input");
		  filter = input.value.toUpperCase();
		  div = document.getElementById("dropdown-list-region");
		  a = div.getElementsByTagName("a");
		  for (i = 0; i < a.length; i++) {
		    txtValue = a[i].textContent || a[i].innerText;
		    if (txtValue.toUpperCase().indexOf(filter) > -1) {
		      a[i].style.display = "";
		    } else {
		      a[i].style.display = "none";
		    }
		  }
		}

		function select_category1(){
			document.getElementById("dropdown-text").innerHTML='Услуги';
		}
		function select_category_child1(){
			document.getElementById("dropdown-text").innerHTML='Строительство и ремонт';
		}



		function select_region1(){
			document.getElementById("dropdown-text-region").innerHTML='Акмолинская область';
			document.getElementById("region-name").innerHTML='Акмолинской область';
		}
		function select_region2(){
			document.getElementById("dropdown-text-region").innerHTML='Актюбинская область';
			document.getElementById("region-name").innerHTML='Актюбинской область';
		}
		function select_region3(){
			document.getElementById("dropdown-text-region").innerHTML='Атырауская область';
			document.getElementById("region-name").innerHTML='Атырауской область';
		}
		function select_region4(){
			document.getElementById("dropdown-text-region").innerHTML='Восточно-Казахстанская область';
			document.getElementById("region-name").innerHTML='Восточно-Казахстанской область';
		}
		function select_region5(){
			document.getElementById("dropdown-text-region").innerHTML='Жамбылская область';
			document.getElementById("region-name").innerHTML='Жамбылской область';
		}
		function select_city1(){
			document.getElementById("dropdown-text-region").innerHTML='Кокшетау';
			document.getElementById("region-name").innerHTML='Кокшетау';
		}
		function select_city2(){
			document.getElementById("dropdown-text-region").innerHTML='Нур-Султан';
			document.getElementById("region-name").innerHTML='Нур-Султане';
		}
		function select_city3(){
			document.getElementById("dropdown-text-region").innerHTML='Атбасар';
			document.getElementById("region-name").innerHTML='Атбасаре';
		}
		function select_city4(){
			document.getElementById("dropdown-text-region").innerHTML='Боровое';
			document.getElementById("region-name").innerHTML='Боровом';
		}
		function select_city5(){
			document.getElementById("dropdown-text-region").innerHTML='Актобе';
			document.getElementById("region-name").innerHTML='Актобе';
		}
		function select_city6(){
			document.getElementById("dropdown-text-region").innerHTML='Мартук';
			document.getElementById("region-name").innerHTML='Мартуке';
		}


		function downloading(){
			document.getElementById("search_button-text").style.backgroundImage="url('https://c.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif')";
		}

		function show_description(){
			document.getElementById("hide-description1").classList.toggle("show");
		}
		function show_description2(){
			document.getElementById("hide-description2").classList.toggle("show");
		}

		function show_more() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("show-more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Показать ещё";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Скрыть";
    moreText.style.display = "inline";
  }
}