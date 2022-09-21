const tweetDiv = document.createElement("div");

const tweets = document.querySelectorAll("tweet");
console.log(tweets);
const arrayTweets = [...tweets];
console.log(arrayTweets);

tweetDiv.textContent = "dev";
tweetDiv.classList.add("tweet");

const container = document.querySelector("#container");
container.append(tweetDiv);
tweetDiv.remove();
