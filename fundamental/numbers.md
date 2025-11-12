/**
 * Does something cool.
 *
 * See: [numbers.md](./numbers.md)
 */


# Reference 
https://en.wikipedia.org/wiki/IEEE_754
use binary 64bits. max 1.80×10308 min 2.23×10−308

##  Max number js and prgramming langs on IEEE_754 can take. 
Number.MAX_SAFE_INTEGER which is 9,007,199,254,740,991 ((or 2**53 −1). e16 


## A 64-bit (double-precision) number is divided into three parts:

| Part | Bits | Meaning | 
| --- | --- | --- | 
| Sign | 1 | 0 = positive, 1 = negative | 
| Exponent | 11 | Determines the scale (like scientific notation’s power of 2) |
| Fraction (Mantissa) | 52 | Holds the actual digits of the binary fraction |
--- 


` (-1)^sign × (1.fraction) × 2^(exponent - 1023) ` 