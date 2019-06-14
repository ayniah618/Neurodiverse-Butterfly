var submit = $("#buttonId")
var blogPost =[];
localStorage.setItem("allPost",blogPost)
submit.on("click",create)
function create() {
    var textBox = $("#sentenceId").val()
    blogPost.push(textBox)
    console.log(blogPost)
localStorage.setItem("allPost", JSON.stringify(blogPost));
console.log(localStorage.getItem("allPost"))
    //  var post = localStorage.getItem("allPost");
    // var storedPost = JSON.parse(post);
    // console.log(storedPost)
    //     for (var i = 0; i < storedPost.length; i++) {
    //         console.log("Here")
    //     blog.append(`<p>${storedPost[i]}</p>`)
    // }
}
// $( document ).ready(function() {
    // console.log("HI")
    // var post = localStorage.getItem("allPost");
    // console.log(localStorage.getItem("allPost"));
    // var storedPost = JSON.parse(post);
    // console.log(storedPost)
// });