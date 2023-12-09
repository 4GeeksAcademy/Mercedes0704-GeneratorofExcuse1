/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerated();
  });
};

let excuseGenerated = () => {
  let who = ["the dog", "my father", "my friend", "my bird", "my sister"];
  let action = ["ate", "hid", "lost", "throw", "stole"];
  let what = ["my homework", "the tv", "my flowers", "my phone", "my pencil"];
  let when = [
    "in the evening",
    "in the afternoon",
    "while I was sleeping",
    "at the park"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};

