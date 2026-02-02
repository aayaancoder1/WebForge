const d = [
	{
		name: "aayaan",
		tech: "mern"
	},
	{
		name: "goof",
		tech: "stack"
	}
]

const a = async () => {
	const b = await fetch('https://jsonplaceholder.typicode.com/users');
	const c = await b.json();
	console.count.log(c);
}