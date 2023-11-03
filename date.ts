import { z } from 'zod';
import { Digit } from './number';

/** 4 digit year */
export type YearStringFull = `${Digit}${Digit}${Digit}${Digit}`;
export const YearStringFull = z
  .custom<YearStringFull>((u) => u)
  .transform(String)
  .refine((s) => s.length === 4 && /\d\d\d\d/.test(s));

export type TwoDigitMonth = Exclude<`0${Digit}` | '11' | '12', '00'>;
export const TwoDigitMonth = z
  .custom<TwoDigitMonth>()
  .transform(Number)
  .refine((n) => n <= 12 && n > 0)
  .transform(String);

export type DayOfMonth = Exclude<
  `${0 | 1 | 2 | 3}${Digit}`,
  '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '00'
>;
export const DayOfMonth = z
  .custom<DayOfMonth>()
  .transform(Number)
  .refine((n) => n <= 31)
  .transform(String);

/**
 * string representing a date in format `yyyy-MM-dd` with no timezone
 **/
export const SimpleDate = z
  .custom<`${number}-${number}-${number}`>()
  .transform(u => String(u) as `${number}-${number}-${number}`)
  .refine((s) => /\d\d\d\d-\d\d-\d\d/.test(s));
export type SimpleDate = z.infer<typeof SimpleDate>;
