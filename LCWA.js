function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "LCWA_room.html";
}
function Setroomname()
{  
    room_name = document.getElementById("room_name_input").value;

    localStorage.setItem("", user_name);

}