var holecopter1 = document.getElementById("holecopter1");
var holecopter2 = document.getElementById("holecopter2");
var holecopter3 = document.getElementById("holecopter3");
var orginal1 = document.getElementById("orginal1");
var orginal2 = document.getElementById("orginal2");
var orginal3 = document.getElementById("orginal3");
var orginal4 = document.getElementById("orginal4");
var car1 = document.getElementById("car1");
var car2 = document.getElementById("car2");
var car3 = document.getElementById("car3");

orginal1.addEventListener("dragover", (e) => e.preventDefault());
orginal2.addEventListener("dragover", (e) => e.preventDefault());
orginal3.addEventListener("dragover", (e) => e.preventDefault());
orginal4.addEventListener("dragover", (e) => e.preventDefault());

holecopter1.addEventListener("dragstart", (e) => e.dataTransfer.setData("photo", 'holecopter1'));
holecopter2.addEventListener("dragstart", (e) => e.dataTransfer.setData("photo", 'holecopter2'));
holecopter3.addEventListener("dragstart", (e) => e.dataTransfer.setData("photo", 'holecopter3'));
car1.addEventListener("dragstart", (e) => e.dataTransfer.setData("photo", 'car1'));
car2.addEventListener("dragstart", (e) => e.dataTransfer.setData("photo", 'car2'));
car3.addEventListener("dragstart", (e) => e.dataTransfer.setData("photo", 'car3'));

orginal1.addEventListener('drop', (e) => {
  var id1 = e.dataTransfer.getData('photo');
  var element1 = document.getElementById(id1);
  orginal1.appendChild(element1);
});

orginal2.addEventListener('drop', (e) => {
  var id1 = e.dataTransfer.getData('photo');
  var element1 = document.getElementById(id1);
  orginal2.appendChild(element1);
});

orginal3.addEventListener('drop', (e) => {
  var id1 = e.dataTransfer.getData('photo');
  var element1 = document.getElementById(id1);
  orginal3.appendChild(element1);
});

orginal4.addEventListener('drop', (e) => {
  var id1 = e.dataTransfer.getData('photo');
  var element1 = document.getElementById(id1);
  orginal4.appendChild(element1);
});

holecopter1.addEventListener('dblclick', () => {
  orginal1.appendChild(holecopter1);
});

holecopter2.addEventListener('dblclick', () => {
  orginal1.appendChild(holecopter2);
});

holecopter3.addEventListener('dblclick', () => {
  orginal1.appendChild(holecopter3);
});
car1.addEventListener('dblclick', () => {
  orginal3.appendChild(car1);
});

car2.addEventListener('dblclick', () => {
  orginal3.appendChild(car2);
});

car3.addEventListener('dblclick', () => {
  orginal3.appendChild(car3);
});

