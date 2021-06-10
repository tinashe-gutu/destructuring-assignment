import listFollowers from "./1a-list-followers";

test.skip("listFollowers lists by name the first two followers and announces how many others there are", () => {
  expect(
    listFollowers([
      "@barackobama",
      "@STORMZYOFFICIAL",
      "@rihanna",
      "@justinbieber",
    ])
  ).toBe("Followed by @barackobama, @STORMZYOFFICIAL and 2 others");

  expect(
    listFollowers([
      "@taylorswift13",
      "@katyperry",
      "@elonmusk",
      "@CNN",
      "@NASA",
    ])
  ).toBe("Followed by @taylorswift13, @katyperrry and 3 others");

  expect(
    listFollowers([
      "@a",
      "@b",
      "@c",
      "@d",
      "@e",
      "@f",
      "@g",
      "@h",
      "@i",
      "@j",
      "@k",
      "@l",
    ])
  ).toBe("Followed by @a, @b and 10 others");
});
