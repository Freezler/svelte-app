<script>
	import { sendEmail } from '$lib/index.js';
	import { onMount } from 'svelte';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
	let isHoveredNewImg = false;
	let isHoveredContact = false;

	const LiquidButton = class LiquidButton {
		constructor(button) {
			const { width, height } = button.getBoundingClientRect();
			const buttonStyles = window.getComputedStyle(button);
			console.log();
			const options = button.dataset || {};

			this.font = `${buttonStyles['font-size']} ${buttonStyles['font-family']}`;
			console.log(this.font);
			this.tension = options.tension || 0.4;
			this.width = width;
			this.height = height;
			this.margin = options.margin || 50;
			// assume the padding it the same all around
			this.padding = parseFloat(buttonStyles.paddingRight);
			this.hoverFactor = options.hoverFactor || 0.5;
			this.gap = options.gap || 5;
			this.debug = options.debug || false;
			this.forceFactor = options.forceFactor || 0.2;
			// this.color1 = options.color1 || '#36DFE7';
			// this.color2 = options.color2 || '#8F17E1';
			// this.color3 = options.color3 || '#E509E6';
			this.color1 = options.color1 || '#ffc600';
			this.color2 = options.color2 || '#8F17E1';
			this.color3 = options.color3 || '#E509E6';
			this.textColor = buttonStyles.color || '#FFFFFF';
			this.layers = [
				{
					points: [],
					viscosity: 0.5,
					mouseForce: 100,
					forceLimit: 2
				},
				{
					points: [],
					viscosity: 0.8,
					mouseForce: 150,
					forceLimit: 3
				}
			];
			this.text = button.textContent;
			this.canvas = options.canvas || document.createElement('canvas');
			this.context = this.canvas.getContext('2d');
			// this.wrapperElement = options.wrapperElement || document.body;
			// if (!this.canvas.parentElement) {
			//   this.wrapperElement.append(this.canvas);
			// }
			button.append(this.canvas);
			this.touches = [];
			this.noise = options.noise || 0;
			button.addEventListener('mousemove', this.mousemove);
			button.addEventListener('mouseout', this.mouseout);
			this.initOrigins();
			this.animate();
			this.restingFace();
		}

		restingFace() {
			// force a mouse move on each button
			this.mousemove({ offsetX: Math.random() * this.width, offsetY: 1 });
		}

		get mousemove() {
			return (e) => {
				this.touches = [
					{
						x: e.offsetX,
						y: e.offsetY,
						z: 0,
						force: 1
					}
				];
			};
		}

		get mouseout() {
			return (e) => {
				this.touches = [];
				this.restingFace();
			};
		}

		get raf() {
			return (
				this.__raf ||
				(this.__raf = (
					window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					function (callback) {
						setTimeout(callback, 10);
					}
				).bind(window))
			);
		}

		distance(p1, p2) {
			return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
		}

		update() {
			for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
				const layer = this.layers[layerIndex];
				const points = layer.points;
				for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
					const point = points[pointIndex];
					const dx = point.ox - point.x + (Math.random() - 0.5) * this.noise;
					const dy = point.oy - point.y + (Math.random() - 0.5) * this.noise;
					const d = Math.sqrt(dx * dx + dy * dy);
					const f = d * this.forceFactor;
					point.vx += f * (dx / d || 0);
					point.vy += f * (dy / d || 0);
					for (let touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
						const touch = this.touches[touchIndex];
						let mouseForce = layer.mouseForce;
						if (
							touch.x > this.margin &&
							touch.x < this.margin + this.width &&
							touch.y > this.margin &&
							touch.y < this.margin + this.height
						) {
							mouseForce *= -this.hoverFactor;
						}
						const mx = point.x - touch.x;
						const my = point.y - touch.y;
						const md = Math.sqrt(mx * mx + my * my);
						const mf = Math.max(
							-layer.forceLimit,
							Math.min(layer.forceLimit, (mouseForce * touch.force) / md)
						);
						point.vx += mf * (mx / md || 0);
						point.vy += mf * (my / md || 0);
					}
					point.vx *= layer.viscosity;
					point.vy *= layer.viscosity;
					point.x += point.vx;
					point.y += point.vy;
				}
				for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
					const prev = points[(pointIndex + points.length - 1) % points.length];
					const point = points[pointIndex];
					const next = points[(pointIndex + points.length + 1) % points.length];
					const dPrev = this.distance(point, prev);
					const dNext = this.distance(point, next);

					const line = {
						x: next.x - prev.x,
						y: next.y - prev.y
					};
					const dLine = Math.sqrt(line.x * line.x + line.y * line.y);

					point.cPrev = {
						x: point.x - (line.x / dLine) * dPrev * this.tension,
						y: point.y - (line.y / dLine) * dPrev * this.tension
					};
					point.cNext = {
						x: point.x + (line.x / dLine) * dNext * this.tension,
						y: point.y + (line.y / dLine) * dNext * this.tension
					};
				}
			}
		}

		animate() {
			this.raf(() => {
				this.update();
				this.draw();
				this.animate();
			});
		}

		draw() {
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
				const layer = this.layers[layerIndex];
				if (layerIndex === 1) {
					if (this.touches.length > 0) {
						const gx = this.touches[0].x;
						const gy = this.touches[0].y;
						layer.color = this.context.createRadialGradient(
							gx,
							gy,
							this.height * 2,
							gx,
							gy,
							0
						);
						layer.color.addColorStop(0, this.color2);
						layer.color.addColorStop(1, this.color3);
					} else {
						layer.color = this.color2;
					}
				} else {
					layer.color = this.color1;
				}
				const points = layer.points;
				this.context.fillStyle = layer.color;

				this.context.beginPath();
				this.context.moveTo(points[0].x, points[0].y);
				for (let pointIndex = 1; pointIndex < points.length; pointIndex += 1) {
					this.context.bezierCurveTo(
						points[(pointIndex + 0) % points.length].cNext.x,
						points[(pointIndex + 0) % points.length].cNext.y,
						points[(pointIndex + 1) % points.length].cPrev.x,
						points[(pointIndex + 1) % points.length].cPrev.y,
						points[(pointIndex + 1) % points.length].x,
						points[(pointIndex + 1) % points.length].y
					);
				}
				this.context.fill();
			}
			this.context.fillStyle = this.textColor;
			// this.context.font = '100 ' + (this.height - this.padding * 2) + 'px ' + this.fontFamily;
			this.context.font = this.font;
			this.context.textAlign = 'center';
			this.context.textBaseline = 'middle';
			this.context.text;
			// this.context.fillText(this.text, this.canvas.width / 2, this.canvas.height / 2, this.width - this.padding);
			if (this.debug) {
				this.drawDebug();
			}
		}

		drawDebug() {
			this.context.fillStyle = 'rgba(255, 255, 255, 0.8)';
			this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
			for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
				const layer = this.layers[layerIndex];
				const points = layer.points;
				for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
					if (layerIndex === 0) {
						this.context.fillStyle = this.color1;
					} else {
						this.context.fillStyle = this.color2;
					}
					const point = points[pointIndex];
					this.context.fillRect(point.x, point.y, 1, 1);
					this.context.fillStyle = '#000';
					this.context.fillRect(point.cPrev.x, point.cPrev.y, 1, 1);
					this.context.fillRect(point.cNext.x, point.cNext.y, 1, 1);
					this.context.strokeStyle = 'rgba(0, 0, 0, 0.33)';
					this.context.strokeWidth = 0.5;
					this.context.beginPath();
					this.context.moveTo(point.cPrev.x, point.cPrev.y);
					this.context.lineTo(point.cNext.x, point.cNext.y);
					this.context.stroke();
				}
			}
		}

		createPoint(x, y) {
			return {
				x: x,
				y: y,
				ox: x,
				oy: y,
				vx: 0,
				vy: 0
			};
		}

		initOrigins() {
			this.canvas.width = this.width + this.margin * 2;
			this.canvas.height = this.height + this.margin * 2;
			for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
				const layer = this.layers[layerIndex];
				const points = [];
				for (
					let x = ~~(this.height / 2);
					x < this.width - ~~(this.height / 2);
					x += this.gap
				) {
					points.push(this.createPoint(x + this.margin, this.margin));
				}
				for (let alpha = ~~(this.height * 1.25); alpha >= 0; alpha -= this.gap) {
					const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
					points.push(
						this.createPoint(
							(Math.sin(angle) * this.height) / 2 +
								this.margin +
								this.width -
								this.height / 2,
							(Math.cos(angle) * this.height) / 2 + this.margin + this.height / 2
						)
					);
				}
				for (
					let x = this.width - ~~(this.height / 2) - 1;
					x >= ~~(this.height / 2);
					x -= this.gap
				) {
					points.push(this.createPoint(x + this.margin, this.margin + this.height));
				}
				for (let alpha = 0; alpha <= ~~(this.height * 1.25); alpha += this.gap) {
					const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
					points.push(
						this.createPoint(
							this.height -
								(Math.sin(angle) * this.height) / 2 +
								this.margin -
								this.height / 2,
							(Math.cos(angle) * this.height) / 2 + this.margin + this.height / 2
						)
					);
				}
				layer.points = points;
			}
		}
	};

	const buttons = document.querySelectorAll('.button');

	buttons.forEach((button) => {
		button.liquidButton = new LiquidButton(button);
	});
</script>

<section
	class="z-100 overflow-none mx-auto flex h-[100%] w-[100%] animate-slow-fade-in flex-col items-center justify-center text-center"
>
	<div class="flex h-[100%] w-[100%] flex-col items-center justify-center gap-12 text-center">
		<div>
			<div
				class="flex h-[screen] w-[100vw] animate-slow-slide-down flex-row-reverse place-content-center items-center justify-items-center gap-[40px] rounded-[8px] bg-[oklch(12.5%_0.057_322.41)] bg-astral-950 bg-opacity-40 px-6 pb-[40px] pt-4 text-center drop-shadow-[2px_2px_12px_hsla(245,20%,35%,0.3)]"
			>
				<Avatar
					size="clamp(200px, 25vw, 280px)"
					initials="RV"
					bgColor="hsla(255,0%,0%,0.9)"
					textColor="white"
					name="Randy de vries"
					src="https://source.unsplash.com/random/400x400?human-face"
				/>
				<h3
					class="font-display text-[clamp(10px,10vw,8rem)] font-[900] leading-[36px] text-blueone-200 text-shadow-[3px_3px_5px_rgba(222,22,2,0.4)]"
				>
					<span
						class=" mr-[100%] font-serif text-[clamp(16px,5vw,6rem)] font-[100] text-redone-100 text-shadow-[3px_3px_5px_rgba(242,12,55,0.4)]"
						>hi, I'm<br />
					</span>RANDY
				</h3>
			</div>
			<div
				class=" flex h-[screen] w-[100%] flex-col place-content-center items-center justify-items-center rounded-[8px] bg-astral-900 bg-opacity-20 px-6 pb-[40px] pt-4 text-center drop-shadow-[2px_2px_12px_hsla(15,00%,59%,0.6)]"
			>
				<p
					class="type w-[110%] place-content-center justify-self-center bg-opacity-20 text-center text-[clamp(13px,2vw,1.2rem)] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)]"
				>
					<span>Welcome to my web project made with Svelte & TailwindCSS</span>
				</p>
				<div class="flex flex-row gap-5">
					<button
						class="button-64 active:scale-[0.98]"
						on:click={() => window.location.reload()}
						><span class="text">new image</span></button
					>
					<!-- svelte-ignore a11y-unknown-role -->
					<button
						class="button-64 active:scale-[0.98]"
						role="sumbmit"
						on:click={() => sendEmail()}><span class="text">Contact</span></button
					>
					<button class="bg-purpleone-100" href="http://wesbos.com" data-text="hey"> Buy now! $10 </button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.type {
		display: inline-flex;
	}
	.type span {
		word-break: break-all;
		height: 1.2em;
		width: 0%;
		overflow: hidden;
		animation: t 8s linear alternate infinite;
	}
	.type span:before {
		content: ' ';
		display: inline-block;
	}
	@keyframes t {
		100%,
		100% {
			width: 115%;
		}
	}

	/* CSS */
	.button-64 {
		align-items: center;
		background-image: linear-gradient(
			144deg,
			hsla(330, 100%, 88%, 0.459),
			#4a03628b 50%,
			#00ddeb
		);
		background-clip: margin-box;
		inset: 1;
		border: 0px;
		border-radius: 8px;
		box-shadow: 0px 0px 11px 1px hsla(295, 62%, 49%, 0.9);
		box-sizing: border-box;
		color: #ffffff;
		display: flex;
		font-family: Phantomsans, sans-serif;
		font-size: clamp(16px, 2vw, 32px);
		font-weight: 500;
		justify-content: center;
		line-height: 1em;
		width: clamp(120px, 20vw, 200px);
		padding: 2px;
		text-decoration: none;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		white-space: nowrap;
		cursor: pointer;
		margin-top: 40px;
	}

	.button-64:active,
	.button-64:hover {
		outline: 0;
		scale: 1.015;
		transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.button-64 span {
		background-color: rgba(150, 19, 150, 0.2);
		padding: 16px 24px;
		border-radius: 6px;
		width: 100%;
		height: 100%;
		transition: 600ms;
	}

	.button-64:hover span {
		background: linear-gradient(215deg, #33d5f96a, #ed06f571 50%, #33d5f951);
		transition: transform 1000ms cubic-bezier(0.645, 0.08, 0.86, 0.52) reverse;
		scale: 1;
		color: white;
	}

	@media (min-width: 768px) {
		.button-64 {
			font-size: 24px;
			min-width: 196px;
		}
	}
</style>
