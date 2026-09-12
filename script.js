<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Northeast India environmental risk assessment using a Random Forest model.">
  <title>Northeast India Environmental Risk Assessment</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<header class="hero">
  <div class="container">
    <div class="eyebrow">RISK ASSESSMENT · NORTHEAST INDIA</div>
    <h1>Environmental Risk Assessment</h1>
    <p>Browser-based prediction using the supplied Random Forest model.</p>
  </div>
</header>
<main class="container">
  <section class="card">
    <div class="section-heading">
      <div><span class="step">01</span><h2>Location</h2></div>
      <p>Select the location represented in the model.</p>
    </div>
    <div class="form-grid">
      <label>State<select id="state"><option value="">Select state</option></select></label>
      <label>District<select id="district" disabled><option value="">Select district</option></select></label>
      <label>Latitude<input id="latitude" type="number" step="any" placeholder="e.g. 26.1445"></label>
      <label>Longitude<input id="longitude" type="number" step="any" placeholder="e.g. 91.7362"></label>
    </div>
  </section>
  <section class="card">
    <div class="section-heading">
      <div><span class="step">02</span><h2>Environmental factors</h2></div>
      <p>Use values comparable with the model's training data.</p>
    </div>
    <div class="form-grid">
      <label>Movement history<input id="movement" type="number" min="0" step="1" placeholder="Number of previous movements"></label>
      <label>Annual rainfall normal (mm)<input id="rainfall" type="number" min="0" step="any" placeholder="e.g. 2500"></label>
      <label>Rainfall pattern<select id="rainfallPattern"><option value="">Select pattern</option></select></label>
      <label>Soil distribution<select id="soil"><option value="">Select soil</option></select></label>
      <label class="wide">Vegetation<select id="vegetation"><option value="">Select vegetation</option></select></label>
    </div>
    <div class="actions">
      <button id="predictButton" type="button">Predict risk</button>
      <span id="modelStatus" class="status">Loading model…</span>
    </div>
  </section>
  <section id="result" class="card result hidden" aria-live="polite">
    <div class="result-top">
      <div>
        <div class="eyebrow">MODEL RESULT</div>
        <h2 id="riskLabel">—</h2>
        <p id="riskDescription">—</p>
      </div>
      <div id="riskBadge" class="badge">—</div>
    </div>
    <div class="metric">
      <div class="metric-row"><span>Predicted risk probability</span><strong id="probability">0%</strong></div>
      <div class="progress"><div id="probabilityBar"></div></div>
    </div>
    <details>
      <summary>Prediction details</summary>
      <pre id="predictionDetails"></pre>
    </details>
  </section>
  <section class="notice">
    <strong>Important:</strong> This is a machine-learning output, not a substitute for field inspection, official warnings, or professional geotechnical assessment.
  </section>
</main>
<footer><div class="container">Northeast India Environmental Risk Assessment · GitHub Pages</div></footer>
<script src="script.js"></script>
</body>
</html>
