function update(){

    const Id = document.getElementById("id").val();

    const student = {"Id":Id, "Code":document.getElementById("code").val(),"Name":document.getElementById("name").val(),"Semester":document.getElementById("sem").val(),"Carreer":document.getElementById("car").val()};

    fetch(`http://localhost:5190/Student/${Id}`, {
        method: "PUT",
        body:student
    })


}