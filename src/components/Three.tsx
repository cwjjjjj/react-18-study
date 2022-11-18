import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Three() {
  const ref = useRef<HTMLDivElement>(null);
  const init = () => {
    const scene = new THREE.Scene();
    /**
     * field of view 视野范围
     * @param fov — Camera frustum vertical field of view. Default value is 50.
     * aspect指画布的宽高比。我们将在别的文章详细讨论，在默认情况下 画布是300x150像素，所以宽高比为300/150或者说2
       @param aspect — Camera frustum aspect ratio. Default value is 1.
       near和far代表近平面和远平面，它们限制了摄像机面朝方向的可绘区域。 任何距离小于或超过这个范围的物体都将被裁剪掉(不绘制)。
       这四个参数定义了一个 "视椎(frustum)"。 视椎(frustum)是指一个像被削去顶部的金字塔形状。换句话说，可以把"视椎(frustum)"想象成其他三维形状如球体、立方体、棱柱体、截椎体。
       @param near — Camera frustum near plane. Default value is 0.1.
       @param far — Camera frustum far plane. Default value is 2000.
     */
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (ref.current) {
      ref.current.append(renderer.domElement);
    }
    // 轨道
    const controls = new OrbitControls(camera, renderer.domElement);
    // 坐标轴
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    // 为坐标轴增加箭头
    // const dir = new THREE.Vector3(1, 2, 3);
    // dir.normalize();
    // const origin = new THREE.Vector3(0, 0, 0);
    // const length = 1;
    // const hex = 0xffff00;
    // const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
    // scene.add(arrowHelper);
    // 灯光
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-5, 2, 4);
    scene.add(light);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({
    //   color: "rgba(255,255,100,0.3)",
    // });
    // MeshBasicMaterial材质不会受到灯光的影响。我们将他改成会受灯光影响的MeshPhongMaterial材质。
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 }); // 绿蓝色
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    const clock = new THREE.Clock();
    console.log("clock1", clock, clock.getElapsedTime());
    function animate() {
      //  可以用于获取 时钟运行总时长
      console.log("clock2", clock, clock.getElapsedTime());

      requestAnimationFrame(animate);
      if (cube.position.z <= 3) {
        cube.position.z += 0.01;
      } else {
        cube.position.z = 0;
      }
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    // 监听画面变化，更新渲染画面
    window.addEventListener("resize", () => {
      //   console.log("画面变化了");
      // 更新摄像头
      camera.aspect = window.innerWidth / window.innerHeight;
      //   更新摄像机的投影矩阵
      camera.updateProjectionMatrix();

      //   更新渲染器
      renderer.setSize(window.innerWidth, window.innerHeight);
      //   设置渲染器的像素比
      renderer.setPixelRatio(window.devicePixelRatio);
    });

    window.addEventListener("dblclick", () => {
      const fullScreenElement = document.fullscreenElement;
      if (!fullScreenElement) {
        //   双击控制屏幕进入全屏，退出全屏
        // 让画布对象全屏
        renderer.domElement.requestFullscreen();
      } else {
        //   退出全屏，使用document对象
        document.exitFullscreen();
      }
    });

    animate();
  };

  useEffect(() => {
    init();
  }, []);
  return <div ref={ref}>Three</div>;
}
