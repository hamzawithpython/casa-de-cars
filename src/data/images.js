/**
 * All imagery is centralised here so it's trivial to swap later —
 * point these at your own CDN, an /assets folder, or a backend-served
 * media library without touching any component.
 *
 * These currently reference the original deployed site's public image
 * host as placeholders. Replace each value with your own asset path
 * (e.g. "/assets/cars/audi-a3.jpg") when you have final photography.
 */

const BASE =
  "https://wstvr-0e6hswvday7vkc9tskg6vzxf7w.draft.repaint.com/profile";

export const images = {
  logo: `${BASE}/casa-de-cars-logo-d6a1e.jpg`,

  audiA3: `${BASE}/audi-a3-showroom-detailing-a8338.jpg`,
  kiaSportageShowroom: `${BASE}/white-kia-sportage-showroom-2b2d8.jpg`,
  kiaSportageInterior: `${BASE}/kia-sportage-interior-detailing-ac06a.jpg`,
  kiaSportageStudio: `${BASE}/white-kia-sportage-detailing-758ba.jpg`,
  kiaSportageDetailing: `${BASE}/kia-sportage-detailing-showroom-75645.jpg`,
  whiteCarGlossyHood: `${BASE}/white-car-glossy-hood-detailing-d9589.jpg`,
  blackHondaCity: `${BASE}/black-honda-city-detailing-70a56.jpg`,
  redHondaCity: `${BASE}/red-honda-city-showroom-60127.jpg`,
  whiteHondaCivic: `${BASE}/white-honda-civic-showroom-d99f3.jpg`,
  nissanNoteEngine: `${BASE}/nissan-note-engine-wash-garage-7169b.jpg`,
  whiteHyundaiSedan: `${BASE}/white-hyundai-sedan-showroom-c0854.jpg`,
  blackToyotaVitz: `${BASE}/black-toyota-vitz-showroom-497ce.jpg`,
  corollaAltisDetailing: `${BASE}/toyota-corolla-altis-detailing-34d02.jpg`,
  corollaAltisWhite: `${BASE}/white-toyota-corolla-detailing-761e5.jpg`,
  miniCooperBlack: `${BASE}/black-mini-cooper-detailing-ed6c9.jpg`,
  daihatsuMira: `${BASE}/red-daihatsu-mira-showroom-da220.jpg`,
  carInteriorRearSeats: `${BASE}/car-interior-rear-seats-43a6f.jpg`,
  nightDriveDashboard: `${BASE}/night-drive-dashboard-view-bbe80.jpg`,
  driverInsideCarNight: `${BASE}/driver-inside-car-night-65151.jpg`,
  celebrationCake: `${BASE}/casa-de-cars-celebration-cake-265c2.jpg`,
  renovationDayFive: `${BASE}/renovation-progress-day-five-896cd.jpg`,
  manLeaningCarNight: `${BASE}/man-leaning-car-night-a5b97.jpg`,
  taimooriii: `${BASE}/taimooriii-car-detailing-shop-a998c.jpg`,
};
