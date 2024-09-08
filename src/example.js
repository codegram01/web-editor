
export const exampleCode = `<!-- Example -->
<h1>hello world</h1>

<input id="name" type="text" placeholder="Enter name">
<button onclick="say()">say</button>

<script>
function say() {
    const name = document.getElementById("name").value;
    alert("Hello " + name)
}
</script>`