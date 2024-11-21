import { getUserById } from "./test-async";

//Test that if an id is passed that is present in the users list,
//getUserById() will successfully return the user object.
// Make sure to validate that the user's id,
// firstName and lastName are all present in the user object
//and match what you expect from the id you passed.
it("should return the user object if the id is present in the users list", async () => {
  const user = await getUserById(1);
  expect(user).toEqual({
    id: 1,
    firstName: "Kevin",
    lastName: "Chung",
  });
});

it("should reject if user id is not present in the users list", async () => {
  await expect(getUserById(6)).rejects.toEqual("User with ID 6 not found.");
});

//Test that if an invalid id which is not present in the users list is passed, getUserById() will reject with an error. Make sure to validate that the text of the error returned.
