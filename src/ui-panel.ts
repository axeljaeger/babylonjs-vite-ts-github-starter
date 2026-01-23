import type { Engine } from '@babylonjs/core/Engines/engine';
import type { Scene } from '@babylonjs/core/scene';
import type { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

export class UiPanel {
	private engine: Engine;
	private scene: Scene;
	private camera: FreeCamera;
	private fpsElement: HTMLElement | null;

	constructor(engine: Engine, scene: Scene, camera: FreeCamera) {
		this.engine = engine;
		this.scene = scene;
		this.camera = camera;
		this.fpsElement = document.getElementById('fps-counter');

		this.setupEventListeners();
		this.startFpsUpdate();
	}

	private setupEventListeners(): void {
		const resetButton = document.getElementById('reset-camera-btn');
		if (resetButton) {
			resetButton.addEventListener('click', () => this.resetCamera());
		}
	}

	private resetCamera(): void {
		// Reset camera position to initial values
		this.camera.position.set(0, 5, -10);
		this.camera.setTarget(Vector3.Zero());
	}

	private startFpsUpdate(): void {
		// Update FPS counter every frame
		this.scene.onBeforeRenderObservable.add(() => {
			if (this.fpsElement) {
				const fps = this.engine.getFps().toFixed(0);
				this.fpsElement.textContent = `${fps} FPS`;
			}
		});
	}
}
