import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

export function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    // Standard tags
    document.title = title;

    // Helper function to update meta tags safely
    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute("content", content);
      }
    };

    // Update standard description
    updateMetaTag('meta[name="description"]', description);

    // Update Open Graph (Facebook/LinkedIn)
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);

    // Update Twitter Cards
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);

  }, [title, description]);
}
