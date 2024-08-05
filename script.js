

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

const mainEL = document.getElementsByTagName("main")[0];

mainEL.style.backgroundColor = "var(--main-bg)";

mainEL.innerHTML = "<h1>DOM Manipulation</h1>";

mainEL.classList.add("flex-ctr");

//Part two
// Next, create a blank menu bar that we can use to later add some interactivity to the page:
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");
// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

//Part Three
// Iterate over the entire menuLinks array and for each "link" object:
for (const link of menuLinks) {
  // Create an <a> element.
  const a = document.createElement("a");
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  a.href = link.href;
  // Set the new element's content to the value of the text property of the "link" object.
  a.innerText = link.text;
  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(a);
}
