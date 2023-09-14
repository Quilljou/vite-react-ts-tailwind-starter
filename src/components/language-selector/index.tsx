import { useTranslation } from 'react-i18next'
import { useCallback, useMemo } from 'react'
import { Popover, PopoverArrow, PopoverContent, PopoverTrigger } from '../ui/popover'
import { cn } from 'src/lib/utils'
import { LANGUAGES } from 'src/i18n/config'
import { Languages, ChevronDown } from 'lucide-react'
import i18next from 'i18next'

const getLocaleDisplayName = (locale: string, displayLocale?: string) => {
  const displayName = new Intl.DisplayNames([displayLocale || locale], {
    type: 'language',
  }).of(locale)!
  return displayName.charAt(0).toLocaleUpperCase() + displayName.slice(1)
}

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const localesAndNames = useMemo(() => {
    return LANGUAGES.map((locale) => ({
      locale,
      name: getLocaleDisplayName(locale),
    }))
  }, [])

  const languageChanged = useCallback(async (locale: any) => {
    i18next.changeLanguage(locale)
  }, [])

  const { resolvedLanguage: currentLanguage } = i18n

  return (
    <div className="flex items-end">
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-1 fill-black text-black">
            <Languages size={18} />
            {currentLanguage && getLocaleDisplayName(currentLanguage)}
            <ChevronDown size={12} />
          </div>
        </PopoverTrigger>

        <PopoverContent className="absolute mt-1 max-h-60 w-auto overflow-auto rounded-md bg-white p-0 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {localesAndNames.map(({ locale, name }) => {
            const isSelected = currentLanguage === locale
            return (
              <div
                key={locale}
                onClick={() => languageChanged(locale)}
                className={cn(`relative w-auto cursor-pointer select-none px-4 py-2 text-black hover:bg-zinc-200`)}
              >
                <span className={cn(`block truncate`, isSelected && 'font-bold text-primary')}>{name}</span>
              </div>
            )
          })}
          <PopoverArrow />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { LanguageSelector }
