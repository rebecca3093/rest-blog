import createView from "../createView.js";

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
    createAddPostListener();
    createEditPostListener();
    createDeletePostListener();
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
            method: requestedMethod,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        }

        let requestUrl = "";

        if (postID !== "") {
            requestUrl = '${BASE_URL}/${postID}';
        } else {
            requestUrl = '${BASE_URL}';
        }

        fetch(requestUrl, request)
            .then(res => {
                console.log(res.status);
            }).catch(error => {
            console.log(error);
        }).finally(() => {
            postID = "";
            requestedMethod = "POST";
            createView("/posts")
        })
    })
}

function createEditPostListener() {
    $(document).on('click', '.edit-button', function (e) {
        e.preventDefault();
        postID = $(this).data("id");
        requestedMethod = "PUT";

        const postTitle = $(`title-${postId}`).text();
        const postContent = $(`#content-${postId}`).text();

        $("#add-post-title").val(postTitle);
        $("#add-post-content").val(postContent);

        console.log(postID);
        console.log(requestedMethod);
    })

    function createDeletePostListener() {
        $(document).on('click', '.delete-button', function (e) {
            e.preventDefault();

            const id = $(this).data("id");

            const request = {
                method: "DELETE"
            }

            fetch(`${BASE_URL}/${id}`, request)
                .then(res => {
                    console.log(res.status);
                }).catch(error => {
                console.log(error);
            }).finally(() => {
                createView("/posts")
            })
        })
    }
}