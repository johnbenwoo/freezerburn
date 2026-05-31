# Freezerburn

Freezerburn is a small static prototype for planning when subscriptions should be active across the year. It combines a calendar-style subscription schedule, spending heatmap, and simulated virtual cards that can be "frozen" when a service is inactive.

## What It Does

- Tracks subscriptions across categories like streaming, software, fitness, news, gaming, and lifestyle.
- Shows active months and estimated yearly savings.
- Simulates per-service virtual cards for a more concrete product concept.
- Saves calendar and card freeze state locally in the browser.
- Runs entirely in the browser with no backend or build step.

## Run Locally

Open `index.html` in a browser.

For a local web server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

The virtual card numbers are randomly generated sample data for the prototype only. This is not connected to any payment provider.
