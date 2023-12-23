# invoice-maker
Invoice templates generated from HTML/CSS 

# How to
## Quick run
- install deps
```console
yarn
```
- run
```console
yarn watch-static
```
this will show default invoice with example data

## Setup with custom data
### First time customization

User data contains fields for setting invoicer details, billed client, work activity...

- copy `src/dataset/userdata.example.ts` content over new file `src/dataset/userdata.local.ts` which should be kept locally
- customize `userdata.local.ts` with custom data
- change reference in `App.tsx` to point toward `userdata.local.ts` instead of `userdata.example.ts`
- relaunch 



### Each invoice changes
To be filled manually at each new invoice generated:

- invoice number: 001, 002, ...
- billed days in the month: usually between 20 - 22 working days depending on the month,
 substracted with any days off (like public or personal holidays)

Automatically generated:

- invoice date adjusted from current date
- `TODO` a calendar is provided to help figuring out how many working days are in current month

## In depth template customization

Template files contains static data like template labels requiring translation.

Default template files `template.dataset.en.ts`, `template.dataset.fr.ts` respectively support english and french, and are set to match freelance activity with unique client, monthly billed service, VAT excluded. 


# Next steps
- avoid any code changes by storing local data in browser and
- provice built-in calendar to select worked days and auto-fill working days in invoice month


# French considerations

## TVA
- exonéré en franchise de base
- ou assujetis mais exonéré (par ex: facturation hors UE)

## Mentions légales obligatoires
- conditions de paiement
- escompte paiement anticipé
- pénalités retard paiment