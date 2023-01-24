const marginLeftContainer = document.getElementById("blog-container");
const loading = document.querySelector('.blog')

window.onload = () => {
    loading.innerHTML = `
    <p style='background-color: white; width: 100px; height: auto; color: black; position: fixed'>Loading...<p>
    `;
}


let blogDataFromDB2;

(async () => {

    blogDataFromDB2 = await fetch('https://swagger-ui-production.up.railway.app/Blogs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    blogDataFromDB2 = await blogDataFromDB2.json();
    console.log('The published blogs are: ', blogDataFromDB2.data);

    // if (blogDataFromDB2.data) {
    //     loading.innerHTML = '';
    // }
    

})();

const displayPublished = (blogDataFromDB) => {
    console.log('fetched published blogs are: ', blogDataFromDB.data);
    for (i = 0; i < blogDataFromDB.data.length; i++) {
        console.log(blogDataFromDB.data[i]);
        // firstLettle.innerHTML = String.fromCharCode(blogDataFromDB.data[1]["Tittle"].charCodeAt(0));
        // blogTittle.innerHTML = blogDataFromDB.data[i]["Tittle"];
        marginLeftContainer.innerHTML += `
            <a href="/single.html" class="blogBlock" id=${blogDataFromDB.data[i]["_id"]} onmouseover="getid(this)">
                <div class="left">
                    <div class="firstLetterSlot">
                        <center>
                            <h1 id="firstLetter">${String.fromCharCode(blogDataFromDB.data[i]["title"].charCodeAt(0))}</h1>
                        </center>
                    </div>
    
                    <div class="TittleDotTime">
                        <div class="blogTittle">
                            <h3 id=${"blogTittlefordraft" + blogDataFromDB.data[i]["_id"]}>${blogDataFromDB.data[i]["title"]}</h3>
                        </div>
                        <div class="DotTime">
                            <div class="dot" id="d3"></div>
                            <div class="TimeOfevent">
                                <h6>From Js</h6> <!--from Js-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="AdminNameBlogStatus">
                    <div class="adminName">
                        <h4 id=${"author" + blogDataFromDB.data[i]["_id"]}>${blogDataFromDB.data[i]["author"]}</h4>
                    </div>
                    <div class="BlogStatus">
                        <div class="reactionSet">
                            <div class="signAndP" id="share">
                                <button type="button" class="reactionsSlots">
                                    <img src="images/icons/Vectorshare.png" alt="" class="reactionIcons">
                                </button>
                                <p class="numberOfReactors">34</p>
                            </div>
                            <div class="signAndP" id="like">
                                <button type="button" class="reactionsSlots">
                                    <img src="images/icons/Vector 6like.png" alt="" class="reactionIcons">
                                </button>
                                <p class="numberOfReactors">34</p>
                            </div>
                            <div class="signAndP" id="comment">
                                <button type="button" class="reactionsSlots">
                                    <img src="images/icons/Vectorcoments.png" alt="" class="reactionIcons">
                                </button>
                                <p class="numberOfReactors">34</p>
                            </div>
                            <div class="signAndP" id="views">
                                <button type="button" class="reactionsSlots">
                                    <img src="images/icons/Remove red eyeeye.png" alt="" class="reactionIcons">
                                </button>
                                <p class="numberOfReactors">34</p>
                            </div>
                        </div>
                        <div class="blogStatusWord">Published</div>
                    </div>
                </div>
            </a>
    
    `;
    }
}
if (blogDataFromDB2) {
    // Display published blogs in my DB
    displayPublished(blogDataFromDB2);
}















// var blogdiv = document.querySelector(".details")




// function getCookie(name) {
//     const nameEQ = `${name}=`;
//     const ca = document.cookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) === ' ') {
//             c = c.substring(1, c.length);
//         }
//         if (c.indexOf(nameEQ) === 0) {
//             return c.substring(nameEQ.length, c.length);
//         }
//     }
//     return null;
// }



// async function getblogs() {
//     try {
//         const data = await fetch("https://swagger-ui-production.up.railway.app/Blogs");

//         return await data.json();
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// async function renderblogs() {
//     let gotblogs = await getblogs();
//     var blogpage_blogs = gotblogs.data.blogs;
//     blogdiv.innerHTML = "";
//     blogpage_blogs.forEach(element => {

//         let nbody = element.body.split(" ").slice(0, 12).join(" ");
//         let ntitle = element.title.split("").slice(0, 25).join("");
//         if (ntitle != element.title) {
//             ntitle = `${ntitle}..`;
//         }
//         if (nbody != element.body) {
//             nbody = `${nbody}..`;
//         }
//         blogdiv.innerHTML += `
//     <div id="blog_${element._id}" class="details">
//         <img src="${element.image}" class="blog_image" />
//         <div class="blog_text">
//            <a href="../singleblog/single.html?id=${element._id}"> <h1 id="fullpg_${element._id}"  class="blog_title" >${ntitle}</h1></a>
//             <p class="blog_description">
//             ${nbody}..
//         </p></div>
//         <div class="like_comment">
// <div class="blog_like"><img id="like_${element._id}" src="../images/whitelike.png" class="like_icon" onclick="likethis(this.id)"><p class="blog_number" id="liks_${element._id}">${element.likes.length}</p></div>
// <div class="blog_comment"><img id="comment_${element._id}" src="../images/comment.png" class="comment_icon"><p class="blog_number" id="cts_${element._id}">${element.comments.length}</p></div>
//         </div>             
//              `;

//     });


//     return gotblogs;
// }


// window.addEventListener('load', () => {
//     var blogpage_blogs = JSON.parse(localStorage.getItem("details"));

//     renderblogs();


// });

//working on likes
// async function likethis(id) {
//     var newid = id.split("_")[1];
//     console.log(newid);
//     var like = fetch(`https://swagger-ui-production.up.railway.app/allBlogs`, {
//         method: "POST",
//         headers: {
//             'Authorization': `Bearer ${getCookie('token')}`
//         }
//     })
//         .then(result => result.json())
//         .then((data) => {
//             //
//             if (data.message == "logged in successfully") {
//                 window.location.href = "../signin/signin.html";
//             }
//             renderblogs();

//             //
//         }
//         )
//         .catch((error) => {
//             console.log(error);
//         });
// }
