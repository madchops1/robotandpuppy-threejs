/*

SETUP SCENE
FEEL FREE TO USE

*/

// Scene / Room
var scene,
    camera, 
    fov, 
    aspectRatio, 
    nearPlane, 
    farPlane, 
    renderer,
    container,
    controls;

// Screen and mouse
var HEIGHT, 
    WIDTH, 
    windowCenterX, 
    windowCenterY,
    mousePosition = { x: 0, y: 0 },
    oldMousePosition = { x: 0, y: 0};

// Our robot and kitty
var characters = [];

function ambiance() {
    // Hemisphere light
    hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.7);
    scene.add(hemisphereLight);

    // Ambient light
    scene.add( new THREE.AmbientLight( 0x404040 ) );

    // Spotlight 1
    var spotLight1 = new THREE.SpotLight( 0xffffff );
    spotLight1.name = 'Spot Light 1';
    spotLight1.angle = Math.PI / 4;
    spotLight1.penumbra = 0.3;
    spotLight1.intensity = 0.2;
    spotLight1.position.set( 100, 300, 100 );
    spotLight1.castShadow = true;
    spotLight1.decay = 2;
    //spotLight1.target.position.set(0,100,0);
    spotLight1.distance = 500;
    spotLight1.shadow.mapSize.width  = 1024;
    spotLight1.shadow.mapSize.height = 1024;
    //scene.add( spotLight1 );
    //scene.add( new THREE.SpotLightHelper( spotLight1 ) );

    // Spotlight 2
    var spotLight2 = new THREE.SpotLight( 0xffffff );
    spotLight2.name = 'Spot Light 2';
    spotLight2.angle = Math.PI / 4;
    spotLight2.penumbra = 0.3;
    spotLight2.intensity = 0.2;
    spotLight2.position.set( -100, 300, 100 );
    spotLight2.castShadow = true;
    spotLight2.decay = 2;
    spotLight2.distance = 500;
    spotLight2.shadow.mapSize.width  = 1024;
    spotLight2.shadow.mapSize.height = 1024;
    //scene.add( spotLight2 );
    //scene.add( new THREE.SpotLightHelper( spotLight2 ) );
    
    // Spotlight 3 - Middle
    var spotLight3 = new THREE.SpotLight( 0xffffff );
    spotLight3.name = 'Spot Light 1';
    spotLight3.angle = Math.PI / 4;
    spotLight3.penumbra = 0.3;
    spotLight3.intensity = 1;
    spotLight3.position.set( 0, 300, 100 );
    spotLight3.castShadow = true;
    spotLight3.decay = 2;
    spotLight3.distance = 500;
    spotLight3.shadow.mapSize.width  = 1024;
    spotLight3.shadow.mapSize.height = 1024;
    scene.add( spotLight3 );
    //scene.add( new THREE.SpotLightHelper( spotLight3 ) );

    // Dirlight (unused)
    var dirLight = new THREE.DirectionalLight( 0xffffff, 0.0001 );
    dirLight.name = 'Dir. Light';
    dirLight.position.set( 100, 500, 100 );
    dirLight.castShadow = true;
    dirLight.shadow.camera.near    = 200;  // CHANGED
    dirLight.shadow.camera.far     = 1500; // CHANGED
    dirLight.shadow.camera.left    = -200; // CHANGED
    dirLight.shadow.camera.right   = 200;  // CHANGED
    dirLight.shadow.camera.top     = 200;  // CHANGED
    dirLight.shadow.camera.bottom  = -200; // CHANGED
    dirLight.shadow.mapSize.width  = 1024;
    dirLight.shadow.mapSize.height = 1024;
    //scene.add( dirLight );
    //scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );
}

function setupFloor() {
    var matFloor = new THREE.MeshPhongMaterial();
    var geoFloor = new THREE.BoxGeometry( 2000, 1, 1000 );
    var mshFloor = new THREE.Mesh( geoFloor, matFloor );
    matFloor.color.set( 0xffe100 );
    mshFloor.receiveShadow = true;
    mshFloor.position.set( 0, -0.05, 0 );    
    scene.add( mshFloor );
}

function addCharacter (bodyDimensions, x, y, z, key) {
    characters[key] = new Character(bodyDimensions);
    characters[key].threeGroup.position.x = x;
    characters[key].threeGroup.position.y = y;
    characters[key].threeGroup.position.z = z;
    scene.add(characters[key].threeGroup);
}

function initScene() {
    HEIGHT                = window.innerHeight;
    WIDTH                 = window.innerWidth;
    windowCenterX         = WIDTH / 2;
    windowCenterY         = HEIGHT / 2;

    scene                 = new THREE.Scene();
    aspectRatio           = WIDTH / HEIGHT;
    fov                   = 70;
    nearPlane             = 1;
    farPlane              = 2000;

    camera = new THREE.PerspectiveCamera(
        fov,
        aspectRatio,
        nearPlane,
        farPlane
    );

    camera.position.x = -50;
    camera.position.z = 150;
    camera.position.y = 150;
    camera.lookAt(new THREE.Vector3(0, 50, 0));

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled  = true;
    renderer.shadowMap.type     = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    
    container = document.getElementById('room');
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', windowResize, false);
    document.addEventListener('mousemove', mouseMove, false);
    document.addEventListener('touchmove', touchMove, false);
    
    
    // Orbit controls
    /*
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minPolarAngle = -Math.PI / 2; 
    controls.maxPolarAngle = Math.PI / 2;
    controls.noZoom = false;
    controls.noPan = false;
    /* */
}

function windowResize() {
    HEIGHT            = window.innerHeight;
    WIDTH             = window.innerWidth;
    windowCenterX     = WIDTH / 2;
    windowCenterY     = HEIGHT / 2;

    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}

function mouseMove(e) {
  mousePosition = { x: e.clientX, y: e.clientY };
} 

function touchMove(e) {
  if (e.touches.length == 1) {
    e.preventDefault();
    mousePosition = { x: e.touches[0].pageX, y: e.touches[0].pageY };
  }
}

var t=0;
function loop() {
    render();
    
    t+=.05;
    var mouse = getMousePosition();
    
    characters['puppy'].puppyUpdateTail(t);
    characters['puppy'].blink('puppy');
    characters['puppy'].puppyLick();
    characters['puppy'].lookAtIt('puppy', mouse);

    characters['robot'].blink('robot');
    characters['robot'].robotMoveMouth('robot');
    characters['robot'].lookAtIt('robot', mouse);
    characters['robot'].robotGrab('robot', mouse);

    requestAnimationFrame(loop);
}

function render() {
    if (controls) {
        controls.update();
    }
    renderer.render(scene, camera);
}

function getMousePosition() {
    var vector = new THREE.Vector3();
    vector.set( ( mousePosition.x / window.innerWidth ) * 2 - 1, - ( mousePosition.y / window.innerHeight ) * 2 + 1, 0.1 );
    vector.unproject( camera );
    var yir = vector.sub( camera.position ).normalize();
    var distance = (100 - camera.position.z) / yir.z;
    var pos = camera.position.clone().add( yir.multiplyScalar( distance ) );
    pos.y = pos.y - 30;
    return pos;
}

window.addEventListener('load', init, false);

function init(e) {
    initScene();
    ambiance();
    setupFloor();
    var robot = new Robot();
    var puppy = new Puppy();
    addCharacter(robot, -20, 0, -50, 'robot');
    addCharacter(puppy, 20, 0, -50, 'puppy');
    loop();
}
