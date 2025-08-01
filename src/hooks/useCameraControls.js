import { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';

export const useCameraControls = (camera, domElement) => {
  const state = useRef({
    isLeftMouseDown: false,
    isRightMouseDown: false,
    isMiddleMouseDown: false,
    lastMouseX: 0,
    lastMouseY: 0,
    spherical: new THREE.Spherical(10, Math.PI / 3, 0),
    target: new THREE.Vector3(0, 0, 0),
    panSpeed: 0.01,
    rotateSpeed: 0.01,
    zoomSpeed: 0.5,
    cameraRotation: new THREE.Euler(0, 0, 0, 'YXZ')
  });

  const updateCamera = useCallback(() => {
    if (!camera) return;
    const { spherical, target } = state.current;
    const position = new THREE.Vector3();
    position.setFromSpherical(spherical);
    position.add(target);
    camera.position.copy(position);
    camera.lookAt(target);
  }, [camera]);

  const updateCameraRotation = useCallback(() => {
    if (!camera) return;
    camera.rotation.copy(state.current.cameraRotation);
  }, [camera]);

  useEffect(() => {
    if (!camera || !domElement) return;

    const onMouseDown = (event) => {
      event.preventDefault();
      if (event.button === 0) state.current.isLeftMouseDown = true;
      if (event.button === 1) state.current.isMiddleMouseDown = true;
      if (event.button === 2) state.current.isRightMouseDown = true;
      state.current.lastMouseX = event.clientX;
      state.current.lastMouseY = event.clientY;
      if (state.current.isRightMouseDown) domElement.style.cursor = 'none';
    };

    const onMouseUp = (event) => {
      if (event.button === 0) state.current.isLeftMouseDown = false;
      if (event.button === 1) state.current.isMiddleMouseDown = false;
      if (event.button === 2) state.current.isRightMouseDown = false;
      domElement.style.cursor = 'default';
    };

    const onMouseMove = (event) => {
      const deltaX = event.clientX - state.current.lastMouseX;
      const deltaY = event.clientY - state.current.lastMouseY;
      
      if (state.current.isRightMouseDown) {
        state.current.cameraRotation.y -= deltaX * state.current.rotateSpeed;
        state.current.cameraRotation.x -= deltaY * state.current.rotateSpeed;
        state.current.cameraRotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, state.current.cameraRotation.x));
        updateCameraRotation();
      } else if (state.current.isLeftMouseDown && state.current.isRightMouseDown) {
        const zoomDelta = -deltaY * state.current.zoomSpeed;
        state.current.spherical.radius = Math.max(0.1, state.current.spherical.radius + zoomDelta);
      } else if (state.current.isLeftMouseDown) {
        state.current.spherical.theta -= deltaX * state.current.rotateSpeed;
        state.current.spherical.phi += deltaY * state.current.rotateSpeed;
        state.current.spherical.phi = Math.max(0.01, Math.min(Math.PI - 0.01, state.current.spherical.phi));
        updateCamera();
      } else if (state.current.isMiddleMouseDown) {
        const right = new THREE.Vector3(1, 0, 0);
        const up = new THREE.Vector3(0, 1, 0);
        right.applyQuaternion(camera.quaternion);
        up.applyQuaternion(camera.quaternion);
        const panOffset = new THREE.Vector3();
        panOffset.addScaledVector(right, -deltaX * state.current.panSpeed);
        panOffset.addScaledVector(up, deltaY * state.current.panSpeed);
        camera.position.add(panOffset);
        state.current.target.add(panOffset);
      }
      state.current.lastMouseX = event.clientX;
      state.current.lastMouseY = event.clientY;
    };

    const onWheel = (event) => {
      event.preventDefault();
      const delta = event.deltaY > 0 ? 1 : -1;
      const forward = new THREE.Vector3(0, 0, -1);
      forward.applyQuaternion(camera.quaternion);
      camera.position.add(forward.multiplyScalar(-delta * state.current.zoomSpeed));
    };

    const onContextMenu = (event) => event.preventDefault();

    domElement.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    domElement.addEventListener('wheel', onWheel, { passive: false });
    domElement.addEventListener('contextmenu', onContextMenu);
    updateCamera();

    return () => {
      domElement.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
      domElement.removeEventListener('wheel', onWheel);
      domElement.removeEventListener('contextmenu', onContextMenu);
      domElement.style.cursor = 'default';
    };
  }, [camera, domElement, updateCamera, updateCameraRotation]);

  const resetCamera = useCallback(() => {
    if (!camera) return;
    state.current.spherical.set(10, Math.PI / 3, 0);
    state.current.target.set(0, 0, 0);
    state.current.cameraRotation.set(0, 0, 0);
    updateCamera();
    updateCameraRotation();
  }, [camera, updateCamera, updateCameraRotation]);

  return { resetCamera };
};