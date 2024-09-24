// Convert String to Number
function textToNumber(id) {
  const value = document.getElementById(id).innerText;
  return (convertNumber = parseFloat(value));
}
function inputToNumber(id) {
  const value = document.getElementById(id).value;
  return (convertNumber = Number(value));
}

// History Section Function
function donatioHistory(inputId, ElementId) {
  historyContainer.innerHTML += `
        <div class="border border-gray rounded-xl p-8 shadow-sm mb-6">
          <h4 class="text-black text-xl font-semibold mb-4">
            ${inputId} Taka is Donated for ${ElementId}
          </h4>
          <p class="text-secondaryColor text-base font-light bg-gray py-2 pl-2 rounded-md">
            Date : ${new Date()}
          </p>
        </div>
`;
  document.getElementById("default-text").innerText = " ";
}

// Feature Toggle Button
function donationToHistoryBtn(id) {
  document.getElementById("donation-container").classList.add("hidden");
  document.getElementById("history-container").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

// Change Feature Toggle Button Color
function changeToggleBtnColor(id) {
  document.getElementById("history-btn").classList.remove("bg-buttonBg");
  document.getElementById("donation-btn").classList.remove("bg-buttonBg");

  document.getElementById(id).classList.add("bg-buttonBg");
}
