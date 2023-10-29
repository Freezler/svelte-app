<script>
	import '../app.css';
</script>

<html lang="en" class="scroll-smooth">
	<head>
		<!-- Add any necessary head content here -->
	</head>
	<body class="z-10 flex h-screen select-none flex-col overflow-hidden xl:max-w-5xl xl:px-0">
		<Navbar />
		<main>
			<slot />
		</main>
		<Footer />
	</body>
</html>
