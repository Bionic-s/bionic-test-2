#!/usr/bin/env python3
"""Generate sitemap.xml for bionic-solutions.com.sa"""
from datetime import datetime

SITE = "https://www.bionic-solutions.com.sa"
TODAY = datetime.utcnow().strftime("%Y-%m-%d")

pages = [
    # (en_path, ar_path, priority)
    ("/", "/ar", "1.0"),
    ("/about", "/ar/about", "0.9"),
    ("/services", "/ar/services", "0.9"),
    ("/services/advisory", "/ar/services/advisory", "0.7"),
    ("/services/implementation", "/ar/services/implementation", "0.7"),
    ("/services/operations", "/ar/services/operations", "0.7"),
    ("/partners", "/ar/partners", "0.8"),
    ("/architecture", "/ar/architecture", "0.8"),
    ("/value", "/ar/value", "0.8"),
    ("/blueprints", "/ar/blueprints", "0.8"),
    ("/contact", "/ar/contact", "0.7"),
    ("/book-discovery-call", "/ar/book-discovery-call", "0.6"),
    ("/capabilities/ai", "/ar/capabilities/ai", "0.8"),
    ("/capabilities/data", "/ar/capabilities/data", "0.8"),
    ("/capabilities/apps", "/ar/capabilities/apps", "0.8"),
    ("/capabilities/integration", "/ar/capabilities/integration", "0.8"),
    ("/capabilities/cyber", "/ar/capabilities/cyber", "0.8"),
    ("/capabilities/infra", "/ar/capabilities/infra", "0.8"),
    ("/capabilities/ops", "/ar/capabilities/ops", "0.8"),
    ("/industries/government", "/ar/industries/government", "0.7"),
    ("/industries/banking", "/ar/industries/banking", "0.7"),
    ("/industries/oil-gas", "/ar/industries/oil-gas", "0.7"),
    ("/industries/healthcare", "/ar/industries/healthcare", "0.7"),
    ("/industries/enterprise", "/ar/industries/enterprise", "0.7"),
    ("/industries/telecom", "/ar/industries/telecom", "0.7"),
    ("/industries/retail", "/ar/industries/retail", "0.7"),
    ("/industries/manufacturing", "/ar/industries/manufacturing", "0.7"),
    ("/industries/logistics", "/ar/industries/logistics", "0.7"),
    ("/thank-you", "/ar/thank-you", "0.3"),
    ("/privacy", "/ar/privacy", "0.3"),
    ("/terms-of-use", "/ar/terms-of-use", "0.3"),
    ("/cookie-policy", "/ar/cookie-policy", "0.3"),
]

# Blueprint pages
blueprints = [
    "sovereign-ai-platform", "inter-ministry-data-fabric", "national-soc",
    "customer-360-intelligent-engagement", "real-time-fraud-detection",
    "sama-compliant-banking-infra", "industrial-intelligence-predictive-ops",
    "ot-it-integration-secure-ops", "intelligent-patient-experience",
    "clinical-intelligence-medical-ai", "agentic-workforce-transformation",
    "enterprise-zero-trust", "sovereign-ai-node", "enterprise-ai-agents",
    "5g-monetization-telco-cloud", "intelligent-commerce-omnichannel",
    "smart-factory-industry-4", "connected-logistics-fleet-intelligence",
    "zatca-e-invoicing-compliance", "cyber-recovery-vault",
    "pdpl-data-governance", "consumption-based-infrastructure",
    "emissions-intelligence", "sovereign-private-cloud",
    "vmware-exit-private-cloud", "sama-resilience-compliance",
    "storage-modernization-virtualize",
]

xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
'''

for en, ar, prio in pages:
    xml += f'''  <url>
    <loc>{SITE}{en}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="{SITE}{en}"/>
    <xhtml:link rel="alternate" hreflang="ar" href="{SITE}{ar}"/>
    <lastmod>{TODAY}</lastmod>
    <priority>{prio}</priority>
  </url>
  <url>
    <loc>{SITE}{ar}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="{SITE}{en}"/>
    <xhtml:link rel="alternate" hreflang="ar" href="{SITE}{ar}"/>
    <lastmod>{TODAY}</lastmod>
    <priority>{prio}</priority>
  </url>
'''

for bp in blueprints:
    xml += f'''  <url>
    <loc>{SITE}/blueprints/{bp}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="{SITE}/blueprints/{bp}"/>
    <xhtml:link rel="alternate" hreflang="ar" href="{SITE}/ar/blueprints/{bp}"/>
    <lastmod>{TODAY}</lastmod>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>{SITE}/ar/blueprints/{bp}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="{SITE}/blueprints/{bp}"/>
    <xhtml:link rel="alternate" hreflang="ar" href="{SITE}/ar/blueprints/{bp}"/>
    <lastmod>{TODAY}</lastmod>
    <priority>0.6</priority>
  </url>
'''

xml += '</urlset>\n'

with open('/root/bionic-test-2/public/sitemap.xml', 'w') as f:
    f.write(xml)

print(f"✅ Sitemap generated: {len(pages)*2 + len(blueprints)*2} URLs")
print(f"🌐 Domain: {SITE}")