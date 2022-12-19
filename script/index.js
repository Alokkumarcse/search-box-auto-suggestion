// Getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector('input');
const suggBox = searchWrapper.querySelector('.autocom-box');

// if user press any key and release
inputBox.onkeyup = (e) => {
   let userData = e.target.value; // ! user entered data
   let emptyArray =[]; // holding all filter suggestion data
   // filter data on the basis of user input char which is converted into lowercase
   //and return only those string which are starts with user entered string
   if(userData){
      emptyArray = characters.filter((data) => {
         return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
      });
      // making html list of filtered data
      emptyArray = emptyArray.map((data) => {
         return data = '<li>'+data+'</li>';
      });
      console.log(emptyArray);
      // show autocomplete box
      searchWrapper.classList.add('active');
      // invoke the showSuggestion ()
      showSuggestion(emptyArray);
      // ! set onclick() as a event listener to each <li></li> to select from suggestion
      let allList = suggBox.querySelectorAll('li');
      for(let i = 0; i<allList.length; i++){
         allList[i].setAttribute('onclick','select(this)');
      }
   }else{
      // hide autocomplete box
      searchWrapper.classList.remove('active');
   }
}


let select = (ele) => {
   let selectUserData = ele.textContent;
   // passing the user selected list item data in textfield
   inputBox.value = selectUserData;
   // Now hide the suggestion list
   searchWrapper.classList.remove('active');
}


let showSuggestion = (list) => {
   let listData;
   if(!list.length){
      let userValue = inputBox.value;
      listData = '<li>'+userValue+'</li>';
   }else{
      listData = list.join('');
   }
   console.log(listData);
   suggBox.innerHTML = listData;
}