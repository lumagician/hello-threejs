const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry( 6, 2, 100, 100 );
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00});
const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);
scene.add( light );

light.position.set( 10, 10, 10 );
camera.position.z = 25;

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.02;
    torus.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();