fetch("http://discoverdani.com/T9/wordpress/wp-json/wp/v2/house?per_page=20")
    .then(initial => initial.json())
    .then(callback);

function callback(data) {
    //we now have the JSON
    console.log(data)

    //loop through data//
    data.forEach(showPost)
}

function showPost(post) {
    //template cloning//
    console.log(post)
    const template = document.querySelector("template#postTemplate").content;
    const clone = template.cloneNode(true);

    clone.querySelector("h2").textContent = post.title.rendered;
    clone.querySelector(".bed").textContent = post.bed;
    clone.querySelector(".bath").textContent = post.bath;
    clone.querySelector(".sqfeet").textContent = post.sqfeet;


    //apending
    document.querySelector("main").appendChild(clone);


}
