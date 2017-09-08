/**
 * Soho Personalize Control Typings.
 *
 * This component has no Soho api.
 */

/**
 * Configuration options.
 */
interface SohoPersonalizeOptions {
  colors?: string,
  theme?: string
}

interface SohoPersonalizeEvent extends JQueryEventObject {
  data: string;
}

/**
 * JQuery Integration
 */
interface JQueryStatic {
}

interface JQuery {
  personalize(options?: SohoPersonalizeOptions): JQuery;
}
