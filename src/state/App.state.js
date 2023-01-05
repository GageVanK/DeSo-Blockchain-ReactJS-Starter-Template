import { atom } from "recoil";
// This code defines two atoms using the `atom()` function from the Recoil library. 
// An atom is a piece of state that can be used by multiple components in a React app.

// The `PublicKey` atom is defined with a key of "key" and a default value of an empty string.
export const PublicKey = atom({
  key: "key",
  default: "",
});
