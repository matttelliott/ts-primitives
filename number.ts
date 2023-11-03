import { z } from 'zod';

export const HeightInInches = z.number().int().brand('HeightInInches');
export type HeightInInches = z.infer<typeof HeightInInches>;

export const WeightInPounds = z.number().int().brand('WeightInPounds');
export type WeightInPounds = z.infer<typeof WeightInPounds>;

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export type Digit = (typeof digits)[number];

export const Digit = z
  .custom<Digit>((u) => digits.includes(Number(u) as Digit))
  .transform(d => Number(d) as Digit);

export const DigitString = Digit.transform((d) => String(d) as `${Digit}`);
export type DigitString = z.infer<typeof DigitString>;
