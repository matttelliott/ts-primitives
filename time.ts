import { z } from 'zod';

export const DurationInYears = z.number().int().brand('DurationInYears');
export type DurationInYears = z.infer<typeof DurationInYears>;

export const DurationInSeconds = z.number().int().brand('DurationInSeconds');
export type DurationInSeconds = z.infer<typeof DurationInSeconds>;

export const DurationString = z.string().brand('DurationString');
export type DurationString = z.infer<typeof DurationString>;

export const Minutes = z.number({ coerce: true }).int().brand('Minutes');
export type Minutes = z.infer<typeof Minutes>;

export const Seconds = z.number({ coerce: true }).int().brand('Seconds');
export type Seconds = z.infer<typeof Seconds>;
