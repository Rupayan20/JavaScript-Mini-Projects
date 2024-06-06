// Bind in javascript

class React {
    constructor(){
        this.library = "react";
        this.server= "http://localhost:300"

        // requirement
        document.querySelector('button').addEventListener('click', this.handleClick.bind(this))
    }
    handleClick(){
        console.log("button clicked");
        console.log(this.server);
    }

}
const app= new React()