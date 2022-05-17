import createView from "../createView";

const BASE_URL = ``;

export default function PostIndex(props) {
    return `
        <header>
            <h1>Posts Page</h1>
        </header>
        <main>
            <div id="posts-container">
                ${props.posts.map(post => `<h3>${post.title}</h3><p>${post.content}</p>`).join('')}   
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

        fetch(`${BASE_URL}`, request)
            .then(res => {
                console.log(res.status);
                createView("/posts")
            }).catch(error => {
            console.log(error);
            createView("/posts");
        });

    })

}