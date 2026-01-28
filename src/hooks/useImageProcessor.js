const API_URL = import.meta.env.VITE_API_URL;

const processUrl = (url) => {
  if (!url || typeof url !== 'string') return url;
  return url.startsWith('http') ? url : API_URL + url;
};

const processPage = (page) => {
  if (!page) return page;
  
  const processed = { ...page };

  if (page.images && Array.isArray(page.images)) {
    processed.images = page.images.map(img => {
      if (typeof img === 'string') return processUrl(img);
      if (img?.src) return processUrl(img.src);
      return null;
    }).filter(Boolean);
  }

  if (page.image) processed.image = processUrl(page.image);
  if (page.partnerImage) processed.partnerImage = processUrl(page.partnerImage);
  if (page.partnerLogo) processed.partnerLogo = processUrl(page.partnerLogo);
  if (page.logo) processed.logo = processUrl(page.logo);
  if (page.dec_image) processed.dec_image = processUrl(page.dec_image);

  if (page.partners && Array.isArray(page.partners)) {
    processed.partners = page.partners.map(partner => ({
      ...partner,
      logo: processUrl(partner.logo)
    }));
  }

  return processed;
};

export const transformBackendData = (backendData) => {
  if (!backendData?.data) return [];

  return backendData.data.map((section) => {
    const result = { section: section.section };

    if (section.page) {
      result.page = processPage(section.page);
    }

    if (section.pages?.length > 0) {
      result.pages = section.pages.map(processPage);
    }

    return result;
  });
};

export const collectImages = (sections) => {
  const images = [];
  
  const addImage = (img) => {
    if (img && typeof img === 'string' && img.trim()) {
      images.push(img);
    }
  };

  sections.forEach(section => {
    if (section.page) {
      if (Array.isArray(section.page.images)) {
        section.page.images.forEach(addImage);
      }
      addImage(section.page.image);
      addImage(section.page.logo);
      addImage(section.page.partnerImage);
      addImage(section.page.partnerLogo);
      addImage(section.page.dec_image);
    }

    if (section.pages) {
      section.pages.forEach(page => {
        if (Array.isArray(page.images)) {
          page.images.forEach(addImage);
        }
        addImage(page.image);
        addImage(page.logo);
        addImage(page.partnerImage);
        addImage(page.partnerLogo);
        addImage(page.dec_image);

        if (page.partners && Array.isArray(page.partners)) {
          page.partners.forEach(partner => addImage(partner.logo));
        }
      });
    }
  });

  return images;
};
