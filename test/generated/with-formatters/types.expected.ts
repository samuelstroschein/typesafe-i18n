// This types were auto-generated. Any manual changes will be overwritten.
/* eslint-disable */

export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type TranslationKeys =
	| 'FORMATTER_1'
	| 'FORMATTER_2'

export type Translation = {
	/**
	 * {0|timesTen} apple{{s}}
	 * @param {string | number | boolean} 0
	 */
	'FORMATTER_1': RequiredParams1<'0|timesTen'>
	/**
	 * {0} apple{{s}} and {1|wrapWithHtmlSpan} banana{{s}}
	 * @param {string | number | boolean} 0
	 * @param {string | number | boolean} 1
	 */
	'FORMATTER_2': RequiredParams2<'0', '1|wrapWithHtmlSpan'>
}

export type TranslationFunctions = {
	/**
	 * {0|timesTen} apple{{s}}
	 */
	'FORMATTER_1': (arg0: string | number | boolean) => string
	/**
	 * {0} apple{{s}} and {1|wrapWithHtmlSpan} banana{{s}}
	 */
	'FORMATTER_2': (arg0: string | number | boolean, arg1: string | number | boolean) => string
}

export type Formatters = {
	timesTen: (value: string | number | boolean) => unknown
	wrapWithHtmlSpan: (value: string | number | boolean) => unknown
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