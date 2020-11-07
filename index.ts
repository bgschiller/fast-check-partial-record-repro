import * as fc from "fast-check";

interface Pet {
  name: string;
  dateOfBirth: Date;
  numberLegs: number;
}

// This should typecheck, but is instead giving me
// Type 'Arbitrary<Partial<{ name: string; dateOfBirth: Date; numberLegs: number; }>>' is not assignable to type 'Arbitrary<Pet>'.
//   Type 'Partial<{ name: string; dateOfBirth: Date; numberLegs: number; }>' is not assignable to type 'Pet'.
//     Property 'name' is optional in type 'Partial<{ name: string; dateOfBirth: Date; numberLegs: number; }>' but required in type 'Pet'.ts(2322)
const ArbitraryPet: fc.Arbitrary<Pet> = fc.record({
  name: fc.string(),
  dateOfBirth: fc.date(),
  numberLegs: fc.nat(),
});
