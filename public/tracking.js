// tracking.js - Academia Tekoha
// DataLayer Push para rastreamento de conversões via GTM
(function() {
    'use strict';
    
    // Inicializar dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // Função auxiliar para push no dataLayer
    function pushEvent(eventData) {
        window.dataLayer.push(eventData);
        console.log('DataLayer Event:', eventData); // Para debug
    }
    
    // ========================================
    // CONVERSÕES PRIMÁRIAS - Nextfit/Planos
    // ========================================
    
    // CTA "Começar Agora" (Hero Section)
    const ctaHero = document.querySelector('a[href*="venda.nextfit"][href*="contratos"]');
    if (ctaHero && ctaHero.textContent.includes('Começar Agora')) {
        ctaHero.addEventListener('click', function() {
            pushEvent({
                'event': 'generate_lead',
                'eventCategory': 'lead',
                'eventLabel': 'cta_hero_comecar_agora',
                'eventValue': 1,
                'leadType': 'primary',
                'leadSource': 'hero_cta',
                'ctaLocation': 'hero_section',
                'ctaText': 'Começar Agora',
                'destinationURL': 'nextfit_platform'
            });
        });
    }
    
    // Menu "Planos" (se existir)
    const menuPlanos = document.querySelector('nav a[href*="venda.nextfit"]');
    if (menuPlanos) {
        menuPlanos.addEventListener('click', function() {
            pushEvent({
                'event': 'generate_lead',
                'eventCategory': 'lead',
                'eventLabel': 'menu_planos',
                'eventValue': 1,
                'leadType': 'primary',
                'leadSource': 'menu_navigation',
                'ctaLocation': 'header_menu',
                'ctaText': 'Planos',
                'destinationURL': 'nextfit_platform'
            });
        });
    }
    
    // ========================================
    // CONVERSÕES SECUNDÁRIAS - WhatsApp
    // ========================================
    
    // WhatsApp "Fale Conosco" (Hero)
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(function(link) {
        if (link.textContent.includes('Fale Conosco')) {
            link.addEventListener('click', function() {
                pushEvent({
                    'event': 'generate_lead',
                    'eventCategory': 'lead',
                    'eventLabel': 'whatsapp_fale_conosco',
                    'eventValue': 0.7,
                    'leadType': 'secondary',
                    'leadSource': 'hero_whatsapp',
                    'ctaLocation': 'hero_section',
                    'ctaText': 'Fale Conosco',
                    'contactMethod': 'whatsapp',
                    'whatsappNumber': '5511984443048'
                });
            });
        }
    });
    
    // WhatsApp "Agendar Aula Gratuita" (Footer CTA)
    whatsappLinks.forEach(function(link) {
        if (link.textContent.includes('Agendar Aula Gratuita')) {
            link.addEventListener('click', function() {
                pushEvent({
                    'event': 'generate_lead',
                    'eventCategory': 'lead',
                    'eventLabel': 'whatsapp_aula_gratuita',
                    'eventValue': 0.8,
                    'leadType': 'secondary',
                    'leadSource': 'footer_cta',
                    'ctaLocation': 'pre_footer',
                    'ctaText': 'Agendar Aula Gratuita',
                    'contactMethod': 'whatsapp',
                    'whatsappNumber': '5511984443048',
                    'offerType': 'free_trial_class'
                });
            });
        }
    });
    
    // ========================================
    // CONTATOS DIRETOS
    // ========================================
    
    // Telefone
    const telefoneLinks = document.querySelectorAll('a[href^="tel:"]');
    telefoneLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const section = link.closest('section');
            const location = section ? section.id || 'section_unknown' : 'unknown';
            
            pushEvent({
                'event': 'contact',
                'eventCategory': 'contact',
                'eventLabel': 'phone_click',
                'eventValue': 0.5,
                'contactMethod': 'phone',
                'phoneNumber': link.href.replace('tel:', ''),
                'ctaLocation': location
            });
        });
    });
    
    // Email
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const section = link.closest('section');
            const location = section ? section.id || 'section_unknown' : 'unknown';
            
            pushEvent({
                'event': 'contact',
                'eventCategory': 'contact',
                'eventLabel': 'email_click',
                'eventValue': 0.4,
                'contactMethod': 'email',
                'emailAddress': link.href.replace('mailto:', ''),
                'ctaLocation': location
            });
        });
    });
    
    // ========================================
    // EVENTOS DE ENGAJAMENTO (OPCIONAL)
    // ========================================
    
    // Links para Instagram
    const instagramLinks = document.querySelectorAll('a[href*="instagram.com"]');
    instagramLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            pushEvent({
                'event': 'social_click',
                'eventCategory': 'social',
                'eventLabel': 'instagram_click',
                'socialNetwork': 'instagram',
                'linkText': link.textContent.trim() || link.getAttribute('aria-label'),
                'linkURL': link.href
            });
        });
    });
    
    // Links para Facebook
    const facebookLinks = document.querySelectorAll('a[href*="facebook.com"]');
    facebookLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            pushEvent({
                'event': 'social_click',
                'eventCategory': 'social',
                'eventLabel': 'facebook_click',
                'socialNetwork': 'facebook',
                'linkText': link.textContent.trim() || link.getAttribute('aria-label'),
                'linkURL': link.href
            });
        });
    });
    
    console.log('Academia Tekoha - Tracking inicializado');
})();
