import React, { useEffect } from 'react';
import * as THREE from 'three';
import starTexture from './../assets/star.png';

const InitializeContainer = () => {
  let scene, camera, renderer, stars, starGeo;

  useEffect(() => {
    const init = () => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      starGeo = new THREE.BufferGeometry();
      const starPositions = new Float32Array(6000 * 3);

      for (let i = 0; i < 6000; i++) {
        starPositions[i * 3] = Math.random() * 600 - 300;
        starPositions[i * 3 + 1] = Math.random() * 600 - 300;
        starPositions[i * 3 + 2] = Math.random() * 600 - 300;
      }

      starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

      const sprite = new THREE.TextureLoader().load(starTexture);
      const starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite,
        transparent: true,
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      window.addEventListener('resize', onWindowResize, false);

      animate();
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      const positions = starGeo.getAttribute('position');

      for (let i = 0; i < positions.count; i++) {
        const vector = new THREE.Vector3(
          positions.getX(i),
          positions.getY(i) - 0.3,
          positions.getZ(i)
        );

        if (vector.y < -200) {
          vector.setY(200);
        }

        positions.setXYZ(i, vector.x, vector.y, vector.z);
      }

      positions.needsUpdate = true;

      stars.rotation.y += 0.001;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    init();

    return () => {
      document.body.removeChild(renderer.domElement);

      window.removeEventListener('resize', onWindowResize);
    };
  }, []); 
  return null;
};

export default InitializeContainer;
