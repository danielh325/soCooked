let renderer,
    scene,
    camera,
    sphereBg,
    nucleus,
    stars,
    controls,
    container = document.getElementById('canvas_container'),
    timeout_Debounce,
    cameraSpeed = 0;
    //blobScale = 1; // Increased from 3 to 6

init();
animate();

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.01, 2000); // Increased far clipping plane from 1000 to 2000
    camera.position.set(0, 0, 230); // Moved camera back from 230 to 460

    const directionalLight = new THREE.DirectionalLight('#fff', 2);
    directionalLight.position.set(0, 50, -20);
    scene.add(directionalLight);

    let ambientLight = new THREE.AmbientLight("#ffffff", 1);
    ambientLight.position.set(0, 20, 20);
    scene.add(ambientLight);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    

    // Load the GLTF model
    
    //Orbit Control
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    controls.maxDistance = 400;
    controls.minDistance = 200;
    controls.enablePan = false;
    controls.enableZoom = false; // Add this line to disable zooming

    const loader = new THREE.TextureLoader();
    const textureSphereBg = loader.load('/images/back.jpg');
    const texturenucleus = loader.load('/images/1.jpg');
    const textureStar = loader.load('/images/2.png');
    const texture1 = loader.load('/images/3.png');
    const texture2 = loader.load('/images/4.png');
    const texture3 = loader.load('/images/5.png');

    


    /* Nucleus */
    texturenucleus.anisotropy = 16;
    let icosahedronGeometry = new THREE.IcosahedronGeometry(30, 10); // Increased size from 30 to 60
    let lamberMaterial = new THREE.MeshPhongMaterial({
        map: texturenucleus
    });
    nucleus = new THREE.Mesh(icosahedronGeometry, lamberMaterial);
    

    /* Sphere background  */
    textureSphereBg.anisotropy = 16;
    let geometrySphereBg = new THREE.SphereBufferGeometry(150, 40, 40);
    let materialSphereBg = new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        map: textureSphereBg
    });
    sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg);
    scene.add(sphereBg);





    /* moving starts */
    let starsGeometry = new THREE.Geometry();
    for (let i = 0; i < 50; i++) {
        let particleStar = randomPointSphere(150);
        particleStar.velocity = THREE.MathUtils.randInt(100, 500); // Reduced from (50, 200)
        particleStar.startX = particleStar.x;
        particleStar.startY = particleStar.y;
        particleStar.startZ = particleStar.z;
        starsGeometry.vertices.push(particleStar);
    }

    let starsMaterial = new THREE.PointsMaterial({
        size: 5,
        color: '#ffffff',
        transparent: true,
        opacity: 0.8,
        map: textureStar,
        blending: THREE.AdditiveBlending
    });
    
    starsMaterial.depthWrite = false;
    stars = new THREE.Points(starsGeometry, starsMaterial);


    // Fixing Stars
    function createStars(texture, size, total) {
        let pointGeometry = new THREE.Geometry();
        let pointsMaterial = new THREE.PointsMaterial({
            size: size,
            map: texture,
            blending: THREE.AdditiveBlending
        });

        for (let i = 0; i < total; i++) {
            let radius = THREE.MathUtils.randInt(149, 70);
            let particles = randomPointSphere(radius);
            pointGeometry.vertices.push(particles);
        }
        return new THREE.Points(pointGeometry, pointsMaterial);
    }

    scene.add(createStars(texture1, 15, 20));
    scene.add(createStars(texture2, 5, 5));
    scene.add(createStars(texture3, 7, 5));

    function randomPointSphere(radius) {
        let theta = 2 * Math.PI * Math.random();
        let phi = Math.acos(2 * Math.random() - 1);
        let dx = 0 + (radius * Math.sin(phi) * Math.cos(theta));
        let dy = 0 + (radius * Math.sin(phi) * Math.sin(theta));
        let dz = 0 + (radius * Math.cos(phi));
        return new THREE.Vector3(dx, dy, dz);
    }
}








function animate() {

    // stars animation
    stars.geometry.vertices.forEach(function (v) {
        v.x += (0 - v.x) / v.velocity;
        v.y += (0 - v.y) / v.velocity;
        v.z += (0 - v.z) / v.velocity;

        v.velocity -= 0.15; // Reduced from 0.3

        if (v.x <= 5 && v.x >= -5 && v.z <= 5 && v.z >= -5) {
            v.x = v.startX;
            v.y = v.startY;
            v.z = v.startZ;
            v.velocity = THREE.MathUtils.randInt(25, 150); // Reduced from (50, 300)
        }
    });

    // Simplified Nucleus Animation
    nucleus.rotation.y += 0.000001 ;

    /* Sphere background Animation */
    sphereBg.rotation.x += 0.002;
    sphereBg.rotation.y += 0.002;
    sphereBg.rotation.z += 0.002;

    controls.update();
    stars.geometry.verticesNeedUpdate = true;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}



window.addEventListener('resize', () => {
    clearTimeout(timeout_Debounce);
    timeout_Debounce = setTimeout(onWindowResize, 80);
});

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}
const canvasContainer = document.getElementById('canvas_container');

// Prevent scrolling on the canvas
canvasContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent default scroll behavior
}, { passive: false });
