import { ReactInstance, Location } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(r360.createRoot('cinemoche', { }), r360.getDefaultSurface());

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg')).catch(console.error);

  // Render the cinemoche
  const location = new Location([0, -50, -100]);
  r360.renderToLocation(r360.createRoot('cinemocheModel', { }), location);
}

window.React360 = {init};