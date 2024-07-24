const fs = require("fs");

fs.readFile("./data.json", (err, data) => {
  if (err) throw err;
  const fileContent = JSON.parse(data);

  const updatedContent = fileContent.map((data) => {
    if (data.name === "Koko") {
      return { ...data, age: "39" };
    }
    if (data.name === "Jean") {
      return { ...data, country: "Symfony" };
    }
    return data;
  });

  fs.writeFile("./data.json", JSON.stringify(updatedContent), (err) => {
    if (err) throw err;

    const IWantToAddSomething = (value) => [
      ...value,
      { name: "Antoine Daniel", age: "36", country: "Twitch" },
    ];

    fs.writeFile(
      "./data.json",
      JSON.stringify(IWantToAddSomething(updatedContent)),
      (err) => {
        if (err) throw err;
      }
    );
  });
});
