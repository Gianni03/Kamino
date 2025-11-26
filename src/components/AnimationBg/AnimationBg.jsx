import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./AnimationBg.module.css";

const AnimationBg = () => {
  const containerRef = useRef(null);
  let mouseX = 0;
  let mouseY = 0;
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;

  useEffect(() => {
    const container = containerRef.current;

    const aspect = window.innerWidth / window.innerHeight;
    const fov = 40;
    const plane = 1;
    const far = 800;
    const camera = new THREE.PerspectiveCamera(fov, aspect, plane, far);
    camera.position.z = far / 2;

    const scene = new THREE.Scene({ antialias: true });
    scene.fog = new THREE.FogExp2(0x1b1b1b, 0.0001);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);
    container.appendChild(renderer.domElement);

    const starForge = () => {
      const amount = 45000;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(amount * 3); // multiplicado por 3 porque hay 3 valores (x, y, z) por vértice

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] = Math.random() * 2000 - 1000; // x
        positions[i + 1] = Math.random() * 2000 - 1000; // y
        positions[i + 2] = Math.random() * 2000 - 1000; // z
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const materialOptions = {
        color: new THREE.Color(0xffffff),
        size: 1.1,
        transparency: true,
        opacity: 0.8,
      };

      const starStuff = new THREE.PointsMaterial(materialOptions);
      const stars = new THREE.Points(geometry, starStuff);
      scene.add(stars);
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX - windowHalfX;
      mouseY = e.clientY - windowHalfY;
    };

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      camera.position.x += (mouseX - camera.position.x) * 0.005;
      camera.position.y += (-mouseY - camera.position.y) * 0.005;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    starForge();
    animate();

    document.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("resize", onWindowResize, false);

    return () => {
      while (container.firstChild) {
        container.firstChild.remove();
      }
      document.removeEventListener("mousemove", onMouseMove, false);
      window.removeEventListener("resize", onWindowResize, false);
    };
  }, [mouseX, mouseY]);

  return <div ref={containerRef} className={styles.animation} />;
};

export default AnimationBg;
