import createView from "../createView";

const BASE_URL = `http:localhost:8080/api/posts`;
let requestedMethod = "POST";
let postID = "";

export default function PostIndex(props) {
    // language=HTML
    return `
        <header>
            <h1>Posts Page</h1>
        </header>
        <main>
            <div id="posts-container">
                ${props.posts.map(post => `<h3 id="title-${post.id}">${post.title}</h3>
                <p>${post.content}</p>
                <button class="btn btn primary edit-button" data-id="${post.id}"></button>
                <button class="btn btn primary delete-button" data-id="${post.id}"></button>`).join('')}   
            </div
            <div id="postForm">
            <input type="text" class="form-control" id="postTitle" placeholder="Add Post">
            </div>
            <div>
            <textarea type="text" class="form-control" id="postContent" placeholder="Add Post Content"></textarea>
            </div>
            <br>
            <div>
            <button type="submit" class="btn btn-primary" id="submit-btn">Submit</button>
            </div>
        </main>
    `;
}

export function PostsEvent() {
    createAddPostListener()

}

function createAddPostListener() {
    $(document).on('click', '#submit-btn', function (e) {
        e.preventDefault();
        console.log("clicked")
        const newPost = {
            title: $("#postTitle").val(),
            content: $("#postContent").val()
        }

        const request = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        }

        let requestUrl = '';
        if (postID !== ""){
            requestUrl = '${BASE_URL}/${postID}';
        }else{
            requestUrl = '${BASE_URL}';
        }


        fetch(`${BASE_URL}`, request)
            .then(res => {
                console.log(res.status);
                createView("/posts")
            }).catch(error => {
            console.log(error);
            createView("/posts");
        });.finally( () => {
            postID = "";
            requestedMethod = "POST";
            createView("/posts")
        })

    })

}

function createEditPostListener(){
    $(document).on('click', '.edit-button', function (e) {
        e.preventDefault();
        const postID = $(this).data('id');
        requestedMethod = "PUT";
        console.log(postID);
        console.log(requestedMethod);
        /*const updatedPost = {
            title: $("#postTitle").val(),
            content: $("#postContent").val()
        }
        const request = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPost)
        }*/
    })
}