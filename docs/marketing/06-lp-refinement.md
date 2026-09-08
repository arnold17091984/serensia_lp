# LP refinement — September 8, 2026

## Intent and evidence
Help relatives, remote family members, landlords and property managers understand what to do next before reading the long-form explanations. The P-9 audit and AI council (T-92) identified buried process/business information, small price conditions, and competing gold frames, shadows and glossy buttons. These are design hypotheses; conversion uplift is not yet measured.

## Design and implementation specification
- Retain the approved hero artwork and immediate phone/LINE actions. Add one empathetic sentence and a compact consultation → inspection/estimate → agreement sequence directly after those actions.
- Move and condense the existing business support section before the manga. Give relatives and property managers separate short introductions; retain remote attendance, key handling and photo reporting information.
- Keep the existing ¥50,000 starting price, ¥150,000/¥200,000/¥330,000 examples and their scope caveats. Do not invent guarantees, tax treatment or response times.
- Palette: white #ffffff, pale ivory #fcfaf5, soft green #f3f7f3, dark green #123d28, restrained gold #c8a24e, phone red #c0202a. LINE remains green. Existing Japanese sans body and Mincho headings retain the brand identity.
- Layout: hero → immediate actions → short process → existing trust/worries → price summary → audience/remote support → manga and detailed evidence. Left-align explanatory text; center only short headings and action labels. Avoid adding a generic card grid.
- Reduce shared card ornament and CTA gloss/movement. Keep dark green for headings and limited accents. Important body copy targets 15–16px and price conditions 14px; allow CTA supporting text to wrap at 320px.
- Preserve contact URLs, existing analytics handlers, reviews and legal information. New anchor links use the existing data-gtm delegation and data-section vocabulary.

## Validation handoff
Commander verifies the production build, 320/390/1440px layouts, horizontal overflow, CTA text, section anchors and console errors; captures screenshots; obtains independent review, QA and CI evidence before the PR merge and deployment.
