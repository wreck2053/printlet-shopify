# Printlet Shopify store

## Current state (7 October 2026)

The merchant store is **Printlet** under Rahul's Shopify account, at `printlet-in.myshopify.com`. It is an India/INR store on Shopify's trial. The custom **Printlet Studio** theme is **live on `printlet.in`**, and the store remains password protected. The paper and vinyl products are **drafts**. This is intentional: the physical sticker count and vinyl waterproof claim still need testing, and checkout needs shipping, payment, and dispatch details. Rahul is not GST registered; the India market currently says **Not collecting** tax. The support email is `rahulm2053@gmail.com`.

Theme editor: <https://admin.shopify.com/store/printlet-in/themes/192843776364/editor>
Preview: <https://printlet-in.myshopify.com?preview_theme_id=192843776364> (merchant access/password may be required)
Products: <https://admin.shopify.com/store/printlet-in/products>
Domain: <https://admin.shopify.com/store/printlet-in/settings/domains/182257287532>

The current design uses three generated photographic examples in `assets/printlet-hero-photo.jpg`, `assets/printlet-paper-photo.jpg`, and `assets/printlet-vinyl-photo.jpg`. They are illustrative mockups; sticker counts and finish are confirmed only by physical samples. Local admin screenshots in `docs/` are excluded from the public repository.

The supplied `printlet.` wordmark is in the theme without the phone numbers. `printlet.in` has been added to Shopify and is shown as the **primary domain**. At GoDaddy, the `@` A record is `23.227.38.65` and `www` CNAME is `shops.myshopify.com`. Shopify confirms that DNS points to Shopify, is live in all regions, and has a TLS certificate. Keep the storefront password in place during setup.

## What was built

- A mobile-first home page with a white editorial layout, light typewriter-style typography, square text-only actions, photo parallax and scroll reveals, two product choices, a three-step explanation, and clear upload paths. Three generated example photos show a dog, a friend, and a cat repeated on sticker sheets. These are concept mockups, not photos of Printlet's finished products.
- A dedicated Shop stickers page at `/collections/all`, with the two sheet options and direct links to the product forms. The main menu now points to Home, Shop stickers, Contact, and How it works.
- Mobile and desktop product pages with shape/size selection, a live per-sheet planning count, file upload, sheet quantity, and vinyl finish selection. One item is one A4 sheet. The customer supplies **one design per sheet**. Shipping is separate.
- Draft products: **Custom Paper Sticker Sheet, ₹80**, and **Custom Waterproof Vinyl Sticker Sheet, ₹120**. No stock tracking, as these are made to order.
- Designed Contact and How it works/FAQ pages, a simple main menu, cart, and Shopify policy links.
- An app-block-compatible product section. Once Preview App's theme app extension is installed and tested, add its app block in the product template. Then enable **Theme settings → Printlet production → Use Preview App instead of basic upload form**. Keep the native form until the app supports every required option and stores artwork on orders.

### Sticker count logic

The live grid uses a provisional **190 × 277 mm safe area** inside one A4 sheet and **5 mm between sticker bounding boxes**. It chooses the better of unrotated and 90° rotated grids. Each printed A3 must contain **two independent A4 layouts**, so cutting it in half preserves the displayed count on each sold sheet. The calculator is in `assets/printlet-customizer.js`. Current planning counts are:

| Shape | Size | Count per A4 |
| --- | --- | ---: |
| Circle or square | 25 mm | 54 |
| Circle or square | 50 mm | 15 |
| Circle or square | 75 mm | 6 |
| Rectangle or oval | 50 × 25 mm | 30 |
| Rectangle or oval | 75 × 50 mm | 10 |
| Rectangle or oval | 100 × 75 mm | 4 |

These are **planning estimates**, not verified minimums. They use each shape's bounding box. A print shop may need more space, especially for kiss cutting. Keep products draft until a sample confirms the count for every option. Only then enable **Theme settings → Printlet production → Counts physically verified**. If any count fails, reduce the safe area or increase the gap in the JavaScript, retest, and upload the revised theme first.

The artwork input is a native Shopify product-form file line-item property (`Artwork`), with the selected shape, size, finish, and count as other line-item properties. The browser accepts images and PDFs and limits files to 20 MB. A real cart/order upload test is still required; theme-editor preview alone does not prove that Shopify retains the file through checkout. Test on iPhone and Android with photos from the phone, plus a PDF if you want to accept PDFs.

## Before taking the first order

1. **Test manufacturing.** Ask Mega Digital for one A3 test print per material, shape, size, and vinyl finish. Ensure each A3 contains two separate A4 layouts. Check margins, kiss-cut accuracy, exact peelable count *on each A4 half*, finish, colors, and production cost. Test the vinyl's waterproof claim on the finished laminated sticker. Confirm whether the stated 24-hour printing turnaround holds for your real orders. Update product wording and counts based on results.
2. **Choose packaging and a courier.** Measure a protected A4 parcel, its weight, and the cost to ship it to sample Indian PIN codes. Rahul will manage the courier and shipping rates. In **Markets → India → Shipping**, replace Shopify's current default **₹379 Standard** rate with your actual customer-facing rate(s). The current rate is much higher than either sheet price and should not be used at launch. Set the origin/location from the actual dispatch address. Confirm that a five-day delivery estimate is realistic for the PIN codes you serve; narrow the service area or revise the wording if needed.
3. **Complete business and money settings.** In **Settings → General**, set the dispatch address: the physical place you will pack and hand parcels to the courier. It can be a home address if that is where you work; decide what address should appear on labels and documents. The support email is already `rahulm2053@gmail.com`. In **Settings → Payments**, choose and verify a provider that accepts your desired Indian payment methods, including UPI if offered. Rahul reports that he is not GST registered; no GSTIN has been entered, and India currently shows **Not collecting**. Confirm the business's obligations with a qualified local adviser before launch. A paid Shopify plan may be required to remove the password and take real payments; Rahul must complete any plan purchase or payment-provider contract himself.
4. **Complete policies.** Set the accurate contact information, shipping policy, privacy policy, terms, and a custom-product cancellation/return policy under **Settings → Policies**. Check any generated text against how Printlet will actually operate. Do not publish promises about refunds, waterproofing, or delivery that have not been confirmed.
5. **Test a complete order.** Once manufacturing, shipping, payments, and policies are ready, activate the two products temporarily for testing. From a real phone, upload a photo, pick each shape/size/finish, add multiple A4 sheets, and check cart line-item properties and artwork link. At checkout confirm product subtotal, separate shipping charge, address/PIN behavior, tax display, and payment. Check the order in admin: artwork must open, and all options/count/quantity must be readable for fulfillment. Repeat with both products. If a test order is paid, refund/cancel it according to the chosen provider's process.
6. **Launch.** Verify `printlet.in` is connected with TLS and remains primary in **Settings → Domains**. **Printlet Studio is already the live theme behind the password.** Activate both products and remove the storefront password only after the full test order and physical count checks pass. Then recheck homepage, product pages, cart, and checkout on phone and desktop.

## Editing and fulfilling

**Edit copy and layout:** Open the theme editor link above. The Home page has a **Printlet home** section. Product links are selected there. For code changes, edit this directory and upload to the chosen theme ID with:

```sh
shopify theme check --fail-level error
shopify theme push --store printlet-in.myshopify.com --theme 192843776364 --nodelete
```

Avoid using `--unpublished` for updates: it creates another draft theme. A previous draft theme (`192843612524`) remains as a backup. The current deliverable is `192843776364`.

**Fulfil an order:** Open **Orders** in Shopify. Read the artwork file and the shape, size, finish, count, and A4 sheet quantity from the line item. Check the image has enough resolution and usable edges; contact the customer before printing if it does not. Prepare one repeated-design layout per ordered A4 sheet, with two independent A4 layouts per A3 Mega print. Ask Mega to print and kiss-cut. Cut each A3 into A4 halves, count/check the finished stickers, protect sheets from bending and moisture, buy the courier label, add tracking, and mark fulfilled. Keep the five-day estimate under review.

## Verification done so far

- `shopify theme check --fail-level error`: passed, with warnings from Dawn and the custom templates.
- Theme JSON parsed and custom JavaScript passed `node --check`.
- Shopify theme editor visually checked on desktop and mobile. Mobile product options switched correctly from circle/25 mm/54 to rectangle/50 × 25 mm/30.
- Both draft products and the India-only active market were checked in Shopify admin.
- GoDaddy DNS changes saved successfully. Shopify confirms the records point to it globally and TLS is provisioned.

The cart/upload/checkout test and physical samples remain launch gates.

The live theme was switched from Horizon to Printlet Studio on 7 October 2026. The storefront password remains enabled so Rahul can review the site at `printlet.in` without making the store publicly accessible.
