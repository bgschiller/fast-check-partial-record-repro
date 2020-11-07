"use strict";
exports.__esModule = true;
var fc = require("fast-check");
// This should typecheck, but is instead giving me
// Type 'Arbitrary<Partial<{ name: string; dateOfBirth: Date; numberLegs: number; }>>' is not assignable to type 'Arbitrary<Pet>'.
//   Type 'Partial<{ name: string; dateOfBirth: Date; numberLegs: number; }>' is not assignable to type 'Pet'.
//     Property 'name' is optional in type 'Partial<{ name: string; dateOfBirth: Date; numberLegs: number; }>' but required in type 'Pet'.ts(2322)
var ArbitraryPet = fc.record({
    name: fc.string(),
    dateOfBirth: fc.date(),
    numberLegs: fc.nat()
});
fc.sample(ArbitraryPet);
