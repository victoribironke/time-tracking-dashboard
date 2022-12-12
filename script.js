const selections = [...document.querySelectorAll(".days p")];
const times = [...document.querySelectorAll(".bottom")];
selections[1].id = "selected";
const timeframes = [];

const clear = (lists) => {
  lists.forEach((list) => {
    list.id = "";
  });
};

const showData = (selection) => {
  let which = "";

  if (selection == "Daily") {
    which = "daily";
  } else if (selection == "Weekly") {
    which = "weekly";
  } else if (selection == "Monthly") {
    which = "monthly";
  }

  for (i = 0; i < times.length; i++) {
    times[
      i
    ].children[0].textContent = `${timeframes[i].timeframes[which].current}hrs`;
    times[
      i
    ].children[1].textContent = `Last Week - ${timeframes[i].timeframes[which].previous}hrs`;
  }
};

selections.forEach((selection) => {
  selection.addEventListener("click", () => {
    clear(selections);
    selection.id = "selected";
    showData(selection.textContent);
  });
});

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((datum) => {
      timeframes.push(datum);
    });
    console.log(timeframes);
  })
  .catch((err) => console.log(err));
