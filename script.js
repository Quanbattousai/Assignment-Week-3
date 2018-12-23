let masterTweetList = [];
let tweetButton = document.getElementById("addbutton");
let tweet = document.getElementById("tweet");
let counterMess = document.getElementById("remain");
let tweetitem = document.getElementById("tweetitem");

let maxCount = 140;
counterMess.innerHTML = maxCount + " characters remaining";

function countLength() {
	let count = tweet.value.length;
	counterMess.innerHTML = (maxCount - count) + " characters remaining";
}

document.getElementById("tweet").addEventListener("keyup", countLength);

function addTweet() {
	let tweetInput = tweet.value;
	if (tweetInput === "") {
		alert("Please add something");
	} else {
	masterTweetList.push({text: tweetInput}); 
	document.getElementById("tweet").value = '';
	console.log(masterTweetList);
	updateTweetList();
}
}

function updateTweetList() {
let html = "";
for (i = 0; i < (masterTweetList.length); i++) {
	html += `<li>${masterTweetList[i].text} <a id = "retweet" href='#' onclick='retweet(${i})'> Retweet </a> <a id = "like" href='#' onclick='like(${i})'> Like </a></li>`;
	}
	tweetitem.innerHTML = html;
}

document.getElementById("addbutton").addEventListener("click", addTweet);

function like() {
	
}

function retweet(i) {
//let ul = document.getElementById("tweetitem");
//let addLi = document.createElement("li");
//ul.appendChild(addLi);
//addLi.innerHTML = "Second li";
let myNodeList = document.querySelectorAll("li");
let li = myNodeList[i].innerHTML;
updateTweetList;
}




