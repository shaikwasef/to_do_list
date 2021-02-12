var categories = document.getElementById("categories");
var add = document.getElementById("add_button");
var list = document.querySelector(".list");
var task_field = document.getElementById("task_field");

add.addEventListener('click',add_to_list);



function add_to_list(){
	if (task_field.value == ""){
		window.alert("Please define task!");
		return ;
	}
	list_element = document.createElement("div");
	list_element.classList.add("list_element_incomplete");
	if(categories.options[categories.selectedIndex].textContent == "Incomplete"){

		list_element.classList.add("list_element_incomplete");
		list_element.textContent = task_field.value + " - Incomplete";
		document.getElementById("task_field").value= "";
	}
	list.append(list_element);	
}