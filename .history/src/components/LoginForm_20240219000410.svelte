<script>
	let email = '';
	let password = '';

	let isLoading = false;

	let isSuccess = false;

	export let submit;

	let errors = {};

	const handleSubmit = () => {
		errors = {};

		if (email.length === 0) {
			errors.email = 'Field should not be empty';
		}
		if (password.length === 0) {
			errors.password = 'Field should not be empty';
		}

		if (Object.keys(errors).length === 0) {
			isLoading = true;
			submit({ email, password })
				.then(() => {
					isSuccess = true;
					isLoading = false;
				})
				.catch((err) => {
					errors.server = err;
					isLoading = false;
				});
		}
	};
</script>

<body>
	<div class="wrapper">
		<div class="close">
			<h2>HTML Forms</h2>
			<small>&OpenCurlyQuote;a living standard&CloseCurlyQuote;</small>
		</div>

		<form name="signup">
			<small
				>signup form according to the <a
					class="wes"
					href="https://html.spec.whatwg.org/dev/forms.html">whatwg standards</a
				>
			</small>
			<hr />
			<label for="name">Name</label>
			<input type="text" id="name" name="name" required value="Randy de Vries" />
			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				placeholder="enter a valid email"
				pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{(8, 16)}$"
				required
			/>
			<label for="password"
				>Password <small
					>(min 8, max 16 characters. 1 uppercase, 1 lowercase 1 number)</small
				></label
			>
			<input
				type="password"
				id="password"
				name="password"
				placeholder="enter a password"
				pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{(8, 16)}$"
				required
			/>
			<div class="align-center m-0 flex flex-row-reverse h-8 justify-center border-2 border-slate-900 p-0">
				<label for="agree"
					><input type="checkbox" id="agree" name="agree" required /><small id="agree"
						>I agree to the terms and conditions</small
					></label>
			</div>
			<hr />
			<button type="submit">Submit</button>
		</form>
	</div>
</body>

<style>
	form {
		background: #fff;
		padding: 50px;
		width: 450px;
		height: 300px;
		display: table;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0px 20px 14px 8px rgba(0, 0, 0, 0.58);
	}

	label {
		margin: 10px 0;
		align-self: flex-start;
		font-weight: 500;
	}

	input {
		color: black;
		border: none;
		border-bottom: 1px solid #ccc;
		margin-bottom: 20px;
		transition: all 300ms ease-in-out;
		width: 100%;
	}

	input:invalid {
		border: 1px solid #be6283;
	}

	input:valid {
		border: 1px solid #62be74;
	}

	input:focus {
		outline: 0;
		border-bottom: 1px solid #666;
	}

	button {
		margin-top: 20px;
		background: black;
		color: white;
		padding: 10px 0;
		width: 200px;
		border-radius: 25px;
		text-transform: uppercase;
		font-weight: bold;
		cursor: pointer;
		transition: all 300ms ease-in-out;
	}

	button:hover {
		transform: translateY(-2.5px);
		box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.58);
	}

	h2 {
		margin: 10px 20px 30px 20px;
		font-size: 40px;
	}

	.errors {
		list-style-type: none;
		padding: 10px;
		margin: 0;
		border: 2px solid #be6283;
		color: #be6283;
		background: rgba(190, 98, 131, 0.3);
	}

	.success {
		font-size: 24px;
		text-align: center;
	}

	p {
		color: rgb(10, 1, 1);
		text-shadow: var(--text-shadow);
		text-wrap: pretty;
		text-align: center;
		/* Consolidated text-shadow property */
	}

	input:has([type='email']:input:valid) {
		color: var(--green);
		font-size: 0.2rem;
	}

	h2 {
		min-width: 225px;
		text-align: center;
		width: 100%;
		box-sizing: border-box;
		color: var(--black);
	}

	h1 {
		min-width: 225px;
		text-align: center;
		width: 100%;
		box-sizing: border-box;
		color: var(--black);
	}

	input:required:invalid {
		border-color: #be6283;
	}

	input:required:valid {
		border-color: #62be74;
	}

	input:focus:valid {
		outline-color: #62be74;
	}

	input:focus:invalid {
		outline-color: #62be74;
	}

	small {
		color: #be6283;
		font-size: clamp(0.2rem, 2vw, 0.8rem);
	}

	small:has'type=email') {
		color: #a8070d;
		font-size: clamp(0.2rem, 2vw, 0.8rem);
    font-size: xx-large;}

	
</style>
