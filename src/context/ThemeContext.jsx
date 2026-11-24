import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = {
  // ================= BIO GALAXI OFFICIAL BRAND PALETTES =================
  'galaxy-purple-bio-green': {
    id: 'galaxy-purple-bio-green',
    name: 'Galaxy Purple & Bio Green',
    category: 'Brand Design System',
    isOfficial: true,
    primary: '#7628C7',
    primaryDark: '#561994',
    primaryDeep: '#2E0C4F',
    primaryHover: '#8A3BDC',
    accent: '#72C92B',
    accentHover: '#5FA822',
    softTint: '#EDE7FA', // Soft Lavender from spec
    borderTint: 'rgba(118, 40, 199, 0.2)',
    previewPrimary: '#7628C7',
    previewAccent: '#72C92B',
    brandGradient:
      'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 18%, #F4EDFA 19.5%, #E6D8F4 21%, #CFB3EB 22.5%, #B388E0 24%, #985DD5 25.5%, #8641CD 26.5%, #7B30C9 27.5%, #7628C7 28.5%, #7628C7 100%)',
    brandGradientReverse:
      'linear-gradient(90deg, #7628C7 0%, #7628C7 71.5%, #7B30C9 72.5%, #8641CD 73.5%, #985DD5 74.5%, #B388E0 76%, #CFB3EB 77.5%, #E6D8F4 79%, #F4EDFA 80.5%, #FFFFFF 82%, #FFFFFF 100%)',
    footerGradient: 'linear-gradient(to right, #2E0C4F, #561994, #7628C7)',
    calloutGradient: 'linear-gradient(135deg, #441175, #7628C7)',
    cardActiveGradient: 'linear-gradient(135deg, #441175, #7628C7)',
  },
  'bio-teal-green': {
    id: 'bio-teal-green',
    name: 'Teal & Bio Green',
    category: 'Brand Design System',
    isOfficial: true,
    primary: '#087F8C',
    primaryDark: '#055E68',
    primaryDeep: '#02373D',
    primaryHover: '#0A9EB0',
    accent: '#72C92B',
    accentHover: '#5FA822',
    softTint: '#EAF4FC', // Ice Blue from spec
    borderTint: 'rgba(8, 127, 140, 0.2)',
    previewPrimary: '#087F8C',
    previewAccent: '#72C92B',
    brandGradient:
      'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 18%, #EBF4F5 19.5%, #D2E7EA 21%, #A8D2D6 22.5%, #77B8BF 24%, #459FA8 25.5%, #258E99 26.5%, #118490 27.5%, #087F8C 28.5%, #087F8C 100%)',
    brandGradientReverse:
      'linear-gradient(90deg, #087F8C 0%, #087F8C 71.5%, #118490 72.5%, #258E99 73.5%, #459FA8 74.5%, #77B8BF 76%, #A8D2D6 77.5%, #D2E7EA 79%, #EBF4F5 80.5%, #FFFFFF 82%, #FFFFFF 100%)',
    footerGradient: 'linear-gradient(to right, #02373D, #055E68, #087F8C)',
    calloutGradient: 'linear-gradient(135deg, #055E68, #087F8C)',
    cardActiveGradient: 'linear-gradient(135deg, #055E68, #0A9EB0)',
  },
  'professional-blue-teal': {
    id: 'professional-blue-teal',
    name: 'Professional Blue & Teal',
    category: 'Brand Design System',
    isOfficial: true,
    primary: '#1769AA',
    primaryDark: '#0F4D7D',
    primaryDeep: '#092E4B',
    primaryHover: '#1D7FCB',
    accent: '#087F8C',
    accentHover: '#055E68',
    softTint: '#EAF4FC', // Ice Blue from spec
    borderTint: 'rgba(23, 105, 170, 0.2)',
    previewPrimary: '#1769AA',
    previewAccent: '#087F8C',
    brandGradient:
      'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 18%, #ECF3F8 19.5%, #D5E4EF 21%, #ADCAE1 22.5%, #7FACD0 24%, #518EBF 25.5%, #327BB4 26.5%, #206FAD 27.5%, #1769AA 28.5%, #1769AA 100%)',
    brandGradientReverse:
      'linear-gradient(90deg, #1769AA 0%, #1769AA 71.5%, #206FAD 72.5%, #327BB4 73.5%, #518EBF 74.5%, #7FACD0 76%, #ADCAE1 77.5%, #D5E4EF 79%, #ECF3F8 80.5%, #FFFFFF 82%, #FFFFFF 100%)',
    footerGradient: 'linear-gradient(to right, #092E4B, #0F4D7D, #1769AA)',
    calloutGradient: 'linear-gradient(135deg, #0F4D7D, #1769AA)',
    cardActiveGradient: 'linear-gradient(135deg, #0F4D7D, #1D7FCB)',
  },
  'galaxy-purple-teal': {
    id: 'galaxy-purple-teal',
    name: 'Galaxy Purple & Teal',
    category: 'Brand Design System',
    isOfficial: true,
    primary: '#7628C7',
    primaryDark: '#561994',
    primaryDeep: '#2E0C4F',
    primaryHover: '#8A3BDC',
    accent: '#087F8C',
    accentHover: '#055E68',
    softTint: '#EDE7FA', // Soft Lavender from spec
    borderTint: 'rgba(118, 40, 199, 0.2)',
    previewPrimary: '#7628C7',
    previewAccent: '#087F8C',
    brandGradient:
      'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 18%, #F4EDFA 19.5%, #E6D8F4 21%, #CFB3EB 22.5%, #B388E0 24%, #985DD5 25.5%, #8641CD 26.5%, #7B30C9 27.5%, #7628C7 28.5%, #7628C7 100%)',
    footerGradient: 'linear-gradient(to right, #2E0C4F, #561994, #7628C7)',
    calloutGradient: 'linear-gradient(135deg, #441175, #7628C7)',
    cardActiveGradient: 'linear-gradient(135deg, #441175, #7628C7)',
  },
  'professional-blue-green': {
    id: 'professional-blue-green',
    name: 'Professional Blue & Bio Green',
    category: 'Brand Design System',
    isOfficial: true,
    primary: '#1769AA',
    primaryDark: '#0F4D7D',
    primaryDeep: '#092E4B',
    primaryHover: '#1D7FCB',
    accent: '#72C92B',
    accentHover: '#5FA822',
    softTint: '#F5F7FC', // Cloud White from spec
    borderTint: 'rgba(23, 105, 170, 0.2)',
    previewPrimary: '#1769AA',
    previewAccent: '#72C92B',
    brandGradient:
      'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 18%, #ECF3F8 19.5%, #D5E4EF 21%, #ADCAE1 22.5%, #7FACD0 24%, #518EBF 25.5%, #327BB4 26.5%, #206FAD 27.5%, #1769AA 28.5%, #1769AA 100%)',
    footerGradient: 'linear-gradient(to right, #092E4B, #0F4D7D, #1769AA)',
    calloutGradient: 'linear-gradient(135deg, #0F4D7D, #1769AA)',
    cardActiveGradient: 'linear-gradient(135deg, #0F4D7D, #1D7FCB)',
  },

  // ================= CURATED PALETTES =================
  'royal-purple': {
    id: 'royal-purple',
    name: 'Royal Purple & Emerald',
    category: 'Curated Palettes',
    primary: '#4C1D95',
    primaryDark: '#3B1366',
    primaryDeep: '#1B062E',
    primaryHover: '#581C87',
    accent: '#10B981',
    accentHover: '#059669',
    softTint: '#F8F6FD',
    borderTint: 'rgba(109, 40, 217, 0.2)',
    previewPrimary: '#4C1D95',
    previewAccent: '#10B981',
    brandGradient:
      'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 18%, #F9F7FC 19.5%, #EAE4F2 21%, #CDC0E1 22.5%, #AE94CE 24%, #8D6ABD 25.5%, #6E44AA 26.5%, #56289B 27.5%, #4C1D95 28.5%, #4C1D95 100%)',
    footerGradient: 'linear-gradient(to right, #240A3E, #3B1366, #581C87)',
    calloutGradient: 'linear-gradient(135deg, #2E1065, #4C1D95)',
    cardActiveGradient: 'linear-gradient(135deg, #3B1366, #581C87)',
  },
  'ocean-navy': {
    id: 'ocean-navy',
    name: 'Ocean Navy & Electric Cyan',
    primary: '#1E3A8A',
    primaryDark: '#0F172A',
    primaryDeep: '#020617',
    primaryHover: '#1D4ED8',
    accent: '#06B6D4',
    accentHover: '#0891B2',
    softTint: '#F0F9FF',
    borderTint: 'rgba(30, 58, 138, 0.2)',
    previewPrimary: '#1E3A8A',
    previewAccent: '#06B6D4',
    brandGradient:
      'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 18%, #F0F9FF 19.5%, #E0F2FE 21%, #BAE6FD 22.5%, #7DD3FC 24%, #38BDF8 25.5%, #0284C7 26.5%, #0369A1 27.5%, #1E3A8A 28.5%, #1E3A8A 100%)',
    footerGradient: 'linear-gradient(to right, #020617, #0F172A, #1E3A8A)',
    calloutGradient: 'linear-gradient(135deg, #0F172A, #1E3A8A)',
    cardActiveGradient: 'linear-gradient(135deg, #0F172A, #1E40AF)',
  },
  'emerald-lime': {
    id: 'emerald-lime',
    name: 'Forest Emerald & Solar Lime',
    primary: '#065F46',
    primaryDark: '#064E3B',
    primaryDeep: '#022C22',
    primaryHover: '#047857',
    accent: '#84CC16',
    accentHover: '#65A30D',
    softTint: '#F0FDF4',
    borderTint: 'rgba(6, 95, 70, 0.2)',
    previewPrimary: '#065F46',
    previewAccent: '#84CC16',
    brandGradient:
      'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 18%, #F0FDF4 19.5%, #DCFCE7 21%, #BBF7D0 22.5%, #86EFAC 24%, #4ADE80 25.5%, #22C55E 26.5%, #16A34A 27.5%, #065F46 28.5%, #065F46 100%)',
    footerGradient: 'linear-gradient(to right, #022C22, #064E3B, #065F46)',
    calloutGradient: 'linear-gradient(135deg, #064E3B, #065F46)',
    cardActiveGradient: 'linear-gradient(135deg, #064E3B, #047857)',
  },
  'midnight-rose': {
    id: 'midnight-rose',
    name: 'Midnight Indigo & Rose Coral',
    primary: '#3730A3',
    primaryDark: '#312E81',
    primaryDeep: '#1E1B4B',
    primaryHover: '#4338CA',
    accent: '#F43F5E',
    accentHover: '#E11D48',
    softTint: '#FFF1F2',
    borderTint: 'rgba(55, 48, 163, 0.2)',
    previewPrimary: '#3730A3',
    previewAccent: '#F43F5E',
    brandGradient:
      'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 18%, #FFF1F2 19.5%, #FFE4E6 21%, #FECDD3 22.5%, #FDA4AF 24%, #FB7185 25.5%, #F43F5E 26.5%, #4338CA 27.5%, #3730A3 28.5%, #3730A3 100%)',
    footerGradient: 'linear-gradient(to right, #1E1B4B, #312E81, #3730A3)',
    calloutGradient: 'linear-gradient(135deg, #1E1B4B, #3730A3)',
    cardActiveGradient: 'linear-gradient(135deg, #312E81, #4338CA)',
  },
  'obsidian-teal': {
    id: 'obsidian-teal',
    name: 'Obsidian Onyx & Luminous Teal',
    primary: '#18181B',
    primaryDark: '#09090B',
    primaryDeep: '#000000',
    primaryHover: '#27272A',
    accent: '#14B8A6',
    accentHover: '#0D9488',
    softTint: '#F4F4F5',
    borderTint: 'rgba(39, 39, 42, 0.2)',
    previewPrimary: '#18181B',
    previewAccent: '#14B8A6',
    brandGradient:
      'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 18%, #F4F4F5 19.5%, #E4E4E7 21%, #D4D4D8 22.5%, #A1A1AA 24%, #71717A 25.5%, #3F3F46 26.5%, #27272A 27.5%, #18181B 28.5%, #18181B 100%)',
    footerGradient: 'linear-gradient(to right, #000000, #09090B, #18181B)',
    calloutGradient: 'linear-gradient(135deg, #09090B, #27272A)',
    cardActiveGradient: 'linear-gradient(135deg, #09090B, #18181B)',
  },
  'sapphire-amber': {
    id: 'sapphire-amber',
    name: 'Sapphire Blue & Warm Amber',
    primary: '#0F2C59',
    primaryDark: '#0B1E38',
    primaryDeep: '#061224',
    primaryHover: '#1E3A5F',
    accent: '#D97706',
    accentHover: '#B45309',
    softTint: '#FFFBEB',
    borderTint: 'rgba(15, 44, 89, 0.2)',
    previewPrimary: '#0F2C59',
    previewAccent: '#D97706',
    brandGradient:
      'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 18%, #FFFBEB 19.5%, #FEF3C7 21%, #FDE68A 22.5%, #FCD34D 24%, #FBBF24 25.5%, #1E3A5F 26.5%, #0F2C59 27.5%, #0F2C59 28.5%, #0F2C59 100%)',
    footerGradient: 'linear-gradient(to right, #061224, #0B1E38, #0F2C59)',
    calloutGradient: 'linear-gradient(135deg, #0B1E38, #0F2C59)',
    cardActiveGradient: 'linear-gradient(135deg, #0B1E38, #1E3A5F)',
  },
};

// Calculate dynamic hero background (White Left vs Right, Gradient vs Solid)
export function getHeroBackground(theme, whiteSide = 'left', hasGradient = true) {
  const primary = theme.primary;

  if (!hasGradient) {
    // Crisp solid 2-tone split (no gradient blend)
    if (whiteSide === 'right') {
      return `linear-gradient(90deg, ${primary} 0%, ${primary} 72%, #FFFFFF 72%, #FFFFFF 100%)`;
    }
    // Default: white on left (28%), solid theme color on right (72%)
    return `linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 28%, ${primary} 28%, ${primary} 100%)`;
  }

  // Smooth mathematical gradient
  if (whiteSide === 'right') {
    if (theme.brandGradientReverse) {
      return theme.brandGradientReverse;
    }
    return `linear-gradient(90deg, ${primary} 0%, ${primary} 71.5%, ${theme.softTint || '#F4EDFA'} 76%, #FFFFFF 82%, #FFFFFF 100%)`;
  }

  // Default: white on left with smooth eased gradient
  return theme.brandGradient;
}

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    try {
      return localStorage.getItem('biogalaxi_theme') || 'galaxy-purple-bio-green';
    } catch {
      return 'galaxy-purple-bio-green';
    }
  });

  const [heroWhiteSide, setHeroWhiteSide] = useState(() => {
    try {
      return localStorage.getItem('biogalaxi_hero_white_side') || 'left';
    } catch {
      return 'left';
    }
  });

  const [heroGradient, setHeroGradient] = useState(() => {
    try {
      const saved = localStorage.getItem('biogalaxi_hero_gradient');
      return saved !== null ? saved === 'true' : true;
    } catch {
      return true;
    }
  });

  const theme = THEMES[themeId] || THEMES['galaxy-purple-bio-green'];

  useEffect(() => {
    try {
      localStorage.setItem('biogalaxi_theme', themeId);
    } catch (e) {
      console.warn('Could not save theme to localStorage', e);
    }

    // Apply CSS variables to root document
    const root = document.documentElement;
    root.style.setProperty('--color-theme-primary', theme.primary);
    root.style.setProperty('--color-theme-primary-dark', theme.primaryDark);
    root.style.setProperty('--color-theme-primary-deep', theme.primaryDeep);
    root.style.setProperty('--color-theme-primary-hover', theme.primaryHover);
    root.style.setProperty('--color-theme-accent', theme.accent);
    root.style.setProperty('--color-theme-accent-hover', theme.accentHover);
    root.style.setProperty('--color-theme-soft-tint', theme.softTint);
  }, [themeId, theme]);

  useEffect(() => {
    try {
      localStorage.setItem('biogalaxi_hero_white_side', heroWhiteSide);
    } catch (e) {
      console.warn('Could not save heroWhiteSide to localStorage', e);
    }
  }, [heroWhiteSide]);

  useEffect(() => {
    try {
      localStorage.setItem('biogalaxi_hero_gradient', String(heroGradient));
    } catch (e) {
      console.warn('Could not save heroGradient to localStorage', e);
    }
  }, [heroGradient]);

  const heroBackground = getHeroBackground(theme, heroWhiteSide, heroGradient);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeId,
        setThemeId,
        allThemes: Object.values(THEMES),
        heroWhiteSide,
        setHeroWhiteSide,
        heroGradient,
        setHeroGradient,
        heroBackground,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
