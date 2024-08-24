import { gsap } from "gsap";
import { Flip } from "gsap/all";
const allCheckbox = document.getElementById("all");
let filters = gsap.utils.toArray(".filter");
let items = gsap.utils.toArray(".item");
console.log("filters", filters);
console.log("items", items);

export function updateFilters() {
  const state = Flip.getState(items), // get the current state
    classes = filters
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => "." + checkbox.id),
    matches = classes.length ? gsap.utils.toArray(classes.join(",")) : classes;

  // adjust the display property of each item ("none" for filtered ones, "inline-flex" for matching ones)
  items.forEach(
    (item) =>
      (item.style.display =
        matches.indexOf(item) === -1 ? "none" : "inline-flex")
  );

  // animate from the previous state
  Flip.from(state, {
    duration: 1,
    scale: true,
    absolute: true,
    ease: "power1.inOut",
    onEnter: (elements) =>
      gsap.fromTo(
        elements,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1 }
      ),
    onLeave: (elements) =>
      gsap.to(elements, { opacity: 0, scale: 0, duration: 1 }),
  });

  // Update the all checkbox:
  allCheckbox.checked = matches.length === items.length;
}

// filters.forEach((btn) => btn.addEventListener("click", updateFilters));
// allCheckbox.addEventListener("click", () => {
//   filters.forEach((checkbox) => (checkbox.checked = allCheckbox.checked));
//   updateFilters();
// });
