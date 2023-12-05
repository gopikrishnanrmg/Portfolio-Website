// import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// function animate() {
// 	requestAnimationFrame( animate );
//     cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;

// 	renderer.render( scene, camera );
// }
// animate();



const path = [{level:0,name:"/user/dedsec",children:["Gopikrishnan"], type:0}, 
{level:1,name:"Gopikrishnan",children:["into.txt"], type:1}];

var contentPreserveLen = 14;
var curPrompt = "user@dedsec:~$";

function printToScreen(string){
    var currentContent = document.getElementById("console").innerText;
    currentContent+=string+"\n"+curPrompt;
    contentPreserveLen = currentContent.length;
    document.getElementById("console").innerText = currentContent;
}

function resolveCommand(cmd){
    switch(cmd){
        case "cd":
            break;
        case "pwd":
            break;
        case "ls":
            break;
         case "touch":
            break;
        case "mkdir":
            break;
        case "cd":
            break;           
    }
}

function checkKeyPress(event) {
    if (window.getSelection().getRangeAt(0).startOffset < contentPreserveLen || (window.getSelection().getRangeAt(0).startOffset === contentPreserveLen && event.keyCode === 8))
        event.preventDefault();

    // console.log(document.getElementById("console").innerText.length+" "+event.keyCode)
    // if (event.keyCode === 8 && window.getSelection().getRangeAt(0).startOffset <= promptLen) {
    //     event.preventDefault();
    // }
  
    if (event.keyCode === 13) {
        var command = document.getElementById("console").innerText.substring(contentPreserveLen);
        alert(command);
    }
  }