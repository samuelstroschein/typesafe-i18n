// This types were auto-generated. Any manual changes will be overwritten.
/* eslint-disable */

import type { LocalizedString } from 'typesafe-i18n'

export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'
	| 'it'

export type Translation = {
	/**
	 * app started
	 */
	'STARTUP': string
	/**
	 * choose locale...
	 */
	'CHOOSE_LOCALE': string
	/**
	 * Hello {name}!
	 * @param {string} name
	 */
	'HI': RequiredParams1<'name'>
	/**
	 * Visit the {link|linkToSvelteTutorial} to learn how to build Svelte apps.
	 * @param {string} link
	 */
	'TUTORIAL': RequiredParams1<'link|linkToSvelteTutorial'>
	/**
	 * Your name:
	 */
	'YOUR_NAME': string
	/**
	 * Selected locale:
	 */
	'SELECTED_LOCALE': string
	/**
	 * Today is {date|weekday}
	 * @param {Date} date
	 */
	'TODAY': RequiredParams1<'date|weekday'>
	/**
	 * Apples
	 */
	'APPLES_LABEL': string
	/**
	 * Bananas
	 */
	'BANANAS_LABEL': string
	/**
	 * I want to buy {nrOfApples|fallback0} apple{{s}} and {nrOfBananas|fallback0} banana{{s}}.
	 * @param {number} nrOfApples
	 * @param {number} nrOfBananas
	 */
	'FRUITS': RequiredParams2<'nrOfApples|fallback0', 'nrOfBananas|fallback0'>
}

export type TranslationFunctions = {
	/**
	 * app started
	 */
	'STARTUP': () => LocalizedString
	/**
	 * choose locale...
	 */
	'CHOOSE_LOCALE': () => LocalizedString
	/**
	 * Hello {name}!
	 */
	'HI': (arg: { name: string }) => LocalizedString
	/**
	 * Visit the {link|linkToSvelteTutorial} to learn how to build Svelte apps.
	 */
	'TUTORIAL': (arg: { link: string }) => LocalizedString
	/**
	 * Your name:
	 */
	'YOUR_NAME': () => LocalizedString
	/**
	 * Selected locale:
	 */
	'SELECTED_LOCALE': () => LocalizedString
	/**
	 * Today is {date|weekday}
	 */
	'TODAY': (arg: { date: Date }) => LocalizedString
	/**
	 * Apples
	 */
	'APPLES_LABEL': () => LocalizedString
	/**
	 * Bananas
	 */
	'BANANAS_LABEL': () => LocalizedString
	/**
	 * I want to buy {nrOfApples|fallback0} apple{{s}} and {nrOfBananas|fallback0} banana{{s}}.
	 */
	'FRUITS': (arg: { nrOfApples: number, nrOfBananas: number }) => LocalizedString
}

export type Formatters = {
	'fallback0': (value: number | number) => unknown
	'linkToSvelteTutorial': (value: string) => unknown
	'weekday': (value: Date) => unknown
}


type Param<P extends string> = `{${P}}`

type Params1<P1 extends string> =
	`${string}${Param<P1>}${string}`

type Params2<P1 extends string, P2 extends string> =
	`${string}${Param<P1>}${string}${Param<P2>}${string}`

type RequiredParams1<P1 extends string> =
	| Params1<P1>

type RequiredParams2<P1 extends string, P2 extends string> =
	| Params2<P1, P2>
	| Params2<P2, P1>
