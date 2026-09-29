// Microsoft Clarity (heatmaps + session recordings) for the lp-ops improvement loop.
// Empty = disabled: no script is emitted and the privacy policy does not list it.
// To enable, set the project ID from clarity.microsoft.com (Settings > Overview)
// and bump the privacy policy 改定日 in the same change.
export const CLARITY_PROJECT_ID = "";

export const CLARITY_ENABLED = CLARITY_PROJECT_ID.length > 0;
