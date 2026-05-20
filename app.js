/**
 * National debt: Senate JEC gross national debt, May 5, 2026.
 * YoY increase $2.70T => linear $/second for real-time display.
 */
const NATIONAL = {
  anchorMs: Date.parse("2026-05-05T00:00:00.000Z"),
  anchorDollars: 38_910_000_000_000,
  dollarsPerYear: 2_700_000_000_000,
};

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;
const NATIONAL_PER_MS = NATIONAL.dollarsPerYear / MS_PER_YEAR;

/**
 * Luca debt: $95.50 at anchor, 10% per calendar month (30.4375-day average month).
 */
const LUCA = {
  anchorMs: Date.parse("2026-05-20T00:00:00.000Z"),
  anchorValue: 95.50,
  monthlyMultiplier: 1.1,
};

const NATIONAL_FRAC_DIGITS = 2;
const LUCA_FRAC_DIGITS = 8;

const MS_PER_MONTH = (365.25 / 12) * 24 * 60 * 60 * 1000;
const LUCA_LN_PER_MS = Math.log(LUCA.monthlyMultiplier) / MS_PER_MONTH;

const nationalEl = document.getElementById("national-debt");
const lucaEl = document.getElementById("luca-debt");
const nationalRateEl = document.getElementById("national-rate");
const lucaRateEl = document.getElementById("luca-rate");

/** Integer part with thousands separators; fractional part padded to `fracDigits`. */
function formatSplit(value, fracDigits) {
  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(value);
  const whole = Math.floor(abs);
  const frac = abs - whole;
  const wholeStr = whole.toLocaleString("en-US");
  let fracStr = frac.toFixed(fracDigits).slice(2);
  if (fracStr.length < fracDigits) {
    fracStr = fracStr.padEnd(fracDigits, "0");
  }
  return { sign, wholeStr, fracStr };
}

function nationalDebtAt(nowMs) {
  const elapsed = nowMs - NATIONAL.anchorMs;
  return NATIONAL.anchorDollars + elapsed * NATIONAL_PER_MS;
}

function lucaDebtAt(nowMs) {
  const elapsed = nowMs - LUCA.anchorMs;
  if (elapsed <= 0) return LUCA.anchorValue;
  return LUCA.anchorValue * Math.exp(LUCA_LN_PER_MS * elapsed);
}

function renderNational(nowMs) {
  const dollars = nationalDebtAt(nowMs);
  const { sign, wholeStr, fracStr } = formatSplit(dollars, NATIONAL_FRAC_DIGITS);
  nationalEl.textContent = `${sign}${wholeStr}.${fracStr}`;
  const perSec = NATIONAL.dollarsPerYear / (MS_PER_YEAR / 1000);
  nationalRateEl.textContent = `+$${perSec.toLocaleString("en-US", { maximumFractionDigits: 2 })}/sec`;
}

function renderLuca(nowMs) {
  const value = lucaDebtAt(nowMs);
  const { sign, wholeStr, fracStr } = formatSplit(value, LUCA_FRAC_DIGITS);
  lucaEl.textContent = `${sign}${wholeStr}.${fracStr}`;
  const perSec = LUCA.anchorValue * LUCA_LN_PER_MS * 1000 * Math.exp(LUCA_LN_PER_MS * Math.max(0, nowMs - LUCA.anchorMs));
  lucaRateEl.textContent = `+$${perSec.toFixed(6)}/sec (at current value)`;
}

function tick() {
  const now = performance.timeOrigin + performance.now();
  renderNational(now);
  renderLuca(now);
  requestAnimationFrame(tick);
}

tick();
