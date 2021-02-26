var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var jsonParser = bodyParser.json();
app.use(express.static(__dirname + "/public"));
// получение списка данных
app.get("/api/equipments", function (req, res) {
  var content = fs.readFileSync("equipments.json", "utf8");
  var users = JSON.parse(content);
  res.send(users);
});
// получение оборудования по id
app.get("/api/equipments/:id", function (req, res) {
  var id = req.params.id; // получаем id
  var content = fs.readFileSync("equipments.json", "utf8");
  var equipments = JSON.parse(content);
  var equipment = null;
  // находим в массиве оборудование по id
  for (var i = 0; i < equipments.length; i++) {
    if (equipments[i].id == id) {
      equipment = equipments[i];
      break;
    }
  }
  // отправляем оборудование
  if (equipment) {
    res.send(equipment);
  } else {
    res.status(404).send();
  }
});
// получение отправленных данных
app.post("/api/equipments", jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  var name = req.body.name;
  var price = req.body.price;
  var equipment = { name: name, price: price };
  var data = fs.readFileSync("equipments.json", "utf8");
  var equipments = JSON.parse(data);
  // находим максимальный id
  var id = Math.max.apply(
    Math,
    equipments.map(function (o) {
      return o.id;
    })
  );
  // увеличиваем его на единицу
  equipment.id = id + 1;
  // добавляем оборудование в массив
  equipments.push(equipment);
  var data = JSON.stringify(equipments);
  // перезаписываем файл с новыми данными
  fs.writeFileSync("equipments.json", data);
  res.send(equipment);
});
5;
// удаление оборудование по id
app.delete("/api/equipments/:id", function (req, res) {
  var id = req.params.id;
  var data = fs.readFileSync("equipments.json", "utf8");
  var equipments = JSON.parse(data);
  var index = -1;
  // находим индекс оборудования в массиве
  for (var i = 0; i < equipments.length; i++) {
    if (equipments[i].id == id) {
      index = i;
      break;
    }
  }
  if (index > -1) {
    // удаляем оборудование из массива по индексу
    var equipment = equipments.splice(index, 1)[0];
    var data = JSON.stringify(equipments);
    fs.writeFileSync("equipments.json", data);
    // отправляем удаленного оборудование
    res.send(equipment);
  } else {
    res.status(404).send();
  }
});
// изменение оборудования
app.put("/api/equipments", jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  var id = req.body.id;
  var name = req.body.name;
  var price = req.body.price;
  var data = fs.readFileSync("equipments.json", "utf8");
  var equipments = JSON.parse(data);
  var equipment = null;
  for (var i = 0; i < equipments.length; i++) {
    if (equipments[i].id == id) {
      equipment = equipments[i];
      break;
    }
  }
  // изменяем данные у оборудования
  if (equipment) {
    equipment.name = name;
    equipment.price = price;

    var data = JSON.stringify(equipments);
    fs.writeFileSync("equipments.json", data);
    res.send(equipment);
  } else {
    res.status(404).send(equipment);
  }
});
app.listen(8080, function () {
  console.log("Сервер ожидает подключения...");
});
