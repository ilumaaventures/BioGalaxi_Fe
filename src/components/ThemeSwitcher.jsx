import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    themeId,
    setThemeId,
    allThemes,
    theme,
    heroWhiteSide,
    setHeroWhiteSide,
    heroGradient,
    setHeroGradient,
  } = useTheme();
  const panelRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={panelRef} className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          background: theme.primary,
          boxShadow: `0 8px 25px ${theme.primary}55`,
        }}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full text-white font-bold text-xs shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/20 select-none group"
        aria-label="Toggle Color Theme Switcher"
      >
        <Palette size={16} className="text-white group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline tracking-wider uppercase text-[11px]">
          Theme Colors
        </span>
        <span
          className="w-2.5 h-2.5 rounded-full ring-2 ring-white/60 animate-pulse"
          style={{ background: theme.accent }}
        />
      </button>

      {/* Flyout Theme Picker Popover */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[320px] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div
            style={{ background: theme.primary }}
            className="p-4 text-white flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/15"
                style={{ color: theme.accent }}
              >
                <Palette size={16} />
              </div>
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                  Color Themes
                </h4>
                <p className="text-[10px] text-white/80">
                  Switch live palette across the website
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close theme switcher"
            >
              <X size={15} />
            </button>
          </div>

          {/* Hero Section Controls (Direction & Gradient) */}
          <div className="px-3.5 py-2.5 bg-slate-50 border-b border-slate-100 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-700">
                Hero Section Controls
              </span>
              <span className="text-[8.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 bg-slate-200/80 text-slate-600 rounded">
                Hero Only
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {/* White Side Switch: Left vs Right */}
              <div className="flex flex-col gap-1">
                <span className="text-[9.5px] font-semibold text-slate-500">White Side</span>
                <div className="flex bg-white rounded-lg p-0.5 border border-slate-200 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setHeroWhiteSide('left')}
                    className={`flex-1 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                      heroWhiteSide === 'left'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Left
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroWhiteSide('right')}
                    className={`flex-1 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                      heroWhiteSide === 'right'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Right
                  </button>
                </div>
              </div>

              {/* Gradient Transition Style: Gradient vs Solid */}
              <div className="flex flex-col gap-1">
                <span className="text-[9.5px] font-semibold text-slate-500">Transition</span>
                <div className="flex bg-white rounded-lg p-0.5 border border-slate-200 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setHeroGradient(true)}
                    className={`flex-1 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                      heroGradient
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Gradient
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroGradient(false)}
                    className={`flex-1 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                      !heroGradient
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Solid
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Theme List */}
          <div className="p-3 max-h-[420px] overflow-y-auto space-y-3">
            
            {/* Category 1: Official Brand Design System */}
            <div>
              <div className="flex items-center justify-between px-2 mb-1.5">
                <span className="text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-purple-900/70">
                  Official Brand Palettes
                </span>
                <span className="text-[8.5px] font-bold uppercase tracking-wider px-1.5 py-0.2 bg-purple-100 text-purple-700 rounded">
                  Brand Spec
                </span>
              </div>

              <div className="space-y-1">
                {allThemes
                  .filter((t) => t.isOfficial)
                  .map((item) => {
                    const isCurrent = item.id === themeId;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setThemeId(item.id);
                        }}
                        className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                          isCurrent
                            ? 'bg-purple-50/90 ring-1 ring-purple-300 shadow-xs'
                            : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {/* Swatch Preview Dots */}
                          <div className="flex items-center -space-x-1.5 flex-shrink-0">
                            <div
                              className="w-5 h-5 rounded-full border-2 border-white shadow-xs"
                              style={{ background: item.previewPrimary }}
                            />
                            <div
                              className="w-4 h-4 rounded-full border-2 border-white shadow-xs"
                              style={{ background: item.previewAccent }}
                            />
                          </div>

                          <div className="flex flex-col">
                            <span
                              className={`text-[11.5px] font-semibold leading-tight ${
                                isCurrent ? 'text-purple-950 font-bold' : 'text-slate-800'
                              }`}
                            >
                              {item.name}
                            </span>
                            <span className="text-[9px] text-slate-400 font-normal">
                              {item.previewPrimary} + {item.previewAccent}
                            </span>
                          </div>
                        </div>

                        {isCurrent && (
                          <div
                            className="w-4.5 h-4.5 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-xs"
                            style={{ background: item.previewAccent }}
                          >
                            <Check size={10} strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Category 2: Curated Alternate Palettes */}
            <div className="pt-2 border-t border-slate-100">
              <div className="px-2 mb-1.5">
                <span className="text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                  More Curated Palettes
                </span>
              </div>

              <div className="space-y-1">
                {allThemes
                  .filter((t) => !t.isOfficial)
                  .map((item) => {
                    const isCurrent = item.id === themeId;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setThemeId(item.id);
                        }}
                        className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                          isCurrent
                            ? 'bg-slate-100/90 ring-1 ring-slate-300 shadow-xs'
                            : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {/* Swatch Preview Dots */}
                          <div className="flex items-center -space-x-1.5 flex-shrink-0">
                            <div
                              className="w-4.5 h-4.5 rounded-full border-2 border-white shadow-xs"
                              style={{ background: item.previewPrimary }}
                            />
                            <div
                              className="w-3.5 h-3.5 rounded-full border-2 border-white shadow-xs"
                              style={{ background: item.previewAccent }}
                            />
                          </div>

                          <span
                            className={`text-[11.5px] font-semibold ${
                              isCurrent ? 'text-slate-900 font-bold' : 'text-slate-700'
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>

                        {isCurrent && (
                          <div
                            className="w-4.5 h-4.5 rounded-full flex items-center justify-center text-white flex-shrink-0"
                            style={{ background: item.previewAccent }}
                          >
                            <Check size={10} strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    );
                  })}
              </div>
            </div>

          </div>

          {/* Footer note */}
          <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-center">
            <span className="text-[10px] text-slate-500 font-medium">
              Selection is saved automatically
            </span>
          </div>

        </div>
      )}

    </div>
  );
}
