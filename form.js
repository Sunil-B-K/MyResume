function validateForm() {
    // from_name=document.getElementById("name").value ;
    var params={
        from_name:document.getElementById("name").value,
        email: document.getElementById("email").value,
        msg: document.getElementById("message").value,
    }
    emailjs.send("service_3rvbba3","template_icy8zrm",params).then(function(res){
        alert("Sucess "+res.status);
    })
}