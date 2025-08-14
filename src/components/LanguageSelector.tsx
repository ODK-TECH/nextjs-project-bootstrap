"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { availableLocales, getLocaleStrings, LocaleStrings } from '@/lib/locales';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface LanguageContextType {
  currentLocale: string;
  setLocale: (locale: string) => void;
  strings: LocaleStrings;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLocale, setCurrentLocale] = useState('en');
  const [strings, setStrings] = useState(getLocaleStrings('en'));

  useEffect(() => {
    // Load saved language preference from localStorage
    try {
      const savedLocale = localStorage.getItem('preferred-language');
      if (savedLocale && availableLocales.some(locale => locale.code === savedLocale)) {
        setCurrentLocale(savedLocale);
        setStrings(getLocaleStrings(savedLocale));
      }
    } catch (error) {
      console.warn('Failed to load language preference:', error);
    }
  }, []);

  const setLocale = (locale: string) => {
    try {
      setCurrentLocale(locale);
      setStrings(getLocaleStrings(locale));
      localStorage.setItem('preferred-language', locale);
    } catch (error) {
      console.warn('Failed to save language preference:', error);
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLocale, setLocale, strings }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function LanguageSelector() {
  const { currentLocale, setLocale, strings } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">
        {strings.language}:
      </span>
      <Select value={currentLocale} onValueChange={setLocale}>
        <SelectTrigger className="w-32">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {availableLocales.map((locale) => (
            <SelectItem key={locale.code} value={locale.code}>
              {locale.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
