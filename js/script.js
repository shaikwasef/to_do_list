var categories = document.getElementById("categories");
var add = document.getElementById("add_button");
var list = document.querySelector(".list");
var task_field = document.getElementById("task_field");
var all_button = document.getElementById("all_button");
var upcoming_button = document.getElementById("upcoming_button");
var completed_button = document.getElementById("complete_button");
var pending_button = document.getElementById("pending_button");
var root = document.querySelector(":root");

add.addEventListener('click',add_to_list);

var list_element_new = null ; //creating null element to conduct the order of task ; updated after every addition to last list_element


function add_to_list(){
	if (task_field.value == ""){
		window.alert("Please define task!");
		return ;
	}
	if (categories.options[categories.selectedIndex].textContent  == "STATUS"){
		window.alert("Please define category!");
		return ;
	}
	list_element = document.createElement("div");
	list_element.classList.add("list_element");
	if(categories.options[categories.selectedIndex].textContent == "Upcoming"){
		list_element.classList.add("list_element_upcoming");
		list_element.textContent = task_field.value + " : upcoming";
		document.getElementById("task_field").value= "";
		list.insertBefore(list_element,list_element_new);
		list_element_new = list_element ;
	}
	if(categories.options[categories.selectedIndex].textContent == "Completed"){
		list_element.classList.add("list_element_complete");
		list_element.textContent = task_field.value + " : completed";
		document.getElementById("task_field").value= "";
		list.insertBefore(list_element,list_element_new);
		list_element_new = list_element ;
	}	
	if(categories.options[categories.selectedIndex].textContent == "Pending"){
		list_element.classList.add("list_element_pending");
		list_element.textContent = task_field.value + " : pending";
		document.getElementById("task_field").value= "";
		list.insertBefore(list_element,list_element_new);
		list_element_new = list_element ;
	}
}

upcoming_button.addEventListener('click',upcoming_list);
complete_button.addEventListener('click',complete_list)
pending_button.addEventListener('click',pending_list);
all_button.addEventListener('click',all_list);


function upcoming_list(){
	root.style.setProperty('--upcoming_state','block');
	root.style.setProperty('--pending_state','none');
	root.style.setProperty('--completed_state','none');
}
function complete_list(){
	root.style.setProperty('--upcoming_state','none');
	root.style.setProperty('--pending_state','none');
	root.style.setProperty('--completed_state','block');
}
function pending_list(){
	root.style.setProperty('--upcoming_state','none');
	root.style.setProperty('--pending_state','block');
	root.style.setProperty('--completed_state','none');
}
function all_list(){
	root.style.setProperty('--upcoming_state','block');
	root.style.setProperty('--pending_state','block');
	root.style.setProperty('--completed_state','block');
}