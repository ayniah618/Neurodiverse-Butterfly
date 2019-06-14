var blog = $("#blogPost")
 var post = localStorage.getItem("allPost");
    var storedPost = JSON.parse(post);
    console.log(storedPost)
        for (var i = 0; i < storedPost.length; i++) {
            console.log("Here")
        blog.append(`<p>${storedPost[i]}</p>`)
    }
