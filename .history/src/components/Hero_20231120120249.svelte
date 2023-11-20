<script>
	import { sendEmail } from '$lib/index.js';
	import { onMount } from 'svelte';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
	let isHoveredNewImg = false;
	let isHoveredContact = false;
</script>

<section
	class="z-100 overflow-none bg-[oklch(12.5%_0.057_322.41)]bg-opacity-40 flex h-[100%] w-screen animate-slow-fade-in flex-col items-center justify-center overflow-hidden text-center drop-shadow-[2px_2px_12px_hsla(245,90%,5%,0.3)]"
>
	<div class="flex-col h-[60%] w-[100%] ">
		<div class="flex  h-[100%] w-[100%] justify-center items-start m-0 p-0  ">
			<Avatar
				size="clamp(140px, 15vw, 180px)"
				initials="RV"
				textColor="white"
				name="Randy de vries"
				src="https://source.unsplash.com/560x560/?human"
			/>
		</div>
		<div class="flex h-[100vh] w-[100%]  flex-col items-center justify-center">
			<div
				class="z-100 m flex w-[100%] animate-slow-slide-down
				 items-center justify-center bg-[oklch(12.5%_0.057_322.41)] bg-astral-950 bg-opacity-60 drop-shadow-[2px_2px_12px_hsla(245,90%,5%,0.3)] sm:flex-col lg:h-[320px]"
			>
				<h3
					class=" 
					font-Poppins animate-slow-slide-down bg-[url(https://source.unsplash.com/1920x1080/?winter)] bg-cover bg-clip-text bg-center bg-no-repeat text-center
				  text-[clamp(32px,20vw,11rem)] font-[600] text-transparent drop-shadow-[1px_1px_12px_rgba(245,52,445,0.4)]"
				>
					
					<span
						class="translate-x-4 box-border flex h-[max-content] w-[90px]  items-center place-self-center font-display text-[clamp(8px,4vw,2rem)] font-[100] text-blueone-300 text-shadow-[1px_1px_5px_rgba(25,292,445,0.9)]"
						>hi, I'm<br />
					</span>RANDY
				</h3>
			</div>
			<div
				class=" z-100 justify-center h-[max-content] animate-slow-slide-down flex-col items-center justify-items-center  bg-astral-900 bg-opacity-50   text-center drop-shadow-[2px_2px_12px_hsla(15,00%,59%,0.2)]"
			>
				<p
					class="type font-Poppins justify-items-evenly w-[max-content] animate-slow-fade-in
					bg-opacity-20 text-left align-middle text-[clamp(12px,3vw,1.6rem)] font-[500] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(2,3,2,0.8)]"
				>
					<span class="">Welcome to my web project made with Svelte & TailwindCSS</span>
				</p>
				<!-- buttons start here!! -->
				<div class="mt-42 flex  gap-5">
					<button class="button-85 active:bg-slate-100 transition-color duration-300"  on:click={() => window.location.reload()}
						><span class="text">refresh</span></button
					>
					<!-- svelte-ignore a11y-unknown-role -->
					<button class="button-85" role="sumbmit" on:click={() => sendEmail()}
						><span class="text">Contact</span></button
					>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	* {
		/* font-family: 'Poppins', sans-serif; */
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		overflow: hidden;

		display: flex;
	}

	.type {
		display: inline-flex;
		margin-left: 1rem;
	}
	.type span {
		word-break: break-all;
		height: 2rem;
		line-height: 2.3rem;
		width: 0;
		overflow: hidden;
		animation: t 9s steps(70, end) infinite alternate both;
		text-align: left;
		letter-spacing: 1.6px;
	}
	.type span:before {
		content: ' ';
		display: inline-block;
		margin-bottom: 5rem;
	}
	.buttons {
  margin-top: 50px;
  text-align: center;
  border-radius:30px;
}

$cyan: #0505A9;
$dark: #FFFFFF;
$borderW: 2px;

.blob-btn {
  $numOfBlobs: 4;
  z-index: 1;
  position: relative;
  padding: 20px 46px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  color: $cyan;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  outline: none;
  border: none;
  transition: color 0.5s;
  cursor: pointer;
  border-radius:30px;
  
  &:before {
    content: "";
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: $borderW solid $cyan;
    border-radius:30px;
  }
  
  &:after {
    content: "";
    z-index: -2;
    position: absolute;
    left: $borderW*1.5;
    top: $borderW*1.5;
    width: 100%;
    height: 100%;

    transition: all 0.3s 0.2s;
    border-radius:30px;
  }
  
  &:hover {
    color: $dark;
    border-radius:30px;
    
    &:after {
      transition: all 0.3s;
      left: 0;
      top: 0;
      border-radius:30px;
    }
  }
  
  &__inner {
    z-index: -1;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius:30px;
    background:#ffffff;
  }
  
  // additional container created, because in FF blobs are breaking overflow:hidden of element with svg gooey filter
  &__blobs {
    position: relative;
    display: block;
    height: 100%;
    filter: url('#goo');
  }
  
  &__blob {
    position: absolute;
    top: $borderW;
    width: 100% / $numOfBlobs;
    height: 100%;
    background: $cyan;
    border-radius: 100%;
    transform: translate3d(0,150%,0) scale(1.7);
    transition: transform 0.45s;
    
    @supports(filter: url('#goo')) {
      transform: translate3d(0,150%,0) scale(1.4);
    }
    
    @for $i from 1 through $numOfBlobs {
      &:nth-child(#{$i}) {
        left: ($i - 1) * (120% / $numOfBlobs);
        transition-delay: ($i - 1) * 0.08s;
      }
    }
    
    .blob-btn:hover & {
      transform: translateZ(0) scale(1.7);
      
      @supports(filter: url('#goo')) {
        transform: translateZ(0) scale(1.4);
      }
    }
  }

	
</style>
