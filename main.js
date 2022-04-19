things_to_draw = ["pen", "paper", "book", "bottle", "socks", "apple", "pizza"];
timer_counter = "0";
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = "0";
function setup() {
    canvas = createCanvas(280, 280);
    canvas.position(500, 200);
}

random_no = Math.floor((Math.random() * things_to_draw.length) + 1);
Element_of_array = things_to_draw[random_no];
console.log(Element_of_array);
document.getElementById("name_of_sketch_to_draw").innerHTML = Element_of_array;