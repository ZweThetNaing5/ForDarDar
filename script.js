// sidebar
const menuItems = document.querySelectorAll('.menu-items');
//noti
const notinav = document.querySelector('.noti-nav');
const notiPop = document.querySelector('.notification-popup');

//messages
const messageNotification = document.querySelector('#message-notifications');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const messageClose = document.querySelector('.close');
const messageToggle = document.querySelector('.msg-toggle');
const messageField = document.querySelector('.messages');
const notiClose = document.querySelector('.closeNoti');
const plusIcon = document.querySelector('.menu-switch');
const menuBar = document.querySelector('#menu-bar');

//-------------------------side bar ------------------------
//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

var count = 0;

menuItems.forEach(item => {
    item.addEventListener('click', ()=>{
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications'){
                notiPop.style.display = 'none';
        }else
        {
            if(count%2 != 0 ){
                notiPop.style.display = 'none';
            }else
            {
                notiPop.style.display = 'block';
                messageField.style.display = 'none';
                document.querySelector('#notifications .notification-count').style.display = 'none';
            }
        
            count++;
        }
    })
})

notiClose.addEventListener('click', ()=>{
    notiPop.style.display = 'none';
})

messageClose.addEventListener('click', ()=>{
    messageField.style.display = 'none';
})

notinav.addEventListener('click', () =>{
    if(notiPop.style.display != 'block')
    {   notiPop.style.display = 'block';
        document.querySelector('#notifications .notification-count').style.display = 'none';
        messageField.style.display = 'none';
    }
    else{
        notiPop.style.display = 'none';
    }
})

plusIcon.addEventListener('click', () =>{
    if(menuBar.style.display != 'block')
    {   
        menuBar.style.display = 'block';
    }
    else{
        menuBar.style.display = 'none';
    }
})

messageToggle.addEventListener('click', () =>{
    notiPop.style.display = 'none';
    if(messageField.style.display == 'block')
    {
        messageField.style.display = 'none';
    }
    else
    {
        messageField.style.display = 'block';
        messageNotification.querySelector('.notification-count').style.display = 'none';
    }
})

messageNotification.addEventListener('click', () => {
    notiPop.style.display = 'none';
    if(messageField.style.display == 'block')
    {
        messageField.style.display = 'none';
    }
    else
    {
        messageField.style.display = 'block';
        messageNotification.querySelector('.notification-count').style.display = 'none';
    }
})


const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('p').textContent.toString().toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}

//search messages
messageSearch.addEventListener('keyup', searchMessage);

// const wrapper = document.getElementById("menu-bar"),
// header = document.querySelector(".menu-items");

// function onDrag({movementX,movementY}){
//     let getStyle = window.getComputedStyle(wrapper);
//     let left = parseInt(getStyle.left);
//     let top = parseInt(getStyle.top);
//     wrapper.style.left = `${left + movementX}px`;
//     wrapper.style.top = `${top + movementY}px`;
// }

// wrapper.addEventListener("mousedown", () => {
//     wrapper.addEventListener("mousemove",onDrag);
// });

// document.addEventListener("mouseup", () => {
//     wrapper.removeEventListener("mousemove",onDrag);
// });
