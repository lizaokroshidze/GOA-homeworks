// 1) ფუნქცია რომელიც აბრუნებს ფრომისს
function getWeatherStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // შეგვიძლია შევცვალოთ მნიშვნელობა
      const status = "cold";
      resolve(status);
    }, 1000);
  });
}

// 2) ფუნქცია რომელიც იღებს ფრომისს და ბეჭდავს აიქონს
async function printWeatherIcon() {
  try {
    const result = await getWeatherStatus();

    // 3) აიქონის ლოგიკა
    let icon;
    switch (result) {
      case "cold":
        icon = "❄️";
        break;
      case "hot":
        icon = "🔥";
        break;
      case "happy":
        icon = "😊";
        break;
      case "sad":
        icon = "😢";
        break;
      default:
        icon = "🤷‍♀️"; // უცნობი სტატუსი
    }

    console.log(`სტატუსი: ${result} ${icon}`);
  } catch (error) {
    console.error("დაფიქსირდა შეცდომა:", error);
  }
}

// გამოძახება
printWeatherIcon();
