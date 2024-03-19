
        var arr = [];

        function save() {
            var a = {
                name: document.getElementById("name").value,
                image: document.getElementById("image").value,
                time: document.getElementById("time").value,
                user: document.getElementById("user").value,
                quantity: document.getElementById("quantity").value,
                price: document.getElementById("price").value,
            }
            arr.push(a);
        }

        function show() {
            var html = "";
            for (var i = 0; i < arr.length; i++) {
              var n = i + 1;
              html += "<tr>";
              html += "<td>" + arr[i].name + "</td>";
              html += '<td><img src="' + arr[i].image + '" style="height:50px;"></td>';
              html += "<td>" + arr[i].time + "</td>";
              html += "<td>" + arr[i].user + "</td>";
              html += "<td>" + arr[i].quantity + "</td>";
              html += "<td>" + arr[i].price + "</td>";
              html += "<td><button onclick='edit(" + i + ")'>Sửa</button></td>";
              html += "<td><button onclick='remove(" + i + ")'>Xóa</button></td>";
              html += "</tr>";
            }
            document.getElementById("tbl").innerHTML = html;
          }

        function edit(index) {
            var data = arr[index];
            document.getElementById("name").value = data.name;
            document.getElementById("image").value = data.image;
            document.getElementById("time").value = data.id;
            document.getElementById("user").value = data.namepro;
            document.getElementById("quantity").value = data.quantity;
            document.getElementById("price").value = data.price;
            var btnSave = document.querySelector(".btn-primary");
            btnSave.innerHTML = "Cập nhật";
            btnSave.onclick = function () {
                update(index);
            };
        }

        function update(index) {
            var newData = {
                name: document.getElementById("name").value,
                image: document.getElementById("name").value,
                time: document.getElementById("time").value,
                user: document.getElementById("user").value,
                quantity: document.getElementById("quantity").value,
                price: document.getElementById("price").value,
            };
            arr[index] = newData;
            resetForm();
            show();
        }

        function remove(index) {
            arr.splice(index, 1);
            show();
        }

        function reset() {
            resetForm();
            show();
        }

        function resetForm() {
            document.getElementById("name").value = '';
            document.getElementById("name").value = '';
            document.getElementById("time").value = '';
            document.getElementById("user").value = '';
            document.getElementById("quantity").value = '';
            document.getElementById("price").value = '';
            var btnSave = document.querySelector(".btn-primary");
            btnSave.innerHTML = "Lưu";
            btnSave.onclick = function () {
                save();
            };
        }
