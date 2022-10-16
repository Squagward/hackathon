//keep an ongoing list of blacklist or whitelist until user clears list
// chrome.tabs.onUpdated.addListener(async function () {
//   console.log("TAB UPDATED");
//   let { url } = await getCurrentTab();
//   alert(url);
// });

function getInputValue() {
  // Selecting the input element and get its value
  var inputVal = document.getElementById("whitelist").value;
  let blacklist = inputVal.split("\n");
  return blacklist;
}

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

document.getElementById("Save").addEventListener("click", () => {
  getInputValue().forEach(async (site) => {
    const currentTab = (await getCurrentTab()).url;

    if (check.checked && currentTab.includes(site)) {
      chrome.tabs.create({
        url: "block.html"
      });

      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML(site);
    }
  });
});

// boolean white or black
// if white
// any website which is not this is not openable
// if black
// these websites are not allowed
