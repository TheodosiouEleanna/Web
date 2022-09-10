function readFile(input) {
  const file = new FileReader();
  file.readAsText(input.files[0]);

  file.onload = function (e) {
    //convert to js object
    const data = JSON.parse(e.currentTarget.result); //object
    console.log(e.currentTarget.result);
    const p = JSON.stringify(e.currentTarget.result); //string

    $("#upload").click(function () {
      console.log(data);
      const result = $.ajax({
        url: "includes/json.php",
        method: "POST",
        data: { q: e.currentTarget.result },
        success: function (response) {
          console.log("Clicked");
          console.log(response);
          const uploadSuccessText = document.getElementById("inner-text-u");
          uploadSuccessText.innerHTML = "Data successfully uploaded";
          deleteSuccessText.innerText = "";
        },
      });
      console.log(result);
    });
  };
}
0;
$("#delete").click(function () {
  $.ajax({
    type: "POST",
    url: "includes/deleteAll.php",
    data: { delete: true },
    success: function (response) {
      console.log(response);
      const deleteSuccessText = document.getElementById("inner-text-d");
      deleteSuccessText.innerText = "Data successfully deleted";
      uploadSuccessText.innerHTML = "";
    },
  });
});
