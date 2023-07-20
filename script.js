//fetch-> to get data from server
// a loop that runs after every one sec-> fetch this might work.
//socket io -> instant chnge in cricket score and chat application->
// socket io acts as a watcher it track the change
//

// to add json package we need to add command {nmp inti -y} in terminal

//      < ---to get userID on click of button----->
document.getElementById("join-btn").addEventListener("click",(event)=>{
    event.preventDefault();//default behaviour of form is to refresh
    username=document.getElementById("username-input").value;
    if(username.trim()!=""){ //username is empty or not
        //we need to hide the form input
        console.log(username)
        document.querySelector(".form-username").style.display="none";
        //we need to display my chat container;
        document.querySelector(".chatroom-container").style.display="block";
        document.querySelector(".chatroom-header").innerText=`Chatroom-${username}`;
    }
})

document.getElementById("send-btn").addEventListener("click",(event)=>{
    event.preventDefault();

    const data={
        username:username, 
        message:document.getElementById("message-input").value,
    }
  // here i need to inform my socket io
    addMessage(data,false);
    
})

// recieving message-> do logic 
function addMessage(data,check){
    //true for sent
    //false for recieve
    var msgDiv=document.createElement("div");
    msgDiv.innerText=`${data.username}:${data.message}`;
    if(check){ //right
    msgDiv.setAttribute("class","message sent");
      }
      else{ //left
       msgDiv.setAttribute("class","message received");
    }
    document.getElementById("message-container").appendChild(msgDiv);
    document.getElementById("message-input").value="";

      }
  


