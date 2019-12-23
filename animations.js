// Credit goes to https://codepen.io/joshbader/pen/EjXgqr

const THUNDER_STORM = `<div class="icon thunder-storm">
<div class="cloud"></div>
<div class="lightning">
  <div class="bolt"></div>
  <div class="bolt"></div>
</div>
</div>`;

const CLOUDY = `<div class="icon cloudy">
<div class="cloud"></div>
<div class="cloud"></div>
</div>`;

const SUNNY = `<div class="icon sunny">
<div class="sun">
  <div class="rays"></div>
</div>
</div>`;

const RAINY = `<div class="icon rainy">
<div class="cloud"></div>
<div class="rain"></div>
</div>`;

const SNOWY = `<div class="icon flurries">
<div class="cloud"></div>
<div class="snow">
  <div class="flake"></div>
  <div class="flake"></div>
</div>
</div>`;

const WEATHER = {
  Thunderstorm: THUNDER_STORM,
  Drizzle: RAINY,
  Rain: RAINY,
  Snow: SNOWY,
  Clear: SUNNY,
  Clouds: CLOUDY
};
