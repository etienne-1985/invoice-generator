# invoice-generator
Invoice templates generated from HTML/CSS 

# Customization

The defaults are set to match freelance activity with unique client, month billed service, VAT excluded. 

## Template data

Fixed data like template labels which can be translated:
`template.dataset.en.ts`, `template.dataset.fr.ts`

## User data

Contains fields for setting invoicer details, billed client, work activity...
This must be done at invoice init by changing or copying fields from `userdata.example.ts`

## Manual 
Fields set at invoice generation, manually filled

- invoice number: 001, 002, ...
- billed days in the month: usually between 20 - 22 working days depending on the month,
 substracted with any days off (like public or personal holidays)

or automatically generated
 - invoice date adjusted from current date
- a calendar is provided to help figuring out how many working days are in current month

# French only

## TVA
- exonéré en franchise de base
- ou assujetis mais exonéré (par ex: facturation hors UE)

## Mentions légales obligatoires
- conditions de paiement
- escompte paiement anticipé
- pénalités retard paiment