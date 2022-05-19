
const BASE_URL = `http:localhost:8080/api/users`;

export default function userInformation(props){

    //language=HTML
    return `
    <header>
        <h1>Hello, ${props.user.username}</h1>
    </header>
        
    <main>
        <form id="user-info-form">
            <label for="email">Email</label>
            
    
        </form>
    </main>
    `
}

    export function userEvent(){

    }

    function addUpdatePasswordListener(){
    $(document).on('click', '#change-password-btn', function () {

        const id = $(this).data("id");

        const request = {
            method: {PUT},
            header
        }
    })
    }