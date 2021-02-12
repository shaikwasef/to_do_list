var categories = document.getElementById("categories");
var add = document.getElementById("add_button");
var list = document.querySelector(".list");

add.addEventListener('click',add_to_list);



function add_to_list(){
	// list_element = document.createElement("div");
	// list_element.classList.add("list_element");
	// list.append(list_element)
	var value = categories.options[categories.selectedIndex].textContent ;
	window.alert(value);

}