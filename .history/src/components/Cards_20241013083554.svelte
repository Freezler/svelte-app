<script>
	// Define your plans as an array of objects
	const plans = [
		{
			price: 'HTML',
			name: 'hyperText markup language',
			features: [
				'When: Created in 1993',
				'Who: Tim Berners-Lee',
				'What: HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications.'
			]
		},
		{
			price: 'CSS',
			name: 'cascading style sheet',
			features: [
				'When: Created in 1996',
				'Who: Håkon Wium Lie, Bert Bos',
				'What: CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.'
			]
		},
		{
			price: 'JavaScript',
			name: 'JS (JavaScript)',
			features: [
				'When: Created in 1995',
				'Who: Brendan Eich',
				'What: JavaScript is a high-level, interpreted programming language that enables interactive web pages and web applications.'
			]
		}
	];
</script>

<div class="cards-container">

    <!-- FIRST CARD -->
    <div class="card card-first">
        <div class="card-header-wrapper">
            <h2 class="card-title">The cosmos awaits</h2>
            <h4 class="card-subtitle">Great turbulent clouds</h4>
            <div class="card-avatar-wrapper">
                <img class="card-avatar"
                    src="https://images.unsplash.com/photo-1476814607969-0dfe98b9be5c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt="">
            </div>
        </div>
        <div class="card-photo-wrapper">
            <img class="card-photo"
                src="https://images.unsplash.com/photo-1512547770769-0eb554dbaa73?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="">
        </div>
        <p class="card-text">With pretty stories for which there's little good evidence star stuff harvesting star light circumnavigated invent the universe billions upon billions of brilliant syntheses.</p>
        <svg class="card-like" height="32" width="32" style="enable-background:new 0 0 32 32;" version="1.1"
            viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M340.8 98.4c50.7 0 91.9 41.3 91.9 92.3 0 26.2-10.9 49.8-28.3 66.6L256 407.1 105 254.6c-15.8-16.6-25.6-39.1-25.6-63.9 0-51 41.1-92.3 91.9-92.3 38.2 0 70.9 23.4 84.8 56.8 13.7-33.3 46.5-56.8 84.7-56.8m0-15.4C307 83 276 98.8 256 124.8c-20-26-51-41.8-84.8-41.8C112.1 83 64 131.3 64 190.7c0 27.9 10.6 54.4 29.9 74.6L245.1 418l10.9 11 10.9-11 148.3-149.8c21-20.3 32.8-47.9 32.8-77.5C448 131.3 399.9 83 340.8 83z" />
        </svg>
        <button class="card-button">More</button>
    </div>

    <!-- SECOND CARD -->
    <div class="card card-second">
        <div class="card-header-wrapper">
            <h2 class="card-title">Harvesting star light</h2>
            <h4 class="card-subtitle">Realm of the galaxies</h4>
            <div class="card-avatar-wrapper">
                <img class="card-avatar"
                    src="https://images.unsplash.com/photo-1583994009906-c00c0bd8acb2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt="">
            </div>
        </div>
        <div class="card-photo-wrapper">
            <img class="card-photo"
                src="https://images.unsplash.com/photo-1503389152951-9f343605f61e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""></div>
        <p class="card-text">Descended from astronomers encyclopaedia galactica Sea of Tranquility encyclopaedia galactica vanquish the impossible courage of our questions. Great turbulent clouds emerged into consciousness inconspicuous motes of rock and gas gathered by gravity.</p>
        <svg class="card-like" height="32" width="32" style="enable-background:new 0 0 32 32;" version="1.1"
            viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M340.8 98.4c50.7 0 91.9 41.3 91.9 92.3 0 26.2-10.9 49.8-28.3 66.6L256 407.1 105 254.6c-15.8-16.6-25.6-39.1-25.6-63.9 0-51 41.1-92.3 91.9-92.3 38.2 0 70.9 23.4 84.8 56.8 13.7-33.3 46.5-56.8 84.7-56.8m0-15.4C307 83 276 98.8 256 124.8c-20-26-51-41.8-84.8-41.8C112.1 83 64 131.3 64 190.7c0 27.9 10.6 54.4 29.9 74.6L245.1 418l10.9 11 10.9-11 148.3-149.8c21-20.3 32.8-47.9 32.8-77.5C448 131.3 399.9 83 340.8 83z" />
        </svg>
        <button class="card-button">More</button>
    </div>

    <!-- THIRD CARD -->
    <div class="card card-third">
        <div class="card-header-wrapper">
            <h2 class="card-title">Impossible courage of our questions</h2>
            <h4 class="card-subtitle">The ash of stellar alchemy</h4>
            <div class="card-avatar-wrapper">
                <img class="card-avatar"
                    src="https://images.unsplash.com/photo-1511546395756-590dffdcdbd1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt="">
            </div>
        </div>
        <div class="card-photo-wrapper"><img class="card-photo"
                src="https://images.unsplash.com/photo-1485846753954-dff2171ddb2b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""></div>
        <p class="card-text">Brain is the seed of intelligence from which we spring not a sunrise but a galaxyrise consciousness take root and flourish Cambrian explosion. Stirred by starlight billions upon billions vanquish the impossible the sky calls to us with pretty stories?</p>
        <svg class="card-like" height="32" width="32" style="enable-background:new 0 0 32 32;" version="1.1"
            viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M340.8 98.4c50.7 0 91.9 41.3 91.9 92.3 0 26.2-10.9 49.8-28.3 66.6L256 407.1 105 254.6c-15.8-16.6-25.6-39.1-25.6-63.9 0-51 41.1-92.3 91.9-92.3 38.2 0 70.9 23.4 84.8 56.8 13.7-33.3 46.5-56.8 84.7-56.8m0-15.4C307 83 276 98.8 256 124.8c-20-26-51-41.8-84.8-41.8C112.1 83 64 131.3 64 190.7c0 27.9 10.6 54.4 29.9 74.6L245.1 418l10.9 11 10.9-11 148.3-149.8c21-20.3 32.8-47.9 32.8-77.5C448 131.3 399.9 83 340.8 83z" />
        </svg>
        <button class="card-button">More</button>
    </div>

    <!-- FOURTH CARD -->
    <div class="card card-fourth">
        <div class="card-header-wrapper">
            <h2 class="card-title">A mote of dust suspended in a sunbeam</h2>
            <h4 class="card-subtitle">Interiors of collapsing stars</h4>
            <div class="card-avatar-wrapper">
                <img class="card-avatar"
                    src="https://images.unsplash.com/photo-1553669006-0b3882afea8d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt="">
            </div>
        </div>
        <div class="card-photo-wrapper">
            <img class="card-photo"
                src="https://images.unsplash.com/photo-1498452572341-c087c3ee25fc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="">
        </div>
        <p class="card-text">Orion's sword venture take root and flourish inconspicuous motes of rock and gas vanquish the impossible muse about. A very small stage in a vast cosmic arena two ghostly white figures in coveralls and helmets.</p>
        <svg class="card-like" height="32" width="32" style="enable-background:new 0 0 32 32;" version="1.1"
            viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M340.8 98.4c50.7 0 91.9 41.3 91.9 92.3 0 26.2-10.9 49.8-28.3 66.6L256 407.1 105 254.6c-15.8-16.6-25.6-39.1-25.6-63.9 0-51 41.1-92.3 91.9-92.3 38.2 0 70.9 23.4 84.8 56.8 13.7-33.3 46.5-56.8 84.7-56.8m0-15.4C307 83 276 98.8 256 124.8c-20-26-51-41.8-84.8-41.8C112.1 83 64 131.3 64 190.7c0 27.9 10.6 54.4 29.9 74.6L245.1 418l10.9 11 10.9-11 148.3-149.8c21-20.3 32.8-47.9 32.8-77.5C448 131.3 399.9 83 340.8 83z" />
        </svg>
        <button class="card-button">More</button>
    </div>
</div>
<div>

    <p class="caption">
        <a href="https://www.ditdot.hr/en/css-subgrid-how-to-build-complex-layouts-in-a-simple-way"
            title="ditdot.hr" target="_blank">Visit how-to article on our blog</a>
    </p>
</div>

<style>
	.cards:nth-of-type(1) {
		background-image: url('https://images.unsplash.com/photo-1699885960867-56d5f5262d38?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
		background-position: center;
		background-size: cover;

	}

	.cards:nth-of-type(2) {
		background-image: url('https://images.unsplash.com/photo-1524666643752-b381eb00effb?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
		background-position: center;
		background-size: cover;
	}
	.cards:nth-of-type(3) {
		background-image: url('https://images.unsplash.com/photo-1660054373740-b8fc241e35f4?q=80&w=2805&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
		background-position: center;
		background-size: cover;
	}
	.card {
		display: subgrid;
		grid-template-columns: 1fr auto 1fr;
		grid-template-rows: 1fr;
		width: 100%;
		min-height: 500px;
		justify-items: center;
	}
</style>
