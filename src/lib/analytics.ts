/**
 * Bionic Analytics — Unified Event Tracking
 * Naming Convention: snake_case, prefixed by event category.
 *
 * Integration: Google Tag Manager → Google Analytics 4 + LinkedIn Insight Tag
 * GTM Container ID: GTM-XXXXXXX (replace with actual ID in index.html)
 */

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Ensure dataLayer exists
if (typeof window !== 'undefined' && !window.dataLayer) {
  window.dataLayer = [];
}

// ═══ CTA Events ═══

export function trackCTAClick(location: 'hero' | 'section' | 'footer' | 'sticky' | 'mega_menu', destination: string) {
  window.dataLayer?.push({
    event: 'cta_click',
    cta_location: location,
    cta_destination: destination,
  });
}

export function trackExecutiveBriefingClick(location: string) {
  window.dataLayer?.push({
    event: 'executive_briefing_click',
    cta_location: location,
  });
}

// ═══ Page View Events ═══

export function trackPageView(category: string, label?: string) {
  window.dataLayer?.push({
    event: 'page_view_custom',
    page_category: category,
    page_label: label || '',
  });
}

export function trackCapabilityPageView(capability: string) {
  window.dataLayer?.push({
    event: 'capability_page_view',
    capability_name: capability,
  });
}

export function trackIndustryPageView(industry: string) {
  window.dataLayer?.push({
    event: 'industry_page_view',
    industry_name: industry,
  });
}

export function trackServicePageView(service: string) {
  window.dataLayer?.push({
    event: 'service_page_view',
    service_name: service,
  });
}

export function trackBlueprintView(blueprint: string) {
  window.dataLayer?.push({
    event: 'blueprint_view',
    blueprint_name: blueprint,
  });
}

// ═══ Form Events ═══

export function trackFormStarted() {
  window.dataLayer?.push({
    event: 'executive_briefing_started',
  });
}

export function trackFormSubmitted(industry: string, priority: string, size: string) {
  window.dataLayer?.push({
    event: 'executive_briefing_submitted',
    industry,
    briefing_type: priority,
    organization_size: size,
  });
}

// ═══ Engagement Events ═══

export function trackArchitectureView() {
  window.dataLayer?.push({
    event: 'architecture_view',
  });
}

export function trackValueSystemView() {
  window.dataLayer?.push({
    event: 'value_system_view',
  });
}

export function trackBlueprintHubView() {
  window.dataLayer?.push({
    event: 'blueprint_hub_view',
  });
}
