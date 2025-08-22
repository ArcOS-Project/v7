import { AdminScopeCaptions, AdminScopes } from "./store";

export function scopeToScopeCaption(scope: string) {
  const key = Object.entries(AdminScopes)
    .filter(([_, s]) => scope === s)
    .map(([k]) => k)[0];

  return key ? AdminScopeCaptions[key] || scope : scope;
}
