
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, ImagePlaceholder, Skeleton, TextPlaceholder } from 'flowbite-svelte'
	import { DarkMode } from 'flowbite-svelte';
   let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl ';

</script>



<div class="relative px-8 md:px-4 ">
  <Navbar
    navClass="px-2 sm:px-4 py-2.5 absolute w-full z-40 top-0 left-0 border-"
    let:hidden
    let:toggle
  >
    <NavBrand href="">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-svelte" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M15 8l-5 3l.821 -.495c1.86 -1.15 4.412 -.49 5.574 1.352a3.91 3.91 0 0 1 -1.264 5.42l-5.053 3.126c-1.86 1.151 -4.312 .591 -5.474 -1.251a3.91 3.91 0 0 1 1.263 -5.42l.26 -.16"></path>
   <path d="M8 17l5 -3l-.822 .496c-1.86 1.151 -4.411 .491 -5.574 -1.351a3.91 3.91 0 0 1 1.264 -5.42l5.054 -3.127c1.86 -1.15 4.311 -.59 5.474 1.252a3.91 3.91 0 0 1 -1.264 5.42l-.26 .16"></path>
</svg>
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Randy de vries</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden} class="">
      <NavLi active={true}><a href="/about/+page.svelte">Over mij</a></NavLi>
      <NavLi href="/Users/randydevries/Code/my-app/src/routes/about/+page.svelte">Over mij</NavLi>
      <NavLi href="/gallery">Gallery</NavLi>
      <NavLi href="/contact">Contact</NavLi>
	  <NavLi href="/blog">Blog</NavLi>
	  <NavLi><DarkMode {btnClass} /></NavLi>
    </NavUl>
  </Navbar>
</div>

